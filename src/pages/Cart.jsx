import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);

    }

  }, [cartItems, products])

  return (
    <div className="min-h-screen bg-white pt-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gray-900 rounded-full"></div>
            <Title text1={'YOUR'} text2={'CART'} />
          </div>
          <p className="text-gray-600">
            {cartData.length === 0 ? 'Your cart is empty' : `You have ${cartData.length} item${cartData.length !== 1 ? 's' : ''} in your cart`}
          </p>
        </div>

        {/* Cart Items */}
        {cartData.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Cart is Empty</h3>
            <p className="text-gray-600 mb-8">Add some items to your cart to get started</p>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-900 text-white font-medium px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-10">
              {cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);

                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                      {/* Product Info */}
                      <div className="lg:col-span-6">
                        <div className="flex gap-6">
                          <img
                            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                            src={productData.image[0]}
                            alt={productData.name}
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{productData.name}</h3>
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-xl font-bold text-gray-900">{currency}{productData.price}</div>
                              <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg font-medium">
                                Size: {item.size}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition"
                          >
                            <span className="text-xl text-gray-600">−</span>
                          </button>

                          <input
                            onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                            className="w-16 h-10 border border-gray-300 rounded-lg text-center font-medium"
                            type="number"
                            min={1}
                            value={item.quantity}
                          />

                          <button
                            onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition"
                          >
                            <span className="text-xl text-gray-600">+</span>
                          </button>
                        </div>
                      </div>

                      {/* Delete & Total */}
                      <div className="lg:col-span-2 flex items-center justify-between lg:justify-end">
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {currency}{productData.price * item.quantity}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.quantity} × {currency}{productData.price}
                          </div>
                        </div>
                        <button
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-red-50 rounded-lg transition ml-4"
                        >
                          <img src={assets.bin_icon} alt="Remove" className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Cart Summary */}
            <div className="lg:flex justify-end">
              <div className="w-full lg:w-96">
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <CartTotal />
                </div>

                <button
                  onClick={() => navigate('/place-order')}
                  className="w-full bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-3">
                    PROCEED TO CHECKOUT
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>

                <div className="text-center mt-6">
                  <button
                    onClick={() => navigate('/')}
                    className="text-gray-600 hover:text-gray-900 font-medium transition"
                  >
                    ← Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart