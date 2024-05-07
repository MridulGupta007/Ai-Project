import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
function Navigation() {
  return (
    <div className='h-[100vh] bg-black text-white w-[15%] flex flex-col py-4 gap-y-5'>
        <h1 className='uppercase tracking-widest text-[30px] font-light px-2 flex items-center'><img src={Logo} className='w-[30px] h-[40px] mix-blend-normal'/>effEasy</h1>

        <ul className='flex flex-col'>
            <NavLink to='/'><li className='py-3 px-2 hover:bg-[#0F0F0F] cursor-pointer duration-300 ease-in-out'>Home</li></NavLink>
            <NavLink to='history'><li className='py-3 px-2 hover:bg-[#0F0F0F] cursor-pointer duration-300 ease-in-out'>Your History</li></NavLink>
        </ul>
    </div>
  )
}

export default Navigation