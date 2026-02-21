import React from "react";
import { Link } from "react-router-dom";

export default function JobListing() {
  return (
    <>
   
  
       Content 
      <div className="page-content">

      <div className="aon-page-benner-area">
      <div className="aon-page-banner-row" style={{backgroundImage: "url(/images/banner/job-banner.jpg)"}}>
      <div className="sf-overlay-main" style={{opacity: "0.8", backgroundColor: "#022279"}}></div>
      <div className="sf-banner-heading-wrap">
      <div className="sf-banner-heading-area">
      <div className="sf-banner-heading-large">Jod Listing Style</div>
      <div className="sf-banner-breadcrumbs-nav">
      <ul className="list-inline">
      <li><Link to="/"/> Home </li>
      <li>Jobs</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>


      <div className="aon-page-jobs-wrap">
      <div className="container">
      <div className="row">

      <div className="col-lg-4 col-md-12">
      <aside className="side-bar sf-rounded-sidebar">

      <div className="sf-job-sidebar-blocks">
      <h4 className="sf-title">Find a Job</h4>
      <div className="form-group">
      <input className="form-control" placeholder="Search Keywords" type="text"/>
      </div>
      <button className="sf-btn-large" type="submit">Search Keywords</button>
      </div>

      <div className="sf-job-sidebar-blocks">
      <h4 className="sf-title">Location</h4>
      <div className="form-group sf-location-ring-wrap">
      <input className="form-control" placeholder="Enter Locaton" type="text"/>
      <a className="sf-location-ring" href="#"></a>
      </div>
      <div className="sf-range-slider">
      <div className="sf-range-slider-control">Radius: <span>45Km</span></div>
      <input data-slider-id="ex1Slider" data-slider-max="20" data-slider-min="0" data-slider-step="1" data-slider-value="14" id="ex1" type="text"/>
      </div>
      </div>

      <div className="sf-job-sidebar-blocks">
      <h4 className="sf-title">Category</h4>
      <div className="category-select">
      <select className="form-control sf-select-box" title="All category">
      <option> Select a Category </option>
      <option>Automotive</option>
      <option>Cab Service</option>
      <option>Car Dealers</option>
      <option>Car care and Servicing</option>
      <option>Beauty and Personal Care</option>
      </select>
      </div>
      </div>

      <div className="sf-job-sidebar-blocks">
      <h4 className="sf-title">Filter By Job Type</h4>
      <div className="sf-trettype-wrap sf-job_types">
      <div className="checkbox sf-radio-checkbox">
      <input id="any111" name="abc" type="checkbox" value="five"/>
      <label htmlFor="any111">Freelance</label>
      </div>
      <div className="checkbox sf-radio-checkbox">
      <input id="body111" name="abc" type="checkbox" value="five"/>
      <label htmlFor="body111">Full Time</label>
      </div>
      <div className="checkbox sf-radio-checkbox">
      <input id="nails111" name="abc" type="checkbox" value="five"/>
      <label htmlFor="nails111">Internship</label>
      </div>
      <div className="checkbox sf-radio-checkbox">
      <input id="hair111" name="abc" type="checkbox" value="five"/>
      <label htmlFor="hair111">Part Time</label>
      </div>
      <div className="checkbox sf-radio-checkbox">
      <input id="massage111" name="abc" type="checkbox" value="five"/>
      <label htmlFor="massage111">Temporary</label>
      </div>
      </div>
      </div>
      </aside>
      </div>


      <div className="col-lg-8 col-md-12">

      <div className="aon-search-result-top flex-wrap d-flex justify-content-between">
      <div className="aon-search-result-title"> <h5><span>(16)</span> Jobs &amp; Vacancies</h5></div>
      <div className="aon-search-result-option">
      <ul className="aon-search-sortby">
      <li className="aon-select-sort-by">
      <select className="sf-select-box form-control sf-form-control bs-select-hidden" id="setorderby" name="setorderby" title="SORT BY">
      <option className="bs-title-option" value="">SORT BY</option>
      <option value="rating">Rating</option>
      <option value="title">Title</option>
      <option value="distance">Distance</option>
      </select>
      </li>
      </ul>
      <ul className="aon-search-grid-option" id="viewTypes">
      <li data-view="grid-3">
      <button className="btn btn-border btn-icon" type="button"><i className="fa fa-th"></i></button>
      </li>
      <li className="active" data-view="listview">
      <button className="btn btn-border btn-icon" type="button"><i className="fa fa-th-list"></i></button>
      </li>
      </ul>
      </div>

      </div>
      <ul className="job_listings job_listings-two">

      <li className="job_listing type-job_listing job-type-hourly">
      <Link className="job-clickable-box" to="/job-detail"/>
      <div className="job-comapny-logo"><img alt="" className="company_logo" src="/images/jobs/1.jpg"/></div>
      <div className="job-comapny-info">
      <div className="position">
      <h3>Web Designer Required in Brooklyn</h3>
      <div className="company"> <strong>Blue Hills Pvt. Ltd.</strong> </div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      <li className="date">
      <span>3 years ago</span>
      </li>
      </ul>
      <div className="job-location"><i className="fa fa-map-marker"></i> Brooklyn </div>
      <div className="job-amount"><i className="fa fa-money"></i> <span>$1,200 - $1,500</span> </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </li>

      <li className="job_listing type-job_listing job-type-hourly">
      <Link className="job-clickable-box" to="/job-detail"/>
      <div className="job-comapny-logo"><img alt="" className="company_logo" src="/images/jobs/2.jpg"/></div>
      <div className="job-comapny-info">
      <div className="position">
      <h3>Dog Trainer Required in Brooklyn</h3>
      <div className="company"> <strong>Blue Hills Pvt. Ltd.</strong> </div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      <li className="date">
      <span>3 years ago</span>
      </li>
      </ul>
      <div className="job-location"><i className="fa fa-map-marker"></i> Brooklyn </div>
      <div className="job-amount"><i className="fa fa-money"></i> <span>$1,200 - $1,500</span> </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </li>

      <li className="job_listing type-job_listing job-type-hourly">
      <Link className="job-clickable-box" to="/job-detail"/>
      <div className="job-comapny-logo"><img alt="" className="company_logo" src="/images/jobs/3.jpg"/></div>
      <div className="job-comapny-info">
      <div className="position">
      <h3>Nursing Assistant Required in Brooklyn</h3>
      <div className="company"> <strong>Blue Hills Pvt. Ltd.</strong> </div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      <li className="date">
      <span>3 years ago</span>
      </li>
      </ul>
      <div className="job-location"><i className="fa fa-map-marker"></i> Brooklyn </div>
      <div className="job-amount"><i className="fa fa-money"></i> <span>$1,200 - $1,500</span> </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </li>

      <li className="job_listing type-job_listing job-type-hourly">
      <Link className="job-clickable-box" to="/job-detail"/>
      <div className="job-comapny-logo"><img alt="" className="company_logo" src="/images/jobs/4.jpg"/></div>
      <div className="job-comapny-info">
      <div className="position">
      <h3>Project Manager Required in Brooklyn</h3>
      <div className="company"> <strong>Blue Hills Pvt. Ltd.</strong> </div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      <li className="date">
      <span>3 years ago</span>
      </li>
      </ul>
      <div className="job-location"><i className="fa fa-map-marker"></i> Brooklyn </div>
      <div className="job-amount"><i className="fa fa-money"></i> <span>$1,200 - $1,500</span> </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </li>

      <li className="job_listing type-job_listing job-type-hourly">
      <Link className="job-clickable-box" to="/job-detail"/>
      <div className="job-comapny-logo"><img alt="" className="company_logo" src="/images/jobs/5.jpg"/></div>
      <div className="job-comapny-info">
      <div className="position">
      <h3>Librarian Required in Brooklyn</h3>
      <div className="company"> <strong>Blue Hills Pvt. Ltd.</strong> </div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      <li className="date">
      <span>3 years ago</span>
      </li>
      </ul>
      <div className="job-location"><i className="fa fa-map-marker"></i> Brooklyn </div>
      <div className="job-amount"><i className="fa fa-money"></i> <span>$1,200 - $1,500</span> </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </li>

      <li className="job_listing type-job_listing job-type-hourly">
      <Link className="job-clickable-box" to="/job-detail"/>
      <div className="job-comapny-logo"><img alt="" className="company_logo" src="/images/jobs/6.jpg"/></div>
      <div className="job-comapny-info">
      <div className="position">
      <h3>Account Executive Required in Brooklyn</h3>
      <div className="company"> <strong>Blue Hills Pvt. Ltd.</strong> </div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      <li className="date">
      <span>3 years ago</span>
      </li>
      </ul>
      <div className="job-location"><i className="fa fa-map-marker"></i> Brooklyn </div>
      <div className="job-amount"><i className="fa fa-money"></i> <span>$1,200 - $1,500</span> </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </li>
      </ul>

      <div className="site-pagination s-p-center">
      <ul className="pagination">
      <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1"><i className="fa fa-chevron-left"></i></a>
      </li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item active">
      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
      </li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item"><a className="page-link" href="#"><i className="fa fa-ellipsis-h"></i></a></li>
      <li className="page-item"><a className="page-link" href="#">11</a></li>
      <li className="page-item">
      <a className="page-link" href="#"><i className="fa fa-chevron-right"></i></a>
      </li>
      </ul>
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
