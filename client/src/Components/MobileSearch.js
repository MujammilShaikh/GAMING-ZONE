import React from 'react'

import '../styles/MobileSearch.css'

const Search = () => {

  return (
    <form className="saerch-mobile-form">
      <input placeholder="Search" />
      <button>
        <i class="fas fa-search"></i>
      </button>
    </form>
  )
}

export default Search
