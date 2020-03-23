import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID -_YcDUs5jaLr4n8Odg9ejcsWV-vyVRs4hP4cN_-2qFo'
    }

});