import React, { useState } from 'react';
import one from '../pics/third.jpg'
import two from '../pics/forth.jpg'
import four from '../pics/fifth.jpg'
import five from '../pics/sixth.jpg'
import six from '../pics/seventh.jpg'
import seven from '../pics/eight.jpg'
import eight from '../pics/nineth.jpg'
import nine from '../pics/tenth.jpg'
import ten from '../pics/elleventh.jpg'
import eleven from '../pics/twelfth.jpg'

function Data() {
  const [people, setPeople] = useState([
    one, two, four, five, six, seven, eight, nine, ten
  ]);

  return (
    <div className='datas' >
      {people.map((element, index) => (
        <div className='data' key={index}>
        <img src={element}  height={300} width={300} alt='images' />
          </div>
      ))}
    </div>
  );
}

export default Data;
