import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,useParams } from "react-router-dom";
function Manage_categories() {
  const redirect=useNavigate();
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);
  
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    setData(res.data);
  };

  const onDelet=async(id)=>{
    const res=await axios.delete(`http://localhost:3000/categories/${id}`)

    if(res.status="200")
    {
      toast.success("Delet Sucessfull !")
      fetch();
    }

  }

  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">Manage Categories</h1>
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
              <div className="panel-heading">Manage Products</div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#ID</th>
                        <th>cate_name</th>
                        <th>cate_desc</th>
                        <th>cate_img</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index, entarr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.proname}</td>
                            <td>{value.prodes}</td>
                            <td>
                              <img src={value.proimg} width={140} alt="" />
                            </td>
                            <td>
                              <button className="btn btn-danger" onClick={()=>onDelet(value.id)}>Delete</button>
                              &nbsp;&nbsp;
                             
                              <button className="btn btn-primary" onClick={()=>{redirect('/edit_categories/'+value.id)}}>Edit</button>
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

export default Manage_categories;
