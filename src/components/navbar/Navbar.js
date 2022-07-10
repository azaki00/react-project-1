import React from 'react'
import './navbar.css'

import { FaUser } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import {ReactComponent as SVGimage} from './image.svg'
import { useState } from 'react'

import Search from './Search'
import { FaBars } from 'react-icons/fa'
import Card from '../Menus/Card'
import Feature from '../feature/Feature'

const Navbar = ({onToo}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const pop=()=>{
    setShowDropdown(prevState => !prevState)
  }

  const [showS, setShowS] = useState(false)

  const showSearch=()=>{
    setShowS(prevState =>!prevState)
  }

  // const [showF,setShowF] = useState(false)
  // const showForm=()=>{
  //   setShowF(prevState =>!prevState)
  // }

  return (
    <div  className=' Navbar'>
      <div className='nav1 A'>
        <FaBars className='icon' onClick={pop}></FaBars>
        <FaSearch className='icon' onClick={showSearch}></FaSearch>
         <Search show={showS}/>
      </div>
      <div className='nav2 B'>
        <SVGimage id='SVG' />
      </div>
      <div className='nav3 A'>
        <FaUser className='icon'></FaUser>
        <FaShoppingBag className='icon'></FaShoppingBag>
      </div>
      <Card showDropdown={showDropdown}/>
      {/* <Feature showF={showF}/> */}
    </div>
  )
}

export default Navbar