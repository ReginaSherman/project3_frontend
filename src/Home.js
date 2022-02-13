import React, { useState, useEffect } from "react";
import axios from "axios";
import PodcastCard from "./Components/PodcastComponents/PodcastCard";
import { Col } from 'reactstrap'

const Home = () => {
    const [ podcasts, setPodcasts ] = useState()
    const url = 'http://localhost:8000/podcasts'

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
            setPodcasts(res.data)
        })
    }, [])
        
    if (!podcasts) return (
        <>page loading.....</>
    )
    console.log(podcasts)
    return(
        <>
            {podcasts.map((podcast) =>{
                return(
                    <Col xs='4'>
                        <PodcastCard key = {podcast.id} {...podcast}
                    /> 
                    </Col>
                )
            })}



        </>
    )
}

export default Home;