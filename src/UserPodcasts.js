import axios from "axios";
import {useState, useEffect} from "react";
import {Col} from 'reactstrap'
import UserCards from './UserCards'

const UserPodcasts = () => {
    const [ playlist, setPlaylist ] = useState()
    const url = `http://localhost:8000/playlists`

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
                        <Col xs='4'>
                            <UserCards key = {podcast.id} id={podcast._id} {...podcast}/>
                        </Col>
                    </>
                )
            })}



        </>
    )
}


export default UserPodcasts;