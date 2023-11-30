import React,{useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Login() {
  
  const redirect=useNavigate();
  const [formvalue,setFormvalue]=useState({
    email:"",
    password:""
  });  

  const onchange=(e)=>{
    setFormvalue({...formvalue,[e.target.name]:e.target.value});
    console.log(formvalue)
  }
  
  function validetion() 
  {
      var result=true;
      if (formvalue.email=="")
       {
        toast.error("Email is required")
        result=false;  
      }  
      if (formvalue.password=="")
      {
       toast.error("Password is required")
       result=false;  
     }
     return result;
  }
  
  
  const onsubmit=async(e)=>{
    e.preventDefault();
    if (validetion())
     {
      const res=await axios.get(`http://localhost:3000/manage_admin?email=${formvalue.email}`);
      if(res.data.length>0)
      {
          if (res.data[0].password==formvalue.password) 
          {
              localStorage.setItem('username',res.data[0].name);
              localStorage.setItem('userid',res.data[0].id);

              toast.success('Login Success !');
              window.history.replaceState(null, '', '/dashboard');
              redirect('/dashboard');
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
 
    <div className="container-fluid" style={{backgroundColor: "#E2E2E2", height: "100vh"}}>
  <div className="row text-center " style={{paddingTop: 100}}>
    <div className="col-md-12">
      <img src="assets/img/logo-invoice.png" />
    </div>
  </div>
  <div className="row ">
    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
      <div className="panel-body">
        <form role="form">
          <hr />
          <h5>Enter Details to Login</h5>
          <br />
          <div className="form-group input-group">
            <span className="input-group-addon"><i className="fa fa-tag" /></span>
            <input type="text" value={formvalue.email} name='email' onChange={onchange} className="form-control" placeholder="Your Username " />
          </div>
          <div className="form-group input-group">
            <span className="input-group-addon"><i className="fa fa-lock" /></span>
            <input type="password" value={formvalue.password} name='password' onChange={onchange} className="form-control" placeholder="Your Password" />
          </div>
          <div className="form-group">
            <label className="checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <span className="pull-right">
              <a href="index.html">Forget password ? </a> 
            </span>
          </div>
          <a href="index.html" className="btn btn-primary" onClick={onsubmit}>Login Now</a>
          <hr />
          Not register ? <a href="index.html">click here </a> or go to <a href="index.html">Home</a> 
        </form>
      </div>
    </div>
  </div>
</div>


  )
}

export default Login