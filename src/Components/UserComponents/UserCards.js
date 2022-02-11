import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import axios from "axios";

const UserCards = (props) => {
    const { id, name, images } = props
    console.log(images)
    const deleteFunction = () => {
        axios.delete(`http://localhost:8000/playlists/${id}`)
        window.location.reload()

    }
    
    return(
        <div>
        <Card>
            <CardBody>
                <CardTitle tag = "h5">
                    Podcast Title: {name}
                 </CardTitle>
                <CardText>
                {images.length ? <img width={"30%"} src={images[1].url} alt=""/> : <div>No Image</div>}
                </CardText>
                <Button onClick ={deleteFunction}
                color ='danger'>
                    Click to Remove Y'all
                </Button>
            </CardBody>
        </Card>
        </div>
        
    )
}

export default UserCards;