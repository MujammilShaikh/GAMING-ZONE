import * as api from '../api'

// import { useDispatch } from 'react-redux'

import { setIsLoading } from '../actions/isLoading'

// const dispatch = useDispatch

//Action Creators

export const getAllPosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts(currentPage)

    dispatch(setIsLoading(false))

    // console.log(data, 'home');
    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.craetePost(post)
  } catch (error) {
    console.log(error)
  }
}
