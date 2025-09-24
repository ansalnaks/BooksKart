import React from 'react';
import { Container, Row, Col, Stack,Image,Nav,NavLink } from 'react-bootstrap';


function Footer() {
  return (

    <footer >
      <Container fluid style={{width:"100",height:"16%" ,backgroundColor:"gray",marginTop:"4%"}}>
        <Row className='text-black font-family-cursive' >
          <Col>
            <Stack>
              <Image src='https://static.vecteezy.com/system/resources/previews/005/050/797/non_2x/library-logo-template-design-free-vector.jpg'
              rounded width={80} height={60} style={{mixBlendMode: "multiply",
                backgroundColor: "gray",  
                }} />

              
             < h4 style={{fontSize:"19px"}}><span style={{color:"orange"}}>Books </span> <span style={{color:"black"}}>Kart</span></h4>
             <h3 style={{fontSize:"15px",fontFamily:"cursive"}}>Dive into a book, explore worlds unknown</h3>
            </Stack>
          </Col>
          <Col>
              <Nav className='flex-column fs-7'>
               
                <NavLink href="/" className="text-black">Home</NavLink>
                <NavLink href="/about" className="text-black">About</NavLink>
                <NavLink href="/" className="text-black">Product</NavLink>
              </Nav>
          </Col>
          <Col>
              <h4>Contact us</h4>
              <p>Email:abc@gmail.com</p>
              <p>Phone:+91 22222 44444</p>
          </Col>
          <Col>
          <h4> Authors</h4>
          <NavLink href='/authors' className='text-black'>A-Z</NavLink>
          </Col>
          <Col xs={12} md={3} className="d-flex flex-column align-items-center">
                <h4 style={{ fontSize: "19px", marginBottom: "10px" }}>Follow Us</h4>
                <div style={{ display: "flex", gap: "15px" }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="24" height="24" />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" width="24" height="24" />
                    </a>
                </div>
            </Col>
          
        </Row>

        <Row>
          <h2 style={{color:"gray"}}>k</h2>
          </Row>

        <Row className='text-white ' style={{textAlign:"center"}}>
                <h5>Copyright © 2024 Books Kart. Built with React.</h5>
          </Row>
        
         
       

      </Container>

    </footer>

  )
}

export default Footer