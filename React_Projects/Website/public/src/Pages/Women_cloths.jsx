import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Women_cloths() {
 
  useEffect(()=>{
    fetch();
   },[])
  
   const [data,setData]=useState([]);
   
   const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/woman_top`);
    setData(res.data);
  };
   
 
  
  
  
  return (
    <div>

  {/* Shop Start */}
  <div className="container-fluid">
    <div className="row  px-xl-5">
     
      <div className="col-lg-9 col-md-8">
        <div className="row pb-3">
          <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars" /></button>
              </div>
              <div className="ml-2">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Latest</a>
                    <a className="dropdown-item" href="#">Popularity</a>
                    <a className="dropdown-item" href="#">Best Rating</a>
                  </div>
                </div>
                <div className="btn-group ml-2">
                  <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">10</a>
                    <a className="dropdown-item" href="#">20</a>
                    <a className="dropdown-item" href="#">30</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {data.map((value,index,entarr)=>{
                return(
          <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
          <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden" style={{width:295,height:300}}>
              <img className="img-fluid w-100 h-100" src={value.proimg}  alt />
            </div>
            <div className="text-center py-4">
              <a className="h6 text-decoration-none text-truncate">{value.name}</a>
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
            </div>
          </div>
           </div>);
            })};
        
         
          <div className="col-12">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}
</div>
  )
}

export default Women_cloths