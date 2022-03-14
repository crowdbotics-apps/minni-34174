import axios from "axios"
const minniAPI = axios.create({
  baseURL: "https://minni-34174-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return minniAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return minniAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_camera_photos_user_list(payload) {
  return minniAPI.get(`/modules/camera/photos/user/`)
}
function modules_camera_photos_user_read(payload) {
  return minniAPI.get(`/modules/camera/photos/user/${payload.id}/`)
}
function modules_camera_upload_image_create(payload) {
  return minniAPI.post(`/modules/camera/upload_image/`)
}
function modules_privacy_policy_list(payload) {
  return minniAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return minniAPI.post(`/modules/privacy-policy/`, payload.data)
}
function modules_privacy_policy_read(payload) {
  return minniAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return minniAPI.put(`/modules/privacy-policy/${payload.id}/`, payload.data)
}
function modules_privacy_policy_partial_update(payload) {
  return minniAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload.data)
}
function modules_privacy_policy_delete(payload) {
  return minniAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_social_auth_apple_connect_create(payload) {
  return minniAPI.post(`/modules/social-auth/apple/connect/`, payload.data)
}
function modules_social_auth_apple_login_create(payload) {
  return minniAPI.post(`/modules/social-auth/apple/login/`, payload.data)
}
function modules_social_auth_facebook_connect_create(payload) {
  return minniAPI.post(`/modules/social-auth/facebook/connect/`, payload.data)
}
function modules_social_auth_facebook_login_create(payload) {
  return minniAPI.post(`/modules/social-auth/facebook/login/`, payload.data)
}
function modules_social_auth_google_connect_create(payload) {
  return minniAPI.post(`/modules/social-auth/google/connect/`, payload.data)
}
function modules_social_auth_google_login_create(payload) {
  return minniAPI.post(`/modules/social-auth/google/login/`, payload.data)
}
function modules_social_auth_socialaccounts_list(payload) {
  return minniAPI.get(`/modules/social-auth/socialaccounts/`)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return minniAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload.data
  )
}
function rest_auth_login_create(payload) {
  return minniAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return minniAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return minniAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return minniAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return minniAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return minniAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return minniAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return minniAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_read(payload) {
  return minniAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return minniAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return minniAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  modules_camera_photos_user_list,
  modules_camera_photos_user_read,
  modules_camera_upload_image_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_read,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_delete,
  modules_social_auth_apple_connect_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_facebook_connect_create,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_google_login_create,
  modules_social_auth_socialaccounts_list,
  modules_social_auth_socialaccounts_disconnect_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
