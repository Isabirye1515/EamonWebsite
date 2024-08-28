import React, { useState } from 'react';

export default function Footer() {
  const [days, setDays] = useState(false);

  // Function to toggle working days visibility
  const toggleDays = () => {
    setDays(prevDays => !prevDays);
  };

  return (
    <div className="footer">
      <div>
        <p>We are Located a the Park View Shopping Center</p>
        <a href="https://www.google.com/maps/uv?pb=!1s0x177dbd0030f1c41b%3A0x38c2996249a4c145!3m1!7e115!4s%2Fmaps%2Fplace%2Feamon%2Bdreads%2F%400.3132406%2C32.5764346%2C3a%2C75y%2C10.07h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sMyoruxfGuTc3alhrqKz_gQ*212e0*214m2*213m1*211s0x177dbd0030f1c41b%3A0x38c2996249a4c145%3Fsa%3DX%26ved%3D2ahUKEwiLt5fsv5aIAxWST0EAHT4EBl8Qpx96BAgTEAA!5seamon%20dreads%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sMyoruxfGuTc3alhrqKz_gQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111">
          Directions
        </a>
        <a href="tel:0703819029">Call</a>
        <button onClick={toggleDays}>Working Days</button>
        
      </div>

      {days && (
        <ol>
          <li>Sunday 24 hrs</li>
          <li>Monday 24 hrs</li>
          <li>Tuesday 24 hrs</li>
          <li>Wednesday 24 hrs</li>
          <li>Thursday 24 hrs</li>
          <li>Friday 24 hrs</li>
        </ol>
      )}
    </div>
  );
}
