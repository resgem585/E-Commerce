import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const token = window.localStorage.getItem('token')

const getAllItems = async () => {
  const { data } = await axios.get(`${BASE_URL}/items`)
  return data
}
const config = {
  header: {
    Authorization: `JWT ${token}`

  }
}
const registerUserServices = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserServices = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/users/${id}`, config)

export {
  registerUserServices,
  loginUserServices,
  getSingleUser,
  getAllItems
}
