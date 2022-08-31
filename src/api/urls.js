const API_VERSION = 'v1'
const DjangoBase = 'http://localhost:8000/'

export default {
  Django_API: `${DjangoBase}api/${API_VERSION}/`,

  /* Accounts */
  accounts_Register: 'accounts/register/',
  accounts_Login: 'accounts/login/',
  accounts_Logout: 'accounts/logout/',
  accounts_TokenRefresh: 'accounts/token/refresh/',
  accounts_EmailVerification: 'accounts/verify-neis-email/',
  accounts_PasswordReset: 'accounts/password-reset/',
  accounts_PasswordChange: 'accounts/password-change/',

  /* Users */
  users: 'users/',
  users_Specific: (username) => {
    return `users/${username}/`
  },

  users_Me: 'users/me/',
  users_UploadImage: (username) => {
    return `users/${username}/upload_image/`
  },
  users_MyPosts: (username) => {
    return `users/${username}/my_posts/`
  },

  /* Category */
  category: 'category/',
  category_PostsByPage: (slug, page) => {
    return `category/${slug}/?page=${page}`
  },
  category_RecentPosts: (slug) => {
    return `category/${slug}/recent_posts/`
  },

  /* Post */
  post_Detail: (category, id) => {
    return `${category}/${id}/`
  },
  post_Write: (app) => {
    return `${app}/`
  },

  /* Topic */
  topic: 'topic/',
  topic_Comments: (id) => {
    return `topic/${id}/get_comments`
  },
  topic_Blame: (id) => {
    return `topic/${id}/toggle_postblame/`
  },
  topic_Like: (id) => {
    return `topic/${id}/toggle_postlike/`
  },

  /* PitAPat */
  pitapat: 'pitapat/',
  pitapat_Connected: (id) => {
    return `pitapat/${id}/connected/`
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
