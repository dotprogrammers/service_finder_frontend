import React from "react";
import { Link } from "react-router-dom";

export default function McUpgradeAccount() {
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
      <div className="aon-admin-heading">
      <h4><strong>Edit Profile</strong></h4>
      </div>
      <div className="card aon-card">
      <div className="card-header aon-card-header"><h4><i className="fa fa-gear"></i> Upgrade Account</h4></div>
      <div className="card-body aon-card-body">
      <div className="sf-upgrade-account-area">
      <div className="sf-upgrade-top-area">
      <div className="row">
      <div className="col-xl-6">
      <div id="clockdiv">
      <div>
      <span className="days"></span>
      <div className="smalltext">Days</div>
      </div>
      <div>
      <span className="hours"></span>
      <div className="smalltext">Hours</div>
      </div>
      <div>
      <span className="minutes"></span>
      <div className="smalltext">Minutes</div>
      </div>
      <div>
      <span className="seconds"></span>
      <div className="smalltext">Seconds</div>
      </div>
      </div>
      </div>
      <div className="col-xl-6 text-right">
      <h4 className="sf-upgrade-top-title">Your Current Plan <span>Gold</span></h4>
      <button className="admin-button sf-upgrade-btn">Please Renew Your Plan</button>
      </div>
      </div>
      </div>
      <div className="sf-upgrade-bot-area">
      <div className="row justify-content-center">
      <div className="col-xl-4 col-lg-6 sf-upgrade-account-plans-area m-b30">
      <div className="sf-upgrade-account-plans">
      <div className="sf-plans-bx">
      <h4 className="sf-plans-name">Silver</h4>
      <div className="sf-plans-price"> USD</div>
      <div className="sf-plan-list">
      <ul>
      <li><span><i className="fa fa-check"></i>Booking</span></li>
      <li><span><i className="fa fa-check"></i>Cover Image</span></li>
      <li><span><i className="fa fa-check"></i>Gallery Images</span></li>
      <li><span><i className="fa fa-check"></i>Multiple Categories</span></li>
      <li><span><i className="fa fa-check"></i>Number of Categories</span></li>
      <li><span><i className="fa fa-check"></i>Apply For Job</span></li>
      <li><span><i className="fa fa-check"></i>Job Alerts</span></li>
      <li><span><i className="fa fa-check"></i>Branches</span></li>
      <li><span><i className="fa fa-check"></i>Google Calendar</span></li>
      <li><span><i className="fa fa-check"></i>Invoice</span></li>
      <li><span><i className="fa fa-check"></i>Availability</span></li>
      <li><span><i className="fa fa-check"></i>Staff Members</span></li>
      </ul>
      </div>
      </div>
      <div className="sf-plans-done"><i className="fa fa-check"></i></div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-6 sf-upgrade-account-plans-area m-b30">
      <div className="sf-upgrade-account-plans selected-plan">
      <div className="sf-plans-bx">
      <h4 className="sf-plans-name">Gold</h4>
      <div className="sf-plans-price">20 USD</div>
      <div className="sf-plan-list">
      <ul>
      <li><span><i className="fa fa-check"></i>Booking</span></li>
      <li><span><i className="fa fa-check"></i>Cover Image</span></li>
      <li><span><i className="fa fa-check"></i>Gallery Images</span></li>
      <li><span><i className="fa fa-check"></i>Multiple Categories</span></li>
      <li><span><i className="fa fa-check"></i>Number of Categories</span></li>
      <li><span><i className="fa fa-check"></i>Apply For Job</span></li>
      <li><span><i className="fa fa-check"></i>Job Alerts</span></li>
      <li><span><i className="fa fa-check"></i>Branches</span></li>
      <li><span><i className="fa fa-check"></i>Google Calendar</span></li>
      <li><span><i className="fa fa-check"></i>Invoice</span></li>
      <li><span><i className="fa fa-check"></i>Availability</span></li>
      <li><span><i className="fa fa-check"></i>Staff Members</span></li>
      </ul>
      </div>
      </div>
      <div className="sf-plans-done"><i className="fa fa-check"></i></div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-6 sf-upgrade-account-plans-area m-b30">
      <div className="sf-upgrade-account-plans">
      <div className="sf-plans-bx">
      <h4 className="sf-plans-name">Bronze</h4>
      <div className="sf-plans-price">50 USD</div>
      <div className="sf-plan-list">
      <ul>
      <li><span><i className="fa fa-check"></i>Booking</span></li>
      <li><span><i className="fa fa-check"></i>Cover Image</span></li>
      <li><span><i className="fa fa-check"></i>Gallery Images</span></li>
      <li><span><i className="fa fa-check"></i>Multiple Categories</span></li>
      <li><span><i className="fa fa-check"></i>Number of Categories</span></li>
      <li><span><i className="fa fa-check"></i>Apply For Job</span></li>
      <li><span><i className="fa fa-check"></i>Job Alerts</span></li>
      <li><span><i className="fa fa-check"></i>Branches</span></li>
      <li><span><i className="fa fa-check"></i>Google Calendar</span></li>
      <li><span><i className="fa fa-check"></i>Invoice</span></li>
      <li><span><i className="fa fa-check"></i>Availability</span></li>
      <li><span><i className="fa fa-check"></i>Staff Members</span></li>
      </ul>
      </div>
      </div>
      <div className="sf-plans-done"><i className="fa fa-check"></i></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="sf-upgrade-account-btn">
      <button className="admin-button">Continue</button>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
}
