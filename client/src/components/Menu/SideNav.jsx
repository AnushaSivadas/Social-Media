import React from 'react'
import './SideNav.css'
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function SideNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "logout" });
    navigate("/login");
  };

  return (
    <div className='SideNav'>
        <p className='menuname'>&nbsp;&nbsp;Menu</p>
        <ul className='listitems'>
            <li className='list'><i class="fa-sharp fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;Home</li>
            <li className='list'><i class="fa-solid fa-inbox"></i>&nbsp;&nbsp;&nbsp;Messages</li>
            <li className='list'><i class="fa-solid fa-bell"></i>&nbsp;&nbsp;&nbsp;Notifications</li>
            <li onClick={logout} className='list'><i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;&nbsp;Logout</li>
                            
        {/* <Link to={'/profile'} style={{ textDecoration: 'none', color: 'inherit' }}>   <li className='list'><i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Profile</li></Link> */}
        </ul>
    </div>
  )
}

export default SideNav