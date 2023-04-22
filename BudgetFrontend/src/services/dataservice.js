import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://14f-dbudgetcalc.cyclic.app/',
    headers:{
        'Content-Type' : 'application/json'
    },
    withCredentials:true
});

export default instance;
