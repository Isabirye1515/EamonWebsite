import React,{useState} from 'react'
import Welcome from './welcome'
import Data from './data'
import About from './about'
import Footer from './footer'
import Address from '../Address'
import Order from '../order'
function Heading() {

const handleClick = (e)=>{
window.location.href = "http://localhost:3000/order"
}
const handleContacts = (e)=>{
  window.location.href = "http://localhost:3000/contact"
  }
  const [info,setInfo] = useState(false)
  const handleInfo = () =>{
    setInfo(!info)
  }

  return (
    <div>
      <header>
        <h1 className='text'>EAMON DREADS SALON KAMPALA</h1>
        <div id='nav' >

       
        <a href='https://mail.google.com/mail/u/0/#inbox' >email us</a>
        <a href='http://google.com' >quick help</a>
        </div>
        
      </header>
      <Welcome />
      <Data />
      <About />
      <Address />
      <Order />
      <Footer />
    </div>
  )
}
export default Heading;
