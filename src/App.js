import React, { useEffect } from 'react';
import './header.css'
import {useDispatch, useSelector} from 'react-redux'
import Header from './header'
import Sidebar from './sidebar'
import './App.css'
import { auth } from './firebase';
import Feed from'./feed'
import Login  from './login';
import { Dispatch } from 'react';
import { login } from './features/userSlice';
import { logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import Widgets from './widgets';
function App() {

const user=useSelector(selectUser)
const dispatch=useDispatch()

useEffect(()=>{
auth.onAuthStateChanged((userCredential)=>{
  if(userCredential){
dispatch(login({
  email:userCredential.email,
  uid:userCredential.uid,
  displayName:userCredential.displayName,
  photoUrl:userCredential.photoURL
}))
  }else{
dispatch(logout())
  }
})

},[])
  return (
    <div className="App">
   

      <Header></Header>
      {!user ?<Login/> :(
     <div className="app_body">
     <Sidebar/>
     <Feed/>
     <Widgets/>
   </div>
      )}


    

     
    </div>
  );
}

export default App;
