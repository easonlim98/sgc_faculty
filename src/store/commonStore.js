import { Store } from 'pullstate';

export const commonStore = new Store({
    EnquiryList: [{
        EnquiryID: "1",
        CourseID: "sckl-adp-biba",
        ApplicantName: "Gan Seng Dog",
        ApplicantNationality: "Indonesia",
        ApplicantIdentityNo: "883736-232-434",
        ApplicantEmail: "gsd@gmail.com",
        ApplicantContent: "Im gan seng dog",
        AppointmentDate: "2022-4-20",
        AppointmentTime: "10:24",
        ApplicationStatus: "Pending"
    },
    {
        EnquiryID: "2",
        CourseID: "sckl-adp-bip",
        ApplicantName: "Seng Dog Gan",
        ApplicantNationality: "Bangla",
        ApplicantIdentityNo: "2243424255",
        ApplicantEmail: "sdg@hotmail.com",
        ApplicantContent: "Im Seng Dog Gan",
        AppointmentDate: "2022-6-7",
        AppointmentTime: "20:00",
        ApplicationStatus: "Completed"
    },
    {
        EnquiryID: "3",
        CourseID: "sckl-ba-bbm",
        ApplicantName: "Dog Gan",
        ApplicantNationality: "India",
        ApplicantIdentityNo: "43242421412",
        ApplicantEmail: "doggan223@hotmail.com",
        ApplicantContent: "Wa Mun kit so leng zai",
        AppointmentDate: "2022-9-2",
        AppointmentTime: "17:25",
        ApplicationStatus: "Completed"
    }
    ],

    KlFaculty: [],

    selectedCourseList: [],
    selectedCourse: {},
    enquiryDetails: [],

    courseDetails: [],
    userList: [],
    categoryList: [{
        CategoryID: "625acfdca1680",
        CollegeID: "sckl",
        CategoryName: "Hall",
        ClosureDate: "2022-04-04",
        CreatedAt: "2022-04-16",
        EditedAt: "2022-04-25",
        FinalClosure: "2022-04-06",
    },
    {
        CategoryID: "625b00d93c53b",
        CollegeID: "scpg",
        CategoryName: "Facilities",
        ClosureDate: "2022-04-29",
        CreatedAt: "2022-04-16",
        EditedAt: "2022-04-16",
        FinalClosure: "2022-04-30",
    }, {
        CategoryID: "625c14f3a098a",
        CollegeID: "scsj",
        CategoryName: "Building",
        ClosureDate: "2022-04-14",
        CreatedAt: "2022-04-17",
        EditedAt: "2022-04-18",
        FinalClosure: "2022-04-17",
    }, {
        CategoryID: "default-category-001",
        CollegeID: "scsk",
        CategoryName: "Service",
        ClosureDate: "2022-04-20",
        CreatedAt: "2022-04-07",
        EditedAt: "2022-04-07",
        FinalClosure: "2022-04-30",
    }],
    postList: [{
        Annonymous: "0",
        CommentLength: "2",
        CreatedAt: "2022-04-18 12:40:00",
        EditedAt: "2022-04-18 12:40:00",
        LatestComment: "2022-04-18 12:57:00",
        PostDislike: "0",
        PostDoc: "../asset/upload/625d40308f514.png",
        PostFileName: "https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/document%2F%5Bobject%20File%5D?alt=media&token=0ad84c1b-f6af-4e0d-b578-45c7f12e75d4",
        PostID: "625d40308fb57",
        PostIdea: "Hire more cleaner to fit the schedule",
        PostLike: "3",
        PostTitle: "Toilet Not Clean",
        TagID: "625c15161d67d",
        UserID: "LacGnT3CFFZxim6O6T3LutD7Ukp2",
    }],
    departmentList: [
        {
            DepartmentID: "default-0000",
            DepartmentName: "Management"
        },
        {
            DepartmentID: "default-0001",
            DepartmentName: "Business & Marketing"
        },
        {
            DepartmentID: "default-0002",
            DepartmentName: "Academic"
        },
        {
            DepartmentID: "default-0003",
            DepartmentName: "Support"
        },
        {
            DepartmentID: "default-0004",
            DepartmentName: "Human Resource"
        }
    ],
    commentList: [{
        Annonymous: "0",
        CommentID: "625d42ffb4f5e",
        CommentText: "Agree",
        CreatedAt: "2022-04-18 12:52:00",
        PostID: "625d40308fb57",
        UserID: "bsY8wcVSdmN91pWVzcsxironpAX2"
    },
    {
        Annonymous: "1",
        CommentID: "625d432919317",
        CommentText: "Budget is too high",
        CreatedAt: "2022-04-18 12:53:00",
        PostID: "625d42ef90aee",
        UserID: "bsY8wcVSdmN91pWVzcsxironpAX2",
    },
    {
        Annonymous: "0",
        CommentID: "625d42ffb4f5e",
        CommentText: "Agree",
        CreatedAt: "2022-04-18 12:52:00",
        PostID: "625d40308fb57",
        UserID: "bsY8wcVSdmN91pWVzcsxironpAX2"
    }],
    likeList: [],
    dislikeList: [],
    barChartData: [{
        DepartmentName: "Academic",
        Total_Ideas: "16"
    },
    {
        DepartmentName: "Business & Marketing",
        Total_Ideas: "2"
    },
    {
        DepartmentName: "Human Resource",
        Total_Ideas: "0"
    },
    {
        DepartmentName: "Support",
        Total_Ideas: "2"
    }
    ],
    contributorData: [{
        DepartmentName: "Academic",
        Total_Contributor: "2"
    },
    {
        DepartmentName: "Business & Marketing",
        Total_Contributor: "1"
    },
    {
        DepartmentName: "Human Resource",
        Total_Contributor: "0"
    },
    {
        DepartmentName: "Support",
        Total_Contributor: "1"
    }],
    pieChartData: [{
        DepartmentName: "Academic",
        Total_Ideas: "16",
        Total_Post: "20"
    },
    {
        DepartmentName: "Business & Marketing",
        Total_Ideas: "2",
        Total_Post: "20"
    },
    {
        DepartmentName: "Support",
        Total_Ideas: "2",
        Total_Post: "20"
    }],
    zipDocument: [{
        CategoryID: "625acfdca1680",
        CategoryName: "Hall",
        PostDoc: "../asset/upload/6260190f34a10.png"
    }],
    csvData: [{
        Author: "Eason",
        CategoryID: "625b00d93c53b",
        Department: "Business & Marketing",
        Idea: "Hire more cleaner to fit the schedule",
        Title: "Toilet Not Clean"
    }],
    expiredCategory: [{
        CategoryID: "625c14f3a098a",
        Category_Name: "Building",
        ClosureDate: "2022-04-14",
        FinalClosure: "2022-04-17",
        Total_Comment: "3",
        Total_Dislike: "4",
        Total_Ideas: "1",
        Total_Like: "6"
    }],

    subjectTitle: [],
    subjectList: [],

    facultyDetails: {},
    institutionLink: [],

});  