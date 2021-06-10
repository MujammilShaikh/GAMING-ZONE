import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getMobilePosts } from '../actions/mobilePosts'
import Cards from '../Components/Cards'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageMbile } from '../actions/idFor'


const Mobile = () => {

  console.log('In Mobile')

  const dispatch = useDispatch()
  const mobilePosts = useSelector((state) => state.mobilePosts)
  const currentPage = useSelector((state) => state.idFor.currentPageMobile)
  const isLoading = useSelector(state => state.isLoading)


  useEffect(() => {
    dispatch(setIsLoading(true))
    console.log('first in Mobile');
    dispatch(getMobilePosts(currentPage))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="Ovelots" color="#FFFF33" height={500} width={80} />
    ) : (
      <Cards posts={mobilePosts} setCurrentPage={setCurrentPageMbile} currentPage={currentPage} pageName={"GAMES"} />
    )
  )
}

export default Mobile
