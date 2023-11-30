import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Manage_Products() {
  const redirect = useNavigate();

  useEffect(() => {
    fetchAllCategories();
  }, []);
  const [data, setData] = useState([]);

  const fetchCategoryData = async (category) => {
    try {
      const res = await axios.get(`http://localhost:3000/${category}`);
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchAllCategories = async () => {
    const categories = ["man_shirt", "woman_top", "camera", "shoes", "cream"];
    const promises = categories.map((category) => fetchCategoryData(category));

    try {
      const categoryData = await Promise.all(promises);
      const combinedData = categoryData.flat(); // Combine data from all categories
      setData(combinedData);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelet = async (id) => {
    const res = await axios.delete(`http://localhost:3000/man_shirt/${id}`);

    if (res.status === 200) {
      toast.success("Delete Successful!");
      fetchAllCategories();
    }
  }

  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line"> Manage Product</h1>
            <h1 className="page-subhead-line">
              This is dummy text , you can replace it with your original text.{" "}
            </h1>
          </div>
        </div>
        {/* /. ROW  */}
        <div className="row">
          <div className="col-md-12">
            {/*   Kitchen Sink */}
            <div className="panel panel-default">
              <div className="panel-heading">Manage Product</div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#ID</th>
                       
                        <th>Product Name</th>
                        <th>Product Des</th>
                        <th>Main_Price</th>
                        <th>dis_Price</th>
                        <th>Product Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index, entarr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                          
                            <td>{value.name}</td>
                            <td>{value.categories}</td>
                            <td>{value.mainprice}</td>
                            <td>{value.discprice}</td>
                         
                            <td>
                              <img src={value.proimg} width={170} height={170} alt="" />
                            </td>
                            <td>
                              <button className="btn btn-danger" onClick={()=>onDelet(value.id)}>Delete</button>
                              &nbsp;&nbsp;
                            
                              <button className="btn btn-primary" onClick={()=>{redirect('/edit_product/'+value.id)}}>Edit</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End  Kitchen Sink */}
          </div>
        </div>
      </div>
      {/* /. PAGE INNER  */}
    </div>
  );
}

export default Manage_Products;
