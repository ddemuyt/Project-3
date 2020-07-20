import React, { useState, useRef } from "react";
//import { Redirect } from "react-router-dom";
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import "./sell.css";
import API from "../../utils/API";
import { useUserContext, Consumer } from "../../utils/GlobalState";

function Sell() {
  const [state] = useUserContext();
  const itemNameRef = useRef();
  const itemQuantityRef = useRef();
  const itemPriceRef = useRef();
  const itemDescRef = useRef();
  const [imageUrl, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  //const [itemPostingStatus, setItemPostingStatus] = useState(false);
 // const [show, setShow] = useState(false);
  const [imageStatus, setImageStatus] = useState();
  const [imageShow, setImageShow] = useState(false);

  const uploadImage = async event => {

    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "forsaleitems");
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/dncdjgcih/image/upload",
      {
        method: "POST",
        body: data
      });

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (imageUrl) {
      console.log(itemNameRef.current.value + " $" + itemPriceRef.current.value + " " + itemQuantityRef.current.value + " " + itemDescRef.current.value);
      API.addSellItem({
        user_id: 1,
        item_name: itemNameRef.current.value,
        item_price: itemPriceRef.current.value,
        item_quantity: itemQuantityRef.current.value,
        item_desc: itemDescRef.current.value,
        item_img_url: imageUrl
        
      })
        .then(res => {
         
          // if (res.status === 200){
          //  // setShow(true);
          //   //setItemPostingStatus(true);
          // }
          console.log("sell res", res);
        })
        .catch(err => {
          console.log(err);
          // setShow(true);
          // setItemPostingStatus(false);
        });
    } else {
      setImageStatus(false);
      setImageShow(true);
    }

    itemNameRef.current.value="";
    itemPriceRef.current.value="";
    itemQuantityRef.current.value="";
    itemDescRef.current.value="";
    setImage("https://via.placeholder.com/90");
  }

  // const handleClose = () => {
  //   setShow(false);
    
  // };

  const modalClose = () => {
    setImageShow(false);
    
  };

  return (
  //*  <Consumer>
     //  {state =>
       //       state[0].user ? */}
        <Container>
          {/* <Modal backdrop="static" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {itemPostingStatus
            ? "Congratulations!! You have successfully posted an item for sale."
            : "Something went wrong. Please try again."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Modal backdrop="static" show={imageShow} onHide={() => setImageShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>No Image Uploaded!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imageStatus
            ? ""
            : "Please upload an image."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          <Row>
            <Col>
            {loading ? (<h3>Loading...</h3>)
              : (<img src={imageUrl || "https://via.placeholder.com/300"} alt="item up for sale" style={{ width: "300px" }} />)}
          </Col>
          </Row>
          <br />
          <Row>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="text" placeholder="item name" ref={itemNameRef} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Item Quantity</Form.Label>
                  <Form.Control type="text" placeholder="item quantity" ref={itemQuantityRef} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Unit Price</Form.Label>
                  <Form.Control type="text" placeholder="unit price" ref={itemPriceRef} />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Item Description</Form.Label>
                <Form.Control placeholder="item description" ref={itemDescRef} />
              </Form.Group>

              <Form.Group >
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" name="file" onChange={uploadImage} placeholder="image" />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
        //* : <Redirect to={"/login"} />
      ///} 
    //</Consumer>*/}
  );
}

export default Sell;
