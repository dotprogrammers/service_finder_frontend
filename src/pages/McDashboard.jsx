import React from "react";
import { Link } from "react-router-dom";

export default function McDashboard() {
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
      <div className="row">
      <div className="col-xl-8 col-lg-12 m-b30 break-1300">
      <div className="card aon-card">
      <div className="card-body aon-card-body">
      <div className="row">
      <div className="col-lg-4 m-b30">
      <div className="panel panel-default ser-card-default">
      <div className="panel-body ser-card-body ser-puple p-a30">
      <div className="ser-card-title">Wallet</div>
      <div className="ser-card-icons"><img alt="" src="/images/wallet.png"/></div>
      <div className="ser-card-amount">$252.45</div>
      <div className="ser-card-table">
      <div className="ser-card-left">
      <div className="ser-card-total">
      <div className="ser-total-table">
      <div className="ser-total-cell1">Total</div>
      </div>
      </div>
      </div>
      <div className="ser-card-right">
      <div className="ser-card-icon"><i className="glyph-icon flaticon-money-3"></i></div>
      </div>
      </div>
      <span className="ser-card-circle-bg"></span>
      </div>
      </div>
      </div>
      <div className="col-lg-4 m-b30">
      <div className="panel panel-default ser-card-default">
      <div className="panel-body ser-card-body ser-orange p-a30">
      <div className="ser-card-title">Booking</div>
      <div className="ser-card-icons"><img alt="" src="/images/booking.png"/></div>
      <div className="ser-card-amount">465</div>
      <div className="ser-card-table">
      <div className="ser-card-left">
      <div className="ser-card-total">
      <div className="ser-total-table">
      <div className="ser-total-cell1">Wallet</div>
      </div>
      </div>
      </div>
      <div className="ser-card-right">
      <div className="ser-card-icon"><i className="glyph-icon flaticon-wallet"></i></div>
      </div>
      </div>
      <span className="ser-card-circle-bg"></span>
      </div>
      </div>
      </div>
      <div className="col-lg-4 m-b30">
      <div className="panel panel-default ser-card-default">
      <div className="panel-body ser-card-body ser-blue p-a30">
      <div className="ser-card-title">Earning</div>
      <div className="ser-card-icons"><img alt="" src="/images/earning.png"/></div>
      <div className="ser-card-amount">$124.00</div>
      <div className="ser-card-table">
      <div className="ser-card-left">
      <div className="ser-card-total">
      <div className="ser-total-table">
      <div className="ser-total-cell1">Complete</div>
      </div>
      </div>
      </div>
      <div className="ser-card-right">
      <div className="ser-card-icon"><i className="glyph-icon flaticon-calendar"></i></div>
      </div>
      </div>
      <span className="ser-card-circle-bg"></span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-12 m-b30 break-1300">
      <div className="card aon-card">
      <div className="card-header aon-card-header aon-card-header2"><h4><i className="feather-bell"></i> Notifications</h4></div>
      <div className="card-body aon-card-body">
      <div className="tab-content">
      <div className="tab-pane active" id="accepted11">
      <div className="ws-poptab-list-wrap notification-scroll">

      <div className="ws-poptab-list">
      <div className="ws-poptab-media">
      <img alt="" src="/images/testimonials2/pic1.jpg"/>
      </div>
      <div className="ws-poptab-info">
      <strong>Maria Smith</strong>
      <p>David wood requested to change.</p>
      <span className="ws-time-duration">8 mins ago</span>
      </div>
      </div>

      <div className="ws-poptab-list">
      <div className="ws-poptab-media">
      <img alt="" src="/images/testimonials2/pic2.jpg"/>
      </div>
      <div className="ws-poptab-info">
      <strong>Zonsan Wood</strong>
      <p>David wood requested to change.</p>
      <span className="ws-time-duration">4 mins ago</span>
      </div>
      </div>

      <div className="ws-poptab-list">
      <div className="ws-poptab-media">
      <img alt="" src="/images/testimonials2/pic3.jpg"/>
      </div>
      <div className="ws-poptab-info">
      <strong>Denisa Wood</strong>
      <p>David wood requested to change.</p>
      <span className="ws-time-duration">2 mins ago</span>
      </div>
      </div>
      </div>
      <div className="ws-poptab-all text-center">
      <a className="btn-link-type" href="#">View All</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-xl-8 m-b30">
      <div className="card aon-card">
      <div className="card-header aon-card-header aon-card-header2"><h4><i className="feather-pie-chart"></i> Booking</h4></div>
      <div className="card-body aon-card-body">
      <div className="dx-viewport demo-container">
      <div id="chart-demo">
      <div id="chart"></div>
      <div className="action">
      <div className="label">Choose a temperature threshold, °C: </div>
      <div id="choose-temperature"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-xl-4">
      <div className="card aon-card">
      <div className="card-header aon-card-header aon-card-header2"><h4><i className="feather-pie-chart"></i> Booking Stats</h4></div>
      <div className="card-body aon-card-body">
      <div>
      <ul className="list-unstyled">
      <li className="py-3">
      <div className="d-flex align-items-center">
      <div className="avatar-xs rounded-circle m-r10">
      <i className="feather-check-circle"></i>
      </div>
      <div className="flex-grow-1">
      <p className="text-muted mb-2">Completed</p>
      <div className="progress progress-sm animated-progess">
      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-success" role="progressbar" style={{width: "70%"}}></div>
      </div>
      </div>
      </div>
      </li>
      <li className="py-3">
      <div className="d-flex align-items-center">
      <div className="avatar-xs rounded-circle m-r10">
      <i className="feather-calendar"></i>
      </div>
      <div className="flex-grow-1">
      <p className="text-muted mb-2">Pending</p>
      <div className="progress progress-sm animated-progess">
      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" className="progress-bar bg-warning" role="progressbar" style={{width: "45%"}}></div>
      </div>
      </div>
      </div>
      </li>
      <li className="py-3">
      <div className="d-flex align-items-center">
      <div className="avatar-xs align-self-center me-3">
      <div className="avatar-xs rounded-circle m-r10">
      <i className="feather-x-circle"></i>
      </div>
      </div>
      <div className="flex-grow-1">
      <p className="text-muted mb-2">Cancel</p>
      <div className="progress progress-sm animated-progess">
      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="19" className="progress-bar bg-danger" role="progressbar" style={{width: "19%"}}></div>
      </div>
      </div>
      </div>
      </li>
      </ul>
      </div>
      <hr/>
      <div className="text-center">
      <div className="row aon-states-row">
      <div className="col-4">
      <div className="mt-2">
      <p className="text-muted mb-2">Completed</p>
      <h5 className="font-size-16 mb-0">70</h5>
      </div>
      </div>
      <div className="col-4">
      <div className="mt-2">
      <p className="text-muted mb-2">Pending</p>
      <h5 className="font-size-16 mb-0">45</h5>
      </div>
      </div>
      <div className="col-4">
      <div className="mt-2">
      <p className="text-muted mb-2">Cancel</p>
      <h5 className="font-size-16 mb-0">19</h5>
      </div>
      </div>
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
