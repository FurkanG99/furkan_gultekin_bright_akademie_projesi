import axios from "axios";

export const Api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () =>{
    const response = await Api.get('posts')
    return response.data
}