import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import './css/Standard.css'
import './css/CourseDetail.css'

const NewCourse = () => {
  const [DymBackgroundImg1, setDymBackgroundImg1] = useState(require('../assets/images/CoursePage/Black.png')),
    [DymTitle1, setDymTitle1] = useState('-'),
    [DymYear1, setDymYear1] = useState('-'),
    [DymCourseID1, setDymCourseID1] = useState('-'),
    [DymCourseID2, setDymCourseID2] = useState('-'),
    [DymCourseID3, setDymCourseID3] = useState('-'),
    [DymLevelOfStudy1, setDymLevelOfStudy1] = useState('-'),
    [DymLevelOfStudy2, setDymLevelOfStudy2] = useState('-'),
    [DymCampus1, setDymCampus1] = useState('-'),
    [DymCampus2, setDymCampus2] = useState('-'),
    [DymCampus3, setDymCampus3] = useState('-'),
    [DymImg1, setDymImg1] = useState(require('../assets/images/CoursePage/Black.png')),
    [DymP1, setDymP1] = useState('-'),
    [DymP2, setDymP2] = useState('-'),
    [DymP3, setDymP3] = useState('-'),
    [DymP4, setDymP4] = useState('-'),
    [DymP5, setDymP5] = useState('-'),
    [DymP6, setDymP6] = useState('-'),
    [DymP7, setDymP7] = useState('-'),
    [DymP8, setDymP8] = useState('-'),
    [DymP9, setDymP9] = useState('-'),
    [DymP10, setDymP10] = useState('-'),
    [DymP11, setDymP11] = useState('-'),
    [DymP12, setDymP12] = useState('-'),
    [DymP13, setDymP13] = useState('-'),
    [DymP14, setDymP14] = useState('-'),

    Accordion_LIST = { Accordion_1: 'Accordion_1', Accordion_2: 'Accordion_2', Accordion_3: 'Accordion_3', Accordion_4: 'Accordion_4' }, [showSection, setShowSection] = useState(Accordion_LIST.Accordion_1),

    [Accordion_TableA1, setAccordion_TableA1] = useState('-'),
    [Accordion_TableA2, setAccordion_TableA2] = useState('-'),
    [Accordion_TableA3, setAccordion_TableA3] = useState('-'),
    [Accordion_TableA4, setAccordion_TableA4] = useState('-'),
    [Accordion_TableA5, setAccordion_TableA5] = useState('-'),
    [Accordion_TableA6, setAccordion_TableA6] = useState('-'),

    [Accordion_TableB1, setAccordion_TableB1] = useState(''),
    [Accordion_TableB2, setAccordion_TableB2] = useState(''),
    [Accordion_TableB3, setAccordion_TableB3] = useState(''),
    [Accordion_TableB4, setAccordion_TableB4] = useState(''),
    [Accordion_TableB5, setAccordion_TableB5] = useState(''),
    [Accordion_TableB6, setAccordion_TableB6] = useState(''),
    [Accordion_TableB7, setAccordion_TableB7] = useState(''),
    [Accordion_TableB8, setAccordion_TableB8] = useState(''),
    [Accordion_TableB9, setAccordion_TableB9] = useState(''),
    [Accordion_TableB10, setAccordion_TableB10] = useState(''),

    [Accordion_TableB11, setAccordion_TableB11] = useState(''),
    [Accordion_TableB12, setAccordion_TableB12] = useState(''),
    [Accordion_TableB13, setAccordion_TableB13] = useState(''),
    [Accordion_TableB14, setAccordion_TableB14] = useState(''),
    [Accordion_TableB15, setAccordion_TableB15] = useState(''),
    [Accordion_TableB16, setAccordion_TableB16] = useState(''),
    [Accordion_TableB17, setAccordion_TableB17] = useState(''),
    [Accordion_TableB18, setAccordion_TableB18] = useState(''),
    [Accordion_TableB19, setAccordion_TableB19] = useState(''),
    [Accordion_TableB20, setAccordion_TableB20] = useState(''),

    [Accordion_TableB21, setAccordion_TableB21] = useState(''),
    [Accordion_TableB22, setAccordion_TableB22] = useState(''),
    [Accordion_TableB23, setAccordion_TableB23] = useState(''),
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

    [Accordion_TableC1, setAccordion_TableC1] = useState('-'),
    [Accordion_TableC2, setAccordion_TableC2] = useState('-'),
    [Accordion_TableC3, setAccordion_TableC3] = useState('-'),
    [Accordion_TableC4, setAccordion_TableC4] = useState('-'),
    [Accordion_TableC5, setAccordion_TableC5] = useState('-'),

    [Accordion_TableD1, setAccordion_TableD1] = useState('-'),
    [Accordion_TableD2, setAccordion_TableD2] = useState('-'),
    [Accordion_TableD3, setAccordion_TableD3] = useState('-'),
    [Accordion_TableD4, setAccordion_TableD4] = useState('-'),
    [Accordion_TableD5, setAccordion_TableD5] = useState('-')

  const [Course_Detail_Course_Name_Slide_Pop_Menu_3, setCourse_Detail_Course_Name_Slide_Pop_Menu_3] = useState(true)
  const [Course_Detail_Course_Name_Slide_Pop_Menu_4, setCourse_Detail_Course_Name_Slide_Pop_Menu_4] = useState(true)
  const [Course_Detail_Course_Name_Slide_Pop_Menu_5, setCourse_Detail_Course_Name_Slide_Pop_Menu_5] = useState(true)
  const [Course_Detail_Content_Editable_2, setCourse_Detail_Content_Editable_2] = useState(true)
  if (Course_Detail_Content_Editable_2) {
    return (
      <div>
        {Course_Detail_Course_Name_Slide_Pop_Menu_4 ?
          <div
            id="Course_Detail_Page_Editor_2"
            className="Course_Detail_Course_Name_Font_Color_1"
          >
            New Page
          </div>
          : null}
        <div className="Course_Detail_Course_Name_Slide_Pop_Menu_1">
          <a href="https://www.google.com/">
            <div
              onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
              style={{
                backgroundColor: "#E9184B",
                backgroundImage: "linear-gradient(#E9184B, #B7123A)"
              }}
              className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
            >
              <img
                className="Course_Detail_Content_Editable_1 Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                src={require("../assets/images/CoursePage/ApplyNow.png")}
              />
              <div className="Course_Detail_Course_Name_P_1">
                <p className="Course_Detail_Content_Editable_1">APPLY NOW</p>
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
                className="Course_Detail_Content_Editable_1 Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                src={require("../assets/images/CoursePage/VisitUs.png")}
              />
              <div className="Course_Detail_Course_Name_P_1">
                <p className="Course_Detail_Content_Editable_1">VISIT US</p>
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
                className="Course_Detail_Content_Editable_1 Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                src={require("../assets/images/CoursePage/Broucher.png")}
              />
              <div className="Course_Detail_Course_Name_P_1">
                <p className="Course_Detail_Content_Editable_1">BROCHURE</p>
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

        <div contentEditable
          onChange={() => {
            /* Here to save the edited content */
            setDymBackgroundImg1(DymBackgroundImg1)
            setDymTitle1(DymTitle1)
            setDymYear1(DymYear1)
            setDymCourseID1(DymCourseID1)
            setDymCourseID2(DymCourseID2)
            setDymCourseID3(DymCourseID3)
            setDymLevelOfStudy1(DymLevelOfStudy1)
            setDymLevelOfStudy2(DymLevelOfStudy2)
            setDymCampus1(DymCampus1)
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
          }}
        >
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
                    className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1"
                    style={{ fontSize: "5vw" }}
                  >{DymTitle1}
                  </h2> :
                  <h2 className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1"
                    style={{ fontSize: "5vw" }}
                  >{DymTitle1}
                  </h2>}
                {(Course_Detail_Content_Editable_2) ?
                  <h2 className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1" style={{ fontSize: "5vw" }}>{DymYear1}</h2>
                  :
                  <h2 className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1" style={{ fontSize: "5vw" }} >{DymYear1}</h2>}
                {/* Grid row */}
                <div className="Course_Detail_Course_Name_Font_Size_1 row">
                  {/* Grid column */}
                  <div className="col-md-4 mb-4">
                    <i className="fas fa-chart-area fa-3x red-text" />
                    <h5 className="font-weight-bold my-4 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCourseID1}
                    </h5>
                    <p className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCourseID2}
                    </p>
                    <p className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCourseID3}
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="Course_Detail_Course_Name_VL_1 col-md-4 mb-4">
                    <i className="fas fa-book fa-3x cyan-text" />
                    <h5 className="font-weight-bold my-4 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymLevelOfStudy1}
                    </h5>
                    <p className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymLevelOfStudy2}
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 mb-4">
                    <i className="far fa-comments fa-3x orange-text" />
                    <h5 className="font-weight-bold my-4 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCampus1}
                    </h5>
                    <p className="grey-text mb-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCampus2}
                    </p>
                    <p className="grey-text mb-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
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
                      className="Course_Detail_Content_Editable_1 img-fluid"
                    />
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="Course_Detail_Course_Name_Font_Color_1 col-lg-5 mt-4 mb-4 mb-lg-0">
                    <p className="Course_Detail_Content_Editable_1">
                      <b>
                        {DymP1}
                      </b>
                    </p>
                    <p className="Course_Detail_Content_Editable_1">
                      {DymP2}
                    </p>
                    <br />
                    <div className="Course_Detail_Course_Name_Font_Color_2">
                      <p className="Course_Detail_Content_Editable_1">
                        <b>{DymP3}</b>
                      </p>
                      <p className="Course_Detail_Content_Editable_1">{DymP4}</p>
                      <p className="Course_Detail_Content_Editable_1">
                        {DymP5}
                      </p>
                      <p className="Course_Detail_Content_Editable_1">
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
                  <h4 className="font-weight-bold mb-3 Course_Detail_Content_Editable_1">
                    {DymP7}
                  </h4>
                  <p className="grey-text"></p>
                  <li className="Course_Detail_Content_Editable_1">
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
                  <li className="Course_Detail_Content_Editable_1">
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
                  <li className="Course_Detail_Content_Editable_1">
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
                  <li className="Course_Detail_Content_Editable_1">
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
                  <h4 className="font-weight-bold mb-3 Course_Detail_Content_Editable_1">
                    {DymP12}
                  </h4>
                  <br />
                  <p className="grey-text mb-0 Course_Detail_Content_Editable_1">
                    {DymP13}
                  </p>
                  <br />
                  <p className="grey-text mb-0 Course_Detail_Content_Editable_1">
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
                  <div className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0">
                    <br />
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1"> <b>Entry Requirement</b> </p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA1}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA2}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA3}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA4}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA5}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA6}</p>
                  </div>
                  : null}

                {showSection === Accordion_LIST.Accordion_2 ?
                  <div className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0"
                  >
                    <br />
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1">
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
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB1}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB2}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB3}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB4}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB5}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB6}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB7}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB8}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB9}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB10}</li>
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
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB11}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB12}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB13}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB14}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB15}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB16}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB17}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB18}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB19}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB20}</li>
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
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB21}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB22}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB23}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB24}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB25}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB26}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB27}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB28}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB29}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB30}</li>
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
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1">
                      <b>Financial Aid / Funding</b>
                    </p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC1}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC2}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC3}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC4}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC5}</p>

                  </div>
                  : null}

                {showSection === Accordion_LIST.Accordion_4 ?
                  <div
                    className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0 "
                  >
                    <br />
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1">
                      <b>Career Opportunities</b>
                    </p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD1}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD2}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD3}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD4}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD5}</p>

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
            id="Course_Detail_Page_Editor_2"
            className="Course_Detail_Course_Name_Font_Color_1"
          >
            Page Editor
          </div>
          : null}
        <div className="Course_Detail_Course_Name_Slide_Pop_Menu_1">
          <a href="https://www.google.com/">
            <div
              onMouseEnter={() => { setCourse_Detail_Course_Name_Slide_Pop_Menu_3(true); setCourse_Detail_Course_Name_Slide_Pop_Menu_5(true) }}
              style={{
                backgroundColor: "#E9184B",
                backgroundImage: "linear-gradient(#E9184B, #B7123A)"
              }}
              className="Course_Detail_Course_Name_Slide_Pop_Menu_2"
            >
              <img
                className="Course_Detail_Content_Editable_1 Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                src={require("../assets/images/CoursePage/ApplyNow.png")}
              />
              <div className="Course_Detail_Course_Name_P_1">
                <p className="Course_Detail_Content_Editable_1">APPLY NOW</p>
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
                className="Course_Detail_Content_Editable_1 Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                src={require("../assets/images/CoursePage/VisitUs.png")}
              />
              <div className="Course_Detail_Course_Name_P_1">
                <p className="Course_Detail_Content_Editable_1">VISIT US</p>
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
                className="Course_Detail_Content_Editable_1 Course_Detail_Course_Name_Slide_Pop_Menu_Img_1"
                src={require("../assets/images/CoursePage/Broucher.png")}
              />
              <div className="Course_Detail_Course_Name_P_1">
                <p className="Course_Detail_Content_Editable_1">BROCHURE</p>
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
                    className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1"
                    style={{ fontSize: "5vw" }}
                  >{DymTitle1}
                  </h2> :
                  <h2 className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1"
                    style={{ fontSize: "5vw" }}
                  >{DymTitle1}
                  </h2>}
                {(Course_Detail_Content_Editable_2) ?
                  <h2 className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1" style={{ fontSize: "5vw" }}>{DymYear1}</h2>
                  :
                  <h2 className="font-weight-bold mb-4 pb-2 Course_Detail_Content_Editable_1" style={{ fontSize: "5vw" }} >{DymYear1}</h2>}
                {/* Grid row */}
                <div className="Course_Detail_Course_Name_Font_Size_1 row">
                  {/* Grid column */}
                  <div className="col-md-4 mb-4">
                    <i className="fas fa-chart-area fa-3x red-text" />
                    <h5 className="font-weight-bold my-4 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCourseID1}
                    </h5>
                    <p className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCourseID2}
                    </p>
                    <p className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCourseID3}
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="Course_Detail_Course_Name_VL_1 col-md-4 mb-4">
                    <i className="fas fa-book fa-3x cyan-text" />
                    <h5 className="font-weight-bold my-4 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymLevelOfStudy1}
                    </h5>
                    <p className="grey-text mb-md-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymLevelOfStudy2}
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 mb-4">
                    <i className="far fa-comments fa-3x orange-text" />
                    <h5 className="font-weight-bold my-4 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCampus1}
                    </h5>
                    <p className="grey-text mb-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
                      {DymCampus2}
                    </p>
                    <p className="grey-text mb-0 Course_Detail_Content_Editable_1" style={{ color: "#fff" }}>
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
                      className="Course_Detail_Content_Editable_1 img-fluid"
                    />
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="Course_Detail_Course_Name_Font_Color_1 col-lg-5 mt-4 mb-4 mb-lg-0">
                    <p className="Course_Detail_Content_Editable_1">
                      <b>
                        {DymP1}
                      </b>
                    </p>
                    <p className="Course_Detail_Content_Editable_1">
                      {DymP2}
                    </p>
                    <br />
                    <div className="Course_Detail_Course_Name_Font_Color_2">
                      <p className="Course_Detail_Content_Editable_1">
                        <b>{DymP3}</b>
                      </p>
                      <p className="Course_Detail_Content_Editable_1">{DymP4}</p>
                      <p className="Course_Detail_Content_Editable_1">
                        {DymP5}
                      </p>
                      <p className="Course_Detail_Content_Editable_1">
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
                  <h4 className="font-weight-bold mb-3 Course_Detail_Content_Editable_1">
                    {DymP7}
                  </h4>
                  <p className="grey-text"></p>
                  <li className="Course_Detail_Content_Editable_1">
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
                  <li className="Course_Detail_Content_Editable_1">
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
                  <li className="Course_Detail_Content_Editable_1">
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
                  <li className="Course_Detail_Content_Editable_1">
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
                  <h4 className="font-weight-bold mb-3 Course_Detail_Content_Editable_1">
                    {DymP12}
                  </h4>
                  <br />
                  <p className="grey-text mb-0 Course_Detail_Content_Editable_1">
                    {DymP13}
                  </p>
                  <br />
                  <p className="grey-text mb-0 Course_Detail_Content_Editable_1">
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
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1"> <b>Entry Requirement</b> </p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA1}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA2}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA3}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA4}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA5}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableA6}</p>
                  </div>
                  : null}

                {showSection === Accordion_LIST.Accordion_2 ?
                  <div className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0"
                  >
                    <br />
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1">
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
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB1}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB2}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB3}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB4}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB5}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB6}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB7}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB8}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB9}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB10}</li>
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
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB11}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB12}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB13}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB14}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB15}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB16}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB17}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB18}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB19}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB20}</li>
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
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB21}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB22}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB23}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB24}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB25}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB26}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB27}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB28}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB29}</li>
                            <li className="Course_Detail_Content_Editable_1">{Accordion_TableB30}</li>
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
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1">
                      <b>Financial Aid / Funding</b>
                    </p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC1}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC2}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC3}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC4}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableC5}</p>

                  </div>
                  : null}

                {showSection === Accordion_LIST.Accordion_4 ?
                  <div
                    className="Course_Detail_Entry_Requirement_Div_1 col-lg-11 mb-4 mb-lg-0 "
                  >
                    <br />
                    <p className="Course_Detail_Content_Editable_1 Course_Detail_Entry_Requirement_P_1">
                      <b>Career Opportunities</b>
                    </p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD1}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD2}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD3}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD4}</p>
                    <p className="Course_Detail_Content_Editable_1">{Accordion_TableD5}</p>

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

export default NewCourse;