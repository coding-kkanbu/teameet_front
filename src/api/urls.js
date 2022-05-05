const API_VERSION = 'v1'

export default {
  Django_Base: 'http://localhost:8000/',
  Django_API: `${this.Django_Base}api/${API_VERSION}/`,

  /* Category */
  category: 'category/',
  categoryUnique: (id) => {
    return `category/${id}/`
  },
  categoryRecentPosts: (id) => {
    return `category/${id}/recent_posts/`
  },

  /* Post */
  post: 'post/',
  postUnique: (id) => {
    return `post/${id}/`
  },
  postComments: (id) => {
    return `post/${id}/get_comments`
  },
  postBlame: (id) => {
    return `post/${id}/toggle_postblame/`
  },
  postLike: (id) => {
    return `post/${id}/toggle_postlike/`
  },

  /* Comment */
  comment: 'comment/',
  commentUnique: (id) => {
    return `comment/${id}/`
  },
  commentBlame: (id) => {
    return `comment/${id}/toggle_commentblame/`
  },
  commentLike: (id) => {
    return `comment/${id}/toggle_commentlike/`
  }

}
