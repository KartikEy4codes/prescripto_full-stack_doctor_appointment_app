import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  // Safety check for ThemeContext
  // const themeContext = useContext(ThemeContext)
  // const { theme, toggleTheme } = themeContext || { theme: 'light', toggleTheme: () => {} }
  const theme = 'light' // Temporary fallback
  const toggleTheme = () => { } // Temporary fallback

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className={`flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD] transition-all duration-300 dark:border-b-gray-700 ${isScrolled ? 'glass sticky top-0 z-50 px-4 md:px-10 rounded-b-xl border-none shadow-md' : ''}`}>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1 hover:text-primary transition-colors dark:text-white dark:hover:text-primary'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-gradient-to-r from-primary to-secondary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-1 hover:text-primary transition-colors dark:text-white dark:hover:text-primary'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-gradient-to-r from-primary to-secondary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1 hover:text-primary transition-colors dark:text-white dark:hover:text-primary'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-gradient-to-r from-primary to-secondary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1 hover:text-primary transition-colors dark:text-white dark:hover:text-primary'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-gradient-to-r from-primary to-secondary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
          {theme === 'dark'
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.75 9.75 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.75 9.75 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          }
        </button>

        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full border-2 border-primary' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex flex-col gap-4 p-4 border border-gray-100 dark:bg-dark-card dark:border-gray-700 dark:text-white'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-primary cursor-pointer transition-colors'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-primary cursor-pointer transition-colors'>My Appointments</p>
                  <p onClick={logout} className='hover:text-primary cursor-pointer transition-colors'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 shadow-md hover:shadow-lg'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all dark:bg-dark-bg`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7 cursor-pointer' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium dark:text-white'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar