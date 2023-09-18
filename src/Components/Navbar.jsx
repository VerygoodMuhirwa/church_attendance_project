import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate()
  const handleLogout = async () => {
    localStorage.removeItem("token")
    navigate("/");
}

  return (
    <div className='navbar-container'>
      <Link to="/users">Home</Link>
          <Link to="/attendance">Attendance</Link>
      <Link to="/report">Report</Link>
      <Link to="/help">Help</Link>
<a href="" onClick={handleLogout}> Logout</a>
    </div>
  )
}

export default Navbar
