import * as api from '../api'

import { useDispatch } from 'react-redux'

import { setIsLoading } from '../actions/isLoading'

const dispatch = useDispatch
export const getSciencePosts = (currentPage) => async (dispatch) => {
  try {
    const { data } = await api.fetchSciencePosts(currentPage)
    dispatch(setIsLoading(false))

    console.log(data, 'science');
    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log(error)
  }
}