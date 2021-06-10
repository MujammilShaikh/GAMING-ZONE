import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Search.css'
import { setSearchedQuery } from '../actions/searchedQuery'

const Search = () => {

  const [query, setQuery] = useState('')



  return (
    <form className="saerch-form">
      <input
        placeholder="Search"
        name="terms"
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text" />
      <button>
        <Link to={{
          pathname: "/search",
          state: { query }
        }}><i class="fas fa-search"></i></Link>
      </button>
    </form>
  )
}

export default Search
