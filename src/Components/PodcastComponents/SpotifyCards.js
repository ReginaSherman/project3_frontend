import React, { useState } from "react";
import { Card, CardBody, ModalFooter, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import axios from 'axios'

const SpotifyTests = (props) =>{
    const { name, images, description, total_episodes, external_urls, explicit } = props

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post(`http://localhost:8000/playlists`, {name: name, images: images })
  }

    return(
    <div>
        <Card>
          <CardBody>
              <CardTitle tag = "h5">
                  <br/>{name}
               </CardTitle>
              <CardText>
                {images.length ? <img width={"30%"} src={images[1].url} alt=""/> : <div>No Image</div>}
              </CardText>
              <Button
                color="primary"
                onClick={() => setModal(!modal)}
              >
               More Details
              </Button> {' '}
              <Button color="success" onClick={handleSubmit}>
                    Add to Favorites
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
                <ModalBody className='text-center' style={{color: explicit === true ? 'red' : 'green'}}>
                    {explicit === true ? 'EXPLICIT' : 'CLEAN'}
                </ModalBody>
                <ModalBody className='text-center'>
                    Total Episodes: {total_episodes}
                </ModalBody>
                <ModalFooter>
                    <Button color="success"
                    href={external_urls.spotify}>
                    Click to Listen
                    </Button>
                    <Button color="success" onClick={handleSubmit}>
                    Add to Favorites
                    </Button>
                </ModalFooter>
              </Modal>
          </CardBody>
      </Card>
  </div>
  )
    
}

export default SpotifyTests;