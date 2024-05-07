import React from 'react'

function Header() {
  return (
    <div className='fixed top-0 flex items-center w-[85%] py-3 justify-end gap-x-[32%] px-2 border border-b shadow-lg'>
        <div className='flex gap-x-20'>
        <span className='px-4 py-2 rounded-lg hover:bg-slate-100 duration-500 ease-in-out cursor-pointer'>Home</span>
        <span className='px-4 py-2 rounded-lg hover:bg-slate-100 duration-500 ease-in-out cursor-pointer'>Docs</span>
        </div>
        <button className='bg-[#202020]/90 py-2 text-white px-10 rounded-lg hover:bg-black duration-500 ease-in-out'>
            Log in
        </button>
        
    </div>
  )
}

export default Header