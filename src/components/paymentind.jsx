import React, { useContext, useState } from 'react'
import { myContext } from './context'
import { useLocation, useNavigate } from 'react-router-dom'
import image from './masvisa.jpg'

function Paymentind() {
  const { totalPrice, cart, setCart, count, setCount } = useContext(myContext)
  const location = useLocation()
  const { price } = location.state || { price: 0 }

  console.log("price", price);


  const nav = useNavigate()
  const [cn, setCn] = useState("")
  const [cno, setCno] = useState("")
  const [exd, setExd] = useState("")
  const [cvv, setCvv] = useState("")
  const [phno, setphno] = useState("")
  const [payment, setPayment] = useState("")
  const [paymentType, setPaymentType] = useState("")

  function Handlepayment(e) {
    if (cvv.length == 3 && new Date(exd) > new Date() && cno.length>9) {
      const pv = { cn, cno, cvv, exd }
      setPayment([...payment, pv])
      alert(`₹${price+5} Payment Successful`)
      setCn("")
      setCno("")
      setCvv("")
      setExd("")


      const purchasedItem = cart.find(item => item.price * (item.selectquant || 1) === price);
      if (purchasedItem) {
        const updatedCart = cart.filter(item => item.Bookname !== purchasedItem.Bookname);
        setCart(updatedCart);
      }
      nav('/displaypro')
      //   setCart([])
      //   setCount([])


    }
    else {
      alert("Payment Failed!Enter valid cvv no , cno or Exp date")
    }
  }
  console.log("Individual Prie:", price);



  function upipayment() {
    if (phno.length > 10) {
      const pv = { phno }
      setPayment([...payment, pv])
      alert(`₹${price + 5} Payment Successful`)

      const purchasedIm = cart.find(item => item.price * (item.selectquant || 1) === price)
      if (purchasedIm) {
        const upcart = cart.filter(item => item.Bookname !== purchasedIm.Bookname)
        setCart(upcart)
      }
      nav("/displaypro")
    } else {
      alert("Phone number is not valid!")
    }
  }
  console.log("cart", cart);


  console.log("Paymentinfo", payment);

  return (
    <div className='payf'>

      <div className='paymentsec'>
        <h1 style={{ marginTop: "4%", color: "rgb(35, 134, 184)", textShadow: "2px 2px 5px gray" }}>Payment Information</h1>
        <div style={{ paddingLeft: "7%", fontWeight: "bolder", marginLeft: "5%" }}>
          Select Type : <br />
          <select name="" id="" onChange={(e) => setPaymentType(e.target.value)} >
            <option value="dc">Debit Card</option>
            <option value="cc">Credit Card</option>
            <option value="up">UPI payments</option>
          </select><br />
          {(paymentType == 'dc' || paymentType == 'cc') && (
            <div style={{ fontWeight: "bold" }}>
              Cardholder Name: <br /><input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="text" value={cn} onChange={e => setCn(e.target.value)} /><br />
              Card Number: <br /><input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="number" value={cno} onChange={e => setCno(e.target.value)} /><br />
              Expiry Date : <br /><input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="date" value={exd} onChange={e => setExd(e.target.value)} /><br />
              CVV: <br /> <input style={{ border: "none", borderBottom: "1px solid blue", width: "45%" }} type="number" value={cvv} onChange={e => setCvv(e.target.value)} /> <br />

              <button style={{ justifyItems: "center", marginTop: "2%", padding: "4px 28px", color: "white", backgroundColor: "black" }} onClick={() => Handlepayment()}>Pay ₹<span style={{ color: "red" }}> {price}</span></button>
            </div>


          )
          }
          {(paymentType == 'up') && (
            <div>
              upi Id/Phone no: <br /><input type="text" value={phno} minLength={"10"} required onChange={e => setphno(e.target.value)} /><br />
              <button style={{ justifyItems: "center", marginTop: "2%", padding: "4px 28px", color: "white", backgroundColor: "black" }} onClick={() => upipayment()}> Pay₹<span style={{ color: "red" }}> {price}</span></button>
            </div>
          )

          }
        </div>

        {/* <div style={{width:"16%",height:"30%" ,backgroundColor:"gray",marginLeft:"8%"}}>
          <img src={image} alt=""  style={{width:"200px",width:"300px"}}/>
        </div> */}
      </div>
    </div>
  )
}

export default Paymentind