import { Explore, Search } from '@mui/icons-material';
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux'
import './CSS/Header.css'
import { NavLink, Link, useHistory } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
import { selectUser } from '../../features/userSlice'
import { auth } from '../../Firebase';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Welcome from '../Welcome';
const HeaderIndex = () => {

    const user = useSelector(selectUser)
    const history = useHistory();
    const [isMobile, setmobile] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="left_head">

                    {/* <Link>Logo</Link> */}

                    <Link  className='navlink logo_site' to="/" style={{ textDecoration: 'none' }}> <DataObjectIcon sx={{fontSize:
                    16}} /> <h4>DeVerse</h4></Link>

                    <div className={isMobile ? "navs left_nav" : "navs left_nav"}
                        onClick={() => setmobile(false)}
                    >

                        {/* <div className="right_nav">
                            <ul>

                                <li className='b' ><Link className='navlink ' exact to="/explore" style={{ textDecoration: 'none' }} >Explore</Link></li>
                                <li className='b'><Link className='navlink ' exact to="/about" style={{ textDecoration: 'none' }} >About</Link></li>
                                <li className='b' ><Link className='navlink ' exact to="/ask" style={{ textDecoration: 'none' }} >ASK</Link></li>
                                <li ><Link className='navlink' exact to="/hiring" style={{ textDecoration: 'none' }}>We Are Hiring!</Link></li>

                            </ul>
                        </div> */}
                    </div>
                </div>

                <div className="right_most">
                    <li className='login'><Link className='navlink ' exact to="/auth" style={{ textDecoration: 'none' }}>Login</Link></li>
                    <li className='signup'><Link className='navlink signuplink' exact to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
                    <span onClick={() => {
                        history.push('auth')
                        auth.signOut()
                    }}>
                        <Avatar
                            className='avatar_user'
                            src={user?.photo} />

                    </span>
                </div>
                {/* <button className='mobile_view' onClick={() => setmobile(!isMobile)}>

                    {
                        isMobile ? <i className='toggle_btn fas fa-times'></i> :
                            <i className='toggle_btn fas fa-bars'></i>
                    }
                </button> */}

            </div>
            
        </>
    )
}

export default HeaderIndex