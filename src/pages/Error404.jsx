import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>

  
  
       Content 
      <div className="page-content">

      <div className="aon-page-benner-area">
      <div className="aon-page-banner-row" style={{backgroundImage: "url(/images/banner/job-banner.jpg)"}}>
      <div className="sf-overlay-main" style={{opacity: "0.8", backgroundColor: "#022279"}}></div>
      <div className="sf-banner-heading-wrap">
      <div className="sf-banner-heading-area">
      <div className="sf-banner-heading-large">Error 404</div>
      <div className="sf-banner-breadcrumbs-nav">
      <ul className="list-inline">
      <li><Link to="/"/> Home </li>
      <li>Error 404</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="section-full page-notfound-outer p-t120 p-b90">
      <div className="container">
      <div className="section-content">
      <div className="page-notfound">
      <div className="page-notfound-media">
      <img alt="" src="/images/ERROR.png"/>
      </div>
      <div className="page-notfound-content m-b30">
      <h3 className="error-comment">The Page You Are Looking For Doesn't Exist...</h3>
      <p>We Ran Into An Issue, But Don’t Worry, We’ll Take Care Of It For Sure.</p>
      <Link className="site-button" to="/"/>Back to Home
      </div>
      </div>
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
