import { userStore } from '../store/userStore';
import ApiClient from './ApiClient';
import API from '../constant/API';

export const getDataEvent = async () => {
      
    const userList = await ApiClient.GET(API.getUser)
        userStore.update(s => {
            s.userDetails = userList.data;
        });

}