import { Store } from 'pullstate';

export const userStore = new Store({

    userDetails: [],
    userListDetails: [{
        UserID: "bsY8wcVSdmN91pWVzcsxironpAX2",
        UserImage: "https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/images%2Fstudent1.jpg?alt=media&token=f4e94d14-a559-4686-b746-f77c60bf7ee4",
        UserName: "Munkit",
        UserEmail: "smunkit98@gmail.com",
        UserContact: "0183860799",
        EmployeeID: "QAM1701920",
        UserPosition: "QA Manager",

        CreatedAt: "2022-04-06 19:58:37",
        DepartmentID: "default-0000",
        EmploymentStatus: "1",
        UserAddress: "NO.11 Taman Ultraman 2/7 Jalan Ultraman Court 56100 Kuala Lumpur, Selangor",
        UserGender: "MALE",
    }],
    authStatus: false || window.localStorage.getItem('auth')==='true',
    userID: '',
    selectedUser: {}

});  
