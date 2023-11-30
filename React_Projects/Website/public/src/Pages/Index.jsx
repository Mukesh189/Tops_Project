import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


function Index() {
 const redirect=useNavigate();
  // Man Cloths
  useEffect(()=>{
    fetch();
   },[])
  
   const [data,setData]=useState([]);
   
   const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/man_shirt`);
    setData(res.data);
  };


// Woman Cloth
  useEffect(()=>{
    fetch1();
   },[])
  
   const [data1,setData1]=useState([]);
   
   const fetch1 = async () => {
    const res = await axios.get(`http://localhost:3000/woman_top`);
    setData1(res.data);
  };


  // Camera
  useEffect(()=>{
    fetch2();
   },[])
  
   const [data2,setData2]=useState([]);
   
   const fetch2 = async () => {
    const res = await axios.get(`http://localhost:3000/camera`);
    setData2(res.data);
  };

  
  // Shoes
  useEffect(()=>{
    fetch3();
   },[])
  
   const [data3,setData3]=useState([]);
   
   const fetch3 = async () => {
    const res = await axios.get(`http://localhost:3000/shoes`);
    setData3(res.data);
  };

  
  //  Cream
  useEffect(()=>{
    fetch4();
   },[])
  
   const [data4,setData4]=useState([]);
   
   const fetch4 = async () => {
    const res = await axios.get(`http://localhost:3000/cream`);
    setData4(res.data);
  };




  return (
  <div>
  {/* Carousel Start */}
  <div className="container-fluid mb-3">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="img/offer-1.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="img/offer-2.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Featured Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid pt-5">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-1.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Female Cloths</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>


      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-2.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Camera</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-3.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Shoes</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-4.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Cream</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/product-2.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Men Clothes</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>



  {/* Categories End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Men Clothes</span></h2>
    <div className="row px-xl-5">

    {data.slice(0,4).map((value,index,entarr)=>{
      return(
          
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
          <img className="img-fluid w-100" src={value.proimg} alt />
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href>{value.name}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{value.discprice}</h5><h6 className="text-muted ml-2"><del>{value.mainprice}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
       
          <button style={{width:100,height:40,borderRadius:"10px",backgroundColor:'#7D6608',color:"white"}}>Add to Cart</button>
     
          
        </div>
      </div>
      </div>
      );
    })}
    <button style={{marginLeft:600,width:120,height:45,border:"1px solid red",outline:"none"}}  onClick={()=>{redirect('/mencloths/')}}>More Product</button>
    </div>
  </div>
  {/* Products End */}




  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Woman Clothes</span></h2>
    <div className="row px-xl-5">

    {data1.slice(0,4).map((value,index,entarr)=>{
      return(
          
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
          <img className="img-fluid w-100" src={value.proimg} alt />
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href>{value.name}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{value.discprice}</h5><h6 className="text-muted ml-2"><del>{value.mainprice}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
          <button style={{width:100,height:40,borderRadius:"10px",backgroundColor:'#7D6608',color:"white"}}>Add to Cart</button>

        </div>
      </div>
      </div>
      );
    })}
 <button style={{marginLeft:600,width:120,height:45,border:"1px solid red",outline:"none"}}  onClick={()=>{redirect('/womencloths/')}}>More Product</button>

    </div>
  </div>

  {/* Products End */}

  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Camera</span></h2>
    <div className="row px-xl-5">

    {data2.slice(0,4).map((value,index,entarr)=>{
      return(
          
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
          <img className="img-fluid w-100" src={value.proimg} alt />
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href>{value.name}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{value.discprice}</h5><h6 className="text-muted ml-2"><del>{value.mainprice}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
          <button style={{width:100,height:40,borderRadius:"10px",backgroundColor:'#7D6608',color:"white"}}>Add to Cart</button>

        </div>
      </div>
      </div>
      );
    })}
     <button style={{marginLeft:600,width:120,height:45,border:"1px solid red",outline:"none"}}  onClick={()=>{redirect('/camera/')}}>More Product</button>
    </div>
  </div>


{/* Shoes */}

<div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Shoes</span></h2>
    <div className="row px-xl-5">

    {data3.slice(0,4).map((value,index,entarr)=>{
      return(
          
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
          <img className="img-fluid w-100" src={value.proimg} alt />
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href>{value.name}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{value.discprice}</h5><h6 className="text-muted ml-2"><del>{value.mainprice}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
          <button style={{width:100,height:40,borderRadius:"10px",backgroundColor:'#7D6608',color:"white"}}>Add to Cart</button>

        </div>
      </div>
      </div>
      );
    })}
 <button style={{marginLeft:600,width:120,height:45,border:"1px solid red",outline:"none"}}  onClick={()=>{redirect('/shoes/')}}>More Product</button>
    </div>
  </div>


{/* Cream */}

<div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Cream</span></h2>
    <div className="row px-xl-5">

    {data4.slice(0,4).map((value,index,entarr)=>{
      return(
          
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
          <img className="img-fluid w-100" src={value.proimg} alt />
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href>{value.name}</a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{value.discprice}</h5><h6 className="text-muted ml-2"><del>{value.mainprice}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
          <button style={{width:100,height:40,borderRadius:"10px",backgroundColor:'#7D6608',color:"white"}}>Add to Cart</button>

        </div>
      </div>
      </div>
      );
    })}
<button style={{marginLeft:600,width:120,height:45,border:"1px solid red",outline:"none"}}  onClick={()=>{redirect('/cream/')}}>More Product</button>
    </div>
  </div>

  {/* Offer Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="row px-xl-5">
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="img/offer-1.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="img/offer-2.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}

  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="bg-light p-4">
            <img src="img/vendor-1.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-2.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-3.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-4.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-5.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-6.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-7.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-8.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}</div>

  )
}

export default Index