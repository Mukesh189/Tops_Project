import React,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import{toast} from 'react-toastify'
import axios from 'axios'
function Add_categories() {
   
  const [formvalue,setformvalue]=useState({
    proname:"",
    prodes:"",
    proimg:""
  });

  const onchange=(e)=>{
    setformvalue({...formvalue,id: new Date().getTime().toString(),[e.target.name]:e.target.value})
    console.log(formvalue);
  }
  
  function validation () 
  {
    var result=true;
    if (formvalue.proname=="")
     {
      toast.error("Categories Name is requred !")
      result=false;
    }

    if (formvalue.prodes =="")
     {
      toast.error("Categories Des is requred !")
      result=false;
    }
    
    if (formvalue.proimg =="")
    {
     toast.error("Categories Img is requred !")
     result=false;
   }

   return result;
  }
  
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) 
    {
      const res = await axios.post(`  http://localhost:3000/categories`,formvalue);
      if (res.status == 201) {
        toast.success("Inqury Submittted Success !");
        setformvalue({...formvalue,proname:"", prodes:"",proimg:""});
      }
    }
  };
  
  return (
      <div id="page-wrapper">
      <div id="page-inner">
        <div classname="row">
      <div classname="col-md-12">
        <h1 classname="page-head-line">Add Categories</h1>
       
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            BASIC FORM
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label>Select Categories</label><br/>
                <select>
                  <option>Choose Categories</option>
                  <option value="">Man Cloths</option>
                  <option value="">Woman Cloths</option>
                  <option value="">Camera</option>
                  <option value="">Shoes</option>
                  <option value="">Cream</option>
                </select>
              </div>

              <div className="form-group">
                <label>Categories Name</label>
                   <input className="form-control" value={formvalue.proname} name='proname' onChange={onchange} placeholder='Enter the Categories Name' type="text" /> 
              </div>

              <div className="form-group">
                <label>Categories Des</label>
                <input className="form-control" value={formvalue.prodes} name='prodes' onChange={onchange} placeholder='Enter the Categories Des' type="text" />
              </div>
              
              <div className="form-group">
                <label>Categories Image</label>
                <input className="form-control" value={formvalue.proimg} name='proimg' onChange={onchange} placeholder='Enter the Imge URL' type="url" />
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

export default Add_categories