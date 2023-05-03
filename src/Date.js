import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

const Date = () => {
  return (
    <div> 
      
        <ul>
           <li>hhhh</li>
           <Link to={'/About/Date/mm'}>mm</Link>
            <li><Link to={'/About/Date/yy'}>fdfiu</Link></li>
        </ul>
       <Outlet/>
    </div>
  )
}
export default Date

