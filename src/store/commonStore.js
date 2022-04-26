import { Store } from 'pullstate';

export const commonStore = new Store({

    KlFaculty: [],

    selectedCourseList: [],
    selectedCourse: {},

    courseDetails: [],
    userList: [{
        CreatedAt: "2022-04-06 19:58:37",
        DepartmentID: "default-0000",
        EmployeeID: "QAM1701920",
        EmploymentStatus: "1",
        UserAddress: "NO.11 Taman Ultraman 2/7 Jalan Ultraman Court 56100 Kuala Lumpur, Selangor",
        UserContact: "0183860799",
        UserEmail: "smunkit98@gmail.com",
        UserGender: "MALE",
        UserID: "bsY8wcVSdmN91pWVzcsxironpAX2",
        UserImage: "https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/images%2Fstudent1.jpg?alt=media&token=f4e94d14-a559-4686-b746-f77c60bf7ee4",
        UserName: "Munkit",
        UserPosition: "QA Manager",
    },
    {
        CreatedAt: "2022-04-18 12:26:00",
        DepartmentID: "default-0002",
        EmployeeID: "QAC1023918",
        EmploymentStatus: "1",
        UserAddress: "",
        UserContact: "",
        UserEmail: "simon-chin98@hotmail.com",
        UserGender: "MALE",
        UserID: "2RSh6XYK0gfWjBvK0bv88yI212M2",
        UserImage: "https://i.pinimg.com/custom_covers/200x150/85498161615209203_1636332751.jpg",
        UserName: "SimonIs",
        UserPosition: "Staff"
    },
    {
        CreatedAt: "2022-04-18 12:33:00",
        DepartmentID: "default-0001",
        EmployeeID: "S123412",
        EmploymentStatus: "1",
        UserAddress: "NO 38 Taman Teratai 2/6 Taman Bukit Teratai 56100 KL Selangor",
        UserContact: "01151127925",
        UserEmail: "easonlim98@gmail.com",
        UserGender: "MALE",
        UserID: "LacGnT3CFFZxim6O6T3LutD7Ukp2",
        UserImage: "https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/images%2Feason.jpeg?alt=media&token=1fe6b32c-116b-40be-921b-e46d95050196",
        UserName: "Eason",
        UserPosition: "Staff",
    },
    {
        CreatedAt: "2022-04-18 12:32:00",
        DepartmentID: "default-0004",
        EmployeeID: "QAC1023913",
        EmploymentStatus: "1",
        UserAddress: "Live in toilet",
        UserContact: "11",
        UserEmail: "des.siew@hotmail.com",
        UserGender: "MALE",
        UserID: "agjcygCFIVXMrjAmQkNXQZrYMxC2",
        UserImage: "https://i.pinimg.com/custom_covers/200x150/85498161615209203_1636332751.jpg",
        UserName: "Xiao Kit Kit",
        UserPosition: "QA Coordinator"
    }],
    categoryList: [{
        CategoryID: "625acfdca1680",
        CategoryName: "Hall",
        ClosureDate: "2022-04-04",
        CreatedAt: "2022-04-16",
        EditedAt: "2022-04-25",
        FinalClosure: "2022-04-06",
    },
    {
        CategoryID: "625b00d93c53b",
        CategoryName: "Facilities",
        ClosureDate: "2022-04-29",
        CreatedAt: "2022-04-16",
        EditedAt: "2022-04-16",
        FinalClosure: "2022-04-30",
    }, {
        CategoryID: "625c14f3a098a",
        CategoryName: "Building",
        ClosureDate: "2022-04-14",
        CreatedAt: "2022-04-17",
        EditedAt: "2022-04-18",
        FinalClosure: "2022-04-17",
    }, {
        CategoryID: "default-category-001",
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