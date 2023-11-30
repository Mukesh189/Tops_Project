import React, { useEffect, useState } from "react";
import "./Profile_style.css";

import { toast } from "react-toastify";
import axios from "axios";

function Profile() {
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState({});

  // data show mate
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/${localStorage.getItem("userid")}`
    );
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  // Edit mate
  const [editid, setid] = useState("");
  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    setFormvalue(res.data);
    setid(id);
  };

  // Form ma change mate
  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  // Validetion mate
  function validation() {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name Field is required !");
      result = false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is required !");
      result = false;
    }
    if (formvalue.password == "") {
      toast.error("Password Field is required !");
      result = false;
    }
    if (formvalue.mobile == "") {
      toast.error("Mobile Field is required !");
      result = false;
    }
    return result;
  }

  // Submit pr data post krva mate
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/user/${editid}`,
        formvalue
      );
      if (res.status == 200) {
        toast.success("Update Success !");
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          password: "",
          mobile: "",
        });
        fetch();
      }
    }
  };

  return (
    <div>
      <section className="saving_section mt-5 mb-5 ">
        <h1 className="text-center mt-2 mb-2">Manage Profile</h1>
        <div className="box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src="images/saving-img.png" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>{data.name}</h2>
                  </div>
                  <p>Email:{data.email}</p>
                  <p>Mobile:{data.mobile}</p>
                  <p>Status:{data.status}</p>
                  <div className="btn-box">
                    <a
                      href="javascript:void(0)"
                      onClick={() => editdata(data.id)}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      className="btn1"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>

                {/* Modal Box*/}
            <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title text-danger">
                          Edit Profile
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                        />
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                        <section className="contact_section">
                          <div className="container container-bg">
                            <div className="row">
                              <div className="col-md-12 col-lg-12 px-0">
                                <form action="" method="post">
                                  <div>
                                    <input
                                      type="text"
                                      value={formvalue.name}
                                      onChange={onchange}
                                      name="name"
                                      placeholder="Name"
                                    />
                                  </div>
                                  <div>
                                    <input
                                      type="email"
                                      value={formvalue.email}
                                      onChange={onchange}
                                      name="email"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <div>
                                    <input
                                      type="password"
                                      value={formvalue.password}
                                      onChange={onchange}
                                      name="password"
                                      placeholder="Password"
                                    />
                                  </div>
                                  <div>
                                    <input
                                      type="number"
                                      value={formvalue.mobile}
                                      onChange={onchange}
                                      name="mobile"
                                      placeholder="Mobile"
                                    />
                                  </div>

                                  <div className="d-flex">
                                    <button
                                      onClick={onsubmit}
                                      data-bs-dismiss="modal"
                                    >
                                      save
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
