import axios from "axios"
const baseDomain = "https://oranje-tech.com/demo/kut_it/"
const baseURL = '${baseDomain}/api'
const authUser = window.localStorage.getItem('authUser')
if(authUser && authUser.token){
    const token = authUser.token
}

export default axios.create({
    baseURL,
    headers:{
        "Authorization" : "Bearer ${token}",
    }
})