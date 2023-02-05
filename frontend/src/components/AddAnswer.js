import { Button, TextField } from '@mui/material';
import { TagsInput } from 'react-tag-input-component'
import React from 'react';
import ReactQuill from 'react-quill'
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router-dom'
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { selectUser } from '../../features/userSlice'
const AddAnswer = () => {

    const user = useSelector(selectUser)
    const [loading, setLoading] = useState(false)


    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const history = useHistory();

    const handleQuill = (value) => {
        setBody(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title !== "" && body !== "") {
            setLoading(true)
        
            const bodyJSON = {
                title: title,
                body: body,
                tag: JSON.stringify(tags),
                user: user
            }
            await axios.post('/api/answer', bodyJSON).then((res) => {
                alert("Answers added !")
                setLoading(false)
                history.push('/')
            }).catch((err) => {
                console.log("err->", err)
                setLoading(false)
            })
        }
    }
    return (

        <>
            <div className="outer_qns_container">

                <div className="questionsContainer">
                    <div className="qns_top">
                        <div className="head">
                            <h4>Add Question</h4>
                        </div>
                        <div className="textfield">
                            <h3>Title</h3>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className='text_input' type="text" placeholder='e.g How to import react rounter dom in react?' />
                        </div>
                        <div className="textfield">
                            <ReactQuill theme="snow" value={body} onChange={handleQuill} />
                            {/* <input type="text" placeholder='e.g How to import react rounter dom in react?' /> */}
                        </div>
                        <div className="textfield_tags">
                            <span>Add max 5 related tags.</span>
                            <div className=" textfield" >
                                <TagsInput
                                    value={tags}
                                    onChange={setTags}
                                    name="tags"
                                    placeHolder="Add tags by press enter.e.g.  JS,React" />
                                {/* <input type="text" placeholder='Add tags by press enter or comma.e.g.  JS,React' /> */}
                            </div>
                        </div>

                        {/* <TextField
                            className='textfield'
                            id="standard-textarea"
                            label="Add Question"
                            placeholder="e.g How to import react rounter dom in react"
                            multiline
                            variant="standard"
                            sx={{
                                width: 500
                            }}
                        /> */}
                    </div>
                    <div className="button">

                        <Button className='ask_btn' variant="outlined">Cancel</Button>
                        <button type='submit'
                            disabled={loading}
                            className='ask_btn_add ask_btn'
                            onClick={handleSubmit} >{loading ? 'Adding Question...' : "Add Question"}</button>
                        {/* <Button className='ask_btn_add ask_btn' variant="contained">Add Question</Button> */}

                    </div>
                </div>
            </div>

        </>
    )
}
export default AddAnswer;