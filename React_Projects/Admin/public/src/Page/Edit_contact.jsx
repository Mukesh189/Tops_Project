import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
function Edit_contact() {
  
  const redirect=useNavigate();
  useEffect(()=>{
    editData();
  },[]);

  const [formValue,setformValue]=useState({
    name:"",
    email:"",
    sub:"",
    msg:""
  });

  const{id}=useParams();
  const editData=async()=>{
    const res=await axios.get(`http://localhost:3000/contact/${id}`)
    setformValue(res.data);
  }

  const onChange=(e)=>{
    setformValue({...formValue,[e.target.name]:e.target.value});
    console.log(formValue);
  }

  function Validation () 
  {
    var result=true;
    if (formValue.name=="") 
    {
        toast.error("Name is requried !")
        result=false;
    }

    if (formValue.email=="") 
    {
        toast.error("Email is requried !")
        result=false;
    }

    if (formValue.sub=="") 
    {
        toast.error("Sub is requried !")
        result=false;
    }

    if (formValue.msg=="") 
    {
        toast.error("Msg is requried !")
        result=false;
    }
    return result;
  }
  
  const onSubmit=async(e)=>{
    e.preventDefault();
    if (Validation()) 
    {
        const res=await axios.patch(`http://localhost:3000/contact/${id}`,formValue);
        if (res.status==200) 
        {
            setformValue({...formValue,name:"",email:"",sub:"",msg:""})
            toast.success("Register Success !")
            return redirect(`/manage_contect`)
        }
    }
  }
  
  
    return (
        <div id="page-wrapper">
        <div id="page-inner">
          <div classname="row">
     
      </div>
      
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-info">
            <div className="panel-heading">
              Edit User
            </div>
            <div className="panel-body">
              <form action='' method='post'>        
                <div className="form-group">
                  <label>Enter Name</label>
                  <input value={formValue.name} onChange={onChange} name="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Enter the Email</label>
                  <input value={formValue.email} onChange={onChange} name='email' className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label>Enter the Sub</label>
                  <input value={formValue.sub} onChange={onChange} name='sub' className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Enter the MSg</label>
                  <input value={formValue.msg} onChange={onChange} name='msg' className="form-control" type="text" />
                </div>
                
                <button type="submit" onClick={onSubmit} className="btn btn-info">Submit </button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
  
    </div>
   
  </div>
  )
}

export default Edit_contact