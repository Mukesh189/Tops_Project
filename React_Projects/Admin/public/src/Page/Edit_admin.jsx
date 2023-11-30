import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
function Edit_admin() {
  const redirect=useNavigate();
  useEffect(()=>{
    editData();
  },[])
  
  const[formValue,setformValue]=useState({
    name:"",
    email:"",
    password:""
  });

const{id}=useParams();
const editData=async()=>{
    const res=await axios.get(`http://localhost:3000/manage_admin/${id}`)
    setformValue(res.data);
}

  const onChange=(e)=>{
    setformValue({...formValue,[e.target.name]:e.target.value});
    console.log(formValue);
  }

  function validation () 
  {
      var result=true;
      if (formValue.name=="") 
      {
          toast.error("Name is requried")
          result=false;
      }

      if (formValue.email=="") 
      {
          toast.error("Email is requried")
          result=false;
      }

      if (formValue.password=="") 
      {
          toast.error("Password is requried")
          result=false;
      }

    

      return result;

  }
  
  
  const onSubmit=async(e)=>{
    e.preventDefault();
    if (validation()) 
    {
        const res=await axios.patch(`http://localhost:3000/manage_admin/${id}`,formValue);
        if (res.status==200) 
        {
            setformValue({...formValue,name:"",email:"",password:""})
            toast.success("Register Success !")
            return redirect(`/manage_admin`)
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
          Edit Admin
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
              <label>Enter the Password</label>
              <input value={formValue.password} onChange={onChange} name='password' className="form-control" type="password" />
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

export default Edit_admin