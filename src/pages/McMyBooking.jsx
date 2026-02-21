import React from "react";
import { Link } from "react-router-dom";

export default function McMyBooking() {
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
      <h4>My Booking</h4>
      </div>
      <div className="card aon-card">
      <div className="card-body aon-card-body">
      <div className="sf-bd-data-tb-head">
      <button className="admin-button" data-target="#downloadreport" data-toggle="modal" type="button">
      <i className="fa fa-plus"></i>
                                      Download Report 
                                  </button>
      </div>

      <div className="sf-availability-times-tab m-b50">
      <div className="sf-custom-tabs sf-custom-new">

      <ul className="nav nav-tabs nav-table-cell">
      <li><a className="active" data-toggle="tab" href="#Upcoming">Upcoming</a></li>
      <li><a data-toggle="tab" href="#Past">Past</a></li>
      </ul>

      <div className="tab-content">

      <div className="tab-pane active" id="Upcoming">
      <div className="sf-tabs-content">
      <div className="sf-bs-data-table">
      <div className="table-responsive">
      <table className="table table-striped table-bordered example-dt-table aon-booking-table" style={{width: "100%"}}>
      <thead>
      <tr>
      <th>
      <div className="checkbox sf-radio-checkbox">
      <input id="th1_1" name="abc" type="radio" value="five"/>
      <label htmlFor="th1_1">
      <span className="btn btn-danger btn-xs">
      <i className="fa fa-trash-o"></i>
      </span>
      </label>
      </div>
      </th>
      <th>Booking Info</th>
      <th>Payment Info</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td2_2" name="abc" type="radio" value="five"/>
      <label htmlFor="td2_2"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-1115" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-1115">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td2" name="abc" type="radio" value="five"/>
      <label htmlFor="td2"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-1114" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-1114">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td3" name="abc" type="radio" value="five"/>
      <label htmlFor="td3"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-11113" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-11113">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td4" name="abc" type="radio" value="five"/>
      <label htmlFor="td4"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-11123" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-11123">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Past">
      <div className="sf-tabs-content">
      <div className="sf-bs-data-table">
      <div className="table-responsive">
      <table className="table table-striped table-bordered example-dt-table aon-booking-table" style={{width: "100%"}}>
      <thead>
      <tr>
      <th>
      <div className="checkbox sf-radio-checkbox">
      <input id="2th1" name="abc" type="radio" value="five"/>
      <label htmlFor="2th1">
      <span className="btn btn-danger btn-xs" title="Delete">
      <i className="fa fa-trash-o"></i>
      </span>
      </label>
      </div>
      </th>
      <th>Booking Info</th>
      <th>Payment Info</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="2td1" name="abc" type="radio" value="five"/>
      <label htmlFor="2td1"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-1118" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-1118">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="2td2" name="abc" type="radio" value="five"/>
      <label htmlFor="2td2"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-1111" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-1111">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="2td3" name="abc" type="radio" value="five"/>
      <label htmlFor="2td3"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-11153" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-11153">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="2td4" name="abc" type="radio" value="five"/>
      <label htmlFor="2td4"></label>
      </div>
      </td>
      <td>
      <div className="sf-booking-info-col">
      <span className="sf-booking-refid">#1114</span>
      <span className="booking-status sf-booking-incomplete">Incomplete</span>
      <div className="sf-booking-upcoming">
                                                                                  Job
                                                                              </div>
      <div className="sf-booking-customer">
      <ul className="customer-info">
      <li><strong><i className="fa fa-user"></i> Agent Name</strong> Heima Agency</li>
      <li><strong><i className="fa fa-user"></i> Customer Name</strong> LAURA BARRERA</li>
      <li><strong><i className="fa fa-phone"></i> Customer Phone</strong> +52 81 1911 2887</li>
      <li><strong><i className="fa fa-calendar-o"></i> Date</strong> 2021-12-26</li>
      <li><strong><i className="fa fa-clock-o"></i> Time</strong> 13:25:00</li>
      </ul>
      </div>
      <button className="admin-button assignButton margin-r-10" type="button">
      <i className="fa fa-user"></i>
                                                                                  Assign Now
                                                                              </button>
      </div>
      </td>
      <td>
      <div className="inner">
      <h3>
      <span className="sf-booking-payment-info" data-container="body" data-html="true" data-original-title="" data-placement="top" data-toggle="popover" data-trigger="hover" id="payinfo-1119" title="">85.00€ </span>
      <span className="sf-payment-status">Paid</span>
      </h3>
      <div className="hide sf-pop-hide" id="popover-content-payinfo-1119">
      <ul className="list-unstyled margin-0 booking-payment-data">
      <li><strong>Total Amount:</strong> 85.00€</li>
      <li><strong>Providers Fee:</strong> 57.00€</li>
      <li><strong>Admin Fee:</strong> 28.00€</li>
      <li><strong>Payment Method:</strong> </li>
      <li><strong>Admin pay to providers:</strong> Pending</li>
      <li><strong>Transaction ID:</strong> NA</li>
      </ul>
      </div>
      </div>
      </td>
      <td>
      <button className="admin-button btn-sm viewBookings" title="View Booking" type="button">
      <i className="fa fa-eye"></i>
      </button>
      <button className="admin-button btn-sm" title="Change Status" type="button">
      <i className="fa fa-battery-half"></i>
      </button>
      <button className="admin-button btn-sm addInvoice margin-r-5" title="Add Invoice" type="button">
      <i className="fa fa-plus"></i>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
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
      </div>

    </>
  );
}
