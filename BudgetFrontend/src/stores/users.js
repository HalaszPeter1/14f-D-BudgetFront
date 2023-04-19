import { defineStore } from 'pinia';
import Axios from '../services/dataservice.js'

export const useUserStore = defineStore({
    id: 'UserStore',
    state: () => ({
        users: [],
        user: 0,
        userId: 0,
        isLoggedin: false
    }),
    getters: {
        // lekérdezni a state-ba lévő változókat
    },
    actions: {
        getAllUsers() {
            return Axios.get('/users')
                .then(resp => {
                    console.log(resp.data);
                    this.users = resp.data;
                })
                .catch()
        },
        registerUser(userData){
            return Axios.post('/register',userData)
                .then(()=>{return;})
                .catch(error=>{
                    console.log(error);
                })
        },
        loginUser(userData){
            return Axios.post('/login',userData)
                .then((resp)=>{
                    this.user=resp.data
                    this.userId = this.user.user.id
                    this.isLoggedin = true
                })
                .catch(error=>{
                    console.log(error);
                })
        },


    }
});