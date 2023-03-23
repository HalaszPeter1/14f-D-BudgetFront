import { defineStore } from 'pinia';
import Axios from '../services/dataservice.js'

export const useUserStore = defineStore({
    id: 'UserStore',
    state: () => ({
        users: [],
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
                .catch()
        },

    }
});