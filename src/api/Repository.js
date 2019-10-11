import axios from "axios"
const baseDomain = "https://oranje-tech.com/demo/kut_it"
const baseURL = `${baseDomain}/api`

export default axios.create({
    baseURL
})