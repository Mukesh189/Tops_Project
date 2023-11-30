import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Add_Products() {
  const [formValue, setformValue] = useState({
    name: "",
    mainprice: "",
    discprice: "",
    proimg: "",
    category: "",
  });

  const onChange = (e) => {
    setformValue({
      ...formValue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const category = formValue.category;
      const formData = 
      {
        name: formValue.name,
        mainprice: formValue.mainprice,
        discprice: formValue.discprice,
        proimg: formValue.proimg,
      };
      let apiEndpoint = "";

      switch (category) {
        case "Man Cloths":
          apiEndpoint = "http://localhost:3000/man_shirt";
          break;
        case "Woman Cloths":
          apiEndpoint = "http://localhost:3000/woman_top";
          break;
        case "Camera":
          apiEndpoint = "http://localhost:3000/camera";
          break;
        case "Shoes":
          apiEndpoint = "http://localhost:3000/shoes";
          break;
        case "Cream":
          apiEndpoint = "  http://localhost:3000/cream";
          break;
        default:
          // Handle for the case when no category is selected
          break;
      }

      if (apiEndpoint) {
        try {
          const res = await axios.post(apiEndpoint, formData);
          if (res.status === 201) {
            toast.success("Inquiry Submitted Successfully!");
            setformValue({
              name: "",
              mainprice: "",
              discprice: "",
              proimg: "",
              category: "",
            });
          }
        } catch (error) {
          // Handle API request error
          console.error(error);
        }
      }
    }
  };

  function validation() {
    var result = true;
    if (formValue.name === "") {
      toast.error("Product Name Field is required!");
      result = false;
    }

    if (formValue.mainprice === "") {
      toast.error("Product Price Field is required!");
      result = false;
    }
    if (formValue.discprice === "") {
      toast.error("Des Price Field is required!");
      result = false;
    }
    if (formValue.proimg === "") {
      toast.error("Des Image Field is required!");
      result = false;
    }

    if (formValue.category === "Choose Categories") {
      toast.error("Please select a category!");
      result = false;
    }

    return result;
  }

  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div classname="row">
          <div classname="col-md-12">
            <h1 classname="page-head-line">Add Product</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">BASIC FORM</div>
              <div className="panel-body">
                <form role="form" method="post" action="">
                  <div className="form-group">
                    <label>Select Categories</label>
                    <br />
                    <select
                      name="category"
                      value={formValue.category}
                      onChange={onChange}
                    >
                      <option>Choose Categories</option>
                      <option value="Man Cloths">Man Cloths</option>
                      <option value="Woman Cloths">Woman Cloths</option>
                      <option value="Camera">Camera</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Cream">Cream</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      className="form-control"
                      value={formValue.name}
                      name="name"
                      onChange={onChange}
                      placeholder="Enter the Product Name"
                      type="text"
                    />
                  </div>

                  <div className="form-group">
                    <label>Product Main Price</label>
                    <input
                      className="form-control"
                      value={formValue.mainprice}
                      name="mainprice"
                      onChange={onChange}
                      placeholder="Enter the Product Main Price"
                      type="number"
                    />
                  </div>

                  <div className="form-group">
                    <label>Product Dis Price</label>
                    <input
                      className="form-control"
                      value={formValue.discprice}
                      name="discprice"
                      onChange={onChange}
                      placeholder="Enter the Product Dis Price "
                      type="number"
                    />
                  </div>

                  <div className="form-group">
                    <label>Categories Image</label>
                    <input
                      className="form-control"
                      value={formValue.proimg}
                      name="proimg"
                      onChange={onChange}
                      placeholder="Enter the Imge URL"
                      type="url"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="btn btn-info"
                  >
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
export default Add_Products;
