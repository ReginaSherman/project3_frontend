import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import axios from "axios";

const UserCards = (props) => {
    const { id, title, category, image_url } = props
    const deleteFunction = () => {
        axios.delete(`http://localhost:8000/playlists/${id}`)
        window.location.reload()

    }
    
    return(
        <div>
        <Card>
            <CardBody>
                <CardTitle tag = "h5">
                    Podcast Title: {title}
                 </CardTitle>
               
                 <CardText>
                    Category: {category}
                </CardText>
                <CardText>
                    <img src= {image_url} alt = "podcast"/>
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