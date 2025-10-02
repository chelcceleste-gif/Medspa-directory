'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '../../lib/supabase'

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

export default function SpaDetailPage() {
  const params = useParams()
  const [spa, setSpa] = useState<MedSpa | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSpa() {
      try {
        const { data, error } = await supabase
          .from('medspas')
          .select('*')
          .eq('id', params.id)
          .single()

        if (error) {
          console.error('Error:', error)
        } else {
          setSpa(data)
        }
      } catch (err) {
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchSpa()
    }
  }, [params.id])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!spa) {
    return <div className="min-h-screen flex items-center justify-center">Med spa not found</div>
  }

  const treatmentList = spa.treatments.split(',').map(t => t.trim())

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <button onClick={() => window.location.href = '/'} className="text-3xl font-bold text-gray-900">
            Med<span className="text-[#00CCC0]">SPA</span>
          </button>
          <button onClick={() => window.history.back()} className="text-[#00CCC0] hover:underline">
            ← Back to results
          </button>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-96 bg-gray-200">
        <Image
          src={spa.image_url || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80'}
          alt={spa.name}
          width={1200}
          height={384}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{spa.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-[#00CCC0] bg-opacity-10 text-[#00CCC0] rounded-full font-semibold">
                {spa.price_range}
              </span>
              <span className="text-gray-600">{spa.city}, BC</span>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 text-lg">{spa.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatments Offered</h2>
              <div className="grid grid-cols-2 gap-4">
                {treatmentList.map((treatment, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00CCC0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-gray-900">{spa.address}</p>
                  <p className="text-gray-900">{spa.city}, BC</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href={`tel:${spa.phone}`} className="text-[#00CCC0] hover:underline">
                    {spa.phone}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Website</p>
                  <a href={spa.website} target="_blank" rel="noopener noreferrer" className="text-[#00CCC0] hover:underline break-all">
                    {spa.website}
                  </a>
                </div>
              </div>

              <a
                href={spa.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-[#00CCC0] text-white text-center rounded-xl font-semibold hover:bg-[#00B8AC] transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
