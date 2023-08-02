import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const n="nikhil"
  return (
    <div>
    <ul>
    <Link to="/"><li>Home</li></Link> 
    <Link to="/dashboard/nikhil"><li>Dashboard</li></Link> 
    <Link to="/about"><li>About</li></Link> 
   
    </ul>
    </div>
  )
}
export default Navbar