import axios from "axios"


const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getUsers = ({limit, offset}) => httpClient.get("/users?limit=2&offset=40")


export const postUser = (values) => httpClient.post('/users', values)