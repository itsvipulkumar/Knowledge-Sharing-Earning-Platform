import React from 'react'
import { render } from 'react-dom'
import {Route,Redirect} from 'react-router-dom'

const PrivateRoute=({children, ...rest})=>{
    return(<Route {...rest} render={()=>(children)}/>);
}
export default PrivateRoute