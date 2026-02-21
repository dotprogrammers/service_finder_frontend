import React from "react";
import { Link } from "react-router-dom";

export default function McMessanger() {
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
      <h4>Messenger</h4>
      </div>
      <div className="card aon-card">
      <div className="card-body aon-card-body">
      <div className="content-admin-main2">
      <div className="wt-admin-dashboard-msg-2">
      <div className="wt-dashboard-msg-user-list">

      <div className="wt-dashboard-msg-search">
      <div className="input-group">
      <input className="form-control" placeholder="Search Provider" type="text"/>
      <button className="btn" type="button"><i className="fa fa-search"></i></button>
      </div>
      </div>


      <div className="msg-find-list">
      <select className="sf-select-box bs-select-hidden">
      <option>Recent Chats</option>
      <option>Short by Time</option>
      <option>Short by Unread</option>
      </select>
      </div>


      <div className="wt-dashboard-msg-search-list" id="msg-list-wrap">
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">Fri</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">Fri</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic2.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">Fri</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic3.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">Thu</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic2.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic3.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic2.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic3.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic2.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic3.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      <div className="wt-dashboard-msg-search-list-wrap">
      <a className="msg-user-info clearfix" href="javascript:;">
      <div className="msg-user-timing">16/07/2019</div>
      <div className="msg-user-info-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="msg-user-info-text">
      <div className="msg-user-name">Devid Huker</div>
      <div className="msg-user-discription">All created by our Global</div>
      </div>
      </a>
      </div>
      </div>

      </div>
      <div className="wt-dashboard-msg-box">
      <div className="single-msg-user-name-box">
      <h4 className="single-msg-user-name">Devid Huker</h4>
      <div className="single-msg-short-discription">Independent Web Designers and Developers.</div>
      </div>
      <div className="single-user-msg-conversation" id="msg-chat-wrap">
      <div className="single-user-comment-wrap">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
      <div className="single-user-msg-time">12:13 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap sigle-user-reply">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
      <div className="single-user-msg-time">12:37 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
      <div className="single-user-msg-time">12:13 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap sigle-user-reply">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
      <div className="single-user-msg-time">12:37 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
      <div className="single-user-msg-time">12:13 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap sigle-user-reply">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
      <div className="single-user-msg-time">12:37 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
      <div className="single-user-msg-time">12:13 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap sigle-user-reply">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
      <div className="single-user-msg-time">12:37 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic4.jpg"/></div>
      <div className="single-user-com-text">Breaking the endless cycle of meaningless text message conversations starts with only talking to someone who offers interesting topics opinions. ... Text messaging shouldn't be any different from having a conversation in-person</div>
      <div className="single-user-msg-time">12:13 PM</div>
      </div>
      </div>
      <div className="single-user-comment-wrap sigle-user-reply">
      <div className="single-user-comment-block clearfix">
      <div className="single-user-com-pic"><img alt="" src="/images/user-avtar/pic1.jpg"/></div>
      <div className="single-user-com-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</div>
      <div className="single-user-msg-time">12:37 PM</div>
      </div>
      </div>
      </div>
      <div className="single-msg-reply-comment">
      <div className="input-group">
      <textarea className="form-control" placeholder="Type a message here"></textarea>
      <button className="btn" type="button"><i className="fa fa-send-o"></i></button>
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
