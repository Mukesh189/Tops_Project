import React, {useState,useEffect} from 'react'
import axios from "axios";
import { toast } from "react-toastify";
function Contact() {
  
  // Step:1 Form ma Valu lava mate
  const [formvalue,setFormvalue] =useState({
      name:"",
      email:"",
      sub:"",
      msg:""
  });

  // Step:-2 change karva mate

  const onchange=(e)=>{
      setFormvalue({...formvalue,id: new Date().getTime().toString(),[e.target.name]:e.target.value,});
      console.log(formvalue);
  };

  function validetion() 
  {
      var result=true;
      if (formvalue.name=="") 
      {
        toast.error("Name Field is required !");
        result=false
      }

      if (formvalue.email=="") 
      {
        toast.error("Email Field is required !");
        result=false
      }

      if (formvalue.sub=="") 
      {
        toast.error("Sub Field is required !");
        result=false
      }
      if (formvalue.msg=="") 
      {
        toast.error("Msg Field is required !");
        result=false
      }
      return result;
  }
  
  const onsubmmit=async(e)=>{
    e.preventDefault();
    if (validetion()) 
    {
        const res=await axios.post(` http://localhost:3000/contact`,formvalue);  
        if (res.status=200) 
        {
          toast.success("Inquiry Submitted Success !");
          setFormvalue({...formvalue,name:"",email:"",sub:"",msg:""});
        }
      }

  };

  return (
 <div> {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <a className="breadcrumb-item text-dark" href="#">Home</a>
          <span className="breadcrumb-item active">Contact</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Contact Start */}
  <div className="container-fluid">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-7 mb-5">
        <div className="contact-form bg-light p-30">
          <div id="success" />
          <form name="sentMessage" id="contactForm" action='' method='post'>
            <div className="control-group">
              <input type="text" className="form-control" onChange={onchange} value={formvalue.name} name="name" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input type="email" className="form-control" onChange={onchange} value={formvalue.email} name="email" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input type="text" className="form-control" onChange={onchange} value={formvalue.sub} name='sub' id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea className="form-control" rows={8} onChange={onchange} value={formvalue.msg} name='msg' id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button className="btn btn-primary py-2 px-4" onClick={onsubmmit} type="submit" id="sendMessageButton">Send
                Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 mb-5">
        <div className="bg-light p-30 mb-30">
          <iframe style={{width: '100%', height: 250}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
        <div className="bg-light p-30 mb-3">
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
          <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}</div>

  )
}

export default Contact