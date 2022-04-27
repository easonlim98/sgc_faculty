import { userStore } from '../store/userStore';
import ApiClient from './ApiClient';
import API from '../constant/API';
import axios from 'axios';
import { commonStore } from '../store/commonStore';

export const getDataEvent = (userID) => {
        
    ApiClient.GET(API.getUser).then(response => {

        var userList = [];
        var tempUserDetail = {}; 
    
        for(var i = 0; i < response.length; i++){
          userList.push(response[i]);
        }
    
        tempUserDetail = userList.find(user => user.UserID === userID);
    
        commonStore.update(s => {
          s.userList = userList;
        });
    
        userStore.update(s => {
          s.selectedUser = tempUserDetail;
        });
    
      })

      ApiClient.GET(API.getAdminCourse).then(response => {

        var TempCourseList = [];
    
        for(var i = 0; i < response.length; i++){
            TempCourseList.push(response[i]);
        }
    
        commonStore.update(s => {
          s.courseDetails = TempCourseList;
        });

        console.log(TempCourseList)
    
      })

      ApiClient.GET(API.getEnquiry).then(response => {

        var tempEnquiry = [];
    
        for(var i = 0; i < response.length; i++){
            tempEnquiry.push(response[i]);
        }
    
        commonStore.update(s => {
          s.enquiryDetails = tempEnquiry;
        });

        console.log(tempEnquiry)
    
      })
    
};