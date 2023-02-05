import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

const SignUp = () => {
    return (
        <>
            <div className="auth">
                <div className="auth_container singup_auth">
                    <div className="head">
                        <h3>Register YourSelf</h3>
                    </div>
                    <div className="inputs">
                        {/* <label htmlFor="">Username</label> */}
                        <input className='input' type="text" placeholder='Full Name' />
                        <input className='input' type="text" placeholder='Email' />
                        <input className='input' type="text" placeholder='Username' />
                        {/* <label htmlFor="" >Username</label> */}
                        <input className='input' type="password" placeholder='Password' />
                        <input className='input' type="password" placeholder='Confirm Password' />
                    </div>

                    <Button className='login_btn' variant="contained">Singup</Button>

                    <p>OR</p>
                    <div className="login_icons">
                        <InstagramIcon className='login_icon' />
                        <GoogleIcon className='login_icon' />
                        <p ><GitHubIcon className='login_icon' /></p>


                    </div>
                    <div className="register">
                        <p>Have an account?</p>
                        <Link className='register_link' to="/auth">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;