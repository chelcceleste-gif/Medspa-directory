'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '../lib/supabase'

interface MedSpa {
  id: number
  name: string
  city: string
  address: string
  phone: string
  website: string
  description: string
  treatments: string
  price_range: string
  image_url: string
  featured: boolean
}

function SearchContent() {
  const searchParams = useSearchParams()
  const [medspas, setMedspas] = useState<MedSpa[]>([])
  const [loading, setLoading] = useState(true)

  const city = searchParams.get('city') || ''
  const treatment = searchParams.get('treatment') || ''

  useEffect(() => {
    async function fetchResults() {
      try {
        let query = supabase.from('medspas').select('*')

        if (city) {
          query = query.ilike('city', `%${city}%`)
        }

        if (treatment && treatment !== 'All Treatments') {
          query = query.ilike('treatments', `%${treatment}%`)
        }

        const { data, error } = await query.order('created_at', { ascending: false })

        if (error) {
          console.error('Error:', error)
        } else {
          setMedspas(data || [])
        }
      } catch (err) {
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [city, treatment])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading results...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            Med<span className="text-[#00CCC0]">SPA</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#00CCC0] transition">Home</Link>
            <span className="text-gray-700 hover:text-[#00CCC0] transition cursor-pointer">Special Offers</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-[#00CCC0] hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600">
            {city && `Showing results for "${city}"`}
            {city && treatment && treatment !== 'All Treatments' && ' • '}
            {treatment && treatment !== 'All Treatments' && `Treatment: ${treatment}`}
          </p>
          <p className="text-gray-600 mt-2">
            {medspas.length} {medspas.length === 1 ? 'result' : 'results'} found
          </p>
        </div>

        {medspas.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-4">No med spas found matching your criteria.</p>
            <Link href="/" className="text-[#00CCC0] font-semibold hover:underline">
              Try a different search
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {medspas.map((spa) => (
              <div key={spa.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image 
                    src={spa.image_url || '/placeholder-spa.svg'} 
                    alt={spa.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-gray-700 text-sm font-semibold rounded-full">
                      {spa.price_range}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{spa.name}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{spa.description}</p>
                  <p className="text-sm text-gray-500 mb-2">{spa.city}, BC</p>
                  <p className="text-xs text-gray-400 mb-4">{spa.treatments}</p>
                  <a href={spa.website} target="_blank" rel="noopener noreferrer" className="text-[#00CCC0] font-semibold hover:underline">
                    Visit Website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}