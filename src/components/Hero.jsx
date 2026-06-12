import React from 'react'

function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[90vh] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

                    {/* Leftside  */}
                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                                Spring Summer Collection
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Modern
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                                Essentials
                            </span>
                            <br />
                            for Everyday
                        </h1>

                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Quality clothing designed for real life. Comfort, style, and durability 
                            in every piece of our carefully curated collection.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mb-12">
                            <button className="bg-gray-900 hover:bg-black text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                                <span className="flex items-center gap-3">
                                    Shop Collection
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="w-8 h-8 rounded-full bg-linear-to-r from-emerald-100 to-teal-100 border-2 border-white flex items-center justify-center">
                                            <span className="text-xs font-medium text-emerald-700">✓</span>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">Premium Quality</div>
                                    <div className="text-xs text-gray-500">Verified by customers</div>
                                </div>
                            </div>
                        </div>

                      
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <div className="text-2xl font-bold text-gray-900">200+</div>
                                <div className="text-sm text-gray-500">Products</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">50+</div>
                                <div className="text-sm text-gray-500">Brands</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">24/7</div>
                                <div className="text-sm text-gray-500">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image  */}
                    <div className="relative lg:pl-12 order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                className="w-full h-100 lg:h-125 object-cover"
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Modern fashion collection"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
                            
                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-emerald-500 to-teal-400 flex items-center justify-center">
                                        <span className="text-white font-bold">%</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Sale Live Now</div>
                                        <div className="text-sm text-gray-600">Up to 50% off</div>
                                    </div>
                                </div>
                                <button className="w-full mt-2 bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors">
                                    Shop Sale
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block absolute -top-4 -right-4 w-32 h-32 bg-linear-to-r from-emerald-100 to-teal-100 rounded-full blur-xl opacity-70"></div>
                        <div className="hidden lg:block absolute -bottom-4 -left-4 w-40 h-40 bg-linear-to-r from-gray-100 to-gray-200 rounded-full blur-xl opacity-50"></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
    )
}

export default Hero