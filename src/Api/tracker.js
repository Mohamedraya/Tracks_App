import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
    baseURL :"http://f7163b7a.ngrok.io" 
    //to get this url we write in Terminal ngrock http 3000    
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);