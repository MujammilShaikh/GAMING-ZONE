export const setSearchedQuery = (query) => async (dispatch) => {

  dispatch({ type: 'SEARCHED_QUERY', payload: query })

}