// import React, { useContext, useState } from 'react'
// import { myContext } from './context'
// import image from './hand-drawn-flat-design-stack-books-illustration_23-2149341898.avif'
// import userl from './userlogo.png'
// import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// <link rel="stylesheet" href="styleproject.css" />

// function Profile() {
//   const { user,detailss,setDetails ,loginuser} = useContext(myContext)
//   const [showselect, setShowselect] = useState(false)
//   const [dis, setDis] = useState(false)
//   const [searchquery] = useState("")

//   const [cuaddr, setCuaddr] = useState("")
//   const [pincode, setPincode] = useState("")
//   const [landmark, setLandmark] = useState("")
//   // const [detailss, setDetails] = useState([])




//   function firstClick() {
//     setShowselect(!showselect)
//   }


//   console.log("user", user);


//   function handsub() {
//     const fullinfo = { cuaddr, pincode, landmark }
//     setDetails([...detailss, fullinfo])

//     setCuaddr('')
//     setPincode('')
//     setLandmark('')
//   }
//   console.log("Address details", detailss);

//   function addinfo() {
//     setDis(!dis)
//   }

//   return (
//     <div className='full'>
//      <Navbar collapseOnSelect expand="lg" className="navbar-custom" variant="dark" sticky="top" style={{backgroundColor:"gray"}}>
//                 <Container>
//                     <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
//                             <Nav.Link as={Link} to="/displaypro">Home</Nav.Link>
//                             <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
//                             <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
//                         </Nav>
//                         <Nav>
//                             <Nav.Link as={Link} to="/">Logout</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>


//       {/* <div className='useraccf'>
//         <div className='leftud'>
//           <div className='mc'><h3 style={{fontSize:"20px"}}><a href="#rightudc" style={{ textDecoration: "none", color: "white" }}>My Account</a></h3></div>
//           <div className='ai'><h3 style={{fontSize:"20px"}}><a href="#rightuda" style={{ textDecoration: "none", color: "white" }}>Address Information <button onClick={() => addinfo()}>+</button></a></h3></div>


//         </div>


//         <div className='rightud'>

//           <div className='rightudc' id='rightudc'>
//             {
//               loginuser.map(item => (
//                 <div className='myaccsty'>
//                   <h2 style={{ color: "rgb(35, 134, 184)" }}>My Account</h2>
//                   <h3>Welcome <span style={{ color: "orange" }}>{item.fname}</span>!</h3>
//                   <h3>Dob:{item.dob}</h3>
//                   <h3>Email:{item.email}</h3>
//                 </div>
//               ))

//             }
//           </div>
//           <div className='rightuda' >
//             {
//               dis && (
//                 <div>
//                   <h2 style={{ color: "rgb(35, 134, 184)" }}>Address</h2>
//                   <table>
//                     <tr>
//                       <td><label htmlFor="">Current Address</label></td>
//                       <td><textarea width='70px' height='60px' value={cuaddr} onChange={e => setCuaddr(e.target.value)} /></td>
//                     </tr>
//                     <tr>
//                       <td><label htmlFor="">Landmark</label></td>
//                       <td><input type="text" value={landmark} onChange={e => setLandmark(e.target.value)} /></td>
//                     </tr>
//                     <tr>
//                       <td><label htmlFor="">Pincode</label></td>
//                       <td><input type="number" value={pincode} onChange={e => setPincode(e.target.value)} /></td>
//                     </tr>
//                     <tr>
//                       <td><button style={{ color: "white", backgroundColor: "black", marginLeft: "48%", marginTop: "3%", padding: "5px 12px" }} onClick={() => handsub()}>Submit</button></td>
//                     </tr>
//                   </table>
//                 </div>
//               )}
//             <div >

//               {
//                 detailss.map(add => (
//                   <div className='aiinfo'>
//                     <h2 style={{ fontFamily: "Times", color: "rgb(35, 134, 184)" }}>Address Information</h2>
//                     <h3>Current Address:{add.cuaddr}</h3>
//                     <h3>Landmark:{add.landmark}</h3>
//                     <h3>Pincode:{add.pincode}</h3>
//                   </div>
//                 ))
//               }

//             </div>

//           </div>



//         </div>
//       </div> */}


// <div className='container-fluid useraccf py-4'>
//       <div className='row'>

//         <div className='col-md-10 col-sm-6 mb-4' >
//           <div className=' text-center py-3' style={{backgroundColor:"gray"}}>
//             <h3  className="m-0 fs-5">
//               <a href="#rightudc" className="text-white text-decoration-none">My Account</a>
//             </h3>
//           </div>
//           <div className=' text-center py-3 mt-2 width-30'style={{backgroundColor:"gray"}}>
//             <h3 className="m-0 fs-5">
//               <a href="#rightuda" className="text-white text-decoration-none">
//                 Address Information
//                 <button className="btn btn-link text-white p-0 ms-2" onClick={() => addinfo()}>+</button>
//               </a>
//             </h3>
//           </div>
//         </div>

        
//         <div className='col-md-2 col-sm-12'>

         
//           <div className='rightudc mb-4' id='rightudc'>
//             {loginuser.map((item, index) => (
//               <div key={index} className='p-4 border rounded'>
//                 <h2 className="text-primary fs-3">My Account</h2>
//                 <h3 className='fs-4'>Welcome <span className="text-warning">{item.fname}</span>!</h3>
//                 <h3 className='fs-4'>Dob: {item.dob}</h3>
//                 <h3 className='fs-4'>Email: {item.email}</h3>
//               </div>
//             ))}


//           </div>

//           <div className='rightuda' id='rightuda'>
//             {dis && (
//               <div className=" rounded mb-4 mt-34">
//                 <h2 className="text-primary">Address</h2>
//                 <table className="table" >
//                   <tbody>
//                     <tr>
//                       <td style={{width:"32px"}}><label htmlFor="currentAddress">Current Address</label></td>
//                       <td >
//                         <textarea className="form-control" id="currentAddress" rows="2" value={cuaddr} onChange={e => setCuaddr(e.target.value)} />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td><label htmlFor="landmark">Landmark</label></td>
//                       <td>
//                         <input type="text" className="form-control" id="landmark" value={landmark} onChange={e => setLandmark(e.target.value)} />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td><label htmlFor="pincode">Pincode</label></td>
//                       <td>
//                         <input type="number" className="form-control" id="pincode" value={pincode} onChange={e => setPincode(e.target.value)} />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td colSpan="2" className="text-center">
//                         <button className="btn btn-dark mt-3 px-4" onClick={() => handsub()}>Submit</button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             <div>
//               {detailss.map((add, index) => (
//                 <div key={index} className='p-4 border rounded mb-4'>
//                   <h2 className="text-primary">Address Information</h2>
//                   <h3 className='fs-4'>Current Address: {add.cuaddr}</h3>
//                   <h3 className='fs-4'>Landmark: {add.landmark}</h3>
//                   <h3 className='fs-4'>Pincode: {add.pincode}</h3>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>


      
//     </div>


//   )
// }

// export default Profile




import React, { useContext, useState } from 'react';
import { myContext } from './context';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Profile() {
  const { user, detailss, setDetails, loginuser } = useContext(myContext);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [cuaddr, setCuaddr] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleAddressSubmit = () => {
    const newAddress = { cuaddr, pincode, landmark };
    setDetails([...detailss, newAddress]);
    setCuaddr('');
    setPincode('');
    setLandmark('');
    setShowAddressForm(false); // Hide the form after submission
  };

  return (
    <div className="container-fluid user-profile">
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{ backgroundColor: "gray" }}>
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

      <div className="row mt-4">
        <aside className="col-md-3" >
          <div className="list-group" >
            <a href="#myAccount" className="list-group-item list-group-item-action">My Account</a>
            <a href="#addressInfo" className="list-group-item list-group-item-action" onClick={() => setShowAddressForm(true)}>Address Information</a>
          </div>
        </aside>

        <main className="col-md-9">
          <section id="myAccount" className="mb-4">
            {loginuser.map((item, index) => (
              <div key={index} className="p-4 border rounded">
                <h2 className="text-primary">My Account</h2>
                <h3>Welcome, <span className="text-warning">{item.fname}</span>!</h3>
                <p>Date of Birth: {item.dob}</p>
                <p>Email: {item.email}</p>
              </div>
            ))}
          </section>

          <section id="addressInfo" className="mb-4">
            {showAddressForm && (
              <div className="p-4 border rounded">
                <h2 className="text-primary">Add New Address</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleAddressSubmit(); }}>
                  <div className="mb-3">
                    <label htmlFor="currentAddress">Current Address</label>
                    <textarea
                      id="currentAddress"
                      className="form-control"
                      rows="2"
                      value={cuaddr}
                      onChange={e => setCuaddr(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="landmark">Landmark</label>
                    <input
                      type="text"
                      className="form-control"
                      id="landmark"
                      value={landmark}
                      onChange={e => setLandmark(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="number"
                      className="form-control"
                      id="pincode"
                      value={pincode}
                      onChange={e => setPincode(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">Submit</button>
                </form>
              </div>
            )}

            {detailss.map((address, index) => (
              <div key={index} className="p-4 border rounded mt-3">
                <h2 className="text-primary">Address Information</h2>
                <p>Current Address: {address.cuaddr}</p>
                <p>Landmark: {address.landmark}</p>
                <p>Pincode: {address.pincode}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Profile;
