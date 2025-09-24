import React, { useContext, useState } from 'react'
import { myContext } from './context'
import { useParams, Link } from 'react-router-dom'
import image from './hand-drawn-flat-design-stack-books-illustration_23-2149341898.avif'
import userl from './userlogo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Dcategory() {
    const { productData, like, cart, setLike, setCart } = useContext(myContext)
    const { category } = useParams()// it takes value from app.js pdt/:category 
    const [showselect,setShowselect]=useState(false)

    const product = productData.filter(item => item.category === category)

    console.log(productData);

    console.log("product and category", product, category);

    function handleLike(prdt) {
        if (like.includes(prdt)) {
            setLike(like.filter(item => item !== prdt))
        }
        else {
            setLike([...like, prdt])
        }
    }
    console.log("Like", like);

    function handleCart(pdt) {

    }
    function handleCart(pdt) {
        if (cart.includes(pdt)) {
            setCart(cart.filter(item => item !== pdt))
        }
        else {
            setCart([...cart, pdt])
        }
    }
    console.log("Cart", cart);


    function firstClick() {
        setShowselect(!showselect)
    }

    return (
        <div>
           
            <Navbar collapseOnSelect expand="lg" className="navbar-custom"  variant="dark" sticky="top" style={{backgroundColor:"gray"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/displaypro">Home</Nav.Link>
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

            <h2> <marquee behavior="" direction="left" width="300px"> {category} Books</marquee></h2>
            <div style={{display:"flex", flexWrap:"wrap", gap:"25px", marginLeft:'10px',marginTop:"2%" }}>
        {
            product.map((item,id)=>
                <Link to={`/productdetails/${item.id}`} style={{textDecoration:"none",color:"inherit"}}>
                <div style={{ padding:"10px", borderRadius:"4px",justifyItems:"center",backgroundColor:'lightgray'}}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
                             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} >
                    
                    <img src={item.image} alt="product"  style={{width:"200px", height:"300px"}}/>
                    <h2 style={{fontSize:"20px"}}>{item.Bookname}</h2>
                    <h4 style={{fontSize:"16px",color:"darkgray"}}>Author:{item.author}</h4>
                    <h3 style={{fontSize:"22px"}}>Price ₹{item.price}</h3>
                            <button style={{backgroundColor:"bisque",border:"none",marginLeft:"5px"}} onClick={(e) =>{e.preventDefault(); handleLike(item)}}>
                                {
                                    like.includes(item) ? "Unlike👎" : "Like👍"
                                }
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button style={{backgroundColor:"bisque",border:"none",marginLeft:"5px"}} onClick={(e) =>{e.preventDefault(); handleCart(item)}}>
                                {
                                    cart.includes(item) ? "Added🛒" : "Add to Cart🛒"
                                }
                            </button>

                        </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Dcategory