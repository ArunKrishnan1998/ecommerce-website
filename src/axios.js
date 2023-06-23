import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-by-ak-773c0.cloudfunctions.net/api'
})

export default instance;