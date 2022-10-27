import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import comments from './Comments/Comments'

function Navbar() {
  return (
    <div >
        <ul className='navbar'>
        <li className='navbar-item'><a href='#'>new</a></li>
        <Router>
          <Routes path='./Comments/Comments' element={<Comments />} />
        </Router>

        <li className='navbar-item'><a href='#'>comments</a></li>
        <li className='navbar-item'><a href='#'>jobs</a></li>
        <li className='navbar-item'><a href='#'>submit</a></li>
        </ul>



    </div>
  )
}

export default Navbar