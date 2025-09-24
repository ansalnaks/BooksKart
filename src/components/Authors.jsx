import React, { useContext, useState } from 'react'
import { Button,Nav,Dropdown,Form,FormControl, Navbar, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import image from './hand-drawn-flat-design-stack-books-illustration_23-2149341898.avif'
import { myContext } from './context'


function Authors() {
    const [showselect,setShowselect]=useState(false)
    const [searchquery,setSearchQuery] =useState("")
    // const {productData}=useContext(myContext)
    const [filteredData,setFilteredData]=useState([])

    const data = [
        {
          name: "Khaled Hosseini",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUH5YG1mXyrNkF2lpVmxIg2Jc3zKa4f3pKw&s",
          quotes: "“It may be unfair, but what happens in a few days, sometimes even a single day, can change the course of a whole lifetime...”",
          wLink:"https://en.wikipedia.org/wiki/Khaled_Hosseini",
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

    function firstClick(){
        setShowselect(!showselect)
    }
    function handlesearch(e) {
        const query = e.target.value
        setSearchQuery(query)
    
        const filterData = data.filter(prod => prod.name.toLowerCase().includes(query.toLowerCase()) 
        )
        setFilteredData(filterData)
      }
      console.log("filter", filteredData);
  return (
    <div style={{width:"100%",height:"700%"}}>
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
          placeholder="Search for Authors"
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

    <div style={{display:"flex",width:"100%",height:"30%",gap:"18px",marginTop:"5%",flexWrap:"wrap"}}>
       {
        filteredData.map((item)=>(
            
            <Card style={{width:"20%",height:"20%",gap:"13px",alignItems:"center",marginLeft:"1%",boxShadow:"1px 2px 1px gray"}} 
             onMouseEnter={(e)=>e.currentTarget.style.transform="scale(1.01)"} 
            onMouseLeave={(e)=>e.currentTarget.style.transform="scale(1)"}>
                <Card.Img src={item.image} alt="author image" style={{width:"200px",height:"300px",borderRadius:"55%"}}/>
                    
                <Card.Body>
                  <Card.Title> {item.name}</Card.Title> 
                  
                  <Button><Link style={{color:"white",textDecoration:"none"}} to={item.wlink}>View Details</Link> </Button>
               
                </Card.Body>
            </Card>
        ))
       }
    </div>



    </div>
  )
}

export default Authors