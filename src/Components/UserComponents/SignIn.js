import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'reactstrap';


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const headers = {
    'Content-Type': 'application/json',
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8000/api/signin', {
          email: email,
          password: password
      }, {
          headers: headers
      })
      .then(res => {
          localStorage.setItem('token', res.data.token)
          navigate('./home')
        })
      setEmail('')
      setPassword('')
  }

  const handleEmailChange = (e) => {
      e.preventDefault()
      setEmail(e.target.value)

  }

  const handlePasswordChange = (e) => {
      e.preventDefault()
      setPassword(e.target.value)
  }

  return (
      <div className='signin'>
          <h3>Welcome! Please sign in to access your podcasts.</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input type='text' placeholder='Email Address' value={email} onChange={handleEmailChange}></input>{' '}
              <input type='text' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
              <input type='submit' value='Sign In'></input>
              <h6 className='unauthorized'> Don't have an account? <a href='/signup'>Sign Up</a></h6>
          </form>
      </div>
  )
}


export default SignIn