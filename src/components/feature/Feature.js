import React from 'react'
import './feature.css'

const Feature = ({showF}) => {

  
  return (
    <div className={`login ${showF ? "login--show" : ""}`}>
      <form className='form-page'>
        <label >Account Name</label>
        <input type="text" placeholder='Johnny Appleseed'></input>
        <label>Account Name</label>
        <input type="email" placeholder='JohnnyAppleseed123@gmail.com'></input>
      </form>
      <input type="submit"> Login </input>
    </div>
  )
}

export default Feature;