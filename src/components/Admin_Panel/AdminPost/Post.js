import React, { useState, useEffect, useRef, } from 'react'
// import { listenToData } from '../../../util/CommonFunc';
import ApiClient from '../../../util/ApiClient';
import API from '../../../constant/API';
import { userStore } from '../../../store/userStore';
import { commonStore } from '../../../store/commonStore';
import './HomeScreen.css'
// import 'firebase/storage'
import { AiOutlineLike, AiFillDislike, AiFillLike, AiOutlineSend, AiOutlineDislike } from "react-icons/ai";
import { FiCheck, } from "react-icons/fi";
import { FaSmileWink, FaUserNinja, } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import './Post.css'
import { getDataEvent } from '../../../util/commonDB';

const Post = (props) => {
    const userListDetails = userStore.useState(s => s.userListDetails[0])
    const categoryList = commonStore.useState(s => s.categoryList)
    const userID = userStore.useState(s => s.userID);
    const likeList = commonStore.useState(s => s.likeList)
    const voteList = commonStore.useState(s => s.voteList)
    const dislikeList = commonStore.useState(s => s.dislikeList)
    const commentList = commonStore.useState(s => s.commentList)
    const userList = commonStore.useState(s => s.userList)
    const postList = commonStore.useState(s => s.postList)
    const [commentText, setCommentText] = useState("");
    const [like, setlike] = useState(false);
    var disabledset = ""
    var today = new Date()
    const todaydate = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
    useEffect(() => {
        if (userID !== '') {
            // listenToData(userID);
        }
        else {
        }
    }, [userID]);

    const createComment = (PostID) => {
        if (commentText !== '') {
            var body = {
                PostID: PostID,
                UserID: userID,
                CommentText: commentText,
            };


            ApiClient.POST(API.createComment, body).then((result) => {
                console.log("nice BODY", body, result)

                var userEmail = '';

                for (var x = 0; x < postList.length; x++) {
                    if (postList[x].PostID === PostID) {
                        for (var k = 0; k < userList.length; k++) {
                            if (userList[k].UserID === postList[x].UserID) {
                                userEmail = userList[k].UserEmail
                            }
                        }
                    }
                }

                var targetBlock = {
                    send_to: userEmail,
                    type: 'comment',
                    post_author: userListDetails.UserName,
                }

                emailjs.send('service_t41roh7', 'template_b3e0izi', targetBlock, 'B7FQ2OkOz8Cyu4mvQ')

                if (userID !== '') {
                    // listenToData(userID);
                    console.log('success mount data')
                }
                else {
                    console.log('no userID')
                }
                setCommentText('');

            });
        }
    };

    const userVote = (PostID) => {
        for (var x = 0; x < voteList.length; x++) {
            if (voteList[x].UserID === userID
                && voteList[x].PostID === PostID) {

                if (voteList[x].VoteStatus === '0') {

                    var body = {
                        PostVoteID: voteList[x].PostVoteID,
                        VoteStatus: '1',
                    };

                    console.log("BODY", body)

                    ApiClient.POST(API.updateUserVote, body).then((result) => {
                        setlike(true)

                        console.log("update userLike", body)
                        if (userID !== '') {
                            getDataEvent(userID);
                            console.log('success mount data')
                        }
                        else {
                            console.log('no userID')
                        }

                    });

                }
                else {

                    var body = {
                        PostVoteID: voteList[x].PostVoteID,
                        VoteStatus: '0',
                    };

                    console.log("BODY", body)

                    ApiClient.POST(API.updateUserVote, body).then((result) => {
                        setlike(false)

                        console.log("update userLike", body)
                        console.log("update userLike", body)
                        if (userID !== '') {
                            getDataEvent(userID);
                            console.log('success mount data')
                        }
                        else {
                            console.log('no userID')
                        }

                    });

                }
            }
        }

        if (userID !== '') {
            getDataEvent(userID);
            console.log('success mount data')
        }
        else {
            console.log('no userID')
        }

    }


    const notificationalert = (item) => {
        return (toast.info(item, { theme: "colored" }))
    }

    const item = props.data
    const userdata = props.userdetails
    console.log(item, "item")
    console.log(userdata, "userdata")

    return (
        <div className="container-sm card p-0 py-4 m-auto mt-4" id="admin_panel_post" style={{ backgroundColor: '#2E3139' }} >
            <div className="card-body p-0">
                <div className="row align-items-center px-4">
                    {userdata.map((user) => (
                        <>
                            {user.UserID === item.UserID ?
                                <>
                                    <img src={user.UserImage} id="post-author-avatar" className="rounded-circle p-0" alt="Image" />
                                    <div className="col d-flex flex-column justify-content-center mx-3">
                                        <p className="card-text text-light m-0 fw-bold">{user.UserName}</p>
                                        <p className="card-text text-muted m-0 pt-1 fw-light" style={{ fontSize: '0.8rem' }}>{user.UserPosition}</p>
                                    </div>
                                </>
                                :
                                null
                            }
                        </>
                    ))};
                </div>
                <h5 className="card-title text-light py-3 mb-0 px-4">{item.PostTitle}</h5>
                {item.PostDoc !== '' ?
                    <div className='justify-content-center align-items-center d-flex mb-4 mt-1 bg-dark'>
                        <img className="w-50" src={item.PostDoc} alt="Image" />
                    </div>
                    :
                    null
                }

                <p className="card-text text-light px-4">{item.PostContent}</p>
                <div className="row px-4 align-items-center">

                    <div className="col align-items-center d-flex justify-content-end">
                        <button className="btn px-3 py-2 text-light border-0 rounded" style={{ backgroundColor: "#32519F" }} type="button" data-toggle="collapse" data-target={"#Post-Comment-section" + item.PostID} aria-expanded="false" aria-controls="Post-Comment-section" id='post-comment-section'>
                            {"0" + " Comments"}
                        </button>
                    </div>
                </div>

                {userdata.map((user, index) => (
                    <>
                        {user.UserID === item.UserID ?
                            <>
                                {
                                    <div className="text-light m-4 mb-2 d-flex flex-row align-items-center">
                                        <img src={userListDetails.UserImage} id="post-comment-avatar" className="rounded-circle p-0" alt="Image" />
                                        <div className="ms-4 col position-relative p-0">
                                            <input className="ps-3 pe-5 py-2 text-light rounded w-100" value={commentText} id="Post-Comment-input"
                                                placeholder={"Write a comment... (Maximum 150 words)"}
                                                onChange={e => { setCommentText(e.target.value); }}
                                                key={index}
                                                autoComplete='off'
                                            />
                                            <div id="comment-column" className="position-absolute top-50 translate-middle-y d-flex align-items-center">
                                                <AiOutlineSend id="iconhover" onClick={() => { createComment(item.PostID); }} size={20} color={'#FFFFFF'} />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                            :
                            null
                        }
                    </>
                ))}
                <div className="collapse " id={"Post-Comment-section" + item.PostID}>

                    {commentList.map((comment) => (
                        <>
                            {(comment.PostID === item.PostID) ?
                                <>
                                    {userdata.map((user) => (
                                        <>
                                            {user.UserID === comment.UserID ?
                                                <div className="text-light m-4 my-4 mb-0 d-flex flex-row align-items-start">
                                                    <img src={comment.Annonymous === "1" ? 'https://i1.sndcdn.com/avatars-000329967534-94o5n9-t500x500.jpg' : user.UserImage} id="post-comment-avatar" className="rounded-circle p-0" alt="Image" />
                                                    <div className="ms-4 ">
                                                        <div className="px-3 py-2 rounded " id="Post-Comment-text-input">
                                                            <p className="m-0 fw-light" style={{ color: "#C3BDBD" }}>{comment.Annonymous === "1" ? 'Random Secret Person' : user.UserName}</p>
                                                            <p className="m-0" id="Post-Comment-text-input">{comment.CommentText}</p>
                                                        </div>
                                                        <small className="">
                                                            <p className='text-muted px-3 pt-1 m-0'>{comment.CreatedAt}</p>
                                                        </small>
                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                        </>
                                    ))}
                                </>
                                :
                                null
                            }
                        </>))}
                </div>
            </div>
        </div>
    )
}

export default Post