import React, { useCallback, useContext ,useState} from 'react'
import { myContext } from './context'
import image from './hand-drawn-flat-design-stack-books-illustration_23-2149341898.avif'
import { Link } from 'react-router-dom'
import userl from './userlogo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Wishlistpro() {
    const {like,setLike,cart,setCart}=useContext(myContext)
    const [showselect,setShowselect]=useState(false)
    const [searchquery,setSearchQuery]=useState("")
    

    function firstClick(){
        setShowselect(!showselect)
    }

  


    function handleremove(prdt){
        setLike(like.filter(item=>item!==prdt))

    }
    function handlecart(prod){
        if(cart.includes(prod)){
            setCart(cart.filter(item=>item!==prod))
        }else{
            setCart([...cart,prod])
        }
    }
    
    
  return (
    <div className='full'>
        {/* <div className='header'  style={{backgroundColor:"rgb(35, 134, 184)",position:"sticky",top:"0",zIndex:"100" }}>
    <div className='sect1'>
        <h3 style={{}}><span className='bb'>Books</span><span className='kk'>Kart</span></h3>&nbsp;&nbsp;
        <img src={image} style={{width:"25%", height:"95%",marginTop:"5%"}}/>
    </div>

    

     <div className='sect3' >
          <button className='dropdown'  onClick={()=>firstClick()} ><img src={userl} alt='im' style={{width:"37%", height:"60%"}} />&nbsp; 
          <Link style={{textDecoration:"none"}} to={'/profile'}>Profile</Link> </button>
     </div>

     <div className='sect5'>
          <button  className='cart'> <Link style={{textDecoration:"none",color:"black"}} to={"/cart"}>🛒Cart</Link></button>
     </div>

     <div className='sect6'>
          <button className="wishlist" ><Link style={{textDecoration:"none ", color:"black"}} to={"/displaypro"}>Home </Link> </button>
     </div>
     <div style={{width:"6%",height:"44%",marginTop:"1%",marginRight:"2%"}}>
     <button style={{marginTop:"-20px",width:"85%",height:"84%",boxShadow:"1px white",borderColor:"white"}}>  <Link style={{textDecoration:"none",boxShadow:"1px white",color:"black"}} to={'/'}>Logout</Link>  </button>
     </div>
    </div> */}
     <Navbar collapseOnSelect expand="lg" className="navbar-custom"  variant="dark" sticky="top" style={{backgroundColor:"gray"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/displaypro">Home</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




    <h2 style={{fontSize:"28px"}}><marquee style={{color:"black"}} behavior="" width="300px" direction="left "><span style={{color:"gray"}}>WishListed</span> Items....</marquee></h2>
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px", marginLeft:'6px',marginTop:"2%" }}>
        {
            like.map(product=>
                <div style={{ padding:"10px", borderRadius:"4px",justifyItems:"center",backgroundColor:'lightgray'}}>
                    
                    <img src={product.image} alt="product"  style={{width:"200px", height:"300px"}}/>
                    <h2 style={{fontSize:"20px"}}>{product.Bookname}</h2>
                    <h4 style={{fontSize:"16px",color:"darkgray"}}>Author:{product.author}</h4>
                    <h3 style={{fontSize:"22px"}}>Price ₹{product.price}</h3>
                    <button  style={{backgroundColor:"bisque",border:"none",marginLeft:"-2px"}} onClick={()=>handleremove(product)}>Remove</button>
                     <button style={{backgroundColor:"bisque",border:"none",marginLeft:"5px"}} onClick={()=>handlecart(product)}>
                    {
                        cart.includes(product)?"Added🛒":"Add to Cart🛒"
                    }
                    </button>
                </div>
            )
        }
 
    </div>
    </div>
  )
}

export default Wishlistpro