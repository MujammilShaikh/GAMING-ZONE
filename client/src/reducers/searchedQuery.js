export default (query = [], action) => {
  switch (action.type) {
    case 'SEARCHED_QUERY':
      return action.payload
    default:
      return query
  }
}