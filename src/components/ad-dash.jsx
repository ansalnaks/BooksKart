import React, { useState } from 'react'
import images from './bookdd.webp'
import { useContext } from 'react'
import { myContext } from './context'
import { useNavigate, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Card, Button, Form, FormControl } from 'react-bootstrap';
import Footer from './footer'
<link rel="stylesheet" href="styleproject.css" />

function Admindash() {

    const [Bookname, setBname] = useState("")
    const [author, setAuther] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [showselect, setShowselect] = useState(false)
    const { adddetails, setAdddetails, productData, setProductData } = useContext(myContext)
    const [image, setCoverImage] = useState("")
    const [category, setCategory] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const [search, setSearchQuery] = useState("")
    const nav = useNavigate()



    function toggleadd() {
        setShowselect(!showselect)
    }


    function Add() {

        const existingbook = adddetails.find(book => book.Bookname.toLowerCase() === Bookname.toLowerCase())
        if (existingbook) {
            alert("The book alread Exists or edited")

            setBname('')
            setAuther('')
            setPrice('')
            setQuantity('')
            setCoverImage('')
            setCategory('')

        }
        else {
            const bookdet = { Bookname, author, price, image, quantity, category }
            if (isEditing) {
                const updatedDetails = [...adddetails]
                updatedDetails[editIndex] = bookdet
                setAdddetails(updatedDetails)

                const updatedProductData = [...productData]
                updatedProductData[editIndex] = bookdet
                setProductData(updatedProductData)

                setIsEditing(false)
                setEditIndex(null)
            } else {
                setAdddetails([...adddetails, bookdet]);
                setProductData([...productData, bookdet])
            }
            setBname('')
            setAuther('')
            setPrice('')
            setQuantity('')
            setCoverImage('')
            setCategory('')
        }
    }

    console.log("adminbook", adddetails);



    function edited(pdt, index) {
        setBname(pdt.Bookname)
        setAuther(pdt.author)
        setPrice(pdt.price)
        setQuantity(pdt.quantity)
        setCoverImage(pdt.image)
        setCategory(pdt.category)
        setIsEditing(true);
        setEditIndex(index)
    }



    function remove(rmpdt) {
        const rmdata = productData.filter(item => item !== rmpdt)
        setProductData(rmdata)

        const rmadd = adddetails.filter(item => item !== rmpdt)
        setAdddetails(rmadd)
        console.log("remove", rmdata);
    }

    const CombinedData = [...new Map([...productData, ...adddetails].map(item => [item.Bookname, item])).values()]
    const [filteredData, setFilteredData] = useState(CombinedData)

    function handlesearch(e) {
        const query = e.target.value
        setSearchQuery(query)

        const filterData = productData.filter(prod =>
            prod.Bookname.toLowerCase().includes(query.toLowerCase()) ||
            prod.author.toLowerCase().includes(query.toLowerCase()) ||
            prod.price.toString().includes(query) ||
            prod.category.toLowerCase().includes(query.toLowerCase()))
        setFilteredData(filterData)
    }
    console.log("filter", filteredData);


    return (

        <div className='adminf '  style={{width:"100%",height:"2000px"}}>
            {/* <div className='header' style={{ backgroundColor: " rgb(35, 134, 184)" }}>
                    <div className='sect1'>
                        <h3 style={{}}><span className='bb'>Books</span><span className='kk'>Kart</span></h3>&nbsp;&nbsp;
                        <img src={images} style={{ width: "25%", height: "95%", marginTop: "5%", mixBlendMode: "screen" }} />
                    </div>
                    <div className='sect2'>
                        <input style={{ marginTop: "4%", width: "80%", height: "67%", marginLeft: "2%", backgroundColor: " white", borderColor: "rgb(35, 134, 184)", border: "none" }}  type="text" placeholder='🔍Search for products' />
                        
                    </div>
                    <div className='adhome' >
                        <button className='cart' style={{ marginLeft: "4%" }}><Link style={{ textDecoration: "none" }} to={'/'}  >Logout</Link></button>
                    </div>
                </div> */}
            <Navbar collapseOnSelect expand="lg" className="navbar-custom" variant="dark" sticky="top" style={{
                backgroundColor: "gray", top: " 0",
                zIndex: "100px", position: "sticky"
            }}>
                <Container>
                    <Navbar.Brand as={Link} to="/displaypro">BooksKart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form className="d-flex" style={{ width: "30%" }}>
                            <FormControl
                                type="search"
                                placeholder=" Search for products"
                                className="me-2"
                                aria-label="Search"
                                onChange={handlesearch}
                                style={{
                                    backgroundColor: "white",
                                    border: "none",
                                    height: "65%",
                                    width: "223%",
                                    marginLeft: "3%"
                                }}
                            />
                        </Form>
                        <Nav className="me-auto">
                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='adminbody ' >

                 <div className='adminbd'>
                    <h2 style={{ fontSize: "23px", fontWeight: "bolder", marginTop: "5%", marginLeft: "3%", textShadow: "2px 2px 5px lightblue", fontFamily: "times" }}>Add <span style={{ color: 'orange' }}>Books</span> Here👉 <button style={{ backgroundColor: "black", color: "white", width: "26px", height: "25px" }} onClick={() => toggleadd()}>+</button></h2>
                    {
                        showselect && (
                            <div>
                                <table style={{ fontSize: "19px", fontFamily: "Times" }}>
                                    <tr><td>BookName: </td> <td><input style={{ width: "150% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid lightblue", }} type="text" value={Bookname} placeholder='' onChange={(e) => setBname(e.target.value)} /></td></tr>

                                    <tr><td>Author: </td> <td><input style={{ width: "150% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid lightblue", }} type='text' value={author} onChange={(e) => setAuther(e.target.value)} /></td> </tr>

                                    <tr><td>Cover Image URL: </td> <td><input style={{ width: "150% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid lightblue", }} type="text" value={image} onChange={(e) => setCoverImage(e.target.value)} /></td> </tr>

                                    <tr><td>{image && <img src={image} alt="Cover" style={{ width: "150px", height: "200px" }} />}</td> </tr>

                                    <tr><td>Category:</td><td><input style={{ width: "150% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid lightblue", }} type="text" value={category} onChange={(e) => setCategory(e.target.value)} /></td></tr>

                                    <tr><td>Price:</td> <td><input style={{ width: "150% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid lightblue", }} type='text' value={price} onChange={(e) => setPrice(e.target.value)} /></td></tr>

                                    <tr><td> Quantity:</td> <td><input style={{ width: "150% ", padding: "8px 10px 10px 0", border: "none", borderBottom: "1px solid lightblue", }} type='text' value={quantity} onChange={(e => setQuantity(e.target.value))} /></td></tr>
                                    <tr><td><button style={{ marginLeft: "50%", backgroundColor: "black", color: 'white', padding: "5px 8px", cursor: "pointer" }} onClick={() => Add()}>Submit</button></td></tr>
                                </table>
                            </div>
                        )
                    }
                </div> 

                
                <div style={{ display: "flex", gap: "4px", marginTop: "9%", flexWrap: "wrap",marginLeft:"7%" }}>
                    {
                        adddetails.map((books, index) => (
                            <div style={{ height: "10%", marginLeft: "2%", width: "20%", backgroundColor: "lightgray", borderRadius: "4px", padding: "15px", transition: "all 2s ease-in-out", justifyItems: "center", marginTop: "9%" }}>
                                <h4 style={{ fontSize: "20px" }}>{books.Bookname}</h4>
                                <img src={books.image} alt="" style={{ marginTop: "2%", width: "200px", height: "300px" }} />

                                <h4 style={{ fontSize: "21px" }}>{books.author}</h4>
                                <h3 style={{ fontSize: "18px" }}>Price₹{books.price}</h3>
                                <h2 style={{ fontSize: "18px" }}>Stock:{books.quantity}</h2>
                            </div>
                        )
                        )
                    }
                </div>


                {/* <div style={{ display: "flex", marginTop: "7%", gap: "14px", flexWrap: "wrap",marginLeft:"2%",marginBottom:"6%",transition: "all 2s ease-in-out" }}>
                    {
                        filteredData.map((item, index) => (
                             <Link to={`/productdetails/${item.id}`} style={{textDecoration:"none",color:"inherit",width:"22%"}}>
                            <div style={{marginLeft:"8%",width:"92%", backgroundColor:"lightgray", borderRadius: "4px", transition: 'transform 0.3s ease',padding: "2px",  justifyItems: "center",marginBottom:"6%" }}
                             onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                             onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <h3 style={{fontSize:"24px",marginTop:"4px"}}>{item.Bookname}</h3>
                                
                                <img src={item.image} alt="" style={{ width: "80%", height: "300px" }} />
                                <h4 style={{fontSize:"18px",marginTop:"3px"}}>{item.author}</h4>
                                <h3 style={{fontSize:"18px",marginTop:"3px"}}>Price:{item.price}</h3>
                                <h4 style={{fontSize:"18px",marginTop:"3px"}}>Stock:{item.quantity}</h4>
                                <div className="d-flex  gap-12 mt-3 mb-2"> 
                                <Button className='deledbtn' style={{marginLeft:"1px"}}  onClick={() => edited(item, index)}>Edit</Button>

                                <Button className='deledbtn' style={{marginLeft:"45px"}} onClick={() => remove(item)}>Delete</Button>
                                </div>
                            </div>
                            </Link>
                        ))
                    }

                </div> */}

                <div className="container mt-5 mb-4">
                    <div className="row" style={{ marginLeft: "1%" }}>
                        {productData.map((item, index) => (
                            <div className="col-6 col-md-3 mb-4" key={item.id}>
                                <Link to={`/productdetails/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    <div className="card h-70" style={{ backgroundColor: "lightgray", transition: 'transform 0.3s ease' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                            <h4 className="card-title" style={{ fontSize: "24px", marginTop: "4px" }}>{item.Bookname}</h4>
                                            <img src={item.image} alt="" className="img-fluid" style={{ height: "300px", objectFit: "cover" }} />
                                            <h4 className="card-author" style={{ fontSize: "18px", marginTop: "3px" }}>{item.author}</h4>
                                            <h3 className="card-price" style={{ fontSize: "18px", marginTop: "3px" }}>Price: {item.price}</h3>
                                            <h4 className="card-stock" style={{ fontSize: "18px", marginTop: "3px" }}>Stock: {item.quantity}</h4>
                                            <div className="d-flex justify-content-between mt-3">
                                                <Button className='custom-btn deledbtn' onClick={(e) =>{e.preventDefault(); edited(item, index)}}>
                                                    <i className="fas fa-edit"></i> Edit
                                                </Button>
                                                <Button className='custom-btn deledbtn' onClick={(e) =>{e.preventDefault(); remove(item)}}>
                                                    <i className="fas fa-trash"></i> Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
    
        </div >
    )
}

export default Admindash