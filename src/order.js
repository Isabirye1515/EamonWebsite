import React from 'react'

function Order() {
  const handleClick = ()=>{
  window.location.href = "http://localhost:3000/"
  }
  return (
    <>
    <div className='reg-nav' >
      
        <button   onClick={handleClick} >Back Home</button>
        <button>Sign Up</button>
        <h1  style={{width:"300px",right:"40px" ,fontSize:"42px", color:"aqua"}} >Sign up with some of your information for subscription and 
          to know more about us

        </h1>
        <div className='form-div' >
          <center>
            <form>
              <div  >
                <h1>Remember To Comment Your Interest!</h1>
                </div><br/><br/>
                <label>Names:<input className='input' type='text' /></label><br/><br/>
                <label>Email:<input className='input' type='email' /></label><br/><br/>
                <label>Contact:<input className='input' type='tel' /></label><br/><br/>
                <label>Coment:</label><br/>
                <textarea  type='textarea'  width={200} hieght={200} /><br/><br/>
                <label><input type='submit' /></label>
                <label><input  type='reset' /></label><br/><br/>
            </form>
            </center>
        </div>
        
      
      
    </div>
    
    </>
  )
}
export default Order