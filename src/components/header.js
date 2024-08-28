import React from 'react'
import Welcome from './welcome'
import Data from './data'
import About from './about'
import Footer from './footer'
function Heading() {

const handleClick = (e)=>{
window.location.href = "http://localhost:3000/order"
}
const handleContacts = (e)=>{
  window.location.href = "http://localhost:3000/contact"
  }

  return (
    <div>
      <header>
        <h1 className='text'>EAMON DREADS SALON KAMPALA</h1>
        <div id='nav' >
          <button  >home</button>
        <button onClick={handleClick} >Make an Order</button>
        <button onClick={handleContacts} >contact us</button>
        <a href='https://mail.google.com/mail/u/0/#inbox' >email us</a>
        <a href='http://google.com' >quick help</a>
        </div>
        
      </header>
      <Welcome />
      <Data />
      <About />
      <Footer />
    </div>
  )
}
export default Heading;
