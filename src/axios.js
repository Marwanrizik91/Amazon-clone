import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-f38c5.cloudfunctions.net/api',
    // 'http://localhost:5001/clone-f38c5/us-central1/api'
})

export default instance;