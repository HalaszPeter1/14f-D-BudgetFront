<template>
    <div class="container">
        <RegisterForm :userData="userData"></RegisterForm>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import RegisterForm from '../components/RegisterComponent.vue';

const userData=ref({
    id:null,
    userName:'',
    email:'',
    password:''
})

</script>

<style>

.container {
    width: 400px !important ;
    max-width: 95%;
    margin-top: 25px; 
    padding-top: 10px;
    padding-bottom: 20px;
}

.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px
}

.input>label {
    text-align: start
}

.input>input {
    margin-top: 6px;
    height: 38px !important
}

.btn-pers {
    position: relative;
    left: 50%;
    padding: 1em 2.5em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
    transition: all .3s ease 0s;
    cursor: pointer;
    outline: none;
    transform: translateX(-50%)
}

.btn-pers:hover {
    background-color: #198754;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
    color: #fff;
    transform: translate(-50%, -7px)
}

.btn-pers:active {
    transform: translate(-50%, -1px)
}

.alternative-option {
    text-align: center
}

.alternative-option>span {
    color: #0d6efd;
    cursor: pointer
}
</style>
  