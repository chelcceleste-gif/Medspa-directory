export default function Home() {
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
            <select className="flex-1 px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#00CCC0] text-gray-700">
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
              className="flex-1 px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#00CCC0] text-gray-700"
            />
            <button className="px-8 py-4 bg-[#00CCC0] text-white rounded-xl font-semibold hover:bg-[#00B8AC] transition">
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
            <div className="text-5xl font-bold text-[#00CCC0] mb-2">5</div>
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
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" 
                alt="Vancouver Laser & Skin Care Centre"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white text-gray-700 text-sm font-semibold rounded-full">
                  $$
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vancouver Laser & Skin Care Centre</h3>
              <p className="text-gray-600 mb-2">Professional laser treatments and skin care services</p>
              <p className="text-sm text-gray-500 mb-4">Vancouver, BC</p>
              <a href="#" className="text-[#00CCC0] font-semibold hover:underline">
                Visit Website →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80" 
                alt="Project Skin MD"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white text-gray-700 text-sm font-semibold rounded-full">
                  $$$
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Skin MD</h3>
              <p className="text-gray-600 mb-2">Advanced dermatological treatments and cosmetic procedures</p>
              <p className="text-sm text-gray-500 mb-4">Vancouver, BC</p>
              <a href="#" className="text-[#00CCC0] font-semibold hover:underline">
                Visit Website →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" 
                alt="First Ave Medical Spa"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white text-gray-700 text-sm font-semibold rounded-full">
                  $$
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">First Ave Medical Spa</h3>
              <p className="text-gray-600 mb-2">Comprehensive aesthetic treatments and wellness services</p>
              <p className="text-sm text-gray-500 mb-4">Vancouver, BC</p>
              <a href="#" className="text-[#00CCC0] font-semibold hover:underline">
                Visit Website →
              </a>
            </div>
          </div>
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