import React from 'react'
import { icons } from 'react-icons'
import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'
import Sale from './components/sale/Sale'
import './app.css'
import Display from './components/navbar/Display'
import Search from './components/navbar/Search'
import Card from './components/Menus/Card'
import { useState } from 'react'

const App = () => {
  
  const [login, setLogin] = useState(false)
  const killLog=()=>{
    setLogin(!login);
  }

  return (
    <>
      <Sale />
      <Navbar />
      <Article className="art"/>
      
      
    </>
  )
}

export default App