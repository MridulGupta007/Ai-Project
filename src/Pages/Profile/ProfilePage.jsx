import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function ProfilePage() {
  const [history, setHistory] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3001/history').then(response => setHistory(response.data))
  }, [])
  return (
    <div className='h-[80vh]'>
      <div className='overflow-y-auto flex flex-col gap-y-3'>
      {history.map( elem => {
        return(
          <div className='flex flex-col gap-y-3 border-b' key={elem.id}>
          <p>ID: <span className='text-[#808080]'>{elem.id}</span></p>
          <p><span className='text-[20px]'>Prompt:</span>  <br /><span className='text-[15px]'>{elem.prompt}</span></p>
          <p>Referral: {elem.genText}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default ProfilePage