import axios from "axios";
import React, {useState, useEffect} from "react";
import {Col} from 'reactstrap'
import UserCards from './UserCards'
import './Cards.css'

const UserPodcasts = () => {
    const [ playlist, setPlaylist ] = useState()
    const url = 'http://localhost:8000/playlists'

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
            setPlaylist(res.data)
        })
    }, [])
        
    if (!playlist) return (
        <>page loading.....</>
    )
    return(
        <>
            {playlist.map((podcast) =>{
                return(
                    <>
                        <Col className="full-card" xs='4'>
                            <UserCards key = {podcast.id} id={podcast._id} name={podcast.name} images={podcast.images}/>
                        </Col>
                    </>
                )
            })}



        </>
    )
}


export default UserPodcasts;