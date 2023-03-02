import axios from 'axios'
import { log } from 'console';
import { AuthModel, UserModel } from './_models'

const API_URL = import.meta.env.VITE_REACT_APP_API_URL
console.log(API_URL);

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const LOGOUT_URL = `${API_URL}/logout`
export const GET_CURRENT_USER = `${API_URL}/users/current`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export async function login(email: string, password: string) {
  try {
    return await axios.post<AuthModel>(LOGIN_URL, {
      email,
      password,
    })

  } catch (error) {
    throw error;
  }


}
export async function logout() {
  try {
    await axios.post<AuthModel>(LOGOUT_URL)

  } catch (error) {
    throw error;
  }


}


// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export async function getUserByToken() {
  return await axios.get(GET_CURRENT_USER)
}
