
// CustomText.js    
import React, { useState, useEffect } from 'react'
import './Tabs.css';
import { useNavigate } from "react-router-dom";
import { BiUser, BiPhoneCall, BiShoppingBag } from "react-icons/bi";

const TabsComponent = (props) => {
    useEffect(() => {
        console.log(props, "inside")
    }, []);
    const tabItems = [
        {
            id: 1,
            title: "Outstanding Student",
            content: props.StudentWords,
            Name: props.StudentName,
            Job: props.StudentJob,
            image: props.Studentimage,
            navigationpath: props.navigationpath,
            textcolor: props.textcolor,
            backgroundcolor: props.bcolor
        },
        {
            id: 2,
            title: "Success Story",
            icon: "tabitem__icon fas fa-users",
            content: "step 2 content"
        },
        {
            id: 3,
            title: "Worklife",
            icon: "tabitem__icon fas fa-network-wired",
            content: "step 3 content"
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
                className={isActive ? "tabitem" : "tabitem tabitem--inactive"}
                onClick={onItemClicked}
            >
                <i className={icon}></i>
                <p className="tabitem__title" style={{ color: props.textcolor }}>{title}</p>
            </div>
        );
    };
    return (
        <div className="wrapper" style={{ backgroundColor: props.backgroundcolor }}>
            <div className="tabs">
                {tabItems.map(({ id, title }) => (
                    <TabItemComponent
                        key={title}
                        title={title}
                        onItemClicked={() => setActive(id)}
                        isActive={active === id}
                    />
                ))}
            </div>
            {tabItems.map(({ id, Name, content, Job, image, }) => {
                return (active === id && id === 1) ?
                    <div className='tab-container'>
                        <img className="tabimage" src={image} />
                        <div className='tab-first-section'>
                            <p className='all-text student-word' style={{ color: props.textcolor }}>{content}</p>
                            <p className='all-text student-name' style={{ color: props.textcolor }}>{Name}</p>
                            <div className='tab-underline'
                                style={{
                                    borderColor: props.textcolor,
                                }}></div>
                            <p className='all-text student-job' style={{ color: props.textcolor }}>{Job}</p>
                            <div className='tab-contact-row'>
                                <BiUser className='tab-usericon' size={39} />
                                <BiPhoneCall className='tab-phoneicon' size={39} />
                                <BiShoppingBag className='tab-bagicon' size={39} />
                                <p className='all-text seemore' style={{ color: props.textcolor }}>See More</p>
                            </div>
                        </div>
                    </div>
                    :
                    (active === id && id === 2) ?
                        <p>{"Second Tab"}</p>
                        :
                        (active === id && id === 3) ?
                            <p>{"Third Tab"}</p>
                            :
                            <></>;
            })}
        </div>
    );
};

export default TabsComponent;
