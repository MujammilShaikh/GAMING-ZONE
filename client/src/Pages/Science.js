import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getSciencePosts } from '../actions/sciencePosts'
import Cards from '../Components/Cards'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageScience } from '../actions/idFor'
import isLoading from '../reducers/isLoading'


const Science = () => {

  console.log('In Science');

  const dispatch = useDispatch()
  const sciencePosts = useSelector((state) => state.sciencePosts)
  const currentPage = useSelector((state) => state.idFor.currentPageScience)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(setIsLoading(true))

    dispatch(getSciencePosts(currentPage))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="Ovelots" color="#FFFF33" height={500} width={80} />
    ) : (
      <Cards posts={sciencePosts} setCurrentPage={setCurrentPageScience} currentPage={currentPage} pageName={"REVIEWS"} />
    )
  )
}

export default Science
