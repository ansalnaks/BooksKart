import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { myContext } from './context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col ,Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="styleproject.css" />


function ProductDetails() {
    const { productData, cart, setCart, like, setLike } = useContext(myContext);
    const { id } = useParams();
    const product = productData.find(p => p.id.toString() === id);

    function handlecart(pdt) {
        if (cart.includes(pdt)) {
            setCart(cart.filter(item => item !== pdt))
        }
        else {
            setCart([...cart, pdt])

        }
    }
    console.log("Cart", cart);

    function handlelike(pp) {
        if (like.includes(pp)) {
            setLike(like.filter(item => item != pp))
        }
        else {
            setLike([...like, pp])
        }
    }

    if (!product) return <p>Product not found.</p>;

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar-custom" variant="dark" sticky="top" style={{ backgroundColor: "gray" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/displaypro" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
                            <Nav.Link as={Link} to="/wishlistpro">Wishlist</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <div className="card p-4 text-center bg-light" style={{ fontFamily: "cursive" }}>

                    {/* <h2>{product.Bookname || product.bname}</h2> */}
                    <Row>
                        <Col>
                            <h2 style={{ marginLeft: "60%" }} >{product.Bookname || product.bname}</h2>
                        </Col>
                        <Col md={4}>
                            <button style={{ width: "20%", fontSize: "44px", marginTop: "9px", alignItems: "center", marginLeft: "44%", backgroundColor: "white", border: "none", color: "white", border: "none" }} onClick={() => handlelike(product)} 
                            title={like.includes(product) ? "Liked" : "Unliked"}>
                                {
                                    
                                    like.includes(product) ? "❤️" : "🤍"//wishlist items emogi 
                                }
                            </button>
                        </Col>
                    </Row>


                    <Row className="align-items-center" style={{ marginTop: "2%" }}>
                        <Col md={6} className="text-center">
                            <img src={product.image || product.coverImage} alt="product" className="img-fluid" style={{ width: "200px", height: "300px" }} />
                        </Col>

                        <Col md={6}>
                            <div style={{ marginLeft: "-180px", fontFamily: "cursive", color: "gray", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "left" }}>
                                <h4>{product.description}</h4>
                            </div>
                        </Col>
                    </Row>
                    <h4 className="mt-3">Author: {product.author || product.auther}</h4>
                    <h3>Price ₹: {product.price || product.pricep}</h3>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <Button style={{ width: "25%", marginTop: "6px", alignItems: "center", marginLeft: "75%", backgroundColor: "black", boxShadow: "1px 2px 1px gray", color: "white", border: "none" }} onClick={() => handlecart(product)}>
                                {
                                    cart.includes(product) ? "Added🛒" : "Add to Cart🛒"
                                }
                            </Button>
                        </Col>
                        <Col md={6}>

                            <Button className="color-black" style={{width:"26%",backgroundColor:'gray',border:"none",marginLeft:"-53%",backgroundColor:"black",boxShadow:"1px 2px 1px gray"}} onMouseEnter={(e)=>(e.currentTarget.opacity="0.8")}>
                                <Link to={'/paymentind'} state={{price:product.price*1}} style={{textDecoration:"NONE",opacity:"2s blues",color:'white'}}>
                                {/*  */}
                                    Buy Now
                                </Link>
                            </Button>
                            {/* <button style={{width:"10%",marginTop:"9px",alignItems:"center",marginLeft:"-83%",backgroundColor:"black",boxShadow:"1px 2px 1px gray",color:"white",border:"none"}} onClick={()=>handlelike(product)}>
                       {
                        like.includes(product)?"Buy Now":"jjj"//wishlist items emogi 
                       }
                    </button> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ProductDetails;
