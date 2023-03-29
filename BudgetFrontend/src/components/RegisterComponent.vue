<template>
    <div class="container">
        <form>
            <h2 class="mb-3">Register</h2>
            <div class="input">
                <label for="username">Username</label>
                <input class="form-control" type="text" name="username" placeholder="username" v-model="userData.userName" />
            </div>
            <div class="input">
                <label for="email">Email address</label>
                <input class="form-control" type="text" name="email" placeholder="email@adress.com" v-model="userData.email" />
            </div>
            <div class="input">
                <label for="password">Password</label>
                <input class="form-control" type="password" name="password" placeholder="password123" v-model="userData.password" />
            </div>
    
            <div class="alternative-option mt-4">
                Already have an account? <router-link to="/login">Login</router-link>
            </div>
    
            <button type="submit" id="register_button" class="mt-4 btn-pers" @click="saveRegisteredUser">
                Register
            </button>
        </form>
    </div>
</template>



<script setup>

import {useUserStore} from '../stores/users'
import {useRouter} from 'vue-router';
const props = defineProps(['userData']);
 const {registerUser} = useUserStore();
 const router = useRouter();
function saveRegisteredUser() {
    registerUser(props.userData)
    .then(()=>{
        router.push('/');
    })
}


</script>