import './App.css';
import React, { useState } from 'react';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse, Row } from "reactstrap";
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import UserPodcasts from './Components/UserComponents/UserPodcasts'
import SignIn from './Components/UserComponents/SignIn';
import NewSpotifyHome from './Components/PodcastComponents/NewSpotifyHome';
import SignUp from './Components/UserComponents/SignUp';

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
              TEAM AIR RULES
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
                <NavItem>
                  <NavLink href="/spotify">
                    | Search |
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </span>
      <div>
        <Routes>
          <Route path = '/' element = {<SignIn />}/>
          <Route path = '/home' element = {<Row><Home /></Row>}/>
          <Route path = '/mypodcasts' element = {<Row><UserPodcasts/></Row>} />
          <Route path = '/spotify' element = {<Row><NewSpotifyHome/></Row>} />
          <Route path = '/signup' element = {<Row><SignUp /></Row>} />


          {/* <Route path= '/search' element ={ <Row><SearchBar placeholder = "Search by Podcast Title" data = {podcastData}/></Row>} /> */}
        </Routes>

     </div>

</div>


  )
}

export default App;
