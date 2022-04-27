import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import './Dashboard.css'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { FiFilter } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiDownload } from 'react-icons/fi';
// import firebase from 'firebase/app';
// import 'firebase/storage'
import { commonStore } from '../../../store/commonStore';
import { userStore } from '../../../store/userStore';
// import listenToData from '../util/CommonFunc';
import randomColor from 'randomcolor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import saveAs from 'save-as';
import { CSVLink } from "react-csv";

var FileSaver = require('file-saver');

export const Dashboard = () => {

    const categoryList = commonStore.useState(s => s.categoryList)
    const userID = userStore.useState(s => s.userID);
    const postList = commonStore.useState(s => s.postList);
    const barChartData = commonStore.useState(s => s.barChartData)
    const contributorData = commonStore.useState(s => s.contributorData)
    const pieChartData = commonStore.useState(s => s.pieChartData)
    const zipDocument = commonStore.useState(s => s.zipDocument)
    const csvData = commonStore.useState(s => s.csvData)
    const facultyReport = commonStore.useState(s => s.facultyReport)
    const facultyReportPercent = commonStore.useState(s => s.facultyReportPercent)
    const expiredCategory = commonStore.useState(s => s.expiredCategory)

    useEffect(() => {

        if (userID !== '') {
            // listenToData(userID);
            console.log('success mount data')
        }
        else {
            console.log('no userID')
        }

    }, [userID]);

    const [data, setData] = useState(facultyReport.map(item => (
        {
            "Faculty": item.FacultyName,
            "Total_Visitor": item.VisitorCount,
        }
    )));

    const [secondData, setSecondData] = useState(contributorData.map(item => (
        {
            "Department": item.DepartmentName,
            "Contributor": Number(item.Total_Contributor),
        }
    )));

    const [percentData, setPercentData] = useState(facultyReportPercent.map(item => (
        {
            "id": item.FacultyName,
            "label": item.FacultyName,
            "value": ((item.VisitorCount / item.SUM_COUNT) * 100).toFixed(0),
            "color": randomColor(),
        }
    )));

    const [csv, setCsv] = useState(csvData.map(item => (
        {
            Department: item.Department,
            Author: item.Author,
            Title: item.Title,
            Idea: item.Idea,
            CategoryID: item.CategoryID
        }
    )));

    const [emptyData, setEmptyData] = useState([]);
    var posttitle = ""
    var posttime = ""
    var finalclose = ""
    var today = new Date()
    const todaydate = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
    postList.map((item) => (

        posttitle = item.PostTitle,
        posttime = item.CreatedAt
    ))
    var posttitle2 = ""
    var posttime2 = ""
    postList.slice().sort(function (a, b) {
        return (parseInt(a.CommentLength) + parseInt(a.PostLike) + parseInt(a.PostDislike)) > (parseInt(b.CommentLength) + parseInt(b.PostLike) + parseInt(b.PostDislike)) ? 1 : -1
    }).map((item) => (
        posttitle2 = item.PostTitle,
        posttime2 = item.CreatedAt
    ))

    var posttitle3 = ""
    var posttime3 = ""

    postList.slice().sort(function (a, b) {
        return (parseInt(b.PostLike) - parseInt(b.PostDislike)) - (parseInt(a.PostLike) - parseInt(a.PostDislike))
    }).map((item) => (
        posttitle3 = item.PostTitle,
        posttime3 = item.LatestComment
    ))

    function downloadFile() {
        FileSaver.saveAs()
        // var zip = new JSZip();
        FileSaver.saveAs("https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/document%2F219140883_2694152547397953_7560968677984608442_n.jpg?alt=media&token=98f8ca97-2ba1-4fee-9810-c10f3f991702", "image.jpg");

        // zip.generateAsync({type:"blob"}).then(function() {
        //     // see FileSaver.js
        //     saveAs("https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/document%2F219140883_2694152547397953_7560968677984608442_n.jpg?alt=media&token=98f8ca97-2ba1-4fee-9810-c10f3f991702", "example.zip");
        // });

        // FileSaver.saveAs("https://firebasestorage.googleapis.com/v0/b/comp1640-831fe.appspot.com/o/document%2F219140883_2694152547397953_7560968677984608442_n.jpg?alt=media&token=98f8ca97-2ba1-4fee-9810-c10f3f991702", "archive.zip");
    }

    /* const [urls, setUrls] = useState(zipDocument.map(item => {
           if(item.PostDoc !== null){
               return { PostDoc: item.PostDoc, CategoryID: item.CategoryID }
           }
           else{
               return ''
           }
    })); */

    const downloadZIP = (categoryID) => {

        var urls = []

        zipDocument.map(item => {
            if (item.CategoryID === categoryID) {
                if (item.PostDoc !== null) {
                    urls.push(item.PostDoc)
                }
            }
        })

        const zip = new JSZip();
        var count = 0;
        const zipFilename = "Document.zip";
        urls.forEach(async (url) => {
            const urlArr = url.split('/');
            const filename = urlArr[urlArr.length - 1];
            try {
                const file = await JSZipUtils.getBinaryContent(url)
                zip.file(filename, file, { binary: true });
                count++;
                if (count === urls.length) {
                    zip.generateAsync({ type: 'blob' })
                        .then((content) => {
                            saveAs(content, zipFilename);
                        });
                }
            } catch (err) {
                console.log(err);
            }
        });

    }
    const charttype = ["Ideas By Department", "Ideas By Department(%)", "Contributors By Department"];
    const [charttypetext, setcharttypetext] = useState('Ideas By Department');
    const [input, setInput] = useState(false);
    const tableheader = (item) => {
        return (
            <th className="col text-center d-flex justify-content-center border-0">
                <p className='m-0 text-white text-center  py-3'>{item}</p>
            </th>
        )
    }

    const notificationalert = ({ notificationtitle }) => {
        return (toast(notificationtitle))
    }

    const diuleifunction = (notificationtitle) => {
        notificationalert(notificationtitle)
    }

    const Tablecontent = ({ categoryID, category, tpost, tcomment, tview, }) => {

        const data = [];

        for (var x = 0; x < csv.length; x++) {
            if (csv[x].CategoryID === categoryID) {
                data.push({
                    Department: csv[x].Department,
                    Author: csv[x].Author,
                    Title: csv[x].Title,
                    Idea: csv[x].Idea,
                })
            }
        }

        console.log(data)

        return (
            <tr className="row m-0 my-3 align-items-center border-0" style={{ display: finalclose >= todaydate ? "none" : "flex" }}>
                <td className="col text-center text-white fw-light" id="cat-tablecontent">{category}</td>
                <td className="col text-center text-white fw-light" id="cat-tablecontent">{tpost}</td>
                <td className="col text-center text-white fw-light" id="cat-tablecontent">{tcomment}</td>
                <td className="col text-center text-white fw-light" id="cat-tablecontent">{tview}</td>
                <td className="col text-center text-white d-flex align-items-center justify-content-center" id="cat-tablecontent">
                    <CSVLink
                        data={data}
                        filename={"CategoryData.csv"}
                        className="text-light"
                        target="_blank"
                    >
                        <FiDownload size={23} className="" data-toggle="collapse"
                            onClick={() => {
                                diuleifunction({ notificationtitle: "Category " + category + " contents (.csv) had been downloaded " });
                                downloadZIP(categoryID);
                            }}
                            data-target="#subcatcollapse" />
                    </CSVLink>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnHover
                    />
                </td>
            </tr>
        )
    }

    const Contri_Details_Component = ({
        ID = "",
        Department = "",
        Total_Staff = "",
        Total_Staff_Uploaded = "",
        Total_Ideas_Thumbs_up = "",
        Last_Upload = ""
    }) => {
        return (
            <div className="Dashboard-Contribution-Column" style={{
                backgroundColor: (ID % 2 === 0 || ID === 'id') ? '#5F5F5F' : 'unset'
            }}>
                <p className="Dashboard-Contribution-Details-Text" style={{ display: 'none' }}>{ID}</p>
                <p className="Dashboard-Contribution-Details-Text">{Department}</p>
                <p className="Dashboard-Contribution-Details-Text">{Total_Staff}</p>
                <p className="Dashboard-Contribution-Details-Text">{Total_Staff_Uploaded}</p>
                <p className="Dashboard-Contribution-Details-Text">{Total_Ideas_Thumbs_up}</p>
                <p className="Dashboard-Contribution-Details-Text">{Last_Upload}</p>

            </div >
        );
    };
    const tagcomponent = ({ Title, PostTitle, DateTitle, Date }) => {
        return (
            <div id='dashbord-tag' className="col-3 d-flex p-3 Dashboard-Column rounded-3" style={{ margin: (Title === "Most View Ideas") ? "0 2rem" : "0", }}>
                <div className="m-auto px-3 py-3 d-flex flex-column justify-content-center align-items-center" style={{ maxWidth: "90%" }}>
                    <strong><p className="text-center text-light fs-5 m-0 fw-bold">{Title}</p></strong>
                    <p className="text-light  text-center  fs-6 m-0 py-4">{PostTitle}</p>
                    <small><p className="text-center text-light m-0">{DateTitle + " at: " + Date}</p></small>
                </div>
            </div>
        )
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', }}>
            <Sidebar />
            <div className="Dashboard-Container">
                <div className="Dashboard-Container-Content">
                    <div className="Dashboard-Top-Content">
                        <p>Welcome to Dashboard</p>
                    </div>
                    <p>Overview</p>
                    <p>Here is an overview of your ideas performance</p>
                    <div className="Container d-flex my-4 row" id='dashboard-tag-component'>
                        {tagcomponent({ Title: "Recent Ideas", PostTitle: posttitle, DateTitle: "Created", Date: posttime })}
                        {tagcomponent({ Title: "Most View Ideas", PostTitle: posttitle2, DateTitle: "Created", Date: posttime2 })}
                        {tagcomponent({ Title: "Most Popular Ideas", PostTitle: posttitle3, DateTitle: "Created", Date: posttime3 })}
                    </div>
                    <div className="Dashboard-Barchart mt-5 pb-5" style={{ marginBottom: "2rem" }}>
                        <div className="d-flex justify-content-end align-items-center">
                            <small> <p className='m-0 text-light pe-3'>Filter Chart</p></small>
                            <FiFilter className="link-light" data-toggle="modal" data-target="#staticBackdrop" />
                        </div>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" id='gaymodal'>
                                <div className="modal-content" id="category-create-post-modal">
                                    <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                                        <h5 className="modal-title text-center text-white" id="create-post-modal-header-title">{"Select Chart type"}</h5>
                                        <RiCloseFill className="btn-close position-absolute text-light" data-dismiss="modal" size={35} id='close-icon' />
                                    </div>
                                    <div className="modal-body row align-items-center" id="category-modal">
                                        <div className='col text-light m-0'>
                                            <p className='text-light m-0'>Select the Chart you want to change to</p>
                                            <small> <p className='text-light fw-light m-0 mt-2'> {charttypetext ? "You have selected <" + charttypetext.toUpperCase() + ">" : ""} </p></small>
                                        </div>
                                        <div className="col dropdown d-flex justify-content-center">
                                            <button className="px-2 py-2 border-0 rounded btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                                {charttypetext ? charttypetext : "Chart Type"}
                                            </button>
                                            <ul className="dropdown-menu bg-dark rounded" aria-labelledby="dropdownMenuButton1">
                                                {
                                                    charttype.map((chart) =>
                                                        <p className="" style={{ color: "white", padding: "0.5rem 1.5rem", margin: 0, }} onClick={() => setcharttypetext(chart)}>{chart}</p>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="modal-footer border-0 justify-content-end">
                                        <button type="button" className='px-4 py-1 border-0 rounded text-light' id="modal-general-button" data-dismiss="modal" onClick={() => ("hi")}>Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {

                            (charttypetext === "Ideas By Department") ?
                                <div style={{
                                    width: "100%",
                                    height: "100%"
                                }}>
                                    <p className='text-light' style={{ fontSize: 18, fontWeight: '800', width: '100%', justifyContent: 'center', display: 'flex' }}>{'Faculty\'s Visitor'}</p>
                                    <ResponsiveBar
                                        data={data}
                                        groupMode="grouped"
                                        theme={{ textColor: '#FFF' }}
                                        keys={[
                                            'Total_Visitor',
                                        ]}
                                        animate={false}
                                        colorBy='indexValue'
                                        indexBy="Faculty"
                                        margin={{ top: 20, right: 220, bottom: 20, left: 60 }}
                                        padding={0.3}
                                        //valueScale={{ type: 'linear' }}
                                        //indexScale={{ type: 'band', round: true }}
                                        defs={[
                                            {
                                                id: 'dots',
                                                type: 'patternDots',
                                                background: 'inherit',
                                                color: '#38bcb2',
                                                size: 4,
                                                padding: 1,
                                                stagger: true
                                            },
                                            {
                                                id: 'lines',
                                                type: 'patternLines',
                                                background: 'inherit',
                                                color: '#eed312',
                                                rotation: -45,
                                                lineWidth: 6,
                                                spacing: 10
                                            },
                                        ]}
                                        fill={[
                                        ]}
                                        borderColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    1.6
                                                ]
                                            ]
                                        }}
                                        axisTop={null}
                                        axisRight={null}
                                        axisLeft={{
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend: 'Total Visitor',
                                            legendPosition: 'middle',
                                            legendOffset: -40,
                                            /* tickValues: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], */
                                            tickValues: 2,
                                        }}
                                        axisBottom={null}
                                        labelSkipWidth={12}
                                        labelSkipHeight={12}
                                        labelTextColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    1.6
                                                ]
                                            ]
                                        }}
                                        role="application"
                                        ariaLabel="Nivo bar chart demo"
                                        //barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                                        legends={[
                                            {
                                                dataFrom: 'indexes',
                                                anchor: 'bottom-right',
                                                direction: 'column',
                                                justify: false,
                                                translateX: 120,
                                                translateY: 46,
                                                itemsSpacing: 2,
                                                itemWidth: 100,
                                                itemHeight: 20,
                                                itemDirection: 'left-to-right',
                                                itemOpacity: 0.85,
                                                symbolSize: 20,
                                                effects: [
                                                    {
                                                        on: 'hover',
                                                        style: {
                                                            itemOpacity: 1
                                                        }
                                                    }
                                                ]
                                            }
                                        ]}
                                    />
                                </div>
                                :
                                (charttypetext === "Contributors By Department") ?
                                    <div style={{
                                        width: "100%",
                                        height: "90%"
                                    }}>
                                        <p className='text-light' style={{ fontSize: 18, fontWeight: '800', width: '100%', justifyContent: 'center', display: 'flex' }}>{'Contributors By Department'}</p>
                                        <ResponsiveBar
                                            data={data}
                                            groupMode="grouped"
                                            theme={{ textColor: '#FFF' }}
                                            keys={[
                                                'Total_Visitor',
                                            ]}
                                            animate={false}
                                            colorBy='indexValue'
                                            indexBy="Faculty"
                                            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            valueScale={{ type: 'linear' }}
                                            indexScale={{ type: 'band', round: true }}
                                            defs={[
                                                {
                                                    id: 'dots',
                                                    type: 'patternDots',
                                                    background: 'inherit',
                                                    color: '#38bcb2',
                                                    size: 4,
                                                    padding: 1,
                                                    stagger: true
                                                },
                                                {
                                                    id: 'lines',
                                                    type: 'patternLines',
                                                    background: 'inherit',
                                                    color: '#eed312',
                                                    rotation: -45,
                                                    lineWidth: 6,
                                                    spacing: 10
                                                },
                                            ]}
                                            fill={[
                                            ]}
                                            borderColor={{
                                                from: 'color',
                                                modifiers: [
                                                    [
                                                        'darker',
                                                        1.6
                                                    ]
                                                ]
                                            }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                legend: 'Faculty',
                                                legendPosition: 'middle',
                                                legendOffset: 32,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                legend: 'Total Visitor',
                                                legendPosition: 'middle',
                                                legendOffset: -40,
                                                /* tickValues: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], */
                                                tickValues: 2,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{
                                                from: 'color',
                                                modifiers: [
                                                    [
                                                        'darker',
                                                        1.6
                                                    ]
                                                ]
                                            }}
                                            role="application"
                                            ariaLabel="Nivo bar chart demo"
                                            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                                        />
                                    </div>
                                    :
                                    (charttypetext === "Ideas By Department(%)") ?
                                        <div style={{
                                            width: "100%",
                                            height: "90%"
                                        }}>
                                            <p className='text-light' style={{ fontSize: 18, fontWeight: '800', width: '100%', justifyContent: 'center', display: 'flex' }}>{'Ideas By Department(%)'}</p>
                                            <ResponsivePie
                                                data={percentData}
                                                theme={{ textColor: '#FFF' }}
                                                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                                                innerRadius={0.5}
                                                padAngle={0.7}
                                                cornerRadius={3}
                                                activeOuterRadiusOffset={8}
                                                borderWidth={1}
                                                borderColor={{
                                                    from: 'color',
                                                    modifiers: [
                                                        [
                                                            'darker',
                                                            0.2
                                                        ]
                                                    ]
                                                }}
                                                animate={false}
                                                arcLinkLabelsSkipAngle={10}
                                                arcLinkLabelsTextColor="#FFF"
                                                arcLinkLabelsThickness={2}
                                                arcLinkLabelsColor={{ from: 'color' }}
                                                arcLabelsSkipAngle={10}
                                                arcLabelsTextColor={{
                                                    from: 'color',
                                                    modifiers: [
                                                        [
                                                            'darker',
                                                            2
                                                        ]
                                                    ]
                                                }}
                                                defs={[
                                                    {
                                                        id: 'dots',
                                                        type: 'patternDots',
                                                        background: 'inherit',
                                                        color: 'rgba(255, 255, 255, 0.3)',
                                                        size: 4,
                                                        padding: 1,
                                                        stagger: true
                                                    },
                                                    {
                                                        id: 'lines',
                                                        type: 'patternLines',
                                                        background: 'inherit',
                                                        color: 'rgba(255, 255, 255, 0.3)',
                                                        rotation: -45,
                                                        lineWidth: 6,
                                                        spacing: 10
                                                    }
                                                ]}
                                                fill={[
                                                ]}
                                                legends={[
                                                    {
                                                        anchor: 'bottom',
                                                        direction: 'row',
                                                        justify: false,
                                                        translateX: 0,
                                                        translateY: 56,
                                                        itemsSpacing: 0,
                                                        itemWidth: 150,
                                                        itemHeight: 18,
                                                        itemTextColor: '#999',
                                                        itemDirection: 'left-to-right',
                                                        itemOpacity: 1,
                                                        symbolSize: 18,
                                                        symbolShape: 'circle',
                                                        effects: [
                                                            {
                                                                on: 'hover',
                                                                style: {
                                                                    itemTextColor: '#000'
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]}
                                            />
                                        </div>
                                        : null
                        }
                    </div>
                    <div className="Dashboard-Bottom-Content mt-5 rounded">
                        <div className="Dashboard-Contribution-Text justify-content-between py-4 m-auto" style={{ width: "92%" }}>
                            <p className='col-5 m-0 fs-4 fw-bold '>Expired Category</p>

                        </div>
                        <div className='d-flex flex-row'>
                            <table className="table">
                                <thead>
                                    <tr className='row m-0' style={{ backgroundColor: "#5F5F5F", display: finalclose >= todaydate ? "none" : null }}>
                                        {tableheader("Category")}
                                        {tableheader("Total Ideas")}
                                        {tableheader("Total Comment")}
                                        {tableheader("Total View")}
                                        {tableheader("")}
                                    </tr>
                                </thead>
                                <tbody className='border-0'>
                                    {expiredCategory.map((item) => {

                                        finalclose = item.FinalClosure
                                        var count = parseInt(item.Total_Comment);
                                        var count1 = count += parseInt(item.Total_Like);
                                        var total_view = count1 += parseInt(item.Total_Dislike);
                                        return (
                                            Tablecontent({
                                                categoryID: item.CategoryID,
                                                category: item.Category_Name,
                                                tpost: item.Total_Ideas,
                                                tcomment: item.Total_Comment,
                                                tview: total_view,

                                            })
                                        )
                                    })}
                                </tbody>
                            </table>
                            < div className='Cat-column' style={{
                                backgroundColor: '#5F5F5F'
                            }}>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Dashboard