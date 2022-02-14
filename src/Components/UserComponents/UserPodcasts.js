import axios from "axios";
import React, {useState, useEffect} from "react";
import UserCards from './UserCards'
import './Cards.css'

const UserPodcasts = () => {
  const [playlist, setPlaylist] = useState();
  const url = "http://localhost:8000/playlists";

  useEffect(() => {
    axios.get(url).then((res) => {
      setPlaylist(res.data);
    });
  }, []);

  if (!playlist) return <>page loading.....</>;
  return (
    <>
      {playlist.map((podcast) => {
        return <UserCards key={podcast.id} {...podcast} />;
      })}
    </>
  );
};


export default UserPodcasts;