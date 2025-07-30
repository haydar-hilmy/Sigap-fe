export const USER_ENDPOINTS = {
  profile: "/api/me",
  changePassword: "/api/me/password",
  getById: (id) => `/api/users/${id}`,
};