import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './AuthPages.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/signup", {
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
      <div>
          <form className="signup" onSubmit={handleSubmit}>
              <input type='text' value={email} placeholder="email" onChange={handleEmailChange}></input>
              <input type='text' value={password} placeholder="password" onChange={handlePasswordChange}></input>
              <input type='submit' value='Sign Up'></input>
          </form>
      </div>
  )
}

export default SignUp