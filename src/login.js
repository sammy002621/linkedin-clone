import React from 'react';
import './login.css';
import { useState } from 'react';
import { login } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [profilepic, setProfilepic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      dispatch(login({
        email:userCredential.user.email,
        uid:userCredential.user.uid,
        displayName:userCredential.user.displayName,
        profileUrl:userCredential.user.photoURL
      }))
    })
    .catch(error=>{
      alert(error)
    })
  };

  const register = () => {
    if (!name) {
      return alert('Your full name is required');
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        user.updateProfile({
          displayName: name,
          photoUrl: profilepic,
        })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoUrl: profilepic,
              })
            );
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='login'>
      <img src='../LI-Logo.png' alt='' />
      <form>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Fullname (required if registering)'
        />
        <input
          type='text'
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
          placeholder='Photo URL (optional)'
        />
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <input type='submit' className='submit' value='Submit' onClick={loginToApp} />
      </form>
      <p>
        Not a member?{' '}
        <span className='login_register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
