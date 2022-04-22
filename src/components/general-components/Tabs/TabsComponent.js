
// CustomText.js    
import React, { useState, useEffect } from 'react'
import './Tabs.css';
import { useNavigate } from "react-router-dom";
import { BiUser, BiPhoneCall, BiShoppingBag } from "react-icons/bi";
import SeeMoreModal from '../SeeMoreModal/SeeMoreModal';

const TabsComponent = (props) => {
    useEffect(() => {
    }, []);
    const student = props.studentdetails[0]
    const achievement = props.achievementdetails[0]
    console.log(achievement)
    const tabItems = [
        {
            id: 1,
            title: "Student Testimonials",
            content: student.detailscontent,
            Name: student.detailsname,
            Job: student.detailsjob,
            image: student.detailsimage,
            textcolor: props.textcolor,
            backgroundcolor: props.bcolor
        },
        {
            id: 2,
            title: "Student Achievement",
            content: achievement.detailscontent,
            Name: achievement.detailsname,
            Job: achievement.detailsjob,
            image: achievement.detailsimage,
            textcolor: props.textcolor,
            backgroundcolor: props.bcolor
        },
    ];
    const [active, setActive] = useState(1);
    const TabItemComponent = ({
        icon = "",
        title = "",
        onItemClicked = () => console.error("You passed no action to the component"),
        isActive = false
    }) => {
        return (
            <div
                className={isActive ? "position-absolute testimonidal-title" : "position-absolute testimonidal-title--inactive"}
                onClick={onItemClicked}
            >
                <i className={icon}></i>
                <h1 id={isActive ? "testititle" : "testititle--inactive"} data-replace={(title === "Student Testimonials") ? "Testimonials" : "Achievement"} className='text-center' style={{ color: "#555555" }}>
                    <span> {title}</span>
                </h1>
            </div>
        );
    };
    return (
        <div className="wrapper flex-column" style={{ backgroundColor: "#F9F8F7" }}>
            <div className="tabs position-relative" id='tabscomp'>
                {tabItems.map(({ id, title, Name }) => (
                    (Name !== "") ?
                        <TabItemComponent
                            key={title}
                            title={title}
                            onItemClicked={() => setActive(id)}
                            isActive={active === id}
                        />
                        : null
                ))}
            </div>
            {tabItems.map(({ id, title, Name, content, Job, image, }) => {
                return (active === id && id === 1) ?

                    <div className='tab-container py-3 ml-auto mr-auto'>
                        <div id="testimonial_width" className='rounded' style={{ backgroundColor: "#F9F8F7" }}>
                            {/* <h1 className='text-center mb-5' style={{ color: "#555555" }}>{title}</h1> */}
                            <div id="testimonials-row" className='d-flex flex-row px-2 justify-content-center'>
                                <div>
                                    <p className='mr-5' style={{ color: "#afb4bb", fontSize: "1.1rem" }}>{content}</p>
                                    <div id='testimonial_more' className='pt-2'>
                                        <p className='m-0 font-weight-bold ' style={{ color: "black" }}>{Name.toLocaleUpperCase()}</p>
                                        <p className='m-0 font-weight-normal' style={{ color: "#bbc3c3" }}>{Job}</p>
                                        {
                                            props.studentdetails.length < 2 ? <></> : <p data-toggle="modal" data-target={"#openimage_" + student.Category} className='m-0 ' style={{ color: "#9ed4f1", fontWeight: 500 }}>{"See More"}</p>
                                        }
                                    </div>
                                </div>
                                <img className='rounded-circle' id="tabimage" src={image} />
                            </div>

                            <SeeMoreModal datadetails={props.studentdetails} id={"openimage_" + student.Category} />
                        </div>
                        {/* <img className="tabimage" src={image} />
                        <div className='tab-first-section'>
                            <p className='all-text student-word' style={{ color: props.textcolor }}>{content}</p>
                            <p className='all-text student-name' style={{ color: props.textcolor }}>{Name}</p>
                            <div className='tab-underline'
                                style={{
                                    borderColor: props.textcolor,
                                }}></div>
                            <p className='all-text student-job' style={{ color: props.textcolor }}>{Job}</p>
                            <div className='tab-contact-row'>
                                {
                                    props.studentdetails.length < 2 ? <></> :
                                        <div className='d-flex justify-content-end col p-0'>
                                            <button data-toggle="modal" data-target={"#openimage_" + student.Category} className='seemorebutton' >See More</button>
                                        </div>
                                }
                                <SeeMoreModal datadetails={props.studentdetails} id={"openimage_" + student.Category} />
                            </div>
                        </div> */}
                    </div>
                    :
                    (active === id && id === 2) ?
                        (achievement.detailscontent == "" ||
                            achievement.detailsname == "" ||
                            achievement.detailsjob == "" ||
                            achievement.detailsimage == "") ?
                            <></>
                            :

                            <div className='tab-container py-3 ml-auto mr-auto'>
                                <div id="testimonial_width" className='rounded' style={{ backgroundColor: "#F9F8F7" }}>
                                    {/* <h1 className='text-center mb-5' style={{ color: "#555555" }}>{title}</h1> */}
                                    <div id="testimonials-row" className='d-flex flex-row px-2'>
                                        <img className='rounded' id="tabimage2" src={image} />
                                        <div id='testimonial_more' className='px-4 d-flex flex-column justify-content-center'>
                                            <p className=' text-right ' style={{ color: "#afb4bb", fontSize: "1.1rem" }}>{content}</p>
                                            <p className='m-0 mt-4 mb-1 font-weight-bold text-right ' style={{ color: "black" }}>{Name.toLocaleUpperCase()}</p>
                                            <p className='m-0 font-weight-normal text-right ' style={{ color: "#bbc3c3" }}>{Job}</p>
                                            {
                                                props.achievementdetails.length < 2 ? <></> : <p data-toggle="modal" data-target={"#openimage_" + achievement.Category} className='m-0 text-right ' style={{ color: "#9ed4f1", fontWeight: 500 }}>{"See More"}</p>
                                            }
                                        </div>
                                    </div>

                                    <SeeMoreModal datadetails={props.achievementdetails} id={"openimage_" + achievement.Category} />
                                </div>
                            </div>
                        :
                        (active === id && id === 3) ?
                            <p>{"Third Tab"}</p>
                            :
                            <></>;
            })}
        </div >
    );
};

export default TabsComponent;
