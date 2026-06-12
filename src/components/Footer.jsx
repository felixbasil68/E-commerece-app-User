import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div>
                <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    <div>
                        <img src={assets.logo} className="w-40 mb-6" alt="UrbanStitch Logo" />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At <span className="font-bold text-yellow-600">UrbanStitch</span>, we craft
                            stylish and affordable clothing designed to fit your lifestyle, from
                            everyday essentials to standout pieces.
                        </p>

                        {/* NEWSLETTER */}
                        <p className="text-gray-600 mb-3 font-medium">
                            Get early access to fresh collections and exclusive offers.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-bold mb-6 text-yellow-600">COMPANY</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="hover:text-yellow-600 cursor-pointer">Home</li>
                            <li className="hover:text-yellow-600 cursor-pointer">About Us</li>
                            <li className="hover:text-yellow-600 cursor-pointer">Delivery</li>
                            <li className="hover:text-yellow-600 cursor-pointer">Policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-bold mb-6 text-yellow-600">Get in Touch</p>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center gap-3">
                                <FaPhone />
                                <span>+1-234-345-5434</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope />
                                <span>contact@urbanstitch.com</span>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-6">
                            <FaFacebook className="cursor-pointer hover:text-yellow-600" size={20} />
                            <FaInstagram className="cursor-pointer hover:text-pink-500" size={20} />
                            <FaTwitter className="cursor-pointer hover:text-blue-400" size={20} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <hr />
                    <p className='py-5 text-sm text-center'>Copyright 2026@ UrbanStitch.com-All Right Reserved</p>
                </div>
            </div>

        </>
    )
}

export default Footer