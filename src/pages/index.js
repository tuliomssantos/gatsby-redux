import React, { useState } from "react"
import { useSelector } from 'react-redux'
import { updateUserData } from '../store/actions'

export default function Home() {
  const userData = useSelector((state) => state.userData);
  const [localUserData, setLocalUserData] = useState({ username: '', age: '' });
  

  const handleLocalUserData = (e) => {
    const copyState = {...localUserData};
    setLocalUserData({
      ...copyState,
      [e.target.id]: e.target.value
    })
  }
  
  return (
    <div className="container" >
      <h1>Gatsby With Redux</h1>
      <div>
        <p>Redux State:</p>
        <p>{JSON.stringify(userData)}</p>
      </div>
      Username:
      <input 
        type="text" 
        name="username" 
        id="username" 
        value={localUserData.username}
        onChange={handleLocalUserData} 
      />
      Age:
      <input 
        type="text" 
        name="age" 
        id="age" 
        value={localUserData.age}
        onChange={handleLocalUserData} 
      />
      <br/>
      <button
        onClick={() => {updateUserData(localUserData)}}
      >
        Update Redux
      </button>
    </div>
  )
}
