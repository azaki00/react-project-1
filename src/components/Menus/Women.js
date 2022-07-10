import React from 'react'
import './women.css'


const Women = ({hover2}) => {
  return (
    <div className={`women ${hover2 ? "women--show" : ""}`}>
      <ul className='mainWoman'>
      <li><h3>Boots</h3></li>
        <li>All Styles</li>
        <li>Chelsea</li>
        <li>Lace-Up</li>
        <li>Booties</li>
        <li>High Heel</li>
        <li>New Arrivals</li>
      </ul> 
      <ul className='mainWoman'>
        <li><h3>Sneakers</h3></li>
        <li>All Styles</li>
        <li>Classic Low Top</li>
        <li>Heritage Low Top</li>
      </ul> 
      <ul className='mainWoman'>
      <li><h3>Accessories</h3></li>
        <li>Shoe Care & Laces</li>
        <li>Socks</li>
        <li>Belts</li>
        <li>Gift Cards</li>
      </ul>
    </div>
  )
}

export default Women