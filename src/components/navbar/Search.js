import React from 'react'
import'./search.css'

const Search = ({show}) => {
  return (
    <div className={`searchCont ${show ? "searchCont--show" : ""}`}>
        <input className='searchBar' placeholder='Search for shoes...'>

        </input>
        
    </div>
  )
}

export default Search;