import React from 'react'
import { Navigate } from 'react-router-dom'
import Contact from './Contact'

const Check = ({handler, data, nomor, jam, tanggal, hari}) => {
    if(window.localStorage.getItem('token')) {
        return <Contact handler={handler} data={data} nomor={nomor} jam={jam} tanggal={tanggal} hari={hari}/>
    } else {
        return <Navigate to='/login'/>
    }
}

export default Check