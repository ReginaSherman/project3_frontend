import axios from 'axios';
import React, { useState } from 'react';



const SignIn = ({ userToken, setUserToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   console.log(`user token: ${userToken}`)
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
      .then(res => localStorage.setItem('token', res.data.token))
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
      <div>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input type='text' value={email} onChange={handleEmailChange}></input>
              <input type='text' value={password} onChange={handlePasswordChange}></input>
              <input type='submit' value='Sign In'></input>
          </form>
      </div>
  )
}

export default SignIn