import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resetEmail, setResetEmail] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const onForgotPasswordHandler = async (e) => {
    e.preventDefault();
    // Simulate API call for password reset
    toast.success(`Password reset link sent to ${resetEmail}`);
    setShowForgotPassword(false);
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  if (showForgotPassword) {
    return (
      <div className='min-h-[80vh] flex items-center justify-center relative overflow-hidden'>
        {/* Animated Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <form onSubmit={onForgotPasswordHandler} className='relative z-10 flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-white/20 rounded-xl text-gray-600 text-sm shadow-xl bg-white/10 backdrop-blur-md dark:bg-black/30 dark:text-gray-300'>
          <p className='text-3xl font-semibold text-gray-800 dark:text-white'>Reset Password</p>
          <p className='text-gray-500 dark:text-gray-400'>Enter your email to receive recovery instructions</p>

          <div className='w-full'>
            <p className='mb-1 font-medium'>Email</p>
            <input
              onChange={(e) => setResetEmail(e.target.value)}
              value={resetEmail}
              className='w-full p-2.5 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
              type="email"
              required
              placeholder='name@example.com'
            />
          </div>

          <button className='bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-transform text-white w-full py-2.5 my-2 rounded-lg text-base font-medium shadow-lg hover:shadow-neon'>
            Send Reset Link
          </button>

          <p className='w-full text-center mt-2'>
            <span onClick={() => setShowForgotPassword(false)} className='text-primary hover:text-secondary cursor-pointer font-medium hover:underline transition-colors'>
              Back to Login
            </span>
          </p>
        </form>
      </div>
    )
  }

  return (
    <div className='min-h-[80vh] flex items-center justify-center relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <form onSubmit={onSubmitHandler} className='relative z-10 flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-white/20 rounded-2xl text-gray-600 text-sm shadow-2xl bg-white/10 backdrop-blur-xl dark:bg-black/40 dark:text-gray-300 dark:border-gray-700/50 transition-all duration-300'>
        <div className='w-full flex flex-col items-center mb-4'>
          <p className='text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>
            {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </p>
          <p className='text-gray-500 dark:text-gray-400'>
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
          </p>
        </div>

        {state === 'Sign Up' && (
          <div className='w-full fade-in'>
            <p className='mb-1 font-medium ml-1'>Full Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='w-full p-2.5 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white'
              type="text"
              required
              placeholder='John Doe'
            />
          </div>
        )}

        <div className='w-full'>
          <p className='mb-1 font-medium ml-1'>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='w-full p-2.5 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white'
            type="email"
            required
            placeholder='name@example.com'
          />
        </div>

        <div className='w-full'>
          <div className='flex justify-between items-center mb-1'>
            <p className='font-medium ml-1'>Password</p>
            {state === 'Login' && (
              <span onClick={() => setShowForgotPassword(true)} className='text-xs text-primary hover:text-secondary cursor-pointer hover:underline'>
                Forgot Password?
              </span>
            )}
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='w-full p-2.5 bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all dark:text-white'
            type="password"
            required
            placeholder='••••••••'
          />
        </div>

        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-transform text-white w-full py-2.5 my-2 rounded-lg text-base font-medium shadow-lg hover:shadow-neon'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className='w-full text-center mt-2 text-sm'>
          {state === 'Sign Up'
            ? <>Already have an account? <span onClick={() => setState('Login')} className='text-primary hover:text-secondary cursor-pointer font-medium hover:underline transition-colors'>Login here</span></>
            : <>Create new account? <span onClick={() => setState('Sign Up')} className='text-primary hover:text-secondary cursor-pointer font-medium hover:underline transition-colors'>Sign up here</span></>
          }
        </p>
      </form>
    </div>
  )
}

export default Login