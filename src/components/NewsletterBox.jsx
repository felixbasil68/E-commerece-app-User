import React from 'react'

function NewsletterBox() {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className="bg-linear-to-r max-w-4xl mx-auto mt-7">
      <div className="text-center">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe Today and get <span className="text-green-600">30% Off</span>
        </h2>
        
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Get early access to fresh collections, special discounts, and style updates straight to your inbox.
        </p>

        <form onSubmit={onSubmitHandler} className="mt-8 max-w-md mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-green-400 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative flex flex-col sm:flex-row gap-0 bg-white rounded-xl shadow-md border border-gray-200 p-1">
              <input 
                className="w-full sm:flex-1 border-0 outline-none text-gray-700 placeholder-gray-400 px-5 py-4 text-base rounded-lg focus:ring-0"
                type="email" 
                placeholder="Enter your Email" 
                required 
              />
              <button 
                type="submit" 
                className="bg-linear-to-r from-gray-900 to-black text-white font-semibold px-8 py-4 rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  SUBSCRIBE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No spam ever. Unsubscribe anytime.
          </p>
        </form>

      </div>
    </div>
  )
}

export default NewsletterBox