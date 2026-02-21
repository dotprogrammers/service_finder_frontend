import React from "react";
import { Link } from "react-router-dom";

export default function McProfile() {
  return (
    <>

       Sidebar Holder 
      <nav id="sidebar-admin-wraper">
      <div className="pro-my-account-wrap">
                      Vender My Account
                  </div>
      <div className="admin-nav">
      <ul className="">
      <li className="active">
      <Link to="/mc-dashboard"/><i className="fa fa-dashboard"></i><span className="admin-nav-text">Dashboard</span>
      </li>
      <li>
      <Link to="/mc-profile"/><i className="fa fa-user-circle-o"></i><span className="admin-nav-text">Profile</span>
      </li>
      <li>
      <Link to="/mc-my-services"/><i className="fa fa-cogs"></i><span className="admin-nav-text">My Services</span>
      </li>
      <li>
      <Link to="/mc-my-booking"/><i className="fa fa-calendar"></i><span className="admin-nav-text">My Booking</span>
      </li>
      <li>
      <Link to="/mc-messanger"/><i className="fa fa-envelope-o"></i><span className="admin-nav-text">Messanger</span><span className="admin-nav-label">4</span>
      </li>
      <li>
      <Link to="/mc-availability"/><i className="fa fa-calendar-check-o"></i><span className="admin-nav-text">Availability</span>
      </li>
      <li>
      <Link to="/mc-featured-member"/><i className="fa fa-user-secret"></i><span className="admin-nav-text">Featured Member</span>
      </li>
      <li>
      <Link to="/mc-team-members"/><i className="fa fa-users"></i><span className="admin-nav-text">Team Members</span>
      </li><li>
      <Link to="/mc-business-hours"/><i className="fa fa-clock-o"></i><span className="admin-nav-text">Business Hour</span>
      </li>
      <li>
      <Link to="/mc-upload-identity"/><i className="fa fa-id-card-o"></i><span className="admin-nav-text">Upload Identity </span>
      </li>
      <li>
      <Link to="/mc-upgrade-account"/><i className="fa fa-cloud-upload"></i><span className="admin-nav-text">Upgrade Account</span>
      </li>
      </ul>
      </div>
      </nav>
       Page Content Holder 
      <div id="content">
      <div className="content-admin-main">
      <div className="admin-top-area d-flex flex-wrap justify-content-between m-b30 align-items-center">
      <div className="admin-left-area">
      <a className="nav-btn-admin d-flex justify-content-between align-items-center" id="sidebarCollapse">
      <span className="nav-btn-text">Dashboard Menu</span>
      <span className="fa fa-reorder"></span>
      </a>
      </div>
      <div className="admin-area-mid">
      <div className="admin-area-heading">
      <span>Your Tariff Plan : </span>
      <strong>Extended <i className="fa fa-caret-down"></i></strong>
      </div>
      <div className="admin-area-content">you Are on Extended . Use link bellow to view details or upgrade.Details </div>
      </div>
      <div className="admin-right-area">
      <div className="pro-pic-info-wrap d-flex">
      <div className="pro-pic-box">
      <img alt="" src="/images/user.jpg"/>
      </div>
      <div className="pro-pic-info">
      <strong>David Wood</strong>
      <span>Designer</span>
      </div>
      <span className="feather-icon has-toltip">
      <i className="feather-power"></i>
      <span className="header-toltip">Notification</span>
      </span>
      </div>
      </div>
      </div>
      <div className="aon-provi-tabs d-flex flex-wrap justify-content-between">
      <div className="aon-provi-left">
      <ul className="aon-provi-links">
      <li><a href="#aon-about-panel">About</a></li>
      <li><a href="#aon-contact-panel">Contact</a></li>
      <li><a href="#aon-adress-panel">Adress</a></li>
      <li><a href="#aon-serviceArea-panel">Service Area</a></li>
      <li><a href="#aon-servicePer-panel">Service Perform</a></li>
      <li><a href="#aon-socialMedia-panel">Social Media</a></li>
      <li><a href="#aon-passUpdate-panel">Password</a></li>
      <li><a href="#aon-category-panel">Category</a></li>
      <li><a href="#aon-amenities-panel">Amenities</a></li>
      <li><a href="#aon-languages-panel">Languages</a></li>
      <li><a href="#aon-gallery-panel">Gallery</a></li>
      <li><a href="#aon-video-panel">Video</a></li>
      </ul>
      </div>
      <div className="aon-provi-right">
      </div>
      </div>
      <div className="aon-admin-heading">
      <h4>Edit Profile</h4>
      </div>
      <div className="card aon-card">
      <div className="card-header aon-card-header"><h4><i className="fa fa-user"></i> About me</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-xl-6">
      <div className="aon-staff-avtar">
      <div className="aon-staff-avtar-header">
      <div className="aon-pro-avtar-pic">
      <img alt="" src="/images/pic-large.jpg"/>
      <button className="admin-button has-toltip">
      <i className="fa fa-camera"></i>
      <span className="header-toltip">Upload Avtar</span>
      <input name="avtar" type="file"/>
      </button>
      </div>
      <div className="aon-pro-cover-wrap">
      <div className="aon-pro-cover-pic">
      <img alt="" src="/images/banner/job-banner.jpg"/>
      </div>
      <div className="admin-button-upload">
      <span>Upload Cover Image</span>
      <input name="avtar" type="file"/>
      </div>
      </div>
      </div>
      <div className="aon-staff-avtar-footer">
      <h4 className="aon-staff-avtar-title">Upload Your Avatar</h4>
      <ul>
      <li>Min width and height: <span>600 x 600 px</span></li>
      <li>Max Upload Size: <span>512MB</span></li>
      <li>Extensions: <span>JPEG,PNG,GIF,PNG</span></li>
      </ul>
      </div>
      </div>
      </div>
      <div className="col-xl-6">
      <div className="row">
      <div className="col-md-6">
      <div className="form-group">
      <label>Username</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-user"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Company Name</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-building-o"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>First Name</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-user"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Last Name</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-user"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6 breck-w1400">
      <div className="form-group">
      <label>Gender</label>
      <div className="aon-inputicon-box">
      <div className="radio-inline-box sf-radio-check-row">
      <div className="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
      <input id="any111" name="abc" type="radio" value="five"/>
      <label htmlFor="any111">Male</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2 sf-raChe-6">
      <input id="body111" name="abc" type="radio" value="five"/>
      <label htmlFor="body111">Female</label>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-md-6 breck-w1400">
      <div className="form-group">
      <label>TagLine</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-tags"></i>
      </div>
      </div>
      </div>
      <div className="col-md-12">
      <div className="form-group">
      <label>Biography</label>
      <div className="editer-wrap">
      <div className="editer-textarea">
      <textarea className="form-control" rows="4"></textarea>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-contact-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-envelope"></i> Contact Detail</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-6">
      <div className="form-group">
      <label>Mobile</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-phone"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Alt. Mobile</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-mobile"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Email Address</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-envelope"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Skype</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-skype"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Website</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-globe"></i>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-adress-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-address-card"></i> Address</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-12">
      <div className="form-group">
      <label>Location</label>
      <div className="grayscle-area address-area-map">
      <iframe height="460" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
      </div>
      <button className="button rwmb-map-goto-address-button btn btn-primary m-t20" value="address"> Find Address on Map </button>
      <p>Note: This will load your address on map and fillup latitude and longitude</p>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Address</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-globe"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Apt/Suite #</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-map-marker"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>City</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-map-marker"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>State</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-map-marker"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Postal Code</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-map-marker"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Country</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-map-marker"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Latitude</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-street-view"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Longitude</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-street-view"></i>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-serviceArea-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-building-o"></i> Radius for Service Area</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-12">
      <div className="form-group">
      <div className="sf-range-slider sf-range-w250">
      <div className="sf-range-slider-control">Radius: <span>45Km</span></div>
      <input data-slider-id="ex1Slider" data-slider-max="20" data-slider-min="0" data-slider-step="1" data-slider-value="14" id="ex1" type="text"/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-servicePer-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-building-o"></i> Service to Perform At</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-12">
      <div className="aon-inputicon-box">
      <div className="radio-inline-box service-perform-list">
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc11" name="abc" type="radio" value="five"/>
      <label htmlFor="loc11">My Location</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc22" name="abc" type="radio" value="five"/>
      <label htmlFor="loc22">Customer Location</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc33" name="abc" type="radio" value="five"/>
      <label htmlFor="loc33">Both</label>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-socialMedia-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-share-alt"></i> Social Media</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-6">
      <div className="form-group">
      <label>Facebook</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-facebook"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Twitter</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-twitter"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Linkedin</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-linkedin"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label> Pinterest</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-pinterest"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Digg</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-digg"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Instagram</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-instagram"></i>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-passUpdate-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-lock"></i> Password Update</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-6">
      <div className="form-group">
      <label>New Password</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-lock"></i>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <label>Repeat Password</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-lock"></i>
      </div>
      </div>
      </div>
      </div>
      <p>Enter same password in both fields. Use an uppercase letter and a number for stronger password.</p>
      </div>
      </div>
      <div className="card aon-card" id="aon-category-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-list-alt"></i> Category</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-12">
      <div className="form-group">
      <label>Category</label>
      <div className="alert alert-info">Currently you can choose 10 categories. You can increase it by upgrade membership plan</div>
      <select className="selectpicker" data-live-search="true" multiple="">
      <option>Laoundry</option>
      <option>Cab Services</option>
      <option>Car Dealer</option>
      <option>Event Organizer</option>
      </select>
      </div>
      </div>
      <div className="col-md-12">
      <div className="form-group">
      <label>Primary Category</label>
      <div className="radio-inline-box">
      <div className="checkbox sf-radio-checkbox">
      <input id="lau1" name="abc" type="radio" value="five"/>
      <label htmlFor="lau1">Laundry</label>
      </div>
      </div>
      </div>
      </div>
      </div>
      <p>Enter same password in both fields. Use an uppercase letter and a number for stronger password.</p>
      </div>
      </div>
      <div className="card aon-card" id="aon-amenities-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-shield"></i> Amenities</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-12">
      <div className="form-group">
      <label>Amenities</label>
      <select className="selectpicker" data-live-search="true" multiple="">
      <option>Laoundry</option>
      <option>Cab Services</option>
      <option>Car Dealer</option>
      <option>Event Organizer</option>
      </select>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-languages-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-language"></i> Languages</h4></div>
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-md-12">
      <div className="form-group">
      <label>Languages</label>
      <select className="selectpicker" data-live-search="true" multiple="">
      <option>Laoundry</option>
      <option>Cab Services</option>
      <option>Car Dealer</option>
      <option>Event Organizer</option>
      </select>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="card aon-card" id="aon-gallery-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-image"></i> Gallery Images</h4>
      </div>
      <div className="card-body aon-card-body">
      <form action="upload.php" className="dropzone dropzone-custom"></form>
      </div>
      </div>
      <div className="card aon-card" id="aon-video-panel">
      <div className="card-header aon-card-header"><h4><i className="fa fa-video-camera"></i> Video Upload</h4>
      </div>
      <div className="card-body aon-card-body">
      <div className="input-group mb-3">
      <input aria-label="Recipient's username" className="form-control" placeholder="Insert YouTube or Vimeo or Facebook Vedio Url" type="text"/>
      <div className="input-group-append">
      <button className="btn admin-button" type="button">Priview</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
}
