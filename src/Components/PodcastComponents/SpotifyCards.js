import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const SpotifyTests = (props) =>{
    const { name, images} = props
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    return(
    <div>
        <Card>
          <CardBody>
              <CardTitle tag = "h5">
                  Podcast Title:<br/>{name}
               </CardTitle>
              <CardText>
                {images.length ? <img width={"30%"} src={images[1].url} alt=""/> : <div>No Image</div>}
              </CardText>
              <Button 
                  color="primary"
                  >
                  More Details
              </Button>
          </CardBody>
      </Card>
  </div>
  )
    
}

export default SpotifyTests;