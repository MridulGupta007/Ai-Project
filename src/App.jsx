import React from 'react'
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ReferralPage from './Pages/Referral/ReferralPage'
import ProfilePage from './Pages/Profile/ProfilePage'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className='flex select-none'>

      <Navigation />
      <div className='h-[100vh] flex-1'>
      <Header />
      <div className='mt-20 overflow-y-auto overscroll-contain'>
      {/* <ReferralPage /> */}
      {/* <ProfilePage /> */}
      <Outlet />
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default App