import React from 'react'

function Order() {
  const handleClick = ()=>{
  window.location.href = "http://localhost:3000/"
  }
  return (
    <>
    <div className='reg-nav' >
      <div  >
        <button   onClick={handleClick} >Back Home</button>
        <button>Sign Up</button>
        <h1  style={{width:"300px", left:"40px" ,fontSize:"42px"}} >Sign up with for subscription and 
          to know more abour us

        </h1>
        <div className='form-div' >
          <center>
            <form>
              <div  >
                <h1>Fill The form please!</h1>
                </div><br/><br/>
                <label>Names:<input type='text' /></label><br/><br/>
                <label>Email:<input type='email' /></label><br/><br/>
                <label>Contact:<input type='tel' /></label><br/><br/>
                <label>Coment:</label><br/>
                <textarea  type='textarea'  width={200} hieght={200} /><br/><br/>
                <label><input type='submit' /></label>
                <label><input  type='reset' /></label><br/><br/>
            </form>
            </center>
        </div>
        
      </div>
      
    </div>
    
    </>
  )
}
export default Order