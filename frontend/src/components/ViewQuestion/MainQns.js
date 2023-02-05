import { Avatar, Button, Tooltip } from '@mui/material'
import React, { PureComponent } from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { stringAvatar } from "../../utils/Avatar";
import swal from 'sweetalert';

import { Bookmark } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
// import parse from 'html-react-parser'
import ReactHtmlParser from "react-html-parser";

const MainQns = () => {
    // const [show, setShow] = useState(false);
    const user = useSelector(selectUser);
    // const [show, setShow] = useState(false);
    const [questionData, setQuestionData] = useState();
    const [answer, setAnswer] = useState("");
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("");



    let search = window.location.search;
    const params = new URLSearchParams(search)
    const id = params.get("q")

    // console.log(id);
    const handleQuill = (value) => {
        setAnswer(value);
    };

    useEffect(() => {
        async function getQuestionDetails() {
            await axios.get(`/api/question/${id}`).then((res) => {
                setQuestionData(res.data[0])
                console.log(res.data[0])
            }).catch((err) => {
                console.log(err)
            })
        }
        getQuestionDetails();
    }, [id])

    async function getUpdatedAnswer() {
        await axios
            .get(`/api/question/${id}`)
            .then((res) => setQuestionData(res.data[0]))
            .catch((err) => console.log(err));
    }

    //console.log(questionData);
    const handleSubmit = async () => {
        const body = {
            question_id: id,
            answer: answer,
            user: user,
        };
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        await axios
            .post("/api/answer", body, config)
            .then(() => {
                swal({
                    title: "Good job!",
                    text: "Answer Added Successfully!",
                    icon: "success",
                    button: "Ok",
                });
                // alert("Answer added successfully");
                setAnswer("");
                getUpdatedAnswer();
            })
            .catch((err) => console.log(err));
    };

    const handleComment = async () => {
        if (comment !== "") {
            const body = {
                question_id: id,
                comment: comment,
                user: user,
            };
            await axios.post(`/api/comment/${id}`, body).then((res) => {
                setComment("");
                setShow(false);
                getUpdatedAnswer();

            });
        }


    };

    return (
        <>
            <div className="main_qns">
                <div className="main_qns_container">
                    <div className="all_qns_set">
                        <div className="main_qns_top">
                            <h2>{questionData?.title}</h2>
                            <p>{ReactHtmlParser(questionData?.body)}</p>
                        </div>
                        <h3>{questionData && questionData?.answerDetails.length} Answers</h3>
                        {
                            questionData?.answerDetails?.map((_q) => (
                                <>
                                    <div className="ans_continer">

                                        <div className="answers">
                                            <div className="">

                                                <div className="profile">
                                                    {/* <Avatar {...stringAvatar(_q?.user?.displayName)} /> */}
                                                    <Avatar src={_q?.user?.photo} />
                                                    {/* <Avatar src={user?.photo}/> */}
                                                    <p>
                                                        {_q?.user?.displayname
                                                            ? _q?.user?.displayname
                                                            : "Natalia lee"}
                                                    </p>
                                                    {/* <p>Vipul Kumar</p> */}
                                                    <p>Web Developer</p>
                                                    <p>{new Date(_q.created_at).toLocaleString()}</p>
                                                    {/* <p>{new Date(questionData?.created_at).toLocalString()}</p> */}
                                                </div>
                                                <div className="ans">
                                                    <p>{ReactHtmlParser(_q.answer)}</p>
                                                    {/* <p>Or if you dont want to install router dom v5 you need to use routes instead of switch beacuse in react router dom version v6 switch has been replaced with Routes. then use route with Router to render the page.</p> */}
                                                </div>
                                            </div>

                                            <div className="support">
                                                <div className="activity">
                                                    <Tooltip title="Vote" style={{ fontSize: '24px' }}>
                                                        <ArrowDropUpIcon className='icons iconsVote' />
                                                    </Tooltip>

                                                    <p>0</p>
                                                    <Tooltip title="DisVote" style={{ fontSize: '24px' }}>
                                                        <ArrowDropDownIcon className='icons iconsVote' />
                                                    </Tooltip>

                                                </div>


                                                <div className="activity">
                                                    <Tooltip title="Share" style={{ fontSize: '24px' }}>
                                                        <ShareIcon className='icons' />
                                                    </Tooltip>

                                                    {/* <p>Share</p> */}
                                                </div>
                                                <div className="activity">
                                                    <Tooltip title="Save" style={{ fontSize: '24px' }}>
                                                        <Bookmark className='icons' />
                                                    </Tooltip>
                                                </div>


                                            </div>

                                        </div>


                                        <div key={_q?._id} className="reply">
                                            <p className='icons' onClick={() => setShow(!show)} >Reply <ReplyIcon /></p>
                                            {
                                                show && (<div className='texts'>

                                                    <textarea
                                                        value={comment}
                                                        onChange={(e) => { setComment(e.target.value) }}
                                                        className='textarea' type="text" placeholder="Type here your answer" name="" id="" cols="30" rows="3"></textarea>
                                                    <div className="reply_btn">
                                                        <Button variant="outlined" >
                                                            Cancel </Button>
                                                        <Button
                                                            onClick={handleComment}
                                                            className='reply_btn' variant="outlined" endIcon={<SendIcon />}>
                                                            Add </Button>
                                                    </div>
                                                </div>)
                                            }



                                        </div>


                                    </div>
                                </>
                            ))
                        }

                    </div>
                    <div className="all_answers">
                        <div className="all_ans_container">
                            <div className="quill_container">
                                <h1>Your Answers</h1>
                                <ReactQuill
                                    value={answer}
                                    onChange={handleQuill}
                                    className='react_quill' theme="snow" style={{
                                        height: "200px"
                                    }}></ReactQuill>
                            </div>


                        </div>
                        <div >
                            <button
                                className='buttonAsk'
                                type='submit'
                                onClick={handleSubmit}
                            >ADD</button>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MainQns
