
import React from 'react';
import { Container, Row, Col, Card ,Button,Dropdown,Navbar,Form,FormControl,Nav} from 'react-bootstrap';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
    const [showselect,setShowselect]=useState("false")
    const [searchquery,setSearchQuery]=useState("")
    return (
        
        <div>
        <Navbar bg="lightgray" expand="lg" style={{ padding: '10px 20px' ,backgroundColor:"lightgray",position:"sticky",top:"0",zIndex:"1000"}}>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <h3>
          <span style={{ color: 'orange' }}>Books</span>
          <span style={{ color: 'black' }}>Kart</span>
        </h3>
        {/* <img
          src={image}
          alt="Books Kart Logo"
          style={{ width: '80px', height: '60px', marginLeft: '10px',mixBlendMode:"multiply",backgroundColor:"lightgray",filter:"brightness(1.1)" }}
        /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Form inline style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <FormControl
          type="text"
          placeholder="Search for products"
          value={searchquery}
        //   onChange={handlesearch}
          style={{ width: '60%' }}
        />
      </Form>

      <Nav>
      {/* <Dropdown style={{backgroundColor:"lightgray",marginTop:"2px"}} show={showselect} onMouseLeave={() => setShowselect(false)}>
      {/* // onClick={firstClick} */}
          {/* <Dropdown.Toggle variant="secondary" >     
            Login
          </Dropdown.Toggle>
          <Dropdown.Menu style={{backgroundColor:"gray"}}>
            <Dropdown.Item as={Link} to="/login">User Login</Dropdown.Item>
            <Dropdown.Item as={Link} to="/adminlogin">Admin Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */} 
        <Button
          variant="outline-primary"
          onClick={() => alert("After Login, you can access it. Please Login!")}
          style={{ marginLeft: '15px' }}
        >
          🛒 Cart
        </Button>
      </Nav>
      </Navbar.Collapse>
    </Navbar>


        <Container fluid style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
            <Row className="text-center mb-4">
                <Col>
                    <h1 style={{ fontSize: "36px", margin: "20px 0" }}>About Us</h1>
                    <p style={{ fontSize: "18px", color: "#555" }}>
                        Welcome to Books Kart! We are dedicated to bringing you the best selection of books from various genres.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                Our mission is to connect readers with the books they love and to inspire a passion for reading in everyone.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                            <Card.Title>Our Vision</Card.Title>
                            <Card.Text>
                                We envision a world where everyone has access to books and the joy of reading is shared across all communities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="text-center mt-4">
                <Col>
                    <h4>Meet Our Team</h4>
                    <p>
                        Our team consists of passionate readers and book lovers who work tirelessly to curate a wonderful selection of books for you.
                    </p>
                </Col>
            </Row>
            <Footer/>
        </Container>
        </div>
    );
};


export default About;
