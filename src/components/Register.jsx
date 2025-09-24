import React, { useCallback, useContext, useState } from 'react'
import { myContext } from './context'
import { useNavigate,Link } from 'react-router-dom'
import image from './bookim.jpg'
import jj from './omnichannel-technology-solution-1024x683.jpg'
import userl from './userlogo.png'
import { Navbar, Container, Form, FormControl, Dropdown, Nav, Button } from 'react-bootstrap'
<link rel="stylesheet" href="styleproject.css" />

function Register() {

    const nav = useNavigate()
    const { user, setUser } = useContext(myContext)
    const [confirm, setConfirm] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [showselect, setShowselect] = useState(false)
    function firstClick() {
        setShowselect(!showselect)
    }

    function alreadyRegistered() {
        return user.find(item => item.email === email)
    }

    function handleRegister() {
        if (!fname || !lname || !dob || !email || !password) {
            alert("All fields are  required!")
            return
        }
        if (!alreadyRegistered()) {

            if (password === confirm) {
                const userdata = { fname, lname, dob, email, password }
                setUser([...user, userdata])
                alert("Registration Successful")
                nav('/login')
            }
            else {
                alert("Please Enter correct password!")
                nav('/register')
            }
        }
        else {
            alert("Email already registered!")
            nav('/login')
        }

    }
    console.log("user", user);

    function handleal() {
        alert("Please Login!")
    }

    return (
        <div className='full'>
            {/* <div className='header' style={{ backgroundColor: " rgb(35, 134, 184)" }}>
                <div className='sect1'>
                    <h3 style={{}}><span className='bb'>Books</span><span className='kk'>Kart</span></h3>&nbsp;&nbsp;
                    <img src={image} style={{ width: "25%", height: "95%", marginTop: "5%" }} />
                </div>
                <div className='sect2'>
                    <input style={{ marginTop: "4%", width: "80%", height: "67%", marginLeft: "2%", backgroundColor: " white",  borderColor:"rgb(35, 134, 184)",border:"none"}} type="text" placeholder='🔍Search for products' />
                </div>

                <div className='sect3'>
                    <button className='dropdown' onClick={() => firstClick()} ><img src={userl} alt='im' style={{ width: "45%", height: "70%" }} />&nbsp;&nbsp;Login</button>
                    {showselect && (
                        <div className='dropdown-content'>
                            <a href="/login">User Login</a>
                        </div>
                    )}
                </div>

                <div className='sect5'>
                    <button className='cart' onClick={()=>handleal()}>🛒Cart</button>
                </div>
            </div> */}

            <Navbar collapseOnSelect expand="lg" className="navbar-custom"  variant="dark" sticky="top" style={{backgroundColor:"gray"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/displaypro" className="d-flex align-items-center">
                        <h3 className="m-0">BooksKart</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="text-decoration-none">Home</Nav.Link>
                            <Nav.Link onClick={() => handleal()} className=" text-decoration-none">
                                <span>🛒 Cart</span>
                            </Nav.Link>
                        </Nav>
                        <Nav >
                            <Button style={{backgroundColor:"gray"}}> <img src={userl} alt="User" style={{ width: '20px', height: '17px',backgroundColor:"gray" }} /> User Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className='loginfull'>
                <div className='loginfsec'>
                    <div className='leftlogin'>
                        <h1 style={{fontSize:"35px",marginTop:"4%"}}>Looks Like you are new here!</h1>
                        <h3 style={{fontSize:"22px"}}>Sign up with given details to get Started!</h3>
                        <img src={jj} style={{ width: "143px", height: "123px", marginLeft: "20%", marginTop: "30%" }} alt="" />
                    </div>
                    <div className='rightlogin'>
                        <table className='tablog'>
                            <tr>
                                <td><label htmlFor="">First Name:</label></td>
                                <td><label htmlFor="">Last Name:</label></td>
                            </tr>
                            <tr>
                                <td><input type="text" style={{ width: "70% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid blue", }} maxLength={15} value={fname} onChange={e => setFname(e.target.value)} /></td>
                                <td><input type="text" style={{ width: "70% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid blue", }} value={lname} onChange={e => setLname(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor=""> DOB:</label></td>
                            </tr>
                            <tr>
                                <td><input type="date" value={dob} onChange={e => setDob(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Email</label></td>
                            </tr>
                            <tr>
                                <td><input type="email" style={{ width: "170% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid blue", }} value={email} onChange={e => setEmail(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Password</label></td>
                            </tr>
                            <tr>
                                <td><input type="password" style={{ width: "170% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid blue", }} maxLength={6} value={password} onChange={e => setPassword(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Confirm Password</label></td>
                            </tr>
                            <tr>
                                <td><input type="password" style={{ width: "170% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid blue", }} maxLength={6} value={confirm} onChange={e => setConfirm(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <button className='lgbtn' onClick={() => handleRegister()}>Submit</button>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Register