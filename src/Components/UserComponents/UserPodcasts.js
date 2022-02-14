import {useState, useEffect} from "react"
import {Col} from 'reactstrap'
import UserCards from './UserCards'
import { axiosInstance } from "../../Axios"
import './Cards.css'

const UserPodcasts = () => {
    const [ playlist, setPlaylist ] = useState()
    const url = 'http://localhost:8000/playlists'

    useEffect(()=>{
        axiosInstance.get(url)
        .then(res =>{
            setPlaylist(res.data)
        })
    }, [])
        
    if (!playlist) return (
        <div>
            <p className='unauthorized'> Please <a href='/'>Sign In</a> to View Add To This List </p>
            
        </div>
    )
    return(
        <>
            {playlist.map((podcast) =>{
                return(
                    <>
      {playlist.map((podcast) => {
        return <UserCards key={podcast.id} {...podcast} />;
      })}
    </>
                )
            })}


export default UserPodcasts;