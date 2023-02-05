import React from 'react';
import { Link } from 'react-router-dom';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
const Sidebar = () => {
    return (
        <>
            {/* <h1>Hello Sidebar !</h1> */}
            <div className='sidebar_body'>
            <h3>Explore What you want!</h3>
            </div>
            
            <div className="sidebar">
                <div className="sidebar_container">

                    <div className="options">
                        <QuestionAnswerIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Questions</Link>
                    </div>
                    <div className="options">
                        <ExploreIcon className='sidebar_icons' />
                        <Link to="/ask" className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Explore</Link>
                    </div>
                    <div className="options">
                        <AutoAwesomeMotionIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Catagory</Link>
                    </div>
                    <div className="options">
                        <GroupIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Users</Link>
                    </div>

                </div>
                <div className="sidebar_container">

                    <div className="options">
                        <QuestionAnswerIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Questions</Link>
                    </div>
                    <div className="options">
                        <ExploreIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Explore</Link>
                    </div>
                    <div className="options">
                        <AutoAwesomeMotionIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Catagory</Link>
                    </div>
                    <div className="options">
                        <GroupIcon className='sidebar_icons' />
                        <Link className='sidebar_links' style={{ textDecoration: 'none' }} href="#"> Users</Link>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Sidebar;