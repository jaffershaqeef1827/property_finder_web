import React, { useState } from "react";


const PropertyLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const propertyImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="lg:hidden">

          <div className="py-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {propertyImages.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image} 
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>


          <div className="pb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              New Place, New Home!
            </h1>
            <p className="text-gray-600 mb-8 px-4 leading-relaxed">
              Find the perfect home that matches your lifestyle. Our Property Finder will help you on your home buying journey.
            </p>
            

            <div className="space-y-4 px-4">
              <button className="w-full py-4 bg-red-500 text-white text-lg font-semibold rounded-full hover:bg-red-600 transition-colors shadow-lg">
                Login
              </button>
              <button className="w-full py-4 bg-gray-100 text-gray-700 text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors border border-gray-300">
                Sign up
              </button>
            </div>
          </div>
        </div>


        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[80vh] lg:py-12">
       
          <div>
            <div className="grid grid-cols-3 gap-4 xl:gap-6">
              {propertyImages.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={image} 
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              New Place, <br />
              <span className="text-red-500">New Home!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Find the perfect home that matches your lifestyle. Our Property Finder will help you discover your dream home with ease and confidence.
            </p>
            
            {/* CTA Buttons - Desktop */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <button className="w-full py-4 bg-red-500 text-white text-lg font-semibold rounded-full hover:bg-red-600 transition-colors shadow-lg transform hover:scale-105">
                Get Started
              </button>
              <button className="w-full py-4 bg-gray-100 text-gray-700 text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors border border-gray-300">
                Browse Properties
              </button>
            </div>

            {/* Stats or Features */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500">1000+</div>
                <div className="text-gray-600">Properties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">50+</div>
                <div className="text-gray-600">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xl font-bold text-red-500 mb-4">Ethiopia Estate</div>
          <p className="text-gray-400">Your trusted partner in finding the perfect home</p>
        </div>
      </footer>
    </div>
  );
};

export default PropertyLandingPage;