import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
    const {user} = useAuth()
  return (
    <div className='flex items-center text-white justify-between h-12 bg-blue-900 px-5'>
    <p>Welcome, {user.name}</p>
    <button className='bg-blue-600 hover:bg-blue-400 text-white py-1 px-2 rounded-sm font-semibold transition-colors'>Logout</button>
    </div>
  )
}

export default Navbar