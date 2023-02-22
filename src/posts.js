import React,{forwardRef} from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import InputOption from './inputoption'
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const Posts= forwardRef(({name,description,message,photo},ref)=> {
    const user=useSelector(selectUser)
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photo}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpIcon} title='Like' color={'gray'}/>
            <InputOption Icon={CommentIcon } title='Comment' color={'gray'}/>
            <InputOption Icon={ShareIcon} title='Share' color={'gray'}/>
            <InputOption Icon={SendIcon} title='Send' color={'gray'}/>
        </div>

      
    </div>
  )
})

export default Posts
