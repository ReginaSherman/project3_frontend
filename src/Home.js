import React, { useState, useEffect } from "react";
import { axiosInstance } from './Axios'
import { Button } from 'reactstrap'
import PodcastCard from "./Components/PodcastComponents/PodcastCard";
import { Col } from 'reactstrap'

const Home = () => {
    const [podcasts, setPodcasts] = useState()

    useEffect(() => {
        axiosInstance.get('podcasts')
            .then(res => {
                setPodcasts(res.data)
            })
    }, [])

    if (!podcasts) return (
        <div>
            <h5 className='unauthorized'> Please <a href='/'>Sign In</a> to View This Page</h5>
            <h6 className='unauthorized'> Don't have an account? <a href='/signup'>Sign Up</a></h6>
            
        </div>
    )
    console.log(podcasts)
    return (
        <>
            {podcasts.map((podcast) => {
                return (
                    <Col xs='4'>
                        <PodcastCard key={podcast.id} {...podcast}
                        />
                    </Col>
                )
            })}



        </>
    )
}

export default Home;