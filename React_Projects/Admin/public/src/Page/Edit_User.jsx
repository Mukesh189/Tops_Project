import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from'react-router-dom'
import {toast} from 'react-toastify'
function Edit_User() {
  
    // Step:1 redirect and use effect
    const redirect=useNavigate();
  useEffect(()=>{
    editdata();
  },[]);

  const[formValue,setformValue]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
  });


//   step:2 id get karva mate

  const {id} = useParams();
const editdata=async()=>{
    const res=await axios.get(`http://localhost:3000/user/${id}`)
    setformValue(res.data); 
}
  
    // Step :3 Form change mate
    const onchange=(e)=>{
        setformValue({...formValue,[e.target.name]:e.target.value})
        console.log(formValue);
    }
  
    // step :- 4 form validetion
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

        if (formValue.mobile=="") 
        {
            toast.error("Mobile is requried")
            result=false;
        }

        return result;

    }

    // step:5 Submit mate
    const onsubmit=async(e)=>{
        e.preventDefault();
        if (validation()) 
        {
            const res=await axios.patch(`http://localhost:3000/user/${id}`,formValue);
            if (res.status==200) 
            {
                setformValue({...formValue,name:"",email:"",password:"",mobile:""})
                toast.success("Register Success !")
                return redirect(`/manage_user`)
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
                  <input value={formValue.name} onChange={onchange} name="name" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Enter the Email</label>
                  <input value={formValue.email} onChange={onchange} name='email' className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label>Enter the Password</label>
                  <input value={formValue.password} onChange={onchange} name='password' className="form-control" type="password" />
                </div>
                <div className="form-group">
                  <label>Enter the Mobile</label>
                  <input value={formValue.mobile} onChange={onchange} name='mobile' className="form-control" type="mobile" />
                </div>
                
                <button type="submit" onClick={onsubmit} className="btn btn-info">Submit </button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
  
    </div>
   
  </div>
    )
}

export default Edit_User