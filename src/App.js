//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register';
import { useState } from 'react';
import { myContext } from './components/context';
import Login from './components/login';
import Home from './components/home';
import './components/styleproject.css';
import { products } from './components/listofproducts';
import Displaypro from './components/displaypro';
import Wishlistpro from './components/wishlist';
import Cart from './components/cart';
import Dcategory from './components/dcategory';
import Profile from './components/profile';
import AdminLogin from './components/adminlogin';
import Admindash from './components/ad-dash';
import Payment from './components/payment';
import Paymentind from './components/paymentind';
import ProductDetails from './components/productDetails';
import About from './components/about'
import Authors from './components/Authors';




function App() {

  const [user,setUser]=useState([])
  const [loginuser,setLoginuser]=useState([])
  const [productData,setProductData]=useState(products)
  const [like,setLike]=useState([])
  const [cart,setCart]=useState([])
  const [adddetails,setAdddetails]=useState([])
  const [totalPrice,setPrice]=useState("")
  const [count,setCount]=useState(0)
  const [detailss, setDetails] = useState([])

  const values={user,setUser,productData,setProductData,like,setLike,cart,setCart,adddetails,setAdddetails,totalPrice,setPrice,count,setCount,detailss,setDetails,loginuser,setLoginuser}
  return (
    
    <div className="App">
    <myContext.Provider value={values}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="displaypro" element={<Displaypro/>}></Route>
      <Route path="wishlistpro" element={<Wishlistpro/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="/prdt/:category" element={<Dcategory/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path='/ad-dash' element={<Admindash/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/paymentind' element={<Paymentind/>}></Route>
      <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/authors' element={<Authors/>}></Route>
    </Routes>
    </BrowserRouter>
    

    </myContext.Provider>
    </div>
  );
}

export default App;
