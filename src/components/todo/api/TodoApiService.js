import axios from "axios"

// export function retrieveHelloWorldBean(){
//     return axios.get("http://localhost:8080/hello-world-bean" )
// }

const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

// http://localhost:8080/users/suraj/todos
export const retrieveAllTodosForUserApi
    = (username) => apiClient.get(`/users/${username}/todos`)

// http://localhost:8080/users/suraj/todos/1
export const deleteTodoApi
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

// http://localhost:8080/users/suraj/todos/1
export const retrieveTodoApi
    = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)


