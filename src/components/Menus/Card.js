import React from 'react'
import'./card.css'
import { useState } from 'react'
import Men from './Men'
import Women from './Women'

const Card = ({showDropdown}) => {

    const [hover,sethover] = useState(false)
    const [hover2,sethover2] = useState(false)

  const dart = () =>{
    sethover(prevState => !prevState)
  }
  const dart2 = () =>{
    console.log("clicked");
    sethover2(prevS => !prevS)
    
  }
  // const [card,setCard] = useState()
  
  return (
    <div className={`cardCont ${showDropdown ? "cardCont--show" : ""}`} >
      <div>
        <ul className='list'>
            <li className='man' onClick={dart} >Men's Selections</li>
              
            <li className='woman' onClick={dart2} >Women's Selections</li>
        </ul>
        </div>
        <Men hover={hover}/>
        <Women hover2={hover2} />

    </div>
  )
}

export default Card;