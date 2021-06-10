import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'
import { useLocation } from 'react-router-dom'

import { getSearchedPosts } from '../actions/searchedPosts'
import Cards from '../Components/Cards'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageSearch } from '../actions/idFor'


const SearchedPosts = () => {

  console.log('In Search')

  const dispatch = useDispatch()
  const location = useLocation()

  const searchedPosts = useSelector((state) => state.SearchedPosts)
  const currentPage = useSelector((state) => state.idFor.currentPageSearch)
  const isLoading = useSelector(state => state.isLoading)
  // const query = useSelector(state => state.searchedQuery)

  console.log(searchedPosts, 'sesasasasasasaarchedpost');

  const { query } = location.state

  const modifiedQuery = {
    data: query.toString().split(" ")
  }

  useEffect(() => {
    dispatch(setIsLoading(true))

    dispatch(getSearchedPosts(currentPage, modifiedQuery))
  }, [dispatch, currentPage, searchedPosts, modifiedQuery])

  return (
    isLoading ? (
      <Loader type="Ovelots" color="#FFFF33" height={500} width={80} />
    ) : (
      <Cards posts={searchedPosts} setCurrentPage={setCurrentPageSearch} currentPage={currentPage} pageName={"RESULT"} />
      // <h1>Searched items here</h1>
    )
  )
}

export default SearchedPosts
