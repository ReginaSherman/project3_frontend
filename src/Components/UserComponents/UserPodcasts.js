import {useState, useEffect} from "react"
import {Col} from 'reactstrap'
import UserCards from './UserCards'
import { axiosInstance } from "../../Axios"

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
                        <Col xs='4'>
                            <UserCards key = {podcast.id} id={podcast._id} name={podcast.name} images={podcast.images}/>
                        </Col>
                    </>
                )
            })}



        </>
    )
}


export default UserPodcasts;