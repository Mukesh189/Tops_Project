import React,{useState,useEffect} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {toast} from'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
  const redirect = useNavigate();
 
  const[formValue,setformValue]=useState({
  email:"",
  password:""  
 });

 const onchange=(e)=>{
  setformValue({...formValue,[e.target.name]:e.target.value})
  console.log(formValue)
}

 function validation () 
 {
    var result=true;
    if (formValue.email=="") 
    {
      toast.error("Please Correct Email !")
      result=false
    }

    if (formValue.password=="") 
    {
      toast.error("Password is requierd")
      result=false
    }
    return result;
 }


 
 const onsubmit=async(e)=>{
  e.preventDefault();
  if (validation())
   {
    const res=await axios.get(` http://localhost:3000/user?email=${formValue.email}`);
    if(res.data.length>0)
    {
        if (res.data[0].password==formValue.password) 
        {
            localStorage.setItem('username',res.data[0].name);
            localStorage.setItem('userid',res.data[0].id);
            
            // login thaya pachi back nahi jay
            window.history.replaceState(null,"","/");
            toast.success('Login Success !');
            redirect('/');
        }
        else
        {
            toast.error('Password is Incorrect !');
            return false;
        }
    }
    else
    {
        toast.error('Email Id is Incorrect !');
        return false;
    }

  }
}

 


 
 return (
<section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> 
  <div className="signin"> 
    <div className="content"> 
      <h2>Login</h2> 
      <div className="form"> 
        <div className="inputBox"> 
          <input type="text" value={formValue.email} name='email' onChange={onchange} required /> <i>Username</i> 
        </div> 
        <div className="inputBox"> 
          <input type="password" value={formValue.password} name='password' onChange={onchange} required /> <i>Password</i> 
        </div> 
        <div className="links">  <Link to="/signup">If not register then cLick here for Signup</Link> 
        </div> 
        <div className="inputBox"> 
          <input type="submit" onClick={onsubmit}  /> 
        </div> 
      </div> 
    </div> 
  </div> 
</section> 


  )
};

export default Login