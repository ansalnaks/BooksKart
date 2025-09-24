import React, { useContext, useState, useEffect } from 'react'
import { myContext } from './context'
import image from './hand-drawn-flat-design-stack-books-illustration_23-2149341898.avif'
import userl from './userlogo.png'
import { useNavigate, Link } from 'react-router-dom'
import { Navbar, Container, Form, FormControl, NavDropdown, Nav, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Footer from './footer'
import { Carousel } from 'react-bootstrap'


<link rel="stylesheet" href="styleproject.css" />


function Displaypro() {


    const { productData, user, setProductData, like, setLike, cart, setCart, adddetails, count, setCount } = useContext(myContext)
    console.log("user", user);

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [showselect, setShowselect] = useState(false)
    const [searchquery, setSearchQuery] = useState("")
    const [currentSlide, setCurrentSlide] = useState(0)


    const CombinedData = [...new Map([...productData, ...adddetails].map(item => [item.Bookname, item])).values()]
    const [filteredData, setFilteredData] = useState(CombinedData)

    console.log("adminbook", adddetails);


    const nav = useNavigate()

    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css');
    }, []);

    function firstClick() {
        setShowselect(!showselect)
    }


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
            setCount(count + 1)
        }
    }
    console.log("Cart", cart);



    function handlesearch(e) {
        const query = e.target.value
        setSearchQuery(query)

        const filterData = CombinedData.filter(prod =>
            prod.Bookname.toLowerCase().includes(query.toLowerCase()) ||
            prod.author.toLowerCase().includes(query.toLowerCase()) ||
            prod.price.toString().includes(query) ||
            prod.category.toLowerCase().includes(query.toLowerCase()))
        setFilteredData(filterData)
    }
    console.log("filter", filteredData);



    const categories = [...new Set(productData.map(item => item.category))]
    console.log("Category", categories);

    // function handleSel(e){
    //     const changel=e.target.value
    //       nav('/profile')
    // }

    function handleSelect(e) {
        const pp = e.target.value
        nav(`/prdt/${pp}`)
    }

    const goToNextSlide = () => {
        setCurrentSlide((previous) => previous === data.length - 1 ? 0 : previous + 1)
    }
    useEffect(() => {
        const interval = setInterval(goToNextSlide, 4000);
        return () => clearInterval(interval)
    }, [])

    const data = [
        {
            name: "Khaled Hosseini",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUH5YG1mXyrNkF2lpVmxIg2Jc3zKa4f3pKw&s",
            quotes: "“It may be unfair, but what happens in a few days, sometimes even a single day, can change the course of a whole lifetime...”"
        },
        {
            name: "J.K. Rowling",
            image: "https://www.themoviedb.org/t/p/original/iRVpNCEUDXfjaVqDrIkukUrMHH.jpg",
            quotes: "“It is our choices, Harry, that show what we truly are, far more than our abilities.”"
        },
        {
            name: "Mark Twain",
            image: "https://www.babelio.com/users/AVT_Mark-Twain_20.jpeg ",
            quotes: "“The secret of getting ahead is getting started.”"
        },
        {
            name: "Jane Austen",
            image: " https://www.ilpopolano.com/wp-content/uploads/2021/07/jane-austen.jpg",
            quotes: "“It is not what we say or think that defines us, but what we do.”"
        },
        {
            name: "Gabriel Garcia Marquez",
            image: " https://th.bing.com/th/id/R.4d71a796c018d3230d1ba688dde88b7e?rik=CFtOod5mYkSJDQ&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2fgabriel-garcia-marquez-2.jpg&ehk=%2bL5Yl7sASspvx8jgrVMkB4mXoX8Hvr059XRCinIKZQ8%3d&risl=&pid=ImgRaw&r=0",
            quotes: "“What matters in life is not what happens to you but what you remember and how you remember it.”"
        },
        {
            name: "George Orwell",
            image: " https://i.pinimg.com/originals/fa/84/da/fa84da00eb9cf1f0a1bceba90461b515.jpg",
            quotes: "“In a time of deceit telling the truth is a revolutionary act.”"
        }
    ]

    return (
        <div className='full'>

            {/* <div className='header' style={{ backgroundColor: "rgb(35, 134, 184)", position: "sticky", top: "0", zIndex: "100" }}>
                <div className='sect1'>
                    <h3 style={{}}><span className='bb'>Books</span><span className='kk'>Kart</span></h3>&nbsp;&nbsp;
                    <img src={image} style={{ width: "25%", height: "95%", marginTop: "5%" }} />
                </div>

                <div className='sect2'>
                    <input style={{ marginTop: "4%", width: "80%", height: "65%", marginLeft: "2%", backgroundColor: " white", border: "none" }} value={searchquery} onChange={handlesearch} type="text" placeholder='🔍Search for products' />
                </div>
                <div>
                    <select name="" id="" onChange={handleSelect} style={{ width: "95%", height: "40%", marginTop: "14%", boxShadow: "2px white" }}>
                        <option value="">Select Category</option>{
                            categories.map(pdt =>
                                <option value={pdt}>{pdt}</option>
                            )
                        }</select>
                </div>

                <div className='sect3' >
                    <button className='dropdown' onClick={() => firstClick()} ><img src={userl} alt='im' style={{ width: "37%", height: "60%" }} />&nbsp; Profile</button>
                    {showselect && (
                        <div className='dropdown-content'>
                            <Link to={'/profile'}>Profile</Link>
                        </div>
                    )}

                </div>

                <div className='sect5'>
                    <button className='cart'> <Link style={{ textDecoration: "none", color: "black" }} to={"/cart"}>🛒Cart</Link></button>
                </div>

                <div className='sect6'>
                    <button className="wishlist" ><Link style={{ textDecoration: "none ", color: "black" }} to={"/wishlistpro"}>Wishlist </Link> </button>
                </div>
                <div style={{ width: "6%", height: "44%", marginTop: "1%", marginRight: "2%" }}>
                    <button style={{ marginTop: "-20px", width: "85%", height: "84%", boxShadow: "1px white", borderColor: "white" }}>  <Link style={{ textDecoration: "none", boxShadow: "1px white", color: "black" }} to={'/'}>Logout</Link>  </button>
                </div>
            </div> */}


            <Navbar collapseOnSelect
                expand="lg" className="navbar-custom" variant="dark"
                style={{
                    backgroundColor: "gray",
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    fontFamily: "Times",
                    fontSize: "small",
                    boxShadow: "2px 3px 2px gray",
                    width: "100%",
                    height: "75px",
                }}
            >
                <Container fluid className="d-flex align-items-center">

                    {/* Brand Section */}
                    <Navbar.Brand style={{ width: "20%", marginLeft: "5%" }} className="d-flex align-items-center">
                        <h3 style={{ color: "rgb(248, 119, 5)", fontSize: "94%" }}><span className="bb">Books</span><span className="kk" style={{ color: "white", fontSize: "161%", fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>Kart</span></h3>
                        <img src={image} alt="Logo" style={{ width: "16%", height: "15%", marginLeft: "10px", mixBlendMode: "multiply", backgroundColor: "lightgray", filter: "brightness(1.)" }} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-between">

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

                        {/* Category Select Dropdown */}
                        <Form.Select
                            onChange={handleSelect}
                            style={{
                                width: "14%",
                                marginRight: "20px",
                                height: "20%",
                                boxShadow: "2px white",
                                marginLeft: "4%"
                            }}
                        >
                            <option value="">Book Store</option>
                            {categories.map((pdt, index) => (
                                <option key={index} value={pdt}>{pdt}</option>
                            ))}
                        </Form.Select>

                        <Nav.Link as={Link} to="/profile" className="d-flex align-items-center mx-3" style={{
                            width: "11%",
                            height: "40%",
                            color: "white",
                            fontWeight: "bolder",
                            fontSize: "18px",
                            borderColor: "white",
                            boxShadow: "1px white",
                            cursor: "pointer",

                        }}>
                            <img src={userl} alt="Profile" style={{ width: "30%", height: "17px", marginRight: "8px" }} />
                            Profile
                        </Nav.Link>

                        {/* Cart Link */}
                        <Nav.Link as={Link} to="/cart" className="d-flex align-items-center mx-3" style={{
                            width: "11%",
                            height: "40%",
                            color: "white",
                            fontWeight: "bolder",
                            fontSize: "18px",
                            borderColor: "white",
                            boxShadow: "1px white",
                            cursor: "pointer",

                        }}>
                            🛒 Cart
                        </Nav.Link>

                        {/* Wishlist Link */}
                        <Nav.Link as={Link} to="/wishlistpro" className="d-flex align-items-center" style={{
                            width: "5%",
                            height: "59%",
                            // backgroundColor: "white",
                            borderColor: "white",
                            boxShadow: "1px white",
                            cursor: "pointer",
                            color: "white",
                            fontWeight: "bolder",
                            fontSize: "18px",
                            marginLeft: "-3%"


                        }}>
                            Wishlist
                        </Nav.Link>


                        <Button variant="outline-light" className="ms-3" as={Link} to="/" style={{
                            width: "6%",
                            height: "4%",
                            marginTop: "1%",
                            marginRight: "2%",
                            boxShadow: "1px white",
                            borderColor: "white",

                        }}>
                            Logout
                        </Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>







            <div style={{ width: '100%', height: "auto", margin: 'auto', marginTop: '2%', backgroundColor: "lightgray" }}>
                <Carousel activeIndex={currentSlide} onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}>
                    {data.map((d, index) => (
                        <Carousel.Item key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                <div style={{ flex: '1', textAlign: 'center' }}>
                                    <img
                                        src={d.image}
                                        alt={d.name}
                                        style={{ width: '300px', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                </div>
                                <div style={{ flex: '1', padding: '20px' }}>
                                    <h2 style={{ fontSize: '23px', fontFamily: 'Lucida Handwriting, cursive', color: 'black' }}>
                                        {d.quotes}
                                    </h2>
                                    <h3 style={{ fontSize: '18px', color: 'gray', marginTop: '10px' }}>{d.name}</h3>
                                    <Button style={{ backgroundColor: 'black', color: 'white', border: 'none', marginTop: '20px' }}>
                                        Read more 
                                    </Button>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "27px", marginLeft: "4px", marginTop: "2%" }} href="#id">
                {
                    filteredData.map((product, id) =>
                        <Link
                            to={`/productdetails/${product.id}`}
                            key={id}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className='hhpro' style={{ marginLeft: "10%", width: "100%", backgroundColor: "lightgray", borderRadius: "4px", padding: "22px",
                             transition: "all 2s ease-in-out", justifyItems: "center",position:"relative" }} 
                             onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
                             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} 
                            >
                                <img src={product.image || product.coverImage} alt="product" style={{ marginTop: "2%", width: "200px", height: "300px" }} />
                                <h4 style={{ fontSize: "18px", marginTop: "3px" }}>{product.Bookname || product.bname}</h4>
                                <h4 style={{ fontSize: "small" }}>Author:{product.author || product.auther}</h4>
                                <h3 style={{ fontSize: "Larger" }}>Price ₹{product.price || product.pricep}</h3>
                                <div style={{display:"flex"}}>
                                <button style={{ border: "none", backgroundColor: "bisque" }} onClick={(e) => { e.preventDefault(); handleLike(product) }}>
                                    {
                                        like.includes(product) ? "Unlike👎" : "Like👍"
                                    }
                                </button>&nbsp;&nbsp;
                                <button style={{ border: "none", backgroundColor: "bisque"}} onClick={(e) => { e.preventDefault(); handleCart(product) }}>
                                    {
                                        cart.includes(product) ? "Added🛒" : "Add to 🛒"
                                    }
                                </button>
                                </div>
                            </div>
                        </Link>
                    )}
            </div>


            {/* <div className='bodydisplay'>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "4px" }}>
        {
            filteredData.map((product, id) => (
                <Link
                    to={`/productdetails/${product.id}`}
                    key={id}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Card style={{ width: '18rem', border: "none", borderRadius: "8px", transition: "transform 0.2s" }} className="product-card">
                    <Card.Title>{product.Bookname || product.bname}</Card.Title>
                        <Card.Img variant="top" src={product.image || product.coverImage} alt="product" style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
                        <Card.Body>
                            
                            <Card.Subtitle className="mb-2 text-muted">Author: {product.author || product.auther}</Card.Subtitle>
                            <Card.Text>
                                Price: ₹{product.price || product.pricep}
                            </Card.Text>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outline-primary" onClick={(e) => { e.preventDefault(); handleLike(product) }}>
                                    {like.includes(product) ? "Unlike👎" : "Like👍"}
                                </Button>
                                <Button variant="outline-success" onClick={(e) => { e.preventDefault(); handleCart(product) }}>
                                    {cart.includes(product) ? "Added🛒" : "Add to Cart🛒"}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Link>
            ))}
    </div>
</div> */}



            <Footer />
        </div>

    )
}

export default Displaypro