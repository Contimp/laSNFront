import React from 'react'
import Order from '../component/Order'
import Items from '../component/Items'
import './Home.css'

export default function Home() {
  return (
    <div className='menucontainer'>
      <Order />
      <Items />
    </div>
  )
}
