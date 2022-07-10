import React from 'react'
import './men.css'


const Men = ({hover}) => {

  
  return (
    <div className={`men ${hover ? "men--show" : ""}`}>
      <ul className='mainMen'>
        <li><h3><a href="#">Shoes</a></h3></li>
        <li><a href="#">Dress shoes</a></li>
        <li><a href="#">Casual wear</a></li>
        <li><a href="#">Loafers</a></li>
        <li></li>
      </ul>

      <ul className='mainMen'>
        <li><h3><a href="#">Boots</a></h3></li>
        <li><a href="#">Lace ups</a></li>
        <li><a href="#">Rugged</a></li>
        <li><a href="#">Chelsea</a></li>
        <li><a href="#">New Arrivals</a></li>
      </ul>

      <ul className='mainMen'>
        <li><h3><a href="#">Sneakers</a></h3></li>
        <li><a href="#">High tops</a></li>
        <li><a href="#">Low Tops</a></li>
      </ul>
    </div>
  )
}

export default Men