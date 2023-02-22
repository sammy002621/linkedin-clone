import React from 'react'
import './sidebar.css'
import Avatar from '@mui/material/Avatar';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
<Avatar alt="Remy Sharp" src="../public/download.jpg" />

function Sidebar() {
    const user =useSelector(selectUser)
  
const recentItem=(topic)=>(
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
)
  return (
    <div className='sidebar'>
     <div className="sidebar__top">
        <img src="../4k-minimalist.jpg" alt="" />
    <Avatar className="sidebar_avatar" >{user.email[0]}</Avatar>
    <h2>{user.displayName}</h2>
    <h4>{user.email}</h4>
    </div>
    <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_stackNumber">2,453</p>
        </div>
        <div className="sidebar_stat">
            <p>Views on  post</p>
            <p className="sidebar_stackNumber">2,450</p>
        </div>
    </div>
    <div className="sidebar_bottom">
        <p>Recent</p>
{recentItem('software')}
{recentItem('engineer')}
{recentItem('designer')}
{recentItem('programmer')}
    </div>
     </div>
  )

}


export default Sidebar
