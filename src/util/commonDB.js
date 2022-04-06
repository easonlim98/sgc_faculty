import { userStore } from '../store/userStore';
import ApiClient from './ApiClient';
import API from '../constant/API';
import axios from 'axios';
import { commonStore } from '../store/commonStore';

export const getDataEvent = async () => {
        
        await ApiClient.GET(API.getKLCourse).then(response => {

            commonStore.update(s => {
                s.KlCourseDetails = response;
            });
        })

        await ApiClient.GET(API.getKLFaculty).then(response => {

            commonStore.update(s => {
                s.KlFaculty = response;
            });
        })
    
};