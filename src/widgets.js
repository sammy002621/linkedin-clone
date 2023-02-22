import React from 'react'
import './widgets.css'
import AnnouncementIcon from '@mui/icons-material/Announcement';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Widgets() {
  const user=useSelector(selectUser)
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <AnnouncementIcon/>
      </div>
      {newsArticle( user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
      {newsArticle(user.displayName+" is back","Top news -9090 readers")}
    </div>

  )
}

export default Widgets
