import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { userLoginAPI, userRegisterAPI } from '../services/allAPIs';

function Login() {
  const navigate = useNavigate()
  const { token, setToken } = useContext(ShopContext);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {

      if (isLogin) {

        // 🔐 LOGIN
        const reqBody = { email, password }
        const result = await userLoginAPI(reqBody)

        console.log(result.data)

        if (result.data.success) {
          setToken(result.data.token)
          localStorage.setItem("token", result.data.token)
          alert("Login Successful")
        } else {
          alert(result.data.message)
        }

      } else {

        // 📝 REGISTER
        const reqBody = { name, email, password }
        const result = await userRegisterAPI(reqBody)

        console.log(result.data)

        if (result.data.success) {
          alert("Registration Successful")
          setIsLogin(true) // switch to login
        } else {
          alert(result.data.message)
        }

      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])






  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Login to Your Account' : 'Create New Account'}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? 'Enter your credentials to continue'
              : 'Fill in your details to get started'
            }
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <form onSubmit={onSubmitHandler}  className="space-y-4">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)} value={name}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full Name"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)} value={email}

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
                required
              />
            </div>


            <div>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)} value={password}

                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={isLogin ? "Password" : "Create Password"}
                required
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot password?
                </button>
              </div>
            )}


            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin)

                }}
                className="ml-2 text-blue-600 font-medium hover:text-blue-700"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login