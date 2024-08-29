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
        <em>HIT sign up , with some of your information for subscription and 
        to know more about us</em>

        
        {form &&(
          <div className='form-div' >
          
            <form>
              <div  >
                </div><br/><br/>
                <b><i><p className='comment' >Press Order Via Comment :</p></i></b>
                <label>Names:<input className='input' type='text' /></label><br/>
                <label>Email:<input className='input' type='email' /></label><br/>
                <label>Contact:<input className='input' type='tel' /></label><br/>
                <label>Comment:</label><br/>
                <textarea  type='textarea'  width={200} hieght={200} /><br/>
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