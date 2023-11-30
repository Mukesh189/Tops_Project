import React,{useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Add_admin() {
 
 const [formvalue,setFormvalue]=useState({
 name:"",
  email:"",
  password:""
 });

 const onchang=(e)=>{
  setFormvalue({...formvalue,id: new Date().getTime().toString(),[e.target.name]:e.target.value,});
  console.log(formvalue);
}
function validetion ()
{ var result=true;
  if (formvalue.name=="") 
  {
    toast.error("Name is a required !" )
    result=false
  }
  if (formvalue.email=="") 
  {
    toast.error("Email is a required !" )
    result=false
  }
  if (formvalue.password=="") 
  {
    toast.error("Password is a required !" )
    result=false
  }
  return result;
}
 
const onsubmit=async(e)=>{
  e.preventDefault();
  if (validetion()) 
  {
    const res=await axios.post(` http://localhost:3000/manage_admin`,formvalue);
    if (res.status==201) 
    {
      toast.success("Inqury Submitted Success !");
      setFormvalue({...formvalue,name:"", email:"",password:""})
    }
  }
};
 
 
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div classname="row">
      <div classname="col-md-12">
        <h1 classname="page-head-line">Add admin</h1>
       
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            BASIC FORM
          </div>
          <div className="panel-body">
            <form role="form" method='post' action=''>
            <div className="form-group">
                <label>Enter Name</label>
                <input className="form-control" value={formvalue.name} placeholder='Enter the Name' name='name' onChange={onchang} type="text" />
              </div>
              <div className="form-group">
                <label>Enter Email</label>
                <input className="form-control" value={formvalue.email} placeholder='Enter the Email' name='email' onChange={onchang} type="email" />
              </div>
              <div className="form-group">
                <label>Enter the Password</label>
                <input value={formvalue.password} name='password' onChange={onchang} placeholder='Enter the Password' className="form-control" type="password" />
              </div>
              
              <button type="submit" className="btn btn-info" onClick={onsubmit}>Submit </button>  
            </form>
          </div>
        </div>
      </div>
    
    </div>

  </div>
 
</div>
  )
}

export default Add_admin