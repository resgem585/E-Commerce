import React from 'react'
import { useProductContext } from '../context/SearchContext'
import '../styles/inputSearch.scss'

const InputSearch = () => {
  const context = useProductContext()

  /*   const findProduct = e => {
    e.preventDefault()
    setSearchProduct(e.target.value)
  } */
  const handleSearch = (event) => {
    context.setSearch(event.target.value)
  }
  // const filCategories = e => {
  //   setFilterCategories(e.target.value)
  // }

  return (
    <form className='input_container'>
      <input className='input_search text-dark mt-4 mb-2' type='search' onChange={handleSearch} placeholder='What are you lookin for &#63;' />
    </form>
  )
}

export default InputSearch
