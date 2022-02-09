import './App.css';
import React, { useState } from 'react';
import SpotifyHome from './SpotifyHome';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse, Row } from "reactstrap";
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import OurData from './OurData'
import UserPodcasts from './UserPodcasts'


const App = () =>{
  const [ navExpand, setNavExpand ] = useState(false)
  return(
    <div>
      <span className="font-link">
          <Navbar
            color="light"
            expand="md"
            light>  
            <NavbarBrand href="/">
              Podcast App
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
                  <NavLink href="/">
                   | Home |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/spotify">
                   | Spotify |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/ourdata">
                    | API Mock Data |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/mypodcasts">
                    | My Playlist |
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </span>
      <div>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/spotify' element = {<SpotifyHome />} />
          <Route path = '/ourdata' element = {<Row><OurData /> </Row>} />
          <Route path = '/mypodcasts' element = {<UserPodcasts />} />
        </Routes>

     </div>

</div>


  )
}

export default App;
