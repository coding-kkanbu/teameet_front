const API_VERSION = 'v1'
const DjangoBase = 'http://localhost:8000/'

export default {
  Django_API: `${DjangoBase}api/${API_VERSION}/`,

  /* Category */
  categories: 'category/',
  allPostsBycategory: (slug) => {
    return `category/${slug}/`
  },
  recentPostsByCategory: (slug) => {
    return `category/${slug}/recent_posts/`
  },

  /* Post */
  posts: 'post/',
  uniquePost: (id) => {
    return `post/${id}/`
  },
  postComments: (id) => {
    return `post/${id}/get_comments`
  },
  BlamePost: (id) => {
    return `post/${id}/toggle_postblame/`
  },
  LikePost: (id) => {
    return `post/${id}/toggle_postlike/`
  },

  /* Comment */
  comments: 'comment/',
  commentUnique: (id) => {
    return `comment/${id}/`
  },
  commentBlame: (id) => {
    return `comment/${id}/toggle_commentblame/`
  },
  commentLike: (id) => {
    return `comment/${id}/toggle_commentlike/`
  },

  /* Auth */
  login: 'login/',
  logout: '',
  register: '',
  MyInfo: 'users/me/',

  /* Users */
  allUsers: 'users/',
  UserInfo: (username) => {
    return `users/${username}`
  }

}
