import React from 'react'
import '../components/card-list/card-list.style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
  className='search'
  type='search' 
  placeholder={placeholder}
  onChange={handleChange} 
  />
)