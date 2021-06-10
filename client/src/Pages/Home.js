import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getAllPosts } from '../actions/posts'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageHome } from '../actions/idFor'
import Cards from '../Components/Cards'
import bg from "../img/home.png"

const Home = () => {

  console.log('Home Page');

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoading)
  const currentPage = useSelector((state) => state.idFor.currentPageHome)
  const homePosts = useSelector((state) => state.posts)

  useEffect(() => {
    console.log('Home useEffect called');
    dispatch(setIsLoading(true))
    dispatch(getAllPosts(currentPage))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="Ovel" color="#FFFF33" height={500} width={80} />
    ) : (
      <>
      <div class="bg-image-cards">
      <img src={bg}></img>
      </div>
      <Cards posts={homePosts} setCurrentPage={setCurrentPageHome} currentPage={currentPage} pageName={"GAMING NEWS"} />
      </>
    )
  )
}

export default Home
