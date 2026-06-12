import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-indigo-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-600">UrbanStitch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Redefining fashion with quality, comfort, and style since 2020. 
              Where modern trends meet timeless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At UrbanStitch, we believe fashion should be accessible, sustainable, 
                and expressive. Our mission is to provide high-quality clothing that 
                doesn't compromise on style or ethics.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-600">Premium quality fabrics sourced ethically</p>
                </div>
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-600">Contemporary designs for the modern urban lifestyle</p>
                </div>
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-600">Sustainable production practices</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <div className="w-full h-64 bg-linear-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-300">US</div>
                      <div className="text-yellow-600 font-medium mt-2">UrbanStitch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at UrbanStitch
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                Every stitch matters. We use premium materials and craftsmanship to ensure our clothing lasts.
              </p>
            </div>
            
            <div className="bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Fashion</h3>
              <p className="text-gray-600">
                Committed to reducing environmental impact through sustainable practices and materials.
              </p>
            </div>
            
            <div className="bg-linear-to-b from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Style</h3>
              <p className="text-gray-600">
                Staying ahead of trends while creating timeless pieces for your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From a small idea to a leading fashion destination
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  UrbanStitch was founded in 2020 with a simple vision: to create clothing that bridges the gap between 
                  high fashion and everyday wear. We started as a small online store with just 10 designs.
                </p>
                <p>
                  Today, we've grown into a trusted brand known for quality craftsmanship, sustainable practices, 
                  and designs that resonate with the modern urban individual.
                </p>
                <p>
                  Our journey continues as we expand our collections while staying true to our core values 
                  of quality, sustainability, and exceptional customer experience.
                </p>
              </div>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-lg mb-4">Our Commitment</div>
                <p className="text-gray-700">
                  "We're dedicated to creating fashion that not only looks good but also does good for our planet and community."
                </p>
                <div className="mt-6 text-blue-500 font-medium">
                  — The UrbanStitch Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About