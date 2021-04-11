import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/users'
const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
} 
const dataServices = {getAll}
export default dataServices