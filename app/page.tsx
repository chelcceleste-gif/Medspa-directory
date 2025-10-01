'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { supabase } from './lib/supabase'

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

export default function Home() {
  const router = useRouter()
  const [allMedspas, setAllMedspas] = useState<MedSpa[]>([])
  const [loading, setLoading] = useState(true)
  const [searchCity, setSearchCity] = useState('')
  const [searchTreatment, setSearchTreatment] = useState('All Treatments')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    async function fetchMedSpas() {
      try {
        const { data, error } = await supabase
          .from('medspas')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (error) {
          console.error('Supabase error:', error)
        } else {
          setAllMedspas(data || [])
        }
      } catch (err) {
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMedSpas()
  }, [])

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchCity) params.append('city', searchCity)
    if (searchTreatment !== 'All Treatments') params.append('treatment', searchTreatment)
    router.push(`/search?${params.toString()}`)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-3xl font-bold text-white">
            Med<span className="text-[#00CCC0]">SPA</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <span className="hover:text-[#00CCC0] transition cursor-pointer">Med Spas</span>
            <span className="hover:text-[#00CCC0] transition cursor-pointer">Special Offers</span>
            <span className="hover:text-[#00CCC0] transition cursor-pointer">Sign In</span>
            <button className="px-6 py-2 bg-[#00CCC0] text-white rounded-lg font-semibold hover:bg-[#00B8AC] transition">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      <div className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: "url('/hero-background.jpg')",
        backgroundPosition: "center 30%"
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Med<span className="text-[#00CCC0]">SPA</span>
          </h1>
          <p className="text-2xl mb-2 font-light">The Best Med Spa Near Me!</p>
          <p className="text-lg mb-12 opacity-90">Connect with Top-Rated Med Spa Providers Across Canada</p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col md:flex-row gap-4">
            <select 
              value={searchTreatment}
              onChange={(e) => setSearchTreatment(e.target.value)}
              className="flex-1 px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#00CCC0] text-gray-700"
            >
              <option>All Treatments</option>
              <option>Botox</option>
              <option>Dermal Fillers</option>
              <option>Laser Hair Removal</option>
              <option>Skin Rejuvenation</option>
              <option>Body Contouring</option>
              <option>Chemical Peels</option>
            </select>
            <input
              type="text"
              placeholder="City (Vancouver, Victoria...)"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="flex-1 px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#00CCC0] text-gray-700"
            />
            <button 
              onClick={handleSearch}
              className="px-8 py-4 bg-[#00CCC0] text-white rounded-xl font-semibold hover:bg-[#00B8AC] transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">WELCOME TO MEDSPA BC</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          A hand-picked, vetted network of Medical Spas you can trust
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-4xl mx-auto">
          <div>
            <div className="text-5xl font-bold text-[#00CCC0] mb-2">{mounted ? allMedspas.length : 0}</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm">LOCATIONS</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#00CCC0] mb-2">50K+</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm">HAPPY CLIENTS</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#00CCC0] mb-2">95%</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm">SATISFACTION RATE</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">FEATURED MED SPAS</h2>
          <p className="text-gray-600">Top-rated providers across British Columbia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mounted && allMedspas.slice(0, 6).map((spa) => (
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
                <p className="text-gray-600 mb-2">{spa.description}</p>
                <p className="text-sm text-gray-500 mb-4">{spa.city}, BC</p>
                <a href={spa.website} target="_blank" rel="noopener noreferrer" className="text-[#00CCC0] font-semibold hover:underline">
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00CCC0] to-[#00B8AC] py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated on Med Spa Treatments
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert tips, treatment guides, and exclusive deals delivered to your inbox
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-[#00CCC0] rounded-xl font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">
            Med<span className="text-[#00CCC0]">SPA</span>
          </div>
          <p className="text-gray-400">
            Canada's trusted directory for medical spas and aesthetic treatments
          </p>
        </div>
      </footer>
    </div>
  )
}