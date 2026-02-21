import React from "react";
import { Link } from "react-router-dom";

export default function McTeamMembers() {
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
      <h4>Add Team Members</h4>
      </div>
      <div className="card aon-card">
      <div className="card-body aon-card-body">
      <div className="sf-bd-data-tb-head">
      <button className="admin-button" data-target="#addteammembers" data-toggle="modal" type="button">
      <i className="fa fa-plus"></i>
                                      Add Team Members  
                                  </button>
      </div>
      <div className="sf-bs-data-table">
      <div className="table-responsive">
      <table className="table table-striped table-bordered example-dt-table" style={{width: "100%"}}>
      <thead>
      <tr>
      <th>
      <div className="checkbox sf-radio-checkbox">
      <input id="th1" name="abc" type="radio" value="five"/>
      <label htmlFor="th1">
      <span className="btn btn-danger btn-xs" title="Delete">
      <i className="fa fa-trash-o"></i>
      </span>
      </label>
      </div>
      </th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Is Admin?</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td2" name="abc" type="radio" value="five"/>
      <label htmlFor="td2"></label>
      </div>
      </td>
      <td>James Miller</td>
      <td>+01 234 567 89</td>
      <td>xyz78576@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td11" name="abc" type="radio" value="five"/>
      <label htmlFor="td11"></label>
      </div>
      </td>
      <td>Devid</td>
      <td>+01 234 567 67</td>
      <td>demo123@gmail.com</td>
      <td>No</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td33" name="abc" type="radio" value="five"/>
      <label htmlFor="td33"></label>
      </div>
      </td>
      <td>Jilly</td>
      <td>+01 234 567 49</td>
      <td>sample@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td44" name="abc" type="radio" value="five"/>
      <label htmlFor="td44"></label>
      </div>
      </td>
      <td>James Miller</td>
      <td>+01 234 567 89</td>
      <td>xyz78576@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td55" name="abc" type="radio" value="five"/>
      <label htmlFor="td55"></label>
      </div>
      </td>
      <td>Devid</td>
      <td>+01 234 567 67</td>
      <td>demo123@gmail.com</td>
      <td>No</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td66" name="abc" type="radio" value="five"/>
      <label htmlFor="td66"></label>
      </div>
      </td>
      <td>Jilly</td>
      <td>+01 234 567 49</td>
      <td>sample@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td77" name="abc" type="radio" value="five"/>
      <label htmlFor="td77"></label>
      </div>
      </td>
      <td>James Miller</td>
      <td>+01 234 567 89</td>
      <td>xyz78576@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td88" name="abc" type="radio" value="five"/>
      <label htmlFor="td88"></label>
      </div>
      </td>
      <td>Devid</td>
      <td>+01 234 567 67</td>
      <td>demo123@gmail.com</td>
      <td>No</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td99" name="abc" type="radio" value="five"/>
      <label htmlFor="td99"></label>
      </div>
      </td>
      <td>Jilly</td>
      <td>+01 234 567 49</td>
      <td>sample@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td111" name="abc" type="radio" value="five"/>
      <label htmlFor="td111"></label>
      </div>
      </td>
      <td>James Miller</td>
      <td>+01 234 567 89</td>
      <td>xyz78576@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td999" name="abc" type="radio" value="five"/>
      <label htmlFor="td999"></label>
      </div>
      </td>
      <td>Devid</td>
      <td>+01 234 567 67</td>
      <td>demo123@gmail.com</td>
      <td>No</td>
      <td></td>
      </tr>
      <tr>
      <td>
      <div className="checkbox sf-radio-checkbox">
      <input id="td100" name="abc" type="radio" value="five"/>
      <label htmlFor="td100"></label>
      </div>
      </td>
      <td>Jilly</td>
      <td>+01 234 567 49</td>
      <td>sample@gmail.com</td>
      <td>Yes</td>
      <td></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
}
