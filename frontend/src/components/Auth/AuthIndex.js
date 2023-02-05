import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { SingleBedOutlined } from '@mui/icons-material';
import { auth, provider } from '../../Firebase';
import Welcome from '../Welcome';

const AuthIndex = () => {

    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const history = useHistory();


    const handleSignInGoogle = () => {
        //    prompt("hello");
        signInWithPopup(auth, provider).then((res) => {
            console.log(res);
            history.push('/');
        })

    }
    const handleSignInPhone = () => {
        signInWithPhoneNumber(auth, provider).then((res) => {
            console.log(res);
            history.push('/');
        })
    }
    const handleRegsiter = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        if (email === "" || password === "" || username === "") {
            setError("required field is missing");
            //setLoading(false)
        }
        else {
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res);
                setLoading(false);
                history.push("/");
            }).catch((error) => {
                console.log(error)
                setError(error.message)
                setLoading(false);
            })
        }
    }
    const handleSignIn = (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        if (email === "" || password === "") {
            setError("required field is missing");
            setLoading(false)
        }
        else {
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res);
                setLoading(false);
                history.push('/');
            }).catch((error) => {
                console.log(error.code)
                setError(error.message)
                setLoading(false);
            })
        }
    }
    return (
        <>
            <div className="auth">
                <div className="auth_container">
                    {
                        register ? (
                            <>
                                <div className="head">
                                    <h3>Register YourSelf</h3>
                                </div>
                                <div className="inputs">
                                    {/* <label htmlFor="">Username</label> */}
                                    <input
                                        className='input'
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        type="text"
                                        placeholder='Full Name' />
                                    <input
                                        className='input'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        placeholder='Email' />
                                    <input
                                        className='input'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        placeholder='Username' />
                                    {/* <label htmlFor="" >Username</label> */}
                                    <input
                                        className='input'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder='Password' />
                                    <input className='input' type="password" placeholder='Confirm Password' />
                                </div>

                                <Button
                                    className='login_btn'
                                    onClick={handleRegsiter}
                                    variant="contained">Register</Button>

                                <p>OR</p>
                                <div className="login_icons">
                                    <InstagramIcon className='login_icon' />
                                    <p onClick={handleSignInGoogle} > <GoogleIcon className='login_icon' /></p>
                                    <p ><GitHubIcon className='login_icon' /></p>


                                </div>
                            </>
                        ) : <>
                            <div className="head">
                                <h3>Login</h3>
                            </div>
                            <div className="inputs">
                                <input
                                    className='input'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder='Email' />
                                <input
                                    className='input'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder='Enter Password' />
                            </div>

                            <Button className='login_btn' onClick={handleSignIn} variant="contained">Login</Button>

                            <p>OR</p>
                            <div className="login_icons">
                                <InstagramIcon className='login_icon' />
                                <p onClick={handleSignInGoogle} > <GoogleIcon className='login_icon' /></p>
                                <p onClick={handleSignInPhone}> <GitHubIcon className='login_icon' /> </p>
                            </div>
                        </>
                    }


                    <div className="register">
                        <p> {register ? "" : "Don't Have an account?"}</p>
                        <Link
                            onClick={() => setRegister(!register)}
                            className='register_link'>{register ? "Login" : "Register"}</Link>
                    </div>




                    <div className="erro_msg">
                        {

                            error !== "" && (<p>

                                <Alert variant="outlined" severity="error">
                                    {error}
                                </Alert>
                            </p>)


                        }
                        {/* {error?<Alert variant="outlined" severity="error">
                            This is an error alert — check it out!
                        </Alert>:""} */}
                        {/* error!=="" ? (<p>
                        {error}
                        </p>):history.push("/welcome") */}
                    </div>
                    {/* <CAlert/> */}
                </div>
            </div>
        </>
    )
}
export default AuthIndex;