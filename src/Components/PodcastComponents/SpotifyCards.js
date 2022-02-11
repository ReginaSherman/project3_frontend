import React, { useState } from "react";
import { Card, CardBody, ModalFooter, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody } from 'reactstrap'


const SpotifyTests = (props) =>{
    const { name, images, description, total_episodes, external_urls } = props

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
                onClick={() => setModal(!modal)}
              >
               More Details
              </Button>
              <Modal
                isOpen={modal}>
                <ModalHeader toggle={toggle} >
                  {name}
                </ModalHeader>
                <ModalBody className='text-center'>
                     {images.length ? <img width={"50%"} src={images[1].url} alt=""/> : <div>No Image</div>}
                </ModalBody>
                <ModalBody className='text-center'>
                    {description}
                </ModalBody>
                <ModalBody className='text-center'>
                    Total Episodes: {total_episodes}
                </ModalBody>
                <ModalFooter>
                    <Button color="success"
                    href={external_urls.spotify}>
                    Click to Listen
                    </Button>
                </ModalFooter>
              </Modal>
          </CardBody>
      </Card>
  </div>
  )
    
}

export default SpotifyTests;