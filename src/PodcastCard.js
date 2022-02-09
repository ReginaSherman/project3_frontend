import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const PodcastCard = (props) => {
    const { title, category, image_url } = props
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
                    <img src= {image_url}/>
                </CardText>
                <Button
                    color="primary">
                    (DUMMY LINK) ADD THIS PODCAST
                </Button>
            </CardBody>
        </Card>
        </div>
    )
}

export default PodcastCard;