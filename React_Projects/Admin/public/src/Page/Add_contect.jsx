import React,{useState,useEffect} from 'react'
import axios from'axios';
import {toast} from 'react-toastify'
function Add_contect() {
  
  const [formValue,setformValue]=useState({
    name:"",
    email:"",
    sub:"",
    msg:""
  });

  const onchange=(e)=>{
    setformValue({...formValue,id:new Date() .getTime().toString(),[e.target.name] :e.target.value});
    console.log(formValue)
  }
  
  function validation () 
  {
      var result=true;
      if (formValue.name=="") 
      {
        toast.error("Name is requred")
        result=false;  
      }

      if (formValue.email=="") 
      {
        toast.error("Email is requred")
        result=false;  
      }

      if (formValue.sub=="") 
      {
        toast.error("Sub is requred")
        result=false;  
      }

      if (formValue.msg=="") 
      {
        toast.error("Msg is requred")
        result=false;  
      }
      return result;
  }

  const onsubmit=async(e)=>{
    e.preventDefault();
    
    if (validation) 
    {
      const res=await axios.post(`  http://localhost:3000/contact `,formValue);
      if (res.status==201) 
      {
        toast.success("Inqury Sucessfull !")
        setformValue({...formValue, name:"",email:"",sub:"",msg:""})
        
      }
      
    }
  }
  
  
  
  
  
  return (
    <div id="page-wrapper">
    <div id="page-inner">
      <div classname="row">
    <div classname="col-md-12">
      <h1 classname="page-head-line">Add Contect</h1>
     
    </div>
  </div>
  
  <div className="row">
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="panel panel-info">
        <div className="panel-heading">
          BASIC FORM
        </div>
        <div className="panel-body">
          <form role="form" method='post'>
            <div className="form-group">
              <label>Enter Name</label>
              <input className="form-control" value={formValue.name} name='name' onChange={onchange} placeholder='Enter the Name' type="text" />
            </div>

            <div className="form-group">
              <label>Enter Email</label>
              <input className="form-control" value={formValue.email} name='email' onChange={onchange} placeholder='Enter the Email' type="email" />
            </div>

            <div className="form-group">
              <label>Enter Sub</label>
              <input className="form-control" value={formValue.sub} onChange={onchange} name='sub' placeholder='Enter the Subject' type="text" />
            </div>

            <div className="form-group">
              <label>Enter Massage</label>
              <input className="form-control" value={formValue.msg} onChange={onchange} name='msg'  placeholder='Enter the Massage' type="text" />
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

export default Add_contect