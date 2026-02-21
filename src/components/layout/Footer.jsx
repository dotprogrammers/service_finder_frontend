import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="site-footer footer-light">

      <div className="footer-top-newsletter">
      <div className="container">
      <div className="sf-news-letter">
      <span>Subscribe Our Newsletter</span>
      <form>
      <div className="form-group sf-news-l-form">
      <input className="form-control" placeholder="Enter Your Email" type="text"/>
      <button className="sf-sb-btn" type="submit">Submit</button>
      </div>
      </form>
      </div>
      </div>
      </div>

      <div className="footer-top">
      <div className="container">
      <div className="row">

      <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
      <div className="sf-site-link sf-widget-link">
      <h4 className="sf-f-title">Site Links</h4>
      <ul>
      <li><Link to="/blog-grid"/>Blog</li>
      <li><Link to="/contact-us"/>Contact Us</li>
      <li><Link to="/job-grid"/>Jobs</li>
      <li><Link to="/all-categories"/>Categories</li>
      </ul>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
      <div className="sf-site-link sf-widget-cities">
      <h4 className="sf-f-title">Popular Cities</h4>
      <ul>
      <li><Link to="/all-categories"/>Ballston Lake</li>
      <li><Link to="/all-categories"/>Batumi</li>
      <li><Link to="/all-categories"/>Brooklyn</li>
      <li><Link to="/all-categories"/>Cambridge</li>
      </ul>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
      <div className="sf-site-link sf-widget-categories">
      <h4 className="sf-f-title">Categories</h4>
      <ul>
      <li><Link to="/categories-detail"/>Car Service</li>
      <li><Link to="/categories-detail"/>House Cleaning</li>
      <li><Link to="/categories-detail"/>Transport</li>
      <li><Link to="/categories-detail"/>Yoga Classes</li>
      </ul>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
      <div className="sf-site-link sf-widget-contact">
      <h4 className="sf-f-title">Contact Info</h4>
      <ul>
      <li>India</li>
      <li>+41 232 525 5257</li>
      <li>+41 856 525 5369</li>
      <li>hello@Servicefinder.com</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="footer-bottom">
      <div className="container">
      <div className="sf-footer-bottom-section">
      <div className="sf-f-logo"><a href="javascript:void(0);"><img alt="" src="/images/logo-dark.png"/></a></div>
      <div className="sf-f-copyright">
      <span>Copyright 2022 | Aone Theme. All Rights Reserved</span>
      </div>
      <div className="sf-f-social">
      <ul className="socila-box">
      <li><a href="javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
      <li><a href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
      <li><a href="javascript:void(0);"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="javascript:void(0);"><i className="fa fa-instagram"></i></a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </footer>
    </>
  );
}
