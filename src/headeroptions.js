import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './headeroptions.css'
function Headeroptions({  avatar,Icon,title,onClick }) {


  const user=useSelector(selectUser)
  return (
    <div  onClick={onClick}className='headeroptions'>
     {Icon&& <Icon className ='headerOptions__icon'/>}
   {avatar&& (
    <Avatar className='headeropOptions__icon' >{user?.email[0]}</Avatar>
   )}
     <h3 className='headerOption_title'>{title}</h3>
  
    

    </div>

  )
}

export default Headeroptions
