import React,{useState,useEffect} from 'react'
import './Login.css'
import {toast} from'react-toastify'
import axios from 'axios'
function Signup() {
  
  const[formValue,setfomrValue]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  });

  const onchange=(e)=>{
      setfomrValue({...formValue,id :new Date().getTime() .toString(),[e.target.name]:e.target.value})
      console.log(formValue)
  }
  
  function validation () 
  {
    var result=true;
    if (formValue.name=="") 
    {
      toast.error("Name is requred !")
      result=false;
    }

    if (formValue.email=="") 
    {
      toast.error("Email is requred !")
      result=false;
    }

    if (formValue.password=="") 
    {
      toast.error("Password is requred !")
      result=false;
    }

    if (formValue.mobile=="") 
    {
      toast.error("Mobile  Number is requred !")
      result=false;
    }
    return result;
  }
  
  const onsubmit=async(e)=>{
    e.preventDefault();
    if (validation()) 
    {
      const res=await axios.post(`http://localhost:3000/user`,formValue)
      if (res.status==201) 
      {
        toast.success("Signup Successfully!")
        setfomrValue({...formValue, name:"",email:"",password:"",mobile:""})
      }
    }
  }
  
  
  return (
    <section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> 
  <div className="signin"> 
    <div className="content"> 
      <h2>SignUp</h2> 
      <div className="form"> 
      <form action="" method='post'>
      <div className="inputBox"> 
          <input type="text" value={formValue.name} name='name' onChange={onchange}   required /> <i>Name</i> 
        </div> 
        <div className="inputBox"> 
          <input type="email" value={formValue.email} name='email' onChange={onchange} required   /> <i>Email</i> 
        </div> 
        
        <div className="inputBox"> 
          <input type="password" value={formValue.password} name='password' onChange={onchange} required /> <i>Password</i> 
        </div> 
        <div className="inputBox"> 
          <input type="number" value={formValue.mobile} name='mobile' onChange={onchange}  required /> <i>Mobile</i> 
        </div> 
        
        <div className="inputBox"> 
          <input type="submit" onClick={onsubmit} /> 
        </div>
        </form> 
      </div> 
    </div> 
  </div> 
</section> 
  )
}

export default Signup