import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllOrdersAPI } from '../services/allAPIs';

function Orders() {
  const { currency, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  // orderdata viewing
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const headers = {
        token: token
      };
      const response = await getAllOrdersAPI(headers);
      console.log(response.data);
      if (response.data.success) {
        let allOrderItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrderItem.push(item)
          })
        })
        setOrderData(allOrderItem.reverse());

      }

    } catch (error) {

    }

  }


  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gray-900 rounded-full"></div>
            <Title text1={'My'} text2={'Orders'} />
          </div>
          <p className="text-gray-500 text-sm">Manage and track your recent orders</p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors duration-200">

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="font-medium text-gray-900">Order #{index + 1001}</span>
                </div>
                <span className="text-sm text-gray-500">{new Date(item.date).toDateString()}</span>
                <span className="text-sm text-gray-500">{item.paymentMethod}</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex gap-4 md:w-2/3">
                  <img
                    className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                    src={item.image[0]}
                    alt={item.name}
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">Price:</span>
                        <span className="font-bold text-gray-900">{currency}{item.price}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">Quantity:</span>
                        <span className="font-medium text-gray-900">{item.quantity}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">Size:</span>
                        <span className="font-medium text-gray-900">{item.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-green-600">{item.status}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex items-center justify-end">
                  <button onClick={loadOrderData} className="w-full md:w-auto border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders