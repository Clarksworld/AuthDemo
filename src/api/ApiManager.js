 import axios from 'axios'


export default ApiManager = axios.create({

    baseURL = "http://147.182.200.74", 
    responseType: 'json',
    withCredentials: true
 })