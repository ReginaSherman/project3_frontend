import axios from 'axios';
import React from 'react';
import { useState } from 'react';



const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8000/signup', {
          email: email,
          password: password
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
      <div>
          <form onSubmit={handleSubmit}>
              <input type='text' value={email} onChange={handleEmailChange}></input>
              <input type='text' value={password} onChange={handlePasswordChange}></input>
              <input type='submit' value='Sign Up'></input>
          </form>
      </div>
  )
}

export default SignUp