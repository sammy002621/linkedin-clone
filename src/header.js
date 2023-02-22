import React from 'react'
import './header.css'
import HeaderOptions  from './headeroptions'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 import Search from '@mui/icons-material/Search';
 import HomeIcon from '@mui/icons-material/Home';
 import GroupIcon from '@mui/icons-material/Group';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import MessageIcon from '@mui/icons-material/Message';
 import WorkIcon from '@mui/icons-material/Work';
 import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {

  const dispatch=useDispatch()
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
            <div className="header_left"> 
<img src="../linkedin.png" alt="The text for the linked in logo" />


      <div className="header_search">
<Search/>

        <input type="text"  placeholder='Search...'/>
      </div>
      </div>
      <div className="header_right">
<HeaderOptions  Icon={HomeIcon} title="home"/>
<HeaderOptions Icon={GroupIcon} title="My network"/>
<HeaderOptions Icon={WorkIcon} title="Jobs"/>
<HeaderOptions Icon={MessageIcon } title="Messages"/>
<HeaderOptions Icon={NotificationsNoneIcon} title="Notifications"/>
<HeaderOptions  avatar={true}onClick={logoutOfApp}title="me"/>
      </div>
    </div>
  )
}

export default Header
