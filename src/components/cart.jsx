import React, { useContext, useEffect, useState } from 'react'
import { myContext } from './context'
import { Link } from 'react-router-dom'
import { Nav,Navbar,Container } from 'react-bootstrap'

<link rel="stylesheet" href="cartstyle.css" />
function Cart() {
  const { cart, setCart, setPrice, totalPrice, count,setCount, detailss } = useContext(myContext)
  // const [totalPrice,setPrice]=useState(0)



  useEffect(() => {
    const total = cart.reduce((currentp, pro) => currentp + pro.price * (pro.selectquant || 1), 0)
    setPrice(total)

    const counts=cart.reduce((item1,item2)=>item1+(parseInt(item2.selectquant) || 1),0)
    setCount(counts)

  }, [cart])

  function handeleRemove(prod)
  {
    setCart(cart.filter(item=>item!==prod))
  }

  function handlepricehike(e, pro) {

    const selectquant = e.target.value
    const initialquant = pro.quantity - (pro.selectquant || 1)

    const stock = initialquant - selectquant;

    if (stock < 0) {
      alert('Not enough stock available');
      return;
    }
    const updateCart = cart.map(item =>
      item.Bookname === pro.Bookname ? { ...item, selectquant: selectquant, quantity: stock } : item
    ); setCart(updateCart)
    console.log("update", updateCart);
  }

  console.log("Tprice", totalPrice);



  return (
    <div >
    <Navbar collapseOnSelect expand="lg" className="navbar-custom"  variant="dark" sticky="top" style={{backgroundColor:"gray"}}>
    <Container>
        <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/displaypro">Home</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/wishlistpro">Wishlist</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="/">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
   
      <h2 style={{ color: " rgb(35, 134, 184)" ,fontSize:"29px",marginTop:"6px"}}>Shopping Bag</h2>
      <h3 style={{fontSize:"20px"}}><span style={{ color: "red" }}>{count}</span> items in your bag</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "75%" }}>
          {
            cart.map(prod =>
              <div style={{ width: "100%" }}>

                <table style={{ backgroundColor: "white", border: "0px solid black", borderBottom: "2px solid lightblue", width: "80%", gap: "70%px", marginLeft: "4.5%" }}>
                  <tr>
                    <td><h4 style={{fontSize:"16px",fontWeight:"larger"}}>{prod.Bookname}</h4></td>
                    <td> <img src={prod.image} alt="product" style={{ width: "150px", height: "200px", borderRadius: "23%" }} /></td>
                    <td> <h4 style={{fontSize:"16px",fontWeight:"larger"}}><span style={{ color: "rgb(35, 134, 184)" }}>Author</span>:{prod.author}</h4></td>
                    <td><h4 style={{fontSize:"16px",fontWeight:"larger"}}> <span style={{ color: "rgb(35, 134, 184)" }}>Price </span>₹:{prod.price}</h4></td>
                    <td><h4 style={{fontSize:"16px",fontWeight:"larger"}}><span style={{ color: "rgb(35, 134, 184)" }}>Stock </span>left:{prod.quantity}</h4></td>
                    <td>
                    
                      <select style={{marginLeft:"12px"}} value={prod.selectquant} onChange={(e) => handlepricehike(e, prod)}> 
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="3">7</option>
                        <option value="4">8</option>
                        <option value="5">9</option>
                        <option value="6">10</option>

                      </select>
                    </td>
                    <td><h4 style={{fontSize:"16px",fontWeight:"larger"}}>Updated price:{prod.price * (prod.selectquant || 1)}</h4></td>
                    <td><button className='buynowh' style={{  backgroundColor: "orange", border: "none" ,height:"33px",width:"70px",marginTop:"2px" }}>
                      <Link
                        style={{ textDecoration: "none", color: "white",padding:"1px 1px" }}
                        to="/paymentind" 
                        state={{ price: prod.price * (prod.selectquant || 1) }}
                      >
                        Buy
                      </Link>
                    </button></td>
                    <td><button style={{marginLeft:"4px",color:'white',backgroundColor:"black",cursor:"pointer",border:"none",padding:"4px 12px"}} onClick={()=>handeleRemove(prod)}>Remove</button></td>
                  </tr>
                </table>
              </div>
            )
          }
        </div>


        <div style={{ width: "30%", padding: "20px" }}>
          <h2 style={{ color: "orange",fontSize:"29px",marginLeft:"-6%" }}>Shipping Address</h2>
          {
            detailss.map(add => (
              <div>

                <h3 style={{fontSize:"16px",fontWeight:"larger"}}>{add.cuaddr}</h3>
                <h3 style={{fontSize:"16px",fontWeight:"larger"}}>{add.landmark}</h3>
                <h3 style={{fontSize:"16px",fontWeight:"larger"}}>{add.pincode}</h3>
              </div>
            )
            )
          }
        </div>
      </div>

      <div style={{ marginLeft: "70%", width: "20%", height: "100%" }}>
        <h2 style={{fontSize:"27px",fontWeight:"larger"}}>Cart Total</h2>
        <h3 style={{fontSize:"20px",fontWeight:"larger"}}>Shipping Charge:{totalPrice*1/10}</h3>
        <h3 style={{fontSize:"20px",fontWeight:"larger"}}>Total: <span style={{ fontSize: "24px" }}>{totalPrice+totalPrice*1/10}</span> </h3>
        <Link to={"/payment"} style={{ borderRadius: "30%" }}><button  style={{ color: "white", backgroundColor: "black", padding: "8px 15px" }}> Make Payment</button></Link>
      </div>

    </div>
  )
}
export default Cart