import './App.css';
import React, { useState } from 'react';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse, Row, NavbarText } from "reactstrap";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserPodcasts from './Components/UserComponents/UserPodcasts';
import SignIn from './Components/UserComponents/SignIn';
import SignUp from './Components/UserComponents/SignUp';


const App = () =>{
  const [navExpand, setNavExpand] = useState(false);
  
  const logOut = () => { 
    localStorage.clear()
  }
  
  return(
    <div>
      <span className="font-link">
          <Navbar className="nav-bar"
            color=""
            expand="md"
            fixed="top"
            dark>  
            <NavbarBrand href="/">
              <img src="/images/airpods-white-small.png" alt="airpods logo"/>
            </NavbarBrand>
            <NavbarToggler
              className='me-2'
              onClick={() => setNavExpand(!navExpand)}
              />
            <Collapse navbar isOpen={ navExpand }>
              <Nav
                className="me-auto"
                navbar>
                <NavItem>
                  <NavLink href="/home">
                   | Home |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/mypodcasts">
                    | My Podcasts |
                  </NavLink>
                </NavItem>
              </Nav>
                <NavLink href='/signin'>
                  <NavbarText>
                    |Log In|
                  </NavbarText>
                </NavLink>
                <NavLink href='/signin' onClick={logOut}>
                  <NavbarText>
                    |Log Out|
                  </NavbarText>
                </NavLink>
            </Collapse>
          </Navbar>
        </span>
        
      <div>
        <Routes>
          <Route path = '/' element = {<SignIn />}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/mypodcasts' element = {<UserPodcasts/>} />
          <Route path = '/signin' element = {<SignIn/>}/>
          <Route path = '/signup' element = {<SignUp />}/>
        </Routes>
      </div>
</div>
  );
}

export default App;
