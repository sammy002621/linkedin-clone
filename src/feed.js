import React ,{useEffect, useState} from 'react'
import './feed.css'
import { db } from './firebase'
import InputOption from './inputoption'
import Create from '@mui/icons-material/Create'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './posts'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Flipmove from 'react-flip-move'


function Feed() {
    const user=useSelector(selectUser)
    const [input,setInput]=useState(' ')

const [posts,setPost]=useState([])
useEffect(()=>{
db.collection("posts").onSnapshot((snapshot)=>{
    setPost(
        snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        }))
    )
})


},[])

const sendPost=(e)=>{
    e.preventDefault()
    db.collection("posts").add({
        name:user.displayName,
        description:user.email,
        message:input,
        photoUrl:user.photoUrl,
        
    })
    setInput("")
}


  return (
    <div className='feed'>
      <div className="feed_inputcontainer">
        <div className="feed__input">
            <Create/>
            <form action="">
                <input value={input}   onChange ={e=>setInput(e.target.value)}type="text" />
               <button  onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed_inputOptions">
            <InputOption Icon={InsertPhotoIcon} color='#70F9B5' title={'photo'}/>
            <InputOption Icon={VideoLibraryIcon} color='#e7a33a' title={'Video'}/>
            <InputOption Icon={EventIcon} color='#C0C3CB' title={'Event'}/>
            <InputOption Icon={NewspaperIcon} color='#7F513E' title={'WriteArticle'}/>
        </div>
      </div>
      <Flipmove>{posts.map(({id ,data:{name,description,message,photoUrl}})=>(
    <Post
    key={id}
    name={name}
    description={description}
    message={message}
    photoUrl={photoUrl}
    
    
    
    />
))}</Flipmove>




    </div>
  )
}

export default Feed
