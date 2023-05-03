import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Bio from './Bio'

const About = () => {
  return ( 
    <div>

    
    <div>
        jdu
        <Link to={'/About/Bio'} >Bio</Link>
        <Link to={'/About/Date'} >date</Link>

        {/* <Link to={'/Bio'}>BIo</Link> */}
    </div>
    <Outlet/>
</div>
  )
}

export default About