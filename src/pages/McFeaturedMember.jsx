import React from "react";
import { Link } from "react-router-dom";

export default function McFeaturedMember() {
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
      <h4>Edit Profile</h4>
      </div>
      <div className="card aon-card">
      <div className="card-header aon-card-header"><h4><i className="fa fa-user"></i> Featured Member</h4></div>
      <div className="card-body aon-card-body">
      <div className="sf-featured-member-area">
      <div className="row">
      <div className="col-xl-6 col-md-12">
      <div className="sf-fea-media">
      <img alt="" src="/images/featured-pic.png"/>
      </div>
      </div>
      <div className="col-xl-6 col-md-12">
      <div className="sf-fea-info">
      <h2 className="sf-title m-b30">You are a featured member.</h2>
      <h4 className="m-b30">26 Days remaining before your featured membership expires.</h4>
      <a className="admin-button" href="javascript:;">Send Request to become featured member.</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
}
