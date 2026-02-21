import React from "react";
import { Link } from "react-router-dom";

export default function McAvailability() {
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
      <h4>Availability</h4>
      </div>
      <div className="card aon-card">
      <div className="card-header aon-card-header"><h4><i className="fa fa-calendar"></i> Availability</h4></div>
      <div className="card-body aon-card-body">
      <div className="sf-availability-wrap">
      <div className="alert alert-warning m-b30">
                                      You need to put available hours for the booking system to work    
                                  </div>
      <div className="row">
      <div className="col-xl-4 m-b30">
      <div className="row">
      <div className="col-md-12">
      <div className="form-group">
      <label>Start Time</label>
      <select className="sf-select-box form-control sf-form-control bs-select-hidden form-control" data-bv-field="starttime" data-live-search="true" name="starttime" title="Start Time">
      <option className="bs-title-option" value="">Start Time</option>
      <option value="">Start Time</option>
      <option value="00:00">12:00 am</option><option value="00:30">12:30 am</option><option value="01:00">01:00 am</option><option value="01:30">01:30 am</option><option value="02:00">02:00 am</option><option value="02:30">02:30 am</option><option value="03:00">03:00 am</option><option value="03:30">03:30 am</option><option value="04:00">04:00 am</option><option value="04:30">04:30 am</option><option value="05:00">05:00 am</option><option value="05:30">05:30 am</option><option value="06:00">06:00 am</option><option value="06:30">06:30 am</option><option value="07:00">07:00 am</option><option value="07:30">07:30 am</option><option value="08:00">08:00 am</option><option value="08:30">08:30 am</option><option value="09:00">09:00 am</option><option value="09:30">09:30 am</option><option value="10:00">10:00 am</option><option value="10:30">10:30 am</option><option value="11:00">11:00 am</option><option value="11:30">11:30 am</option><option value="12:00">12:00 pm</option><option value="12:30">12:30 pm</option><option value="13:00">01:00 pm</option><option value="13:30">01:30 pm</option><option value="14:00">02:00 pm</option><option value="14:30">02:30 pm</option><option value="15:00">03:00 pm</option><option value="15:30">03:30 pm</option><option value="16:00">04:00 pm</option><option value="16:30">04:30 pm</option><option value="17:00">05:00 pm</option><option value="17:30">05:30 pm</option><option value="18:00">06:00 pm</option><option value="18:30">06:30 pm</option><option value="19:00">07:00 pm</option><option value="19:30">07:30 pm</option><option value="20:00">08:00 pm</option><option value="20:30">08:30 pm</option><option value="21:00">09:00 pm</option><option value="21:30">09:30 pm</option><option value="22:00">10:00 pm</option><option value="22:30">10:30 pm</option><option value="23:00">11:00 pm</option><option value="23:30">11:30 pm</option> </select>
      </div>
      </div>
      <div className="col-md-12">
      <div className="form-group">
      <label> Max Booking</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-calendar"></i>
      </div>
      </div>
      </div>
      <div className="col-md-12">
      <button className="admin-button add-more-btns m-r10"><i className="fa fa-plus"></i> Add</button>
      <button className="admin-button add-more-btns"><i className="fa fa-refresh"></i> Reload</button>
      </div>
      </div>
      </div>
      <div className="col-xl-8">
      <div className="form-group">
      <label className="p-lr15 aon-selectday-title">Select Days</label>
      <div className="aon-inputicon-box aon-list-days">
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc11" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc11">Monday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc22" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc22">Tuesday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc33" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc33">Wednesday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc44" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc44">Thursday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc55" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc55">Friday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc66" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc66">Saturday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc77" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc77">Sunday</label>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="sf-bot-border"></div>
      <div className="set-bulk-btn">
      <button className="admin-button add-more-btn"><i className="fa fa-plus"></i>  Set Bulk Intervals</button>
      <div className="add-more-content2">
      <form className="add-more-form">
      <div className="row">
      <div className="col-md-4">
      <div className="row">
      <div className="col-xl-6">
      <div className="form-group">
      <label>Start Time</label>
      <select className="sf-select-box form-control sf-form-control bs-select-hidden form-control" data-bv-field="starttime" data-live-search="true" name="starttime" title="Start Time">
      <option className="bs-title-option" value="">Start Time</option>
      <option value="">Start Time</option>
      <option value="00:00">12:00 am</option><option value="00:30">12:30 am</option><option value="01:00">01:00 am</option><option value="01:30">01:30 am</option><option value="02:00">02:00 am</option><option value="02:30">02:30 am</option><option value="03:00">03:00 am</option><option value="03:30">03:30 am</option><option value="04:00">04:00 am</option><option value="04:30">04:30 am</option><option value="05:00">05:00 am</option><option value="05:30">05:30 am</option><option value="06:00">06:00 am</option><option value="06:30">06:30 am</option><option value="07:00">07:00 am</option><option value="07:30">07:30 am</option><option value="08:00">08:00 am</option><option value="08:30">08:30 am</option><option value="09:00">09:00 am</option><option value="09:30">09:30 am</option><option value="10:00">10:00 am</option><option value="10:30">10:30 am</option><option value="11:00">11:00 am</option><option value="11:30">11:30 am</option><option value="12:00">12:00 pm</option><option value="12:30">12:30 pm</option><option value="13:00">01:00 pm</option><option value="13:30">01:30 pm</option><option value="14:00">02:00 pm</option><option value="14:30">02:30 pm</option><option value="15:00">03:00 pm</option><option value="15:30">03:30 pm</option><option value="16:00">04:00 pm</option><option value="16:30">04:30 pm</option><option value="17:00">05:00 pm</option><option value="17:30">05:30 pm</option><option value="18:00">06:00 pm</option><option value="18:30">06:30 pm</option><option value="19:00">07:00 pm</option><option value="19:30">07:30 pm</option><option value="20:00">08:00 pm</option><option value="20:30">08:30 pm</option><option value="21:00">09:00 pm</option><option value="21:30">09:30 pm</option><option value="22:00">10:00 pm</option><option value="22:30">10:30 pm</option><option value="23:00">11:00 pm</option><option value="23:30">11:30 pm</option> </select>
      </div>
      </div>
      <div className="col-xl-6">
      <div className="form-group">
      <label>End Time</label>
      <select className="sf-select-box form-control sf-form-control bs-select-hidden form-control" data-bv-field="starttime" data-live-search="true" name="starttime" title="Start Time"><option className="bs-title-option" value="">Start Time</option>
      <option value="">Start Time</option>
      <option value="00:00">12:00 am</option><option value="00:30">12:30 am</option><option value="01:00">01:00 am</option><option value="01:30">01:30 am</option><option value="02:00">02:00 am</option><option value="02:30">02:30 am</option><option value="03:00">03:00 am</option><option value="03:30">03:30 am</option><option value="04:00">04:00 am</option><option value="04:30">04:30 am</option><option value="05:00">05:00 am</option><option value="05:30">05:30 am</option><option value="06:00">06:00 am</option><option value="06:30">06:30 am</option><option value="07:00">07:00 am</option><option value="07:30">07:30 am</option><option value="08:00">08:00 am</option><option value="08:30">08:30 am</option><option value="09:00">09:00 am</option><option value="09:30">09:30 am</option><option value="10:00">10:00 am</option><option value="10:30">10:30 am</option><option value="11:00">11:00 am</option><option value="11:30">11:30 am</option><option value="12:00">12:00 pm</option><option value="12:30">12:30 pm</option><option value="13:00">01:00 pm</option><option value="13:30">01:30 pm</option><option value="14:00">02:00 pm</option><option value="14:30">02:30 pm</option><option value="15:00">03:00 pm</option><option value="15:30">03:30 pm</option><option value="16:00">04:00 pm</option><option value="16:30">04:30 pm</option><option value="17:00">05:00 pm</option><option value="17:30">05:30 pm</option><option value="18:00">06:00 pm</option><option value="18:30">06:30 pm</option><option value="19:00">07:00 pm</option><option value="19:30">07:30 pm</option><option value="20:00">08:00 pm</option><option value="20:30">08:30 pm</option><option value="21:00">09:00 pm</option><option value="21:30">09:30 pm</option><option value="22:00">10:00 pm</option><option value="22:30">10:30 pm</option><option value="23:00">11:00 pm</option><option value="23:30">11:30 pm</option> </select>
      </div>
      </div>
      <div className="col-lg-12 col-md-12">
      <div className="form-group">
      <label>Slot Interval</label>
      <select className="sf-select-box form-control sf-form-control bs-select-hidden form-control" data-bv-field="slotinterval" data-live-search="true" name="slotinterval" title="Slot Interval"><option className="bs-title-option" value="">Slot Interval</option>
      <option value="">Slot Interval</option>
      <option value="30">30 Mins</option><option value="60">1 Hr</option><option value="90">1 Hr 30 Mins</option><option value="120">2 Hr</option><option value="150">2 Hrs 30 Mins</option><option value="180">3 Hrs</option><option value="210">3 Hr 30 Mins</option><option value="240">4 Hrs</option>
      </select>
      </div>
      </div>
      <div className="col-lg-12 col-md-12">
      <div className="form-group">
      <label> Max Booking</label>
      <div className="aon-inputicon-box">
      <input className="form-control sf-form-control" name="company_name" type="text"/>
      <i className="aon-input-icon fa fa-calendar"></i>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-md-8">
      <div className="form-group">
      <label className="p-lr15">Select Days</label>
      <div className="aon-inputicon-box aon-list-days">
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc1" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc1">Monday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc2" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc2">Tuesday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc3" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc3">Wednesday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc4" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc4">Thursday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc5" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc5">Friday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc6" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc6">Saturday</label>
      </div>
      <div className="checkbox sf-radio-checkbox sf-radio-check-2">
      <input id="loc7" name="abc" type="checkbox" value="five"/>
      <label htmlFor="loc7">Sunday</label>
      </div>
      </div>
      </div>
      </div>
      <div className="col-md-12">
      <button className="admin-button" type="button"><i className="fa fa-save"></i> Save slots</button>
      </div>
      </div>
      </form>
      </div>
      </div>

      <div className="sf-availability-times-tab m-b50">
      <div className="sf-custom-tabs sf-custom-new">

      <ul className="nav nav-tabs nav-table-cell">
      <li><a className="active" data-toggle="tab" href="#Monday">Monday </a></li>
      <li><a data-toggle="tab" href="#Tuesday">Tuesday</a></li>
      <li><a data-toggle="tab" href="#Wednesday">Wednesday</a></li>
      <li><a data-toggle="tab" href="#Thursday">Thursday </a></li>
      <li><a data-toggle="tab" href="#Friday">Friday</a></li>
      <li><a data-toggle="tab" href="#Saturday">Saturday</a></li>
      <li><a data-toggle="tab" href="#Sunday">Sunday</a></li>
      </ul>

      <div className="tab-content">

      <div className="tab-pane active" id="Monday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Tuesday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Wednesday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Thursday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Friday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Saturday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="tab-pane" id="Sunday">
      <div className="sf-avai-tabs-content">
      <div className="sf-avai-tabs-inr">
      <div className="row aon-avi-time-slot">

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">08:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">09:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">10:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">11:00 am</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">12:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">01:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">02:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">03:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">04:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">05:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">06:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-3 col-md-4">
      <div className="sf-avai-time-slots-wrap">
      <input className="form-control" type="text" value="1"/>
      <div className="sf-avai-time-slots-control">
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-delete has-toltip" title="Delete" type="button">
      <i className="fa fa-remove"></i>
      <span className="header-toltip">Delete</span>
      </button>
      </div>
      <button className="btn slot-time" type="button">07:00 pm</button>
      <div className="sf-avai-time-slots-btn">
      <button className="btn slot-update has-toltip" title="Update" type="button">
      <i className="fa fa-refresh"></i>
      <span className="header-toltip">Update</span>
      </button>
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
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
}
