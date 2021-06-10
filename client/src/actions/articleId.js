export const setIdForArticle = (id) => async (dispatch) => {

  dispatch({ type: 'ARTICLE_ID', payload: id })

}