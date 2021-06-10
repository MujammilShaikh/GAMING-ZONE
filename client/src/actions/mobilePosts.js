import { fetchMobilePosts } from '../api'

import { setIsLoading } from '../actions/isLoading'

export const getMobilePosts = (currentPage) => async (dispatch) => {
  try {
    console.log("res in ac mo")
    const { data } = await fetchMobilePosts(currentPage)
    dispatch(setIsLoading(false))

    console.log(data, 'mobile');
    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log("error in ac mo")
    console.log(error)
  }
}