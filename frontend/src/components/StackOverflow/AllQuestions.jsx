import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReplyIcon from '@mui/icons-material/Reply';
import 'react-quill/dist/quill.bubble.css';
// import {HTMLReactParser} from 'html-react-parser'
import parse from 'html-react-parser';
import Welcome from '../Welcome';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import axios from 'axios'
function AllQuestions({ question }) {

    // const user = useSelector(selectUser);
    // const [answer, setAnswer] = useState("");
    // const [questionData, setQuestionData] = useState();


    //const id = question?._id;
    //console.log(id)
    function truncate(str, n) {
        return str?.lenght > n ? str.substr(0, n - 1) + "..." : str
    }
    console.log(question?.tags[0])
    let tags = JSON.parse(question?.tags[0])


    // const handleQuill = (value) => {
    //     setAnswer(value);
    // };

    // useEffect(() => {
    //     async function getFunctionDetails() {
    //         await axios
    //             .get(`/api/question/${id}`)
    //             .then((res) => setQuestionData(res.data[0]))
    //             .catch((err) => console.log(err));
    //     }
    //     getFunctionDetails();
    // }, [id]);

    // async function getUpdatedAnswer() {
    //     await axios
    //         .get(`/api/question/${id}`)
    //         .then((res) => setQuestionData(res.data[0]))
    //         .catch((err) => console.log(err));
    // }

    // const handleSubmit = async () => {
    //     const body = {
    //         question_id:id ,
    //         answer: answer,
    //         user: user,
    //     };
    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };

    //     await axios
    //         .post("/api/answer", body, config)
    //         .then(() => {
    //             alert("Answer added successfully");
    //             setAnswer("");
    //             getUpdatedAnswer();
    //         })
    //         .catch((err) => console.log(err));
    // };

    // const tags=[];
    return (


        <>
            <div className="all_questions">

                {/* <p>{id}</p> */}
                <div className="all_questions_container">
                    <div className="qns-top">
                        <Link style={{ textDecoration: 'none' }} to={`/mainqns?q=${question?._id}`}> <h2 className='qns'>{question?.title}</h2></Link>

                        <div className="qns_body">{parse(truncate(question?.body, 200))}</div>
                    </div>
                    <p className='tag_head'>Tags</p>
                    {
                        tags.map((_tag) => (
                            <>
                                <div className="tags">
                                    <span className='qns_tags'>{_tag}</span>
                                </div>
                            </>
                        )
                        )
                    }

                    <div className="qns-buttom">
                        <div className="qns-left">
                            <p>0</p> <span>Votes</span>
                            <p>{question?.answerDetails?.length}</p><span>Answers</span>
                           <p className='reply_icon'> <ReplyIcon/><span>Reply</span></p>
                        </div>
                        <div className="qns-right">
                            <div className="avatar">
                                <Avatar src={question?.user?.photo} />
                            </div>
                            <small className='timespan'>{new Date(question?.created_at).toLocaleString()}</small>
                            <div className="name">



                                <p> {question?.user?.displayname ? question?.user?.displayname : String(question?.user?.email).split('@')[0]}</p>
                                {/* <Link></Link> */}
                                {/* <Welcome prop={question?.id}/> */}
                            </div>
                        </div>
                    </div>




                    {/* {question?.answersDetails?.length}

                    <p>{questionData?.title}</p> */}
                    {/* <div className="all_answers">
                        <div className="all_ans_container">
                            <div className="quill_container">
                                <h1>Your Answers</h1>
                                <ReactQuill
                                    value={answer}
                                    //onChange={handleQuill}
                                    className='react_quill' theme="snow" style={{
                                        height: "140px"
                                    }}></ReactQuill>
                            </div>


                        </div>
                        <div >
                            <button
                                type="submit"
                            // onClick={handleSubmit}
                            >ADD</button>
                            <Button className="quill_btn" >ADD</Button>

                        </div>
                    </div> */}


                </div>
            </div>

        </>
    )
}
export default AllQuestions;