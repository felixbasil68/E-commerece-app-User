import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className="min-h-screen bg-white pt-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>{productData.category}</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{productData.name}</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <div>
            <div className="mb-4">
              <img
                className="w-full h-100 lg:h-125 object-cover rounded-2xl"
                src={image}
                alt={productData.name}
              />
            </div>
            <div className="flex gap-3">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  alt=""
                  className={`w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${image === item ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                {productData.category}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{productData.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={assets.star_icon} alt="star" className="w-5 h-5" />
                ))}
                <img src={assets.star_dull_icon} alt="star" className="w-5 h-5" />
              </div>
              <span className="text-gray-600">(122 reviews)</span>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">{currency}{productData.price}</div>
              <p className="text-gray-600 text-lg leading-relaxed">{productData.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="text-gray-900 font-medium mb-4">Select Size</div>
              <div className="flex flex-wrap gap-3">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`px-6 py-3 border rounded-lg font-medium transition-all duration-200 ${item === size
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(productData._id, size)}
              disabled={!size}
              className={`w-full lg:w-auto px-10 py-4 font-semibold rounded-xl transition-all duration-300 ${size
                  ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
            >
              {size ? 'ADD TO CART' : 'SELECT A SIZE'}
            </button>

            {/* Features */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">100% Original</div>
                    <div className="text-sm text-gray-600">Authentic Products</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600 font-bold text-lg">₹</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">COD Available</div>
                    <div className="text-sm text-gray-600">Cash on Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description, Reviews  */}
        <div className="mb-16">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 font-medium text-lg ${activeTab === 'description'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 font-medium text-lg ${activeTab === 'reviews'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Reviews (122)
            </button>
          </div>

          <div className="p-8 bg-gray-50 rounded-b-2xl">
            {activeTab === 'description' ? (
              <div className="space-y-4 text-gray-700">
                <p>{productData.description}</p>
               
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-gray-600">No reviews to display.</div>
              </div>
            )}
          </div>
        </div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-500">Loading product...</div>
    </div>
  )
}

export default Product