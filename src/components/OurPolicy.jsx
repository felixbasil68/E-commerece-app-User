import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className="py-16 sm:py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to providing the best shopping experience with our premium services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Exchange Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <img src={assets.exchange_icon} className="w-8 h-8" alt="Exchange" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Exchange</h3>
            <p className="text-gray-600 mb-4">
              Hassle-free exchange within 7 days. Your satisfaction is our priority.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Quality  Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <img src={assets.quality_icon} className="w-8 h-8" alt="Quality" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7-Day Returns</h3>
            <p className="text-gray-600 mb-4">
              Not satisfied? Return within 7 days for a full refund, no questions asked.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
              <span>Read Policy</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <img src={assets.support_img} className="w-8 h-8" alt="Support" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600 mb-4">
              Round-the-clock customer service. We're always here to help you.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-purple-600 font-medium">
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            *All policies apply to our standard collection. Premium items may have extended benefits.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy