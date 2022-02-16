import React, { useState, useEffect } from "react";
import { axiosInstance } from './Components/UserComponents/Axios';
// import PodcastCard from "./Components/PodcastComponents/PodcastCard";
// import { Col } from 'reactstrap';
import SpotifySearch from "./Components/PodcastComponents/SpotifySearch";
import RandomPodcasts from "./Components/PodcastComponents/RandomPodcasts";

const Home = () => {
  const [podcasts, setPodcasts] = useState();

  useEffect(() => {
    axiosInstance.get("podcasts").then((res) => {
      setPodcasts(res.data);
    });
  }, []);

  if (!podcasts)
    return (
      <div>
        <h5 className="unauthorized">
          {" "}
          Please <a href="/">Sign In</a> to View This Page
        </h5>
        <h6 className="unauthorized">
          {" "}
          Don't have an account? <a href="/signup">Sign Up</a>
        </h6>
      </div>
    );

  return (
    <>
    <SpotifySearch/>
    <br/>
    <p></p>
    <RandomPodcasts/>
    </>
  )
};

export default Home;