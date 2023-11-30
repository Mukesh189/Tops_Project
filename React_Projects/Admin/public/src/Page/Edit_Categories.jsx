import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
function Edit_Categories() {
  // step:1
  const redirect = useNavigate();
  useEffect(() => {
    editdata();
  }, []);

  const [formValue, setformValue]=useState({
    proname: "",
    prodes: "",
    proimg: "",
  });

  //   step:2
  const {id}=useParams();
  const editdata = async()=> {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    setformValue(res.data);
  };

  // step:3
  const onchange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  };

  // step:4
  function validation() {
    var result = true;
    if (formValue.proname=="") 
    {
      toast.error("Categories Name is requied");
      result = false;
    }

    if (formValue.prodes=="") 
    {
      toast.error("Categories Des is requied");
      result = false;
    }

    if (formValue.proimg=="") 
    {
      toast.error("Categories Img is requied");
      result = false;
    }
    return result;
  }

  // step:5
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) 
    {
      const res = await axios.patch(
        `http://localhost:3000/categories/${id}`,
        formValue
      );
      if (res.status == 200) {
        setformValue({
          ...formValue,
          proname: "",
          prodes: "",
          proimg: "",
        });
        toast.success("Register Success !");
        return redirect("/manage_categories");
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
              <div className="panel-heading">Edit Categories</div>
              <div className="panel-body">
                <form action="" method="post">
                  <div className="form-group">
                    <label>Enter Categories Name</label>
                    <input
                      value={formValue.proname}
                      onChange={onchange}
                      name="proname"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter the Descripation</label>
                    <input
                      value={formValue.prodes}
                      onChange={onchange}
                      name="prodes"
                      className="form-control"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label>Enter the Image</label>
                    <input
                      value={formValue.proimg}
                      onChange={onchange}
                      name="proimg"
                      className="form-control"
                      type="src"
                    />
                  </div>

                  <button type="submit" className="btn btn-info" onClick={onsubmit}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit_Categories;
