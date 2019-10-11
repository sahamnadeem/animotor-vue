import Repository from './Repository'
import Authorized from './Authorized'

const resource = 'auth'
export default{
    login(payload){
        return Repository.post(`${resource}/getlogin`,payload)
    },
    register(payload){
        return Repository.post(`${resource}/register`,payload)
    },
    user(){
        return Authorized.get(`${resource}/user`)
    },
    update(payload){
        return Authorized.put(`${resource}/update/user`,payload)
    }
}