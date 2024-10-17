import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../../feed/Feed'
import './home.css'

export default function Home({ sidebar }) {
  const[category,setCategory] = useState(0);
  return (
    <div className='home-container'>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed sidebar={sidebar} category={category}/>
      </div>
    </div>
  )
}

