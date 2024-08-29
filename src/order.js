import React, { useState } from 'react';

function Order() {
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    comment: ''
  });

  const handleClick = () => {
    setForm(!form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3002/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          contact: '',
          comment: ''
        });
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error');
    }
  };
  

  return (
    <>
      <div className='reg-nav'>
        <button onClick={handleClick}>Sign Up</button>
        <center>
          <em>HIT sign up, with some of your information for subscription and to know more about us</em>

          {form && (
            <div className='form-div'>
              <form onSubmit={handleSubmit}>
                <b><i><p className='comment'>Press Order Via Comment:</p></i></b>
                <label>Names:<input className='input' type='text' name='name' value={formData.name} onChange={handleChange} required /></label><br/>
                <label>Email:<input className='input' type='email' name='email' value={formData.email} onChange={handleChange} required /></label><br/>
                <label>Contact:<input className='input' type='tel' name='contact' value={formData.contact} onChange={handleChange} required /></label><br/>
                <label>Comment:</label><br/>
                <textarea name='comment' value={formData.comment} onChange={handleChange} width={200} height={200} required /><br/>
                <label><input type='submit' value="Submit" /></label>
                <label><input type='reset' value="Reset" onClick={() => setFormData({ name: '', email: '', contact: '', comment: '' })} /></label><br/><br/>
              </form>
            </div>
          )}
        </center>
      </div>
    </>
  );
}

export default Order;
