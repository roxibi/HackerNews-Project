import React from 'react'
import Comments from "../components/Comments"

function Navbar() {
  return (
    <div >
        <ul className='navbar'>
        <li className='navbar-item'><a href='#'>new</a></li>
        <li className='navbar-item'><a href='#'>comments</a></li>
        <li className='navbar-item'><a href='#'>jobs</a></li>
        <li className='navbar-item'><a href='#'>submit</a></li>
        </ul>

    </div>
  )
}

export default Navbar