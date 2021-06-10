import { fetchSearchedPosts } from '../api'
import { setIsLoading } from './isLoading'

export const getSearchedPosts = (currentPage, query) => async (dispatch) => {

  try {
    const { data } = await fetchSearchedPosts(currentPage, query)

    console.log("searched data", data);
    dispatch(setIsLoading(false))

    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log(error)
  }
}