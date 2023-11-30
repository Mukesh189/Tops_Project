import React from 'react'
import {toast} from 'react-toastify';
import { NavLink,Link, useNavigate } from 'react-router-dom'
function Header() {
  
  const redirect=useNavigate();
  const logout=()=>{
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    toast.success("Logout Success !");
    return redirect("/");
  };
  
  
  
  return (
  <div>    {/* Topbar Start */}
  <div className="container-fluid">
    <div className="row bg-secondary py-1 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
        </div>
        <div className="d-inline-flex align-items-center d-block d-lg-none">
          <a href className="btn px-0 ml-2">
            <i className="fas fa-heart text-dark" />
            <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: 2}}>0</span>
          </a>
          <a href className="btn px-0 ml-2">
            <i className="fas fa-shopping-cart text-dark" />
            <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: 2}}>0</span>
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
      <div className="col-lg-4">
        <a href className="text-decoration-none">
          <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
          <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
        </a>
      </div>
      <div className="col-lg-4 col-6 text-left">
        <form action>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for products" />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-4 col-6 text-right">
        <p className="m-0">Customer Service</p>
        <h5 className="m-0">+012 345 6789</h5>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid bg-dark mb-30">
    <div className="row px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, padding: '0 30px'}}>
          <h6 className="text-dark m-0"><i className="fa fa-bars mr-2" />Categories</h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: 999}}>
          <div className="navbar-nav w-100">
            <div className="nav-item dropdown dropright">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1" /></a>
              <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href className="dropdown-item">Men's Dresses</a>
                <a href className="dropdown-item">Women's Dresses</a>
                <a href className="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href className="nav-item nav-link">Shirts</a>
            <a href className="nav-item nav-link">Jeans</a>
            <a href className="nav-item nav-link">Swimwear</a>
            <a href className="nav-item nav-link">Sleepwear</a>
            <a href className="nav-item nav-link">Sportswear</a>
            <a href className="nav-item nav-link">Jumpsuits</a>
            <a href className="nav-item nav-link">Blazers</a>
            <a href className="nav-item nav-link">Jackets</a>
            <a href className="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <a href className="text-decoration-none d-block d-lg-none">
            <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
              <NavLink to="/mencloths" className="nav-item nav-link">Men Cloths</NavLink>
              <NavLink to="/womencloths" className="nav-item nav-link">Women Cloths</NavLink>
              <NavLink to="/camera" className="nav-item nav-link">Camera</NavLink>
              <NavLink to="/shoes" className="nav-item nav-link">Shoes</NavLink>
              <NavLink to="/cream" className="nav-item nav-link">Cream</NavLink>
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <div className="user_option" style={{lineHeight:4}}> 
              {(() => {
                  if (localStorage.getItem("userid")) {
                    return (
                      <>
                        <Link to="/profile">
                          <i className="fa fa-user" aria-hidden="true" />
                          <span>{localStorage.getItem("username")}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <a href="javascript:void(0)" onClick={logout}>
                          <span>Logout</span>
                        </a>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <Link to="/login">
                          <i className="fa fa-user" aria-hidden="true" />
                          <span>Login</span>
                        </Link>
                      </>
                    );
                  }
                })()}
                </div>
            </div>
            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
              <a href className="btn px-0">
                <i className="fas fa-heart text-primary" />
                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: 2}}>0</span>
              </a>
              <a href className="btn px-0 ml-3">
                <i className="fas fa-shopping-cart text-primary" />
             
                <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: 2}}>0</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
</div>

  )
}

export default Header