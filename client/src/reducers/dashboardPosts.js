export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload
    case "DELETE":
      return posts.filter(post => post._id !== action.payload)
    case "EDIT":
      return posts.map(post => post._id === action.payload._id ? action.payload : post)
    default:
      return posts
  }
}