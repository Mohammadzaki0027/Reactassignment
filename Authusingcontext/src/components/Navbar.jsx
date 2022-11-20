import React from 'react'
import Styles from './comp.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div id='Navbar'>
<Link to="/">Home</Link>
<Link to="/login">Login</Link>
<Link to="/users">Users</Link>

    </div>


  )
}

export default Navbar