import React, { useState } from 'react';
import one from '../pics/third.jpg';
import two from '../pics/forth.jpg';
import four from '../pics/fifth.jpg';
import five from '../pics/sixth.jpg';
import six from '../pics/seventh.jpg';
import seven from '../pics/eight.jpg';
import eight from '../pics/nineth.jpg';
import nine from '../pics/tenth.jpg';
import ten from '../pics/elleventh.jpg';
import eleven from '../pics/twelfth.jpg';

function Data() {
  const [people, setPeople] = useState([
    { image: one, hairStyle: "Kink", price: 150000 },
    { image: two, hairStyle: "Kink", price: 150000 },
    { image: four, hairStyle: "Kink", price: 150000 },
    { image: five, hairStyle: "Kink", price: 150000 },
    { image: six, hairStyle: "Kink", price: 180000 },
    { image: seven, hairStyle: "Kink", price: 150000 },
    { image: eight, hairStyle: "Kink", price: 150000 },
    { image: nine, hairStyle: "Kink", price: 180000 },
    { image: ten, hairStyle: "Kink", price: 150000 },
    { image: eleven, hairStyle: "Kink", price: 150000 }
  ]);

  return (
    <center>
    <div className='datas'>
      {people.map((person, index) => (
        <div className='data' key={index}>
          <img src={person.image} height={300} width={400} alt='images' /><br/>
          
          <b>Hair style : {person.hairStyle}</b><br/>
          <b style={{color:"red"}} >Start price : {person.price}</b>
          
          

        </div>
        

      ))}
    </div>
    </center>
  );
}

export default Data;
