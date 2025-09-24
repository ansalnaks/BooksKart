import React, { useContext, useState } from 'react'
import { myContext } from './context'
import { Link, useNavigate } from 'react-router-dom'
import image from './bookim.jpg'
import pp from './omnichannel-technology-solution-1024x683.jpg'
import userl from './userlogo.png'
import { Navbar, Container, Form, FormControl, Dropdown, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styleproject.css'
<link rel="stylesheet" href="%PUBLIC_URL%/styleproject.css" />

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, setUser ,loginuser,setLoginuser} = useContext(myContext)


  const nav = useNavigate()

  const [showselect, setShowselect] = useState(false)


  function firstClick() {
    setShowselect(!showselect)
  }
  // function handleSel(e) {
  //   const changel = e.target.value
  //   if (changel === 'ul') {
  //     nav('/login')
  //   }
  // }



  function handleLogin() {
    const loggedUser = user.find(item => item.email === email && item.password === password)
    if (loggedUser) {


      // const userlog={email,password}
      // setLoginuser([...loginuser,user,userlog])//here only pass the value name ,dob,email from user to the logineduser
      const userlog = {
        fname: loggedUser.fname,
        dob: loggedUser.dob,
        email: loggedUser.email
      };
      setLoginuser([userlog]); // Set `loginuser` with only the logged-in user's details
      alert("Login successful");
      nav('/displaypro');
     
    } else {
      alert("Login failed!Please try again")
    }
  }
  function cartlogin() {
    alert("Please login!")
  }
  console.log("loginuser",loginuser);
  
console.log("user",user);

  return (
    <div className='full'>

      
      {/* <div className='header' style={{ backgroundColor: " rgb(35, 134, 184)" }}>
        <div className='sect1'>
          <h3 style={{}}><span className='bb'>Books</span><span className='kk'>Kart</span></h3>&nbsp;&nbsp;
          <img src={image} style={{ width: "25%", height: "95%", marginTop: "5%" }} />
        </div>
        <div className='sect2'>
          <input style={{ marginTop: "4%", width: "80%", height: "65%", marginLeft: "2%", backgroundColor: " white" ,border:"none"}} type="text" placeholder='🔍Search for products' />
        </div>


        <div className='sect3'>
          <button className='dropdown' onClick={() => firstClick()} ><img src={userl} alt='im' style={{ width: "45%", height: "70%" }} />&nbsp;&nbsp;Login</button>
          {
          showselect && (
             <div className="dropdown-content">
            <Link to={"/login"}>User Login</Link>
            <Link to={"/admin-login"}>Admin Login</Link>
          </div>
          )}
        </div>
        <div className='sect5'>
          <button onClick={() => cartlogin()} className='cart'>🛒Cart</button>
        </div>
      </div> */}

<Navbar collapseOnSelect expand="lg" className="navbar-custom"  variant="dark" sticky="top"style={{backgroundColor:"gray"}}>
            <Container>
                <Navbar.Brand as={Link} to="/displaypro" className="d-flex align-items-center">
                    <h3 className="m-0">BooksKart</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-decoration-none">Home</Nav.Link>
                        <Nav.Link onClick={()=>cartlogin} className="d-flex align-items-center text-white text-decoration-none">
                            <span>🛒 Cart</span>
                        </Nav.Link>
                    </Nav>
                    <Nav>

                        <Dropdown  style={{color:"white",backgroundColor:"gray"}}>
                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-black text-decoration-none">
                                <img src={userl} alt="User" style={{ width: '20px', height: '17px', backgroundColor:"gray" }} /> Login
                            </Dropdown.Toggle>

                            <Dropdown.Menu  style={{backgroundColor:"gray"}}>
                                <Dropdown.Item as={Link} to="/login" className="text-decoration-none">User Login</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/admin-login" className="text-decoration-none">Admin Login</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



      <div className='loginfull'>

        <div className='loginfsec'> 

          <div className='leftlogin'>
            <h1 style={{color:"white",fontFamily:"sans-serif"}}>Login</h1>
            <h3 style={{color:"  white",fontSize:"19px"}}>Get Access to your Orders,<br />  Wishlist and Recommendations </h3>
            <img src={pp} style={{width:"143px", height:"123px", marginLeft:"20%", marginTop:"30%"}} alt="" />
          </div>

          <div className='rightlogin'>
            <table className='tablog'>
              <tr>
                <td><label htmlFor="">Email</label></td>
              </tr>
              <tr>
                <td><input style={{width:"150% ", padding:"8px 10px 10px 0", border:"none", borderBottom:"1px solid blue",}} type="email" value={email} onChange={e => setEmail(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label htmlFor="">Password</label></td>
              </tr>
              <tr>
                <td><input type="password" style={{width:"150% ", padding:"8px 10px 10px 0", border:"none", borderBottom:"1px solid blue"}} value={password} onChange={e => setPassword(e.target.value)} /> </td>
              </tr>
               <tr>
                <button className='lgbtn' onClick={() => handleLogin()}>Login</button>
               
              </tr>
            </table>
            <h3 style={{ fontWeight:"bolder",marginTop:"94%",fontSize:"15px",fontFamily:"sans-serif", color:"rgb(35, 134, 184)"}}>New User? <Link to={"/register"} style={{ textDecoration: "none" ,color:"rgb(35, 134, 184)"}}>Create an Account!</Link></h3>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login