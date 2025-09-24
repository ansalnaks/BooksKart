import React, { useState, useEffect, useContext } from 'react'
//import image from './searchlogo.png'
import image from './hand-drawn-flat-design-stack-books-illustration_23-2149341898.avif'
import userl from './userlogo.png'
import { useNavigate, Link } from 'react-router-dom'
import { myContext } from './context'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap';
import Footer from'./footer.js' 
import { Navbar, Nav, Form, Button, FormControl, Dropdown } from 'react-bootstrap';
<link rel="stylesheet" href="styleproject.css" />


function Home() {
  const [showselect, setShowselect] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { productData } = useContext(myContext)

  const [searchquery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(productData)
  const nav = useNavigate()

  function firstClick() {
    setShowselect(!showselect)
  }
  function handleSel(e) {
    const changel = e.target.value
    if (changel === 'ul') {
      nav('/login')
    }
  }

  function handlesearch(e) {
    const query = e.target.value
    setSearchQuery(query)

    const filterData = productData.filter(prod => prod.Bookname.toLowerCase().includes(query.toLowerCase()) ||
      prod.price.toString().includes(query) || prod.category.toLowerCase().includes(query.toLowerCase()))
    setFilteredData(filterData)
  }
  console.log("filter", filteredData);



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
  ];





  // const handlePrevClick = () => {
  //   setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  // };

  // const handleNextClick = () => {
  //   setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  // };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => clearInterval(interval);
  }, []);




  return (
    <div className='fulld'>
      {/* <div className='header'>
        <div className='sect1'>
          <h3 style={{}}><span className='bb'>Books</span><span style={{ color: "black" }} className='kk'>Kart</span></h3>&nbsp;&nbsp;
          <img src={image} style={{ width: "25%", height: "95%", marginTop: "5%" }} />
        </div>
        <div className='sect2'>
          <input style={{ marginTop: "3%", width: "80%", height: "65%", marginLeft: "2%", backgroundColor: " white" }} type="text" value={searchquery} onChange={handlesearch} placeholder='Search for products' />
        </div>


        <div className='sect33'>
          <button className="dropdown" onClick={() => firstClick()}>Login</button>
          {
            showselect && (
              <div className="dropdown-content">
                <Link to={"/login"}>User Login</Link>
                <Link to={"/adminlogin"}>Admin Login</Link>
              </div>
            )
          }
        </div>


        <div className='sect5'>
          <button onClick={() => alert(" After Login can access it.Please Login!")} className='cart'>🛒Cart</button>
        </div>
      </div> */}
      <Navbar bg="lightgray" expand="lg" style={{ padding: '10px 20px' ,backgroundColor:"lightgray",position:"sticky",top:"0",zIndex:"1000"}}>
      <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <h3>
          <span style={{ color: 'orange' }}>Books</span>
          <span style={{ color: 'black' }}>Kart</span>
        </h3>
        <img
          src={image}
          alt="Books Kart Logo"
          style={{ width: '80px', height: '60px', marginLeft: '10px',mixBlendMode:"multiply",backgroundColor:"lightgray",filter:"brightness(1.1)" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Form inline style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <FormControl
          type="text"
          placeholder="Search for products"
          value={searchquery}
          onChange={handlesearch}
          style={{ width: '60%' }}
        />
      </Form>

      <Nav>
      <Dropdown style={{backgroundColor:"lightgray",marginTop:"2px"}} show={showselect} onMouseLeave={() => setShowselect(false)}>
          <Dropdown.Toggle variant="secondary" onClick={firstClick}>
            Login
          </Dropdown.Toggle>
          <Dropdown.Menu style={{backgroundColor:"gray"}}>
            <Dropdown.Item as={Link} to="/login">User Login</Dropdown.Item>
            <Dropdown.Item as={Link} to="/adminlogin">Admin Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          variant="outline-primary"
          onClick={() => alert("After Login, you can access it. Please Login!")}
          style={{ marginLeft: '15px' }}
        >
          🛒 Cart
        </Button>
      </Nav>
      </Navbar.Collapse>
    </Navbar>




      {/* <div className='homebody'>
        <div className='content'>
          {
            data.map((d, index) => (
              <div key={index}
                className={`sliderf ${index === currentSlide ? 'active' : 'none'}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <div className="imageslide">
                  <img src={d.image} alt="" className='imgsc' />
                </div>

                <div className='ssnq'>

                  <h2 style={{ fontSize: "23px" }}><span style={{ color: "black", fontFamily: "Lucida Handwriting,cursive" }}>{d.quotes}</span></h2>
                  <h3 style={{ fontSize: "18px" }}><span style={{ color: "white" }}>{d.name}</span></h3>
                  <button style={{ backgroundColor: "black", color: "white", border: "none" }}>Read more</button>
                </div>
              </div>
            ))
          }

        </div>

      </div> */}


<div style={{ width: '100%', margin: 'auto', marginTop: '20px',backgroundColor:"lightgrey" }}>
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
    

      <div style={{  display: 'flex', flexWrap: 'wrap',gap: '20px',marginLeft:"22px",marginTop:"5%"}}>
        {filteredData.map((item, index) => (
          <Card
            key={index}
            style={{width: '23%',padding: '15px',backgroundColor: 'lightgray',borderRadius: '8px',textAlign: 'center', transition: 'transform 0.3s ease', }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: '20px', marginBottom: '10px' }}>
                {item.Bookname}
              </Card.Title>
              <Card.Img
                src={item.image} alt="Book Cover"style={{ width: '80%', height: '300px', objectFit: 'cover', marginBottom: '10px', }}
              />
              <Card.Text style={{ fontSize: '17px', fontWeight:"bolder",}}>{item.author}</Card.Text>
              <Card.Text style={{fontSize: '17px', fontWeight:"bolder"}}> ₹{item.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
     <Footer/>
    </div>

  )
}

export default Home