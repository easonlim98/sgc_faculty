import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/standard.css'
import './css/CourseDetail.css'

const CourseDetail = () => {
    const [DymBackgroundImg1, setDymBackgroundImg1] = useState(require('../assets/images/CoursePage/IT1.png')),
        [DymTitle1, setDymTitle1] = useState('BSC (HONS) COMPUTING'),
        [DymYear1, setDymYear1] = useState('(3+0)'),
        [DymCourseID2, setDymCourseID2] = useState('(R2/481/6/0500)'),
        [DymCourseID3, setDymCourseID3] = useState('(05/24) (A10000)'),
        [DymLevelOfStudy2, setDymLevelOfStudy2] = useState('Degree'),
        [DymCampus2, setDymCampus2] = useState('Kuala Lumpur'),
        [DymCampus3, setDymCampus3] = useState('Subang Jaya'),
        [DymImg1, setDymImg1] = useState(require('../assets/images/CoursePage/IT2.png')),
        [DymP1, setDymP1] = useState('Graphic design embraces a number of artistic and professional disciplines in the field of visual communication and presentation, including the use of typography and photographic imagery.'),
        [DymP2, setDymP2] = useState('It transcends language barriers by means of symbols. Various methods are used to create and combine symbols, images and/or words to create a visual representation of ideas and messages.'),
        [DymP3, setDymP3] = useState('Common uses of graphic design include'),
        [DymP4, setDymP4] = useState('Magazines'),
        [DymP5, setDymP5] = useState('Advertisements'),
        [DymP6, setDymP6] = useState('Product packaging and web design'),
        [DymP7, setDymP7] = useState('What We Should Know about this course'),
        [DymP8, setDymP8] = useState('The course will explore the theory, technology, practice, and application of computing and the development of information systems.'),
        [DymP9, setDymP9] = useState('You will have the opportunity to specialise in Information Systems or Networking, or build a broad range of skills with a general Computing degree.'),
        [DymP10, setDymP10] = useState('Develop knowledge and understanding of the design, development, and delivery of software platforms using industry-led development tools, techniques, methods, and frameworks.'),
        [DymP11, setDymP11] = useState('The University of Greenwich has a long-standing relationship with the British Computer Society (BCS), which accredits our computing degree programmes. As this programme was extensively updated in 2019, it has a current designation of Initial Full Chartered Information Technology Professional (CITP) accreditation for the 2019 intake. The accreditation status is expected to be confirmed in autumn 2022 after the first cohort of students graduate. Students will be kept updated on the status of this. In the very unlikely event that this does not progress as expected the university will support students with individual BCS membership applications at the point of graduation.'),
        [DymP12, setDymP12] = useState('Overall workload'),
        [DymP13, setDymP13] = useState('If you are studying full-time, you should expect the workload to be similar to a full-time job. For part-time students, this will reduce in proportion with the number of courses you are studying.'),
        [DymP14, setDymP14] = useState('Each module you study towards this degree is worth 15 or 30 credits. These represent around 150 or 300 study hours respectively. If you receive 72 contact hours for a 30-credit module, you should expect to commit 228 hours to independent study to complete it successfully.'),

        Accordion_LIST = {
            Accordion_1: 'Accordion_1',
            Accordion_2: 'Accordion_2',
            Accordion_3: 'Accordion_3',
            Accordion_4: 'Accordion_4'
        },
        [showSection, setShowSection] = useState(Accordion_LIST.Accordion_1),

        [Accordion_TableA1, setAccordion_TableA1] = useState('· SPM / O-Level or equivalent with 3 credits'),
        [Accordion_TableA2, setAccordion_TableA2] = useState('· UEC with 3 credits'),
        [Accordion_TableA3, setAccordion_TableA3] = useState('· SKM Level 3'),
        [Accordion_TableA4, setAccordion_TableA4] = useState(' · Related Certificate or equivalent'),
        [Accordion_TableA5, setAccordion_TableA5] = useState('· MQA-APEL T4'),
        [Accordion_TableA6, setAccordion_TableA6] = useState(''),

        [Accordion_TableB1, setAccordion_TableB1] = useState('Computer Systems and Internet Technologies (15 credits),'),
        [Accordion_TableB2, setAccordion_TableB2] = useState('Object Oriented Programming (15 credits),'),
        [Accordion_TableB3, setAccordion_TableB3] = useState('Programming Foundations (15 credits),'),
        [Accordion_TableB4, setAccordion_TableB4] = useState(''),
        [Accordion_TableB5, setAccordion_TableB5] = useState(''),
        [Accordion_TableB6, setAccordion_TableB6] = useState(''),
        [Accordion_TableB7, setAccordion_TableB7] = useState(''),
        [Accordion_TableB8, setAccordion_TableB8] = useState(''),
        [Accordion_TableB9, setAccordion_TableB9] = useState(''),
        [Accordion_TableB10, setAccordion_TableB10] = useState(''),

        [Accordion_TableB11, setAccordion_TableB11] = useState('Object Oriented Programming (15 credits),'),
        [Accordion_TableB12, setAccordion_TableB12] = useState('Programming Foundations (15 credits),'),
        [Accordion_TableB13, setAccordion_TableB13] = useState('Application Development (15 credits),'),
        [Accordion_TableB14, setAccordion_TableB14] = useState(''),
        [Accordion_TableB15, setAccordion_TableB15] = useState(''),
        [Accordion_TableB16, setAccordion_TableB16] = useState(''),
        [Accordion_TableB17, setAccordion_TableB17] = useState(''),
        [Accordion_TableB18, setAccordion_TableB18] = useState(''),
        [Accordion_TableB19, setAccordion_TableB19] = useState(''),
        [Accordion_TableB20, setAccordion_TableB20] = useState(''),

        [Accordion_TableB21, setAccordion_TableB21] = useState('Computer Systems and Internet Technologies (15 credits),'),
        [Accordion_TableB22, setAccordion_TableB22] = useState('Object Oriented Programming (15 credits),'),
        [Accordion_TableB23, setAccordion_TableB23] = useState('Programming Foundations (15 credits),'),
        [Accordion_TableB24, setAccordion_TableB24] = useState(''),
        [Accordion_TableB25, setAccordion_TableB25] = useState(''),
        [Accordion_TableB26, setAccordion_TableB26] = useState(''),
        [Accordion_TableB27, setAccordion_TableB27] = useState(''),
        [Accordion_TableB28, setAccordion_TableB28] = useState(''),
        [Accordion_TableB29, setAccordion_TableB29] = useState(''),
        [Accordion_TableB30, setAccordion_TableB30] = useState(''),
        [Accordion_TableB31, setAccordion_TableB31] = useState(''),
        [Accordion_TableB32, setAccordion_TableB32] = useState(''),
        [Accordion_TableB33, setAccordion_TableB33] = useState(''),

        [Accordion_TableC1, setAccordion_TableC1] = useState('· PTPTN'),
        [Accordion_TableC2, setAccordion_TableC2] = useState('· EPF'),
        [Accordion_TableC3, setAccordion_TableC3] = useState('· HRDF'),
        [Accordion_TableC4, setAccordion_TableC4] = useState('· SEGi Monthly insallment'),
        [Accordion_TableC5, setAccordion_TableC5] = useState('· Low Initial Payment'),

        [Accordion_TableD1, setAccordion_TableD1] = useState('Graphic designer, design consultant, DTP artist, illustrator, UI / UX designer.'),
        [Accordion_TableD2, setAccordion_TableD2] = useState(''),
        [Accordion_TableD3, setAccordion_TableD3] = useState(''),
        [Accordion_TableD4, setAccordion_TableD4] = useState(''),
        [Accordion_TableD5, setAccordion_TableD5] = useState('')

    const [CourseDetailEditor, setCourseDetailEditor] = useState(false)
    const [Course_Detail_Course_Name_Slide_Pop_Menu_3, setCourse_Detail_Course_Name_Slide_Pop_Menu_3] = useState(false)
    const [Course_Detail_Course_Name_Slide_Pop_Menu_4, setCourse_Detail_Course_Name_Slide_Pop_Menu_4] = useState(false)
    const [Course_Detail_Course_Name_Slide_Pop_Menu_5, setCourse_Detail_Course_Name_Slide_Pop_Menu_5] = useState(false)
    const [Course_Detail_Content_Editable_2, setCourse_Detail_Content_Editable_2] = useState(false)
    if (Course_Detail_Content_Editable_2) {
        return (
            <div onChange={() => {
                /* Here to save the edited content */
                setDymBackgroundImg1(DymBackgroundImg1)
                setDymTitle1(DymTitle1)
                setDymYear1(DymYear1)
                setDymCourseID2(DymCourseID2)
                setDymCourseID3(DymCourseID3)
                setDymLevelOfStudy2(DymLevelOfStudy2)
                setDymCampus2(DymCampus2)
                setDymCampus3(DymCampus3)
                //setDymImg1(DymImg1)
                setDymP1(DymP1)
                setDymP2(DymP2)
                setDymP3(DymP3)
                setDymP4(DymP4)
                setDymP5(DymP5)
                setDymP6(DymP6)
                setDymP7(DymP7)
                setDymP8(DymP8)
                setDymP9(DymP9)
                setDymP10(DymP10)
                setDymP11(DymP11)
                setDymP12(DymP12)
                setDymP13(DymP13)
                setDymP14(DymP14)
                setAccordion_TableA1(Accordion_TableA1)
                setAccordion_TableA2(Accordion_TableA2)
                setAccordion_TableA3(Accordion_TableA3)
                setAccordion_TableA4(Accordion_TableA4)
                setAccordion_TableA5(Accordion_TableA5)
                setAccordion_TableA6(Accordion_TableA6)
                setAccordion_TableB1(Accordion_TableB1)
                setAccordion_TableB2(Accordion_TableB2)
                setAccordion_TableB3(Accordion_TableB3)
                setAccordion_TableB4(Accordion_TableB4)
                setAccordion_TableB5(Accordion_TableB5)
                setAccordion_TableB6(Accordion_TableB6)
                setAccordion_TableB7(Accordion_TableB7)
                setAccordion_TableB8(Accordion_TableB8)
                setAccordion_TableB9(Accordion_TableB9)
                setAccordion_TableB10(Accordion_TableB10)
                setAccordion_TableB11(Accordion_TableB11)
                setAccordion_TableB12(Accordion_TableB12)
                setAccordion_TableB13(Accordion_TableB13)
                setAccordion_TableB14(Accordion_TableB14)
                setAccordion_TableB15(Accordion_TableB15)
                setAccordion_TableB16(Accordion_TableB16)
                setAccordion_TableB17(Accordion_TableB17)
                setAccordion_TableB18(Accordion_TableB18)
                setAccordion_TableB19(Accordion_TableB19)
                setAccordion_TableB20(Accordion_TableB20)
                setAccordion_TableB21(Accordion_TableB21)
                setAccordion_TableB22(Accordion_TableB22)
                setAccordion_TableB23(Accordion_TableB23)
                setAccordion_TableB24(Accordion_TableB24)
                setAccordion_TableB25(Accordion_TableB25)
                setAccordion_TableB26(Accordion_TableB26)
                setAccordion_TableB27(Accordion_TableB27)
                setAccordion_TableB28(Accordion_TableB28)
                setAccordion_TableB29(Accordion_TableB29)
                setAccordion_TableB30(Accordion_TableB30)
                setAccordion_TableB31(Accordion_TableB31)
                setAccordion_TableB32(Accordion_TableB32)
                setAccordion_TableB33(Accordion_TableB33)
                setAccordion_TableC1(Accordion_TableC1)
                setAccordion_TableC2(Accordion_TableC2)
                setAccordion_TableC3(Accordion_TableC3)
                setAccordion_TableC4(Accordion_TableC4)
                setAccordion_TableC5(Accordion_TableC5)
                setAccordion_TableD1(Accordion_TableD1)
                setAccordion_TableD2(Accordion_TableD2)
                setAccordion_TableD3(Accordion_TableD3)
                setAccordion_TableD4(Accordion_TableD4)
                setAccordion_TableD5(Accordion_TableD5)
            }}>
                {Course_Detail_Course_Name_Slide_Pop_Menu_4 ?
                    <div
                        id="Course_Detail_Page_Editor_1"
                        className="Course_Detail_Course_Name_Font_Color_1"
                    >
                        Page Editor
                    </div>
                    : null}
                <div className="Course_Detail_Course_Name_Slide_Pop_Menu_1">
                    <a href="https://click.segi.edu.my/onlineregistration/">
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
                            style={{
                                backgroundColor: "#E9184B",
                                backgroundImage: "linear-gradient(#E9184B, #B7123A)"
                            }}
                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                        >
                            <img
                                className="Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={require("../assets/images/CoursePage/ApplyNow.png")}
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p>APPLY NOW</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.google.com/">
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
                            style={{
                                backgroundColor: "#118DFF",
                                backgroundImage: "linear-gradient(#118DFF, #0061BB)"
                            }}
                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                        >
                            <img
                                className="Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={require("../assets/images/CoursePage/VisitUs.png")}
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p>VISIT US</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.google.com/">
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
                            style={{
                                backgroundColor: "#D90035",
                                backgroundImage: "linear-gradient(#D90035, #A71337)"
                            }}
                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                        >
                            <img
                                className=" Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={require("../assets/images/CoursePage/Broucher.png")}
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p>BROCHURE</p>
                            </div>
                        </div>
                    </a>
                    {Course_Detail_Course_Name_Slide_Pop_Menu_3 ?
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}

                            onClick={() => {
                                if (Course_Detail_Course_Name_Slide_Pop_Menu_4) {
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_4(false)
                                    setCourse_Detail_Content_Editable_2(false)
                                } else {
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_4(true)
                                    setCourse_Detail_Content_Editable_2(true)

                                }
                            }
                            }

                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                            id={Course_Detail_Course_Name_Slide_Pop_Menu_4 ? "Course_Detail_Course_Name_Slide_Pop_Menu_Dim_Background_3" : "Course_Detail_Course_Name_Slide_Pop_Menu_Dim_Background_2"}
                        >
                            <img
                                id="Course_Detail_Course_Name_Slide_Pop_Menu_Img_2"
                                className="Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={
                                    Course_Detail_Course_Name_Slide_Pop_Menu_4 ? require("../assets/images/CoursePage/Save.png") : require("../assets/images/CoursePage/Edit.png")
                                }
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p id="Course_Detail_Course_Name_P_2">
                                    {Course_Detail_Course_Name_Slide_Pop_Menu_4 ? "Save" : "Edit"}
                                </p>
                            </div>
                        </div>
                        : null}
                </div>
                {
                    Course_Detail_Course_Name_Slide_Pop_Menu_5 ?
                        <div
                            id="Course_Detail_Course_Name_Slide_Pop_Menu_Dim_Background_1"
                            onMouseEnter={() => {
                                setCourse_Detail_Course_Name_Slide_Pop_Menu_5(false)
                                if (!Course_Detail_Course_Name_Slide_Pop_Menu_4) {
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_3(false)
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_4(false)
                                }
                            }}
                        ></div>
                        : null
                }

                <div style={{ border: "5px solid #ffb005" }}>
                    {/* Title */}
                    <div className="Course_Detail_Course_Name_Font_Color_1 Course_Detail_Course_Name_Background_Image_1"
                        style={{
                            backgroundImage: "url(" + DymBackgroundImg1 + ")"
                        }}
                    >
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="Course_Detail_Course_Name_Div_2 my-5 p-5 z-depth-1 page1">
                            {/*Section: Content*/}
                            <section className="text-center dark-grey-text" style={{ width: "100%" }}>
                                {/* Section heading */}
                                <h2 contentEditable
                                    className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1"
                                    style={{ fontSize: "5vw" }}
                                >{DymTitle1}
                                </h2>
                                <h2 contentEditable
                                    className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1"
                                    style={{ fontSize: "5vw" }}>{DymYear1}</h2>
                                {/* Grid row */}
                                <div className="Course_Detail_Course_Name_Font_Size_1 row">
                                    {/* Grid column */}
                                    <div className="col-md-4 mb-4">
                                        <i className="fas fa-chart-area fa-3x red-text" />
                                        <h5 className="font-weight-bold my-4 " style={{ color: "#fff" }}>
                                            Course ID
                                        </h5>
                                        <p contentEditable className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                                            {DymCourseID2}
                                        </p>
                                        <p contentEditable className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                                            {DymCourseID3}
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="Course_Detail_Course_Name_VL_1 col-md-4 mb-4">
                                        <i className="fas fa-book fa-3x cyan-text" />
                                        <h5 className="font-weight-bold my-4 "
                                            style={{ color: "#fff" }}>
                                            Level Of Study
                                        </h5>
                                        <p contentEditable className="grey-text mb-md-0 Course_Detail_Content_Editable_1"
                                            style={{ color: "#fff" }}>
                                            {DymLevelOfStudy2}
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-4 mb-4">
                                        <i className="far fa-comments fa-3x orange-text" />
                                        <h5 className="font-weight-bold my-4"
                                            style={{ color: "#fff" }}>
                                            Campus
                                        </h5>
                                        <p contentEditable className="grey-text mb-0  Course_Detail_Content_Editable_1"
                                            style={{ color: "#fff" }}>
                                            {DymCampus2}
                                        </p>
                                        <p contentEditable className="grey-text mb-0  Course_Detail_Content_Editable_1"
                                            style={{ color: "#fff" }}>
                                            {DymCampus3}
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </section>
                            {/*Section: Content*/}
                        </div>
                    </div>
                    {/* Image and content section */}
                    <div className="Course_Detail_Course_Name_Div_1">
                        <div className="Course_Detail_Course_Name_Div_2 my-1 py-1 z-depth-1 page1">
                            {/*Section: Content*/}
                            <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
                                {/*Grid row*/}
                                <div contentEditable className="row Course_Detail_Content_Editable_1">
                                    {/*Grid column*/}
                                    <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                                        <img
                                            src={DymImg1}
                                            className=" img-fluid"
                                        />
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="Course_Detail_Course_Name_Font_Color_1 col-lg-5 mt-4 mb-4 mb-lg-0">
                                        <p>
                                            <b>
                                                {DymP1}
                                            </b>
                                        </p>
                                        <p>
                                            {DymP2}
                                        </p>
                                        <br />
                                        <div className="Course_Detail_Course_Name_Font_Color_2">
                                            <p>
                                                <b>{DymP3}</b>
                                            </p>
                                            <p>{DymP4}</p>
                                            <p>
                                                {DymP5}
                                            </p>
                                            <p>
                                                {DymP6}
                                            </p>
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                            </section>
                            {/*Section: Content*/}
                        </div>
                    </div>
                    {/* What We Should Know about this course */}
                    <div className="Course_Detail_Course_Name_Div_2 my-5 p-5 z-depth-1 page1">
                        {/*Section: Content*/}
                        <section contentEditable className="dark-grey-text Course_Detail_Content_Editable_1">
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <h4 className="font-weight-bold mb-3 ">
                                        {DymP7}
                                    </h4>
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP8}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP9}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP10}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP11}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/*Grid row*/}
                            <div className="row">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <br />
                                    <h4 className="font-weight-bold mb-3 ">
                                        {DymP12}
                                    </h4>
                                    <br />
                                    <p className="grey-text mb-0 ">
                                        {DymP13}
                                    </p>
                                    <br />
                                    <p className="grey-text mb-0 ">
                                        {DymP14}
                                    </p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/*Section: Content*/}
                    </div>
                    {/* Entry Requirement */}
                    <div className="Course_Detail_Course_Name_Div_2 my-5 py-5 z-depth-1 page1">
                        {/*Section: Content*/}
                        <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-lg-1 mb-4 mb-lg-0 d-flex justify-content-center">
                                    <div className="col-xl-10 col-md-11 col-10">
                                        <img className=
                                            {showSection === Accordion_LIST.Accordion_1 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => { setShowSection(Accordion_LIST.Accordion_1) }}
                                            src={require("../assets/images/CoursePage/ER.png")}
                                        />

                                        <img className=
                                            {showSection === Accordion_LIST.Accordion_2 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => { setShowSection(Accordion_LIST.Accordion_2) }}
                                            src={require("../assets/images/CoursePage/PSM.png")}
                                        />

                                        <img className={showSection === Accordion_LIST.Accordion_3 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => { setShowSection(Accordion_LIST.Accordion_3) }}
                                            src={require("../assets/images/CoursePage/FAF.png")}
                                        />

                                        <img className={showSection === Accordion_LIST.Accordion_4 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => { setShowSection(Accordion_LIST.Accordion_4) }}
                                            src={require("../assets/images/CoursePage/CO.png")}
                                        /></div></div>
                                {/*Grid column*/}

                                {showSection === Accordion_LIST.Accordion_1 ?
                                    <div contentEditable className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0 Course_Detail_Content_Editable_1">
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1"> <b>Entry Requirement</b> </p>
                                        <p>{Accordion_TableA1}</p>
                                        <p>{Accordion_TableA2}</p>
                                        <p>{Accordion_TableA3}</p>
                                        <p>{Accordion_TableA4}</p>
                                        <p>{Accordion_TableA5}</p>
                                        <p>{Accordion_TableA6}</p>
                                    </div>
                                    : null}

                                {showSection === Accordion_LIST.Accordion_2 ?
                                    <div contentEditable className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0 Course_Detail_Content_Editable_1">
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1">
                                            <b>Programme Structure and Module</b>
                                        </p>
                                        {/*Accordion wrapper*/}
                                        <div
                                            className="accordion md-accordion"
                                            id="accordionEx"
                                            role="tablist"
                                            aria-multiselectable="true"
                                        >
                                            {/* Accordion card */}
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header" role="tab" id="headingOne1">
                                                    <a
                                                        data-toggle="collapse"
                                                        data-parent="#accordionEx"
                                                        href="#collapseOne1"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne1"
                                                    >
                                                        <h5 className="mb-0">
                                                            Year 1 <i className="fas fa-angle-down rotate-icon" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                {/* Card body */}
                                                <div
                                                    id="collapseOne1"
                                                    className="collapse show"
                                                    role="tabpanel"
                                                    aria-labelledby="headingOne1"
                                                    data-parent="#accordionEx"
                                                >
                                                    <div className="card-body">
                                                        <li>{Accordion_TableB1}</li>
                                                        <li>{Accordion_TableB2}</li>
                                                        <li>{Accordion_TableB3}</li>
                                                        <li>{Accordion_TableB4}</li>
                                                        <li>{Accordion_TableB5}</li>
                                                        <li>{Accordion_TableB6}</li>
                                                        <li>{Accordion_TableB7}</li>
                                                        <li>{Accordion_TableB8}</li>
                                                        <li>{Accordion_TableB9}</li>
                                                        <li>{Accordion_TableB10}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion card */}
                                            {/* Accordion card */}
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header" role="tab" id="headingTwo2">
                                                    <a
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        data-parent="#accordionEx"
                                                        href="#collapseTwo2"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo2"
                                                    >
                                                        <h5 className="mb-0">
                                                            Year 2 <i className="fas fa-angle-down rotate-icon" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                {/* Card body */}
                                                <div
                                                    id="collapseTwo2"
                                                    className="collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingTwo2"
                                                    data-parent="#accordionEx"
                                                >
                                                    <div className="card-body">
                                                        <li>{Accordion_TableB11}</li>
                                                        <li>{Accordion_TableB12}</li>
                                                        <li>{Accordion_TableB13}</li>
                                                        <li>{Accordion_TableB14}</li>
                                                        <li>{Accordion_TableB15}</li>
                                                        <li>{Accordion_TableB16}</li>
                                                        <li>{Accordion_TableB17}</li>
                                                        <li>{Accordion_TableB18}</li>
                                                        <li>{Accordion_TableB19}</li>
                                                        <li>{Accordion_TableB20}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion card */}
                                            {/* Accordion card */}
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header" role="tab" id="headingThree3">
                                                    <a
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        data-parent="#accordionEx"
                                                        href="#collapseThree3"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree3"
                                                    >
                                                        <h5 className="mb-0">
                                                            Year 3 <i className="fas fa-angle-down rotate-icon" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                {/* Card body */}
                                                <div
                                                    id="collapseThree3"
                                                    className="collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingThree3"
                                                    data-parent="#accordionEx"
                                                >
                                                    <div className="card-body">
                                                        <li>{Accordion_TableB21}</li>
                                                        <li>{Accordion_TableB22}</li>
                                                        <li>{Accordion_TableB23}</li>
                                                        <li>{Accordion_TableB24}</li>
                                                        <li>{Accordion_TableB25}</li>
                                                        <li>{Accordion_TableB26}</li>
                                                        <li>{Accordion_TableB27}</li>
                                                        <li>{Accordion_TableB28}</li>
                                                        <li>{Accordion_TableB29}</li>
                                                        <li>{Accordion_TableB30}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion card */}
                                            <br />
                                        </div>
                                        {/* Accordion wrapper */}
                                    </div>
                                    : null}

                                {showSection === Accordion_LIST.Accordion_3 ?
                                    <div
                                        contentEditable className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0  Course_Detail_Content_Editable_1"
                                    >
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1">
                                            <b>Financial Aid / Funding</b>
                                        </p>
                                        <p>{Accordion_TableC1}</p>
                                        <p>{Accordion_TableC2}</p>
                                        <p>{Accordion_TableC3}</p>
                                        <p>{Accordion_TableC4}</p>
                                        <p>{Accordion_TableC5}</p>

                                    </div>
                                    : null}

                                {showSection === Accordion_LIST.Accordion_4 ?
                                    <div
                                        contentEditable className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0  Course_Detail_Content_Editable_1"
                                    >
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1">
                                            <b>Career Opportunities</b>
                                        </p>
                                        <p>{Accordion_TableD1}</p>
                                        <p>{Accordion_TableD2}</p>
                                        <p>{Accordion_TableD3}</p>
                                        <p>{Accordion_TableD4}</p>
                                        <p>{Accordion_TableD5}</p>

                                    </div>
                                    : null}

                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/*Section: Content*/}
                    </div >
                </div>

            </div>
        )
    } else {
        return (
            <div>
                {Course_Detail_Course_Name_Slide_Pop_Menu_4 ?
                    <div
                        id="Course_Detail_Page_Editor_1"
                        className="Course_Detail_Course_Name_Font_Color_1"
                    >
                        Page Editor
                    </div>
                    : null}
                <div className="Course_Detail_Course_Name_Slide_Pop_Menu_1">
                    <a href="https://click.segi.edu.my/onlineregistration/">
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
                            style={{
                                backgroundColor: "#E9184B",
                                backgroundImage: "linear-gradient(#E9184B, #B7123A)"
                            }}
                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                        >
                            <img
                                className=" Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={require("../assets/images/CoursePage/ApplyNow.png")}
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p>APPLY NOW</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.google.com/">
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
                            style={{
                                backgroundColor: "#118DFF",
                                backgroundImage: "linear-gradient(#118DFF, #0061BB)"
                            }}
                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                        >
                            <img
                                className=" Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={require("../assets/images/CoursePage/VisitUs.png")}
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p>VISIT US</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.google.com/">
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
                            style={{
                                backgroundColor: "#D90035",
                                backgroundImage: "linear-gradient(#D90035, #A71337)"
                            }}
                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                        >
                            <img
                                className=" Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={require("../assets/images/CoursePage/Broucher.png")}
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p>BROCHURE</p>
                            </div>
                        </div>
                    </a>
                    {Course_Detail_Course_Name_Slide_Pop_Menu_3 ?
                        <div
                            onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}

                            onClick={() => {
                                if (Course_Detail_Course_Name_Slide_Pop_Menu_4) {
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_4(false)
                                    setCourse_Detail_Content_Editable_2(false)
                                } else {
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_4(true)
                                    setCourse_Detail_Content_Editable_2(true)

                                }
                            }
                            }

                            className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
                            id={Course_Detail_Course_Name_Slide_Pop_Menu_4 ? "Course_Detail_Course_Name_Slide_Pop_Menu_Dim_Background_3" : "Course_Detail_Course_Name_Slide_Pop_Menu_Dim_Background_2"}
                        >
                            <img
                                id="Course_Detail_Course_Name_Slide_Pop_Menu_Img_2"
                                className="Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                                src={
                                    Course_Detail_Course_Name_Slide_Pop_Menu_4 ? require("../assets/images/CoursePage/Save.png") : require("../assets/images/CoursePage/Edit.png")
                                }
                            />
                            <div className="Course_Detail_Course_Name_P_1">
                                <p id="Course_Detail_Course_Name_P_2">
                                    {Course_Detail_Course_Name_Slide_Pop_Menu_4 ? "Save" : "Edit"}
                                </p>
                            </div>
                        </div>
                        : null}
                </div>
                {
                    Course_Detail_Course_Name_Slide_Pop_Menu_5 ?
                        <div
                            id="Course_Detail_Course_Name_Slide_Pop_Menu_Dim_Background_1"
                            onMouseEnter={() => {
                                setCourse_Detail_Course_Name_Slide_Pop_Menu_5(false)
                                if (!Course_Detail_Course_Name_Slide_Pop_Menu_4) {
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_3(false)
                                    setCourse_Detail_Course_Name_Slide_Pop_Menu_4(false)
                                }
                            }}
                        ></div>
                        : null
                }

                <div>
                    {/* Title */}
                    <div className="Course_Detail_Course_Name_Font_Color_1 Course_Detail_Course_Name_Background_Image_1"
                        style={{
                            backgroundImage: "url(" + DymBackgroundImg1 + ")"
                        }}
                    >
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="Course_Detail_Course_Name_Div_2 my-5 p-5 z-depth-1 page1">
                            {/*Section: Content*/}
                            <section className="text-center dark-grey-text" style={{ width: "100%" }}>
                                {/* Section heading */}
                                {(Course_Detail_Content_Editable_2) ?
                                    <h2
                                        className="font-weight-bold mb-4 pb-2 "
                                        style={{ fontSize: "5vw" }}
                                    >{DymTitle1}
                                    </h2> :
                                    <h2 className="font-weight-bold mb-4 pb-2 "
                                        style={{ fontSize: "5vw" }}
                                    >{DymTitle1}
                                    </h2>}
                                {(Course_Detail_Content_Editable_2) ?
                                    <h2 className="font-weight-bold mb-4 pb-2 " style={{ fontSize: "5vw" }}>{DymYear1}</h2>
                                    :
                                    <h2 className="font-weight-bold mb-4 pb-2 " style={{ fontSize: "5vw" }} >{DymYear1}</h2>}
                                {/* Grid row */}
                                <div className="Course_Detail_Course_Name_Font_Size_1 row">
                                    {/* Grid column */}
                                    <div className="col-md-4 mb-4">
                                        <i className="fas fa-chart-area fa-3x red-text" />
                                        <h5 className="font-weight-bold my-4 " style={{ color: "#fff" }}>
                                            Course ID
                                        </h5>
                                        <p className="grey-text mb-md-0 " style={{ color: "#fff" }}>
                                            {DymCourseID2}
                                        </p>
                                        <p className="grey-text mb-md-0 " style={{ color: "#fff" }}>
                                            {DymCourseID3}
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="Course_Detail_Course_Name_VL_1 col-md-4 mb-4">
                                        <i className="fas fa-book fa-3x cyan-text" />
                                        <h5 className="font-weight-bold my-4 " style={{ color: "#fff" }}>
                                            Level Of Study
                                        </h5>
                                        <p className="grey-text mb-md-0 " style={{ color: "#fff" }}>
                                            {DymLevelOfStudy2}
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-4 mb-4">
                                        <i className="far fa-comments fa-3x orange-text" />
                                        <h5 className="font-weight-bold my-4 " style={{ color: "#fff" }}>
                                            Campus
                                        </h5>
                                        <p className="grey-text mb-0 " style={{ color: "#fff" }}>
                                            {DymCampus2}
                                        </p>
                                        <p className="grey-text mb-0 " style={{ color: "#fff" }}>
                                            {DymCampus3}
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </section>
                            {/*Section: Content*/}
                        </div>
                    </div>
                    {/* Image and content section */}
                    <div className="Course_Detail_Course_Name_Div_1">
                        <div className="Course_Detail_Course_Name_Div_2 my-1 py-1 z-depth-1 page1">
                            {/*Section: Content*/}
                            <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                                        <img
                                            src={DymImg1}
                                            className=" img-fluid"
                                        />
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="Course_Detail_Course_Name_Font_Color_1 col-lg-5 mt-4 mb-4 mb-lg-0">
                                        <p>
                                            <b>
                                                {DymP1}
                                            </b>
                                        </p>
                                        <p>
                                            {DymP2}
                                        </p>
                                        <br />
                                        <div className="Course_Detail_Course_Name_Font_Color_2">
                                            <p>
                                                <b>{DymP3}</b>
                                            </p>
                                            <p>{DymP4}</p>
                                            <p>
                                                {DymP5}
                                            </p>
                                            <p>
                                                {DymP6}
                                            </p>
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                            </section>
                            {/*Section: Content*/}
                        </div>
                    </div>
                    {/* What We Should Know about this course */}
                    <div className="Course_Detail_Course_Name_Div_2 my-5 p-5 z-depth-1 page1">
                        {/*Section: Content*/}
                        <section className="dark-grey-text">
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <h4 className="font-weight-bold mb-3 ">
                                        {DymP7}
                                    </h4>
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP8}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP9}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP10}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/* Grid row */}
                            <div className="row mb-3">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <p className="grey-text"></p>
                                    <li>
                                        {DymP11}
                                    </li>
                                    <p />
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                            {/*Grid row*/}
                            <div className="row">
                                {/* Grid column */}
                                <div className="col-1">
                                    <i className="fas fa-share fa-lg indigo-text" />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-xl-10 col-md-11 col-10">
                                    <br />
                                    <h4 className="font-weight-bold mb-3 ">
                                        {DymP12}
                                    </h4>
                                    <br />
                                    <p className="grey-text mb-0 ">
                                        {DymP13}
                                    </p>
                                    <br />
                                    <p className="grey-text mb-0 ">
                                        {DymP14}
                                    </p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/*Section: Content*/}
                    </div>
                    {/* Entry Requirement */}
                    <div className="Course_Detail_Course_Name_Div_2 my-5 py-5 z-depth-1 page1">
                        {/*Section: Content*/}
                        <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-lg-1 mb-4 mb-lg-0 d-flex justify-content-center">
                                    <div className="col-xl-10 col-md-11 col-10">
                                        <img className=
                                            {showSection === Accordion_LIST.Accordion_1 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => {
                                                setShowSection(Accordion_LIST.Accordion_1)
                                            }}
                                            src={require("../assets/images/CoursePage/ER.png")}
                                        />

                                        <img className=
                                            {showSection === Accordion_LIST.Accordion_2 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => {
                                                setShowSection(Accordion_LIST.Accordion_2)
                                            }}
                                            src={require("../assets/images/CoursePage/PSM.png")}
                                        />

                                        <img className={showSection === Accordion_LIST.Accordion_3 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => {
                                                setShowSection(Accordion_LIST.Accordion_3)
                                            }}
                                            src={require("../assets/images/CoursePage/FAF.png")}
                                        />

                                        <img className={showSection === Accordion_LIST.Accordion_4 ? "Course_Detail_Entry_Requirement_Img_1" : "Course_Detail_Entry_Requirement_Img_2"}
                                            onClick={() => {
                                                setShowSection(Accordion_LIST.Accordion_4)
                                            }}
                                            src={require("../assets/images/CoursePage/CO.png")}
                                        /></div></div>
                                {/*Grid column*/}

                                {showSection === Accordion_LIST.Accordion_1 ?
                                    <div className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0">
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1"> <b>Entry Requirement</b> </p>
                                        <p>{Accordion_TableA1}</p>
                                        <p>{Accordion_TableA2}</p>
                                        <p>{Accordion_TableA3}</p>
                                        <p>{Accordion_TableA4}</p>
                                        <p>{Accordion_TableA5}</p>
                                        <p>{Accordion_TableA6}</p>
                                    </div>
                                    : null}

                                {showSection === Accordion_LIST.Accordion_2 ?
                                    <div className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0"
                                    >
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1">
                                            <b>Programme Structure and Module</b>
                                        </p>
                                        {/*Accordion wrapper*/}
                                        <div
                                            className="accordion md-accordion"
                                            id="accordionEx"
                                            role="tablist"
                                            aria-multiselectable="true"
                                        >
                                            {/* Accordion card */}
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header" role="tab" id="headingOne1">
                                                    <a
                                                        data-toggle="collapse"
                                                        data-parent="#accordionEx"
                                                        href="#collapseOne1"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne1"
                                                    >
                                                        <h5 className="mb-0">
                                                            Year 1 <i className="fas fa-angle-down rotate-icon" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                {/* Card body */}
                                                <div
                                                    id="collapseOne1"
                                                    className="collapse show"
                                                    role="tabpanel"
                                                    aria-labelledby="headingOne1"
                                                    data-parent="#accordionEx"
                                                >
                                                    <div className="card-body">
                                                        <li>{Accordion_TableB1}</li>
                                                        <li>{Accordion_TableB2}</li>
                                                        <li>{Accordion_TableB3}</li>
                                                        <li>{Accordion_TableB4}</li>
                                                        <li>{Accordion_TableB5}</li>
                                                        <li>{Accordion_TableB6}</li>
                                                        <li>{Accordion_TableB7}</li>
                                                        <li>{Accordion_TableB8}</li>
                                                        <li>{Accordion_TableB9}</li>
                                                        <li>{Accordion_TableB10}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion card */}
                                            {/* Accordion card */}
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header" role="tab" id="headingTwo2">
                                                    <a
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        data-parent="#accordionEx"
                                                        href="#collapseTwo2"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo2"
                                                    >
                                                        <h5 className="mb-0">
                                                            Year 2 <i className="fas fa-angle-down rotate-icon" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                {/* Card body */}
                                                <div
                                                    id="collapseTwo2"
                                                    className="collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingTwo2"
                                                    data-parent="#accordionEx"
                                                >
                                                    <div className="card-body">
                                                        <li>{Accordion_TableB11}</li>
                                                        <li>{Accordion_TableB12}</li>
                                                        <li>{Accordion_TableB13}</li>
                                                        <li>{Accordion_TableB14}</li>
                                                        <li>{Accordion_TableB15}</li>
                                                        <li>{Accordion_TableB16}</li>
                                                        <li>{Accordion_TableB17}</li>
                                                        <li>{Accordion_TableB18}</li>
                                                        <li>{Accordion_TableB19}</li>
                                                        <li>{Accordion_TableB20}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion card */}
                                            {/* Accordion card */}
                                            <div className="card">
                                                {/* Card header */}
                                                <div className="card-header" role="tab" id="headingThree3">
                                                    <a
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        data-parent="#accordionEx"
                                                        href="#collapseThree3"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree3"
                                                    >
                                                        <h5 className="mb-0">
                                                            Year 3 <i className="fas fa-angle-down rotate-icon" />
                                                        </h5>
                                                    </a>
                                                </div>
                                                {/* Card body */}
                                                <div
                                                    id="collapseThree3"
                                                    className="collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingThree3"
                                                    data-parent="#accordionEx"
                                                >
                                                    <div className="card-body">
                                                        <li>{Accordion_TableB21}</li>
                                                        <li>{Accordion_TableB22}</li>
                                                        <li>{Accordion_TableB23}</li>
                                                        <li>{Accordion_TableB24}</li>
                                                        <li>{Accordion_TableB25}</li>
                                                        <li>{Accordion_TableB26}</li>
                                                        <li>{Accordion_TableB27}</li>
                                                        <li>{Accordion_TableB28}</li>
                                                        <li>{Accordion_TableB29}</li>
                                                        <li>{Accordion_TableB30}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion card */}
                                            <br />
                                        </div>
                                        {/* Accordion wrapper */}
                                    </div>
                                    : null}

                                {showSection === Accordion_LIST.Accordion_3 ?
                                    <div
                                        className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0 "
                                    >
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1">
                                            <b>Financial Aid / Funding</b>
                                        </p>
                                        <p>{Accordion_TableC1}</p>
                                        <p>{Accordion_TableC2}</p>
                                        <p>{Accordion_TableC3}</p>
                                        <p>{Accordion_TableC4}</p>
                                        <p>{Accordion_TableC5}</p>

                                    </div>
                                    : null}

                                {showSection === Accordion_LIST.Accordion_4 ?
                                    <div
                                        className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0 "
                                    >
                                        <br />
                                        <p className=" Course_Detail_Entry_Requirement_P_1">
                                            <b>Career Opportunities</b>
                                        </p>
                                        <p>{Accordion_TableD1}</p>
                                        <p>{Accordion_TableD2}</p>
                                        <p>{Accordion_TableD3}</p>
                                        <p>{Accordion_TableD4}</p>
                                        <p>{Accordion_TableD5}</p>

                                    </div>
                                    : null}

                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </section>
                        {/*Section: Content*/}
                    </div >
                </div>

            </div>
        )
    }
}

export default CourseDetail;