const API_VERSION = 'v1'
const DjangoBase = 'http://localhost:8000/'

export default {
  Django_API: `${DjangoBase}api/${API_VERSION}/`,

  /* Accounts */
  accounts_Register: 'accounts/register/',
  accounts_Login: 'accounts/login/',
  accounts_Logout: 'accounts/logout/',
  accounts_PasswordReset: 'accounts/password-reset/',
  accounts_TokenRefresh: 'accounts/token/refresh/',

  /* Users */
  users_All: 'users/',
  users_Me: 'users/me/',
  users_Specific: (username) => {
    return `users/${username}`
  },

  /* Category */
  category_All: 'category/',
  category_AllPosts: (slug) => {
    return `category/${slug}/`
  },
  category_RecentPosts: (slug) => {
    return `category/${slug}/recent_posts/`
  },

  /* Topic */
  topic_All: 'topic/',
  topic_Specific: (id) => {
    return `topic/${id}/`
  },
  topic_Comments: (id) => {
    return `topic/${id}/get_comments`
  },
  topic_Blame: (id) => {
    return `topic/${id}/toggle_postblame/`
  },
  topic_Like: (id) => {
    return `topic/${id}/toggle_postlike/`
  },

  /* Topic */
  pitapat_All: 'pitapat/',
  pitapat_Specific: (id) => {
    return `pitapat/${id}/`
  },
  pitapat_Comments: (id) => {
    return `pitapat/${id}/get_comments`
  },
  pitapat_Blame: (id) => {
    return `pitapat/${id}/toggle_postblame/`
  },
  pitapat_Like: (id) => {
    return `pitapat/${id}/toggle_postlike/`
  },

  /* Comment */
  comment_All: 'comment/',
  comment_Specific: (id) => {
    return `comment/${id}/`
  },
  comment_Blame: (id) => {
    return `comment/${id}/toggle_commentblame/`
  },
  comment_Like: (id) => {
    return `comment/${id}/toggle_commentlike/`
  }

}
