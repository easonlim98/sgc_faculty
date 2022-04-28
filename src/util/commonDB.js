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
    
      })

      ApiClient.GET(API.getFacultyReport).then(response => {

        var tempFacultyReport = [];
    
        for(var i = 0; i < response.length; i++){
            tempFacultyReport.push(response[i]);
        }
    
        commonStore.update(s => {
          s.facultyReport = tempFacultyReport;
        });
    
      })

      ApiClient.GET(API.getFacultyReportPercent).then(response => {

        var tempFacultyReport = [];
    
        for(var i = 0; i < response.length; i++){
            tempFacultyReport.push(response[i]);
        }
    
        commonStore.update(s => {
          s.facultyReportPercent = tempFacultyReport;
        });
    
      })

      ApiClient.GET(API.getAdminFaculty).then(response => {

        var tempFaculty = [];
    
        for(var i = 0; i < response.length; i++){
            tempFaculty.push(response[i]);
        }
    
        commonStore.update(s => {
          s.allFaculty = tempFaculty;
        });

        console.log(tempFaculty)
    
      })

      ApiClient.GET(API.getAdminPost).then(response => {

        var tempPost = [];
    
        for(var i = 0; i < response.length; i++){
            tempPost.push(response[i]);
        }
    
        commonStore.update(s => {
          s.allPost = tempPost;
        });

        console.log(response)
    
      })

      ApiClient.GET(API.getAdminVote).then(response => {

        var tempVoteList = [];
    
        for(var i = 0; i < response.length; i++){
            tempVoteList.push(response[i]);
        }
    
        commonStore.update(s => {
          s.voteList = tempVoteList;
        });

        console.log(tempVoteList)
    
      })

      ApiClient.GET(API.getAdminComment).then(response => {

        var tempComment = [];
    
        for(var i = 0; i < response.length; i++){
          tempComment.push(response[i]);
        }
    
        commonStore.update(s => {
          s.allComment = tempComment;
        });

        console.log(response)
    
      })
    
};