import React, { useState ,useEffect} from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import image from './bookdd.webp'
import adminpic from './adminlogo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button, Row, Col } from 'react-bootstrap';

<link rel="stylesheet" href="styleproject.css" />;
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet"></link>

function AdminLogin() {

    const nav=useNavigate()
    const [uname,setUname]=useState("")
    const [pass,setPass]=useState("")

    function adsubmit(){
        if(uname=="Admin"&& pass==12345){
            alert("Login Successful")
            nav('/ad-dash')
        }
        else{
            alert("username or password is incorrect")
        }
    }
    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css');
    }, []);



      return (

    <div style={{width:"100%",height:"700px", position:"relative"}}>

            {/* <div className='header' style={{ backgroundColor: " rgb(35, 134, 184)" }}>
                <div className='sect1'>
                    <h3 style={{}}><span className='bb'>Books</span><span className='kk'>Kart</span></h3>&nbsp;&nbsp;
                    <img src={image} style={{ width: "25%", height: "95%", marginTop: "5%", mixBlendMode: "screen" }} />
                </div>
                <div className='sect2'>
                    <input style={{ marginTop: "4%", width: "80%", height: "67%", marginLeft: "2%", backgroundColor: " white", borderColor: "rgb(35, 134, 184)", border: "none" }} type="text" placeholder='Search for products' />
                </div>
            </div> */}
             <Navbar collapseOnSelect expand="lg" className="navbar-custom" variant="dark" sticky="top" style={{backgroundColor:"gray"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="">ADMIN LOGIN</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* <div className='adlog' style={{width:"40%",height:"60%",backgroundColor:"green",marginTop:"7%",marginLeft:"27%", display:"flex"}}>
              
                <div style={{width:"56%",height:"110%", backgroundColor:"honeydew",position:"relative",overflow:"hidden"}}>
                  <img src={adminpic}  style={{objectFit:"cover", width:"100%", height:"100%"}}alt="" /> 
                  <h3 style={{position:"absolute",top: "45%", left: "50%",  transform: "translate(-50%, -50%)",   color: "gray" ,  padding: "10px", textAlign: "center",textShadow:"1px 2px 3px black"}}>Admin Login!</h3> 
                </div>

        <div className='adlogsub' style={{width:"75%",height:"110%",backgroundColor:'white',boxShadow:"2px 3px 2px black"}}>
            <form action="" style={{marginTop:"42%" ,marginLeft:"4%"}}>
                <label htmlFor="" style={{fontWeight:"bolder"}}>User Name:</label>
                <input type="text"  value={uname} onChange={e=>setUname(e.target.value)}/><br /><br />
                <label style={{fontWeight:"bolder"}} htmlFor="">Password&nbsp;:&nbsp;</label>
                <input type="password" value={pass} onChange={e=>setPass(e.target.value)} /><br/><br />
                <button className='mmm' style={{color:"white",backgroundColor:"gray",border:"none",padding:"5px 12px ",marginLeft:"20px"}} onClick={()=>adsubmit()}>Login</button>
            </form>
        </div>

        </div> */}

<div className="container d-flex justify-content-center align-items-center " style={{height:"100%" }}>
      <div className="adlog d-flex  p-2 rounded" style={{ width: "60%",height:"60%" ,boxShadow:"1px 1px 1px  gray"}}>
        
        {/* Left Image Section */}
        <div className="bg-light position-relative" style={{ width: "50%", overflow: "hidden" }}>
          <img src={adminpic} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          {/* <h3 className="position-absolute text-center" style={{
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "gray",
            padding: "10px",
            textShadow: "1px 2px 3px black"
          }}>
            Admin Login!
          </h3> */}
        </div>
        
        {/* Form Section */}
        <div className="adlogsub bg-white shadow-sm p-4" style={{ width: "75%"}}>
          <form onSubmit={(e) => { e.preventDefault(); adsubmit(); }}>
            
            {/* Username Field */}
            <div className="form-group mt-40">
              <label htmlFor="username" className="fw-bold">User Name:</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-person" /> {/* Bootstrap Icon for User */}
                </span>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="form-group mb-4">
              <label htmlFor="password" className="fw-bold">Password:</label>
              <div className="input-group">
                <span className="input-group-text bg-light">
                  <i className="bi bi-lock" /> {/* Bootstrap Icon for Lock */}
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="btn btn-secondary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
         
    </div>

    
  )
}

export default AdminLogin