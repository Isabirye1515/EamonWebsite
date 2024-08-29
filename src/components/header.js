import React,{useState} from 'react'
import Welcome from './welcome'
import Data from './data'
import About from './about'
import Footer from './footer'
import Address from '../Address'
import Order from '../order'
function Heading() {
  const [info,setInfo] = useState(false)
  const handleMenu = () =>{
    setInfo(!info)
  }

  return (
    <div>
      <header>
        <h1 className='text'>EAMON DREADS SALON KAMPALA</h1>
        <div id='nav' >
          <button onClick={handleMenu} >MENU</button>
        </div>

        {info && (<div className='div'>
          <b>Home</b><br/>
          <select>Links
            <option>email us</option>
            <option>FAQS</option>
          </select><br/>

          <input type='text' /><button>Search</button>
        </div>)}
      </header>
      <Welcome />
     <b><i><p className='label' >Our prettied customers and our fare prices</p></i></b> 
      <Data />
      <b><i><p className='label'>Our skill have esteemed us.</p></i></b>
      <About />
      <b><i><p className='label' >Don't miss our sites. </p></i></b>
      <Address />
      <b><i><p  className='label' >Want to notify us, Comment below.</p></i></b>
      <Order />
      <Footer />
    </div>
  )
}
export default Heading;
