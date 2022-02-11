import './App.css';
import React, { useState, useEffect } from 'react';
import { NavbarBrand, Nav, NavItem, NavbarToggler, NavLink, Navbar, Collapse, Row } from "reactstrap";
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import UserPodcasts from './Components/UserComponents/UserPodcasts'
import SearchBar from './Components/SearchBar';
import SignIn from './Components/UserComponents/SignIn';
import axios from 'axios';
import NewSpotifyHome from './Components/PodcastComponents/NewSpotifyHome';


const App = () =>{
  const [ navExpand, setNavExpand ] = useState(false)
  const [ podcastData, setPodcastData ] = useState()
  const url = `http://localhost:8000/podcasts`

  useEffect(()=>{
      axios.get(url)
      .then(res =>{
          setPodcastData(res.data)
      })
  }, [])
      
  if (!podcastData) return (
      <>page loading.....</>
  )
  console.log(podcastData)

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
                  <NavLink href="/search">
                    | Search |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/spotify">
                    | Spotify |
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
          <Route path = '/spotify' element = {<NewSpotifyHome/>} />
          <Route path= '/search' element ={ <Row><SearchBar placeholder = "Search by Podcast Title" data = {podcastData}/></Row>} />
        </Routes>

     </div>

</div>


  )
}

export default App;
