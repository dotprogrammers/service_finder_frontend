import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>

  
  
       Content 
      <div className="page-content">

      <div className="aon-page-benner-area">
      <div className="aon-page-banner-row" style={{backgroundImage: "url(/images/banner/job-banner.jpg)"}}>
      <div className="sf-overlay-main" style={{opacity: "0.8", backgroundColor: "#022279"}}></div>
      <div className="sf-banner-heading-wrap">
      <div className="sf-banner-heading-area">
      <div className="sf-banner-heading-large">Contact Us</div>
      <div className="sf-banner-breadcrumbs-nav">
      <ul className="list-inline">
      <li><Link to="/"/> Home </li>
      <li>Contact us</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>


      <div className="aon-contact-area">
      <div className="container">

      <div className="section-head text-center">
      <h2 className="sf-title">Contact Information</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="section-content">
      <div className="sf-contact-info-wrap">
      <div className="row">

      <div className="col-lg-4 col-md-6">
      <div className="sf-contact-info-box">
      <div className="sf-contact-icon">
      <span><img alt="" src="/images/contact-us/1.png"/></span>
      </div>
      <div className="sf-contact-info">
      <h4 className="sf-title">Mailing Address</h4>
      <p>121 King Street, Melbourne 
                                              Victoria 3000 Australia</p>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="sf-contact-info-box">
      <div className="sf-contact-icon">
      <span><img alt="" src="/images/contact-us/2.png"/></span>
      </div>
      <div className="sf-contact-info">
      <h4 className="sf-title">Email Info</h4>
      <p>info@brandcoin.com</p><p>support@brandcoin.com</p>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="sf-contact-info-box">
      <div className="sf-contact-icon">
      <span><img alt="" src="/images/contact-us/3.png"/></span>
      </div>
      <div className="sf-contact-info">
      <h4 className="sf-title">Phone Number</h4>
      <p>0800-123456 (24/7 Support Line)</p>
      <p>0800-123654</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="sf-contact-form-wrap">

      <div className="sf-contact-form">
      <div className="sf-con-form-title text-center">
      <h2 className="m-b30">Contact Information</h2>
      </div>
      <form className="contact-form" method="post">
      <div className="row">

      <div className="col-md-6">
      <div className="form-group">
      <input className="form-control" name="fullname" placeholder="Name" required="" type="text"/>
      </div>
      </div>

      <div className="col-md-6">
      <div className="form-group">
      <input className="form-control" name="email" placeholder="Email" required="" type="text"/>
      </div>
      </div>

      <div className="col-md-6">
      <div className="form-group">
      <input className="form-control" name="phone" placeholder="Phone" type="text"/>
      </div>
      </div>

      <div className="col-md-6">
      <div className="form-group">
      <input className="form-control" name="subject" placeholder="Subject" required="" type="text"/>
      </div>
      </div>

      <div className="col-md-12">
      <div className="form-group">
      <textarea className="form-control" name="message" placeholder="Message" required=""></textarea>
      </div>
      </div>
      <div className="col-md-12">
      <div className="g-recaptcha" data-sitekey="6LeBsyIeAAAAAFfgca0q_h1Dxoy8ekbilrjdBlMf"></div>
      </div>
      </div>
      <div className="sf-contact-submit-btn">
      <button className="site-button" type="submit">Submit</button>
      </div>
      </form>
      </div>

      </div>
      </div>
      </div>
      </div>

      <div className="section-full sf-contact-map-area">
      <div className="container">
      <div className="sf-map-social-block text-center">
      <h2>Trusted by thousands of people all over the world</h2>
      <ul className="sf-con-social">
      <li><a className="sf-fb" href="#"><img alt="" src="/images/contact-us/facebook.png"/>Facebook</a></li>
      <li><a className="sf-twitter" href="#"><img alt="" src="/images/contact-us/twitter.png"/>Twitter</a></li>
      <li><a className="sf-pinterest" href="#"><img alt="" src="/images/contact-us/pinterest.png"/>Pinterest</a></li>
      </ul>
      <div className="sf-con-social-pic">
      <span className="img-pos-1"><img alt="" src="/images/contact-us/img1.png"/></span>
      <span className="img-pos-2"><img alt="" src="/images/contact-us/img2.png"/></span>
      <span className="img-pos-3"><img alt="" src="/images/contact-us/img3.png"/></span>
      <span className="img-pos-4"><img alt="" src="/images/contact-us/r-img1.png"/></span>
      <span className="img-pos-5"><img alt="" src="/images/contact-us/r-img2.png"/></span>
      <span className="img-pos-6"><img alt="" src="/images/contact-us/r-img3.png"/></span>
      </div>
      </div>
      </div>
      <div className="sf-map-wrap">
      <div className="gmap-area">
      <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      </div>
      </div>
      </div>
       Content END
       FOOTER START 
       FOOTER END 
       BUTTON TOP START 
      <button className="scroltop"><span className="fa fa-angle-up relative" id="btn-vibrate"></span></button>

    </>
  );
}
