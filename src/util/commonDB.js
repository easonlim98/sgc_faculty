import { userStore } from '../store/userStore';
import ApiClient from './ApiClient';
import API from '../constant/API';

export const getDataEvent = async () => {

        await ApiClient.GET(API.getFaculty).then(function (response){
            userStore.update(s => {
                s.userDetails = response;
            });
        })

}