import { userStore } from '../store/userStore';
import ApiClient from './ApiClient';
import API from '../constant/API';
import axios from 'axios';

export const getDataEvent = async () => {

        ApiClient.GET(API.getFaculty).then(response => {

            userStore.update(s => {
                s.userDetails = response;
            });
            console.log(response)
        })
        ApiClient.GET(API.getCourse).then(response => {

            userStore.update(s => {
                s.courseDetails = response;
            });
            console.log(response)
        })
    
};