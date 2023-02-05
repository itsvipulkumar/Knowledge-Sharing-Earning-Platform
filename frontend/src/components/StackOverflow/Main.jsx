import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AllQuestions from './AllQuestions';


const Main = ({ questions }) => {

    return (
        <>
            <div className="main">
                <div className="main_container">
                    <div className="main_top">
                        <div className='top'>
                            <h3>Questions</h3>
                            <Link to='/question' style={{ textDecoration: 'none' }}>
                                <Button className='ask_btn' variant="outlined">ASK</Button>
                            </Link>

                            {/* <TextField className='input' inputProps={{style: {fontSize: 16}}}   InputLabelProps={{style: {fontSize: 14}}}  id="outlined-basic" label="ASK" variant="outlined" /> */}
                        </div>
                        <div className="filters">
                            <h4>{questions && questions.length} Questions</h4>
                            <div className="left">
                                <Link style={{ textDecoration: 'none' }} className='tags'>Hot</Link>
                                <Link style={{ textDecoration: 'none' }} className='tags' >Unanswered</Link>
                                <Link style={{ textDecoration: 'none' }} className='tags' >Most Repeated</Link>
                            </div>
                        </div>
                    </div>
                    <div className="all_qns">
                        {
                            questions.map((_q, index) => (
                                <>
                                    <div key={index} className="qnsone">
                                        <AllQuestions question={_q} />
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;