import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://4epczq4iq6.execute-api.us-east-1.amazonaws.com/v1'
});
export default instance;