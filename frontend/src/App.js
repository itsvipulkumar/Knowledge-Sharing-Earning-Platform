import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import Home from './components/Home';
import Question from './components/AddQuestion/Question';
import ViewIndex from './components/ViewQuestion/ViewIndex';
import AuthIndex from './components/Auth/AuthIndex';
import SignUp from './components/Auth/SignUp';
import { logout, selectUser, login } from './features/userSlice';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { auth } from './Firebase';
import Welcome from './components/Welcome';
import MainQns from './components/ViewQuestion/MainQns';
import HeaderIndex from './components/Header/HeaderIndex';
import About from './components/About';
import Contact from './components/Contact';
// import Header from 'd:/stackclone/frontend/src/components/Header/HeadeIndex';

// import ViewQuestion from './components/'
// import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayname: authUser.displayName,
          email: authUser.email
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => user ? (<Component {...props} />) : (<Redirect
      to={{
        pathname: '/auth',
        state: {
          from: props.location,
        }
      }}
    />)}></Route>
  );
  return (
    <>


      <div className="">

        {/* <Index /> */}
        <Router>
          <HeaderIndex />
          <Switch>
            <Route exact path='/' component={Home} ></Route>
            <PrivateRoute exact path='/question' component={Question} ></PrivateRoute>
            <PrivateRoute exact path='/mainqns' component={MainQns} ></PrivateRoute>
            <Route exact
              path={user ? '/' : '/auth'}
              component={user ? Home : AuthIndex} ></Route>
            <PrivateRoute exact path='/signup' component={SignUp} ></PrivateRoute>
            <Route exact path='/welcome' component={Welcome} ></Route>
            <Route exact path='/aboutus' component={About} ></Route>
            <Route exact path='/contactus' component={Contact} ></Route>

          </Switch>
          <Welcome/>
        </Router>
      </div>

    </>
  );
}

export default App;
