import React from 'react'
import Order from './order'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Address from './Address'
import Heading from './components/header' 

export default function App() {
  return (
  <>
  
    <Router>
        <Routes>
      <Route path='/order'element={<Order />} />
      <Route path="/" element={ <Heading />}/>
      <Route path="/contact" element={ <Address /> } />
      </Routes>
      </Router>

    <div>
   
    
      
    </div>
    </>
  )
}
