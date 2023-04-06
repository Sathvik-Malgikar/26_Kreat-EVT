import axios from "axios"

export const api = axios.create({
    baseURL:""   // define the api where we work
})

export const getProfiles = async () => {
    const response = await api.get ('/posts')
    return response. data
}
