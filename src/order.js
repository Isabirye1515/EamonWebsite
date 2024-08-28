import React ,{useState} from 'react'

function Order() {
  const[form,setForm] = useState(false)
  const handleClick = ()=>{
  setForm(!form)
  }
  return (
    <>
    <div className='reg-nav' >
      
        
        <button  onClick={handleClick}   >Sign Up</button>
        <center>
        <h1  style={{width:"300px",right:"40px" ,fontSize:"42px", color:"aqua"}} >Sign up with some of your information for subscription and 
          to know more about us

        </h1>
        {form &&(
          <div className='form-div' >
          
            <form>
              <div  >
                </div><br/><br/>\
                <p>Press Order Via Comment:</p>
                <label>Names:<input className='input' type='text' /></label><br/><br/>
                <label>Email:<input className='input' type='email' /></label><br/><br/>
                <label>Contact:<input className='input' type='tel' /></label><br/><br/>
                <label>Coment:</label><br/>
                <textarea  type='textarea'  width={200} hieght={200} /><br/><br/>
                <label><input type='submit' /></label>
                <label><input  type='reset' /></label><br/><br/>
            </form>
            
        </div>
        
        )}
        
        </center>
      
    </div>
    
    </>
  )
}
export default Order