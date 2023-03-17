import React from 'react'
import { Navigate } from 'react-router-dom'
import Contact from './Contact'
import Warn from './Warn'

const Check = ({handler}) => {
    if(window.localStorage.getItem('token')) {
        return <Contact handler={handler}/>
    } else {
        return <Navigate to='/login'/>
    }
}

export default Check