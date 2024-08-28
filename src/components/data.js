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
    { image: one, hairStyle: "kink", price: 5000 },
    { image: two, hairStyle: "kinki", price: 5000 },
    { image: four, hairStyle: "kink", price: 5000 },
    { image: five, hairStyle: "kink", price: 5000 },
    { image: six, hairStyle: "kink", price: 8000 },
    { image: seven, hairStyle: "kink", price: 5000 },
    { image: eight, hairStyle: "kink", price: 5000 },
    { image: nine, hairStyle: "kink", price: 8000 },
    { image: ten, hairStyle: "kink", price: 5000 },
    { image: eleven, hairStyle: "kink", price: 5000 }
  ]);

  return (
    <center>
    <div className='datas'>
      {people.map((person, index) => (
        <div className='data' key={index}>
          <img src={person.image} height={200} width={200} alt='images' /><br/>
          
          <b>HAIRSTYLE:{person.hairStyle}</b>
          <h3 style={{color:"red"}} >CHARGE:{person.price}</h3>
          
          

        </div>
        

      ))}
    </div>
    </center>
  );
}

export default Data;
