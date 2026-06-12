import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import { orderPlaceAPI, stripeOrderAPI } from '../services/allAPIs';

export default function PlaceOrder() {
  const [method, setMethod] = useState('cod');
  const { navigate, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''

  })
  
  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData(data => ({ ...data, [name]: value }))


  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {

        const headers = {
        token: token
      };
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(produt => produt._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)

            }
          }
        }
      }

      console.log(orderItems)

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        // api call for cod
        case 'cod':

          const response = await orderPlaceAPI(orderData, headers);
          console.log(response.data);
          if (response.data.success) {
            alert(`order Placed`)
            setCartItems({})
            navigate('/orders')
          } else {
            alert(`error`)
          }
          break;

          case 'stripe':

        const responseStripe = await stripeOrderAPI(orderData, headers);
        if(responseStripe.data.success){
          const {session_url}=responseStripe.data
          window.location.replace(session_url)
        }else{
          alert(`error`)
        }


          break;


        default:
          break;
      }

    } catch (error) {
      console.log(error);
      
      

    }

  }


  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen bg-linear-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/*  Left Side */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                  <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        type="text"
                        onChange={onChangeHandler} name='firstName' value={formData.firstName}
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        type="text"
                        onChange={onChangeHandler} name='lastName' value={formData.lastName}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      type="email"
                      onChange={onChangeHandler} name='email' value={formData.email}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      type="text"
                      onChange={onChangeHandler} name='street' value={formData.street}
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        type="text"
                        onChange={onChangeHandler} name='city' value={formData.city}
                        placeholder="Enter city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        type="text"
                        onChange={onChangeHandler} name='state' value={formData.state}
                        placeholder="Enter state"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Zip Code
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        type="number"
                        onChange={onChangeHandler} name='zipcode' value={formData.zipcode}
                        placeholder="12345"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        type="text"
                        onChange={onChangeHandler} name='country' value={formData.country}
                        placeholder="Enter country"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      type="number"
                      onChange={onChangeHandler} name='phone' value={formData.phone}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-5/12">
            <div className="sticky top-8">

              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
                <CartTotal />
              </div>


              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                  <Title text1={'PAYMENT'} text2={'METHOD'} />
                </div>

                <div className="space-y-4 mb-10">
                  <div
                    onClick={() => setMethod('stripe')}
                    className={`flex items-center justify-between border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md ${method === 'stripe'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === 'stripe' ? 'border-green-500' : 'border-gray-300'
                        }`}>
                        {method === 'stripe' && (
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <img className="h-7" src={assets.stripe_logo} alt="Stripe" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Credit/Debit Card</span>
                  </div>

                  <div
                    onClick={() => setMethod('razorpay')}
                    className={`flex items-center justify-between border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md ${method === 'razorpay'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === 'razorpay' ? 'border-green-500' : 'border-gray-300'
                        }`}>
                        {method === 'razorpay' && (
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <img className="h-6" src={assets.razorpay_logo} alt="Razorpay" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">UPI & Net Banking</span>
                  </div>

                  <div
                    onClick={() => setMethod('cod')}
                    className={`flex items-center justify-between border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md ${method === 'cod'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === 'cod' ? 'border-green-500' : 'border-gray-300'
                        }`}>
                        {method === 'cod' && (
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">Cash on Delivery</span>
                        <span className="text-sm text-gray-500">Pay when you receive</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">₹0 Extra</span>
                  </div>
                </div>


                <div className="mt-10">
                  <button
                    type='submit'

                    className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <span className="text-lg">Place Order Now</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    By placing your order, you agree to our Terms & Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}