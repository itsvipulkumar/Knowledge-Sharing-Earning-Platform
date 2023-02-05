import React, { PureComponent, useState } from 'react'
// import { Link } from 'react-router-dom'
import Main from './Main'
import Sidebar from './Sidebar'
import axios from 'axios'
function IndexAnswer() {
    const [question,setQuestion]=useState([])

    React.useEffect(()=>{
    async function getQuestion()
    {
        await axios.get('/api/question').then((res)=>{
            console.log(res);
            setQuestion(res.data.reverse())
           }).catch((err)=>{
            console.log(err);
           })
    }
    getQuestion()
           
    },[])
    return (
        <div className='stack_index'>
            <div className="stack_index_content">
                //<Sidebar />
                <Main questions={question}/>
                
            </div>

        </div>
    )
}

export default IndexAnswer
