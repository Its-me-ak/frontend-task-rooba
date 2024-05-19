import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Button = ({ active }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const getActiveClasses = (path) => {
    return location.pathname === path ? "bg-[#484e56]" : "";
  }
  return (
    <>
      <div className='button mt-14 ps-12 flex justify-end lg:justify-start pe-2'>
        <button className='bg-[#282b30] rounded-3xl capitalize font-semibold text-white text-sm relative z-10'>
          <span className={`py-3 inline-block ps-8 pe-6 rounded-3xl ${getActiveClasses('/')}`} onClick={() => navigate('/')}>Events</span>
          <span className={`py-3 inline-block pe-8 ps-6 rounded-3xl ${getActiveClasses('/collections')}`} onClick={() => navigate('/collections')}>Collections</span>
        </button>
      </div>
    </>
  )
}

export default Button
