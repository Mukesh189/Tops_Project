import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from'react-toastify'
import {Await, useNavigate, useParams} from 'react-router-dom'
function Edit_product() {
  
    // step:1 redirect
    const redirect=useNavigate();
    useEffect(()=>{
        editdata();
    },[]);

    const [formValue,setformValue]=useState({
        name:"",
        des:"",
        mainprice:"",
        discprice:"",
        proimg:""
    });
  
    const{id}=useParams();
    const editdata=async()=>{
        const res=await axios.get(`  http://localhost:3000/productname/${id}`);
        setformValue(res.data);
    }    

    // step:3 fomr ma change klarva mate
    const onchange=(e)=>{
        setformValue({...formValue,[e.target.name]:e.target.value})
        console.log(formValue);
    }

    // step:4 Validation
    function validation () 
    {
        var result=true;
        if (formValue.name=="") 
        {
            toast.error("Name is Requried !")
            result=false;
        }
        
        if (formValue.des=="") 
        {
            toast.error("des is Requried !")
            result=false;
        }

        if (formValue.mainprice=="") 
        {
            toast.error("mainprice is Requried !")
            result=false;
        }

        if (formValue.discprice=="") 
        {
            toast.error("discprice is Requried !")
            result=false;
        }

        
        if (formValue.proimg=="") 
        {
            toast.error("proimg is Requried !")
            result=false;
        }

        return result;

    }

    // step:5 submit mate
    const onsubmit=async(e)=>{
        e.preventDefault();
        if (validation()) 
        {
            const res=await axios.patch(`  http://localhost:3000/productname/${id}`,formValue);
            if (res.status==200) 
            {
                setformValue({...formValue,name:"",des:"",mainprice:"",discprice:"",proimg:""})
                toast.success("Register Success !")
                return redirect(`/manage_Products`)
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
                  <label>Enter the Descripation</label>
                  <input value={formValue.des} onChange={onchange} name='des' className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Enter the Main Price</label>
                  <input value={formValue.mainprice} onChange={onchange} name='mainprice' className="form-control" type="number" />
                </div>
                <div className="form-group">
                  <label>Enter the Discount Price</label>
                  <input value={formValue.discprice} onChange={onchange} name='discprice' className="form-control" type="number" />
                </div>
                
                <div className="form-group">
                  <label>Enter the Image</label>
                  <input value={formValue.proimg} onChange={onchange} name='proimg' className="form-control" type="src" />
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

export default Edit_product