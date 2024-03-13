export const API = {
  SIGNIN: `${process.env.REACT_APP_PUBLIC_BASE_URL}/users/login`,
  SIGNUP: `${process.env.REACT_APP_PUBLIC_BASE_URL}/users/register`,
  VALIDATION: `${process.env.REACT_APP_PUBLIC_BASE_URL}/users/check-duplicate-email`,
  PASSWORD_FIND: `${process.env.REACT_APP_PUBLIC_BASE_URL}/users/password/find`,
  USERINFO: `${process.env.REACT_APP_PUBLIC_BASE_URL}/jobs/profile`,
  RECOMMENDATION: `${process.env.REACT_APP_PUBLIC_BASE_URL}/jobs/recommendations`,
  KEYWORD: `${process.env.REACT_APP_PUBLIC_BASE_URL}/jobs/keyword`,
  CHAT: `${process.env.REACT_APP_PUBLIC_BASE_URL}/jobs/chat`,
  GETPROFILE: `${process.env.REACT_APP_PUBLIC_BASE_URL}/jobs/profile`,
  GETSHARELINK: `${process.env.REACT_APP_PUBLIC_BASE_URL}/jobs/recommendations/share`,
};
