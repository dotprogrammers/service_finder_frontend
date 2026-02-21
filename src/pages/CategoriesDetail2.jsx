import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesDetail2() {
  return (
    <>
   
  
       Content 
      <div className="page-content">
      <div className="section-content sf-allCaty-info-wrap">
      <div className="container">

      <div className="row">

      <div className="col-md-6">
      <div className="sf-caty-pic">
      <div className="sf-caty-btn">View Providers</div>
      <div className="sf-caty-cirle"><i className="fa fa-arrow-circle-down"></i></div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-caty-info">
      <div className="m-b10"><strong>Project categories</strong> / House cleaning services</div>
      <h3>House Cleaning Services</h3>
      <div className="sf-caty-text">
      <p>Pro house cleaners work with you to assess your home cleaning needs. Whether you need weekly, bi-weekly, or monthly services, 
                                              house cleaning professionals can schedule cleanings, so that your home has routine care They can also deep clean the house in 
                                              between cleaning, before special occasions, or for move-in and move-out cleaning.</p>
      <p>On average, house cleaners on Zaarly cost $30 - $50 per hour per house cleaner. The price will depend on factors like size of the home, supplies needed, and special cleaning circumstances. A 2000 square foot home will typically cost $250. One-time deep cleanings will 
                                              cost more and signing up for regular cleaning usually will be more cost-effective. </p>
      </div>
      </div>
      </div>
      </div>

      </div>
      </div>
      <div className="section-content sf-allCaty-grid-wrap">
      <div className="container">

      <div className="section-head">
      <div className="row">
      <div className="col-md-6">
      <h2 className="sf-title text-white">All Categories</h2>
      </div>
      <div className="col-md-6">
      </div>
      </div>
      </div>

      <div className="section-content">
      <div className="row">

      <div className="col-lg-3 col-md-6 m-b30">
      <div className="sf-caty-icon-col">
      <div className="sf-caty-icon-box"><img alt="" src="/images/cat.png"/></div>
      <h5 className="sf-caty-icon-title">Kitchen Cleaning</h5>
      <p>Pro house cleaners work with you to assess your home...</p>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 m-b30">
      <div className="sf-caty-icon-col">
      <div className="sf-caty-icon-box"><img alt="" src="/images/cat2.png"/></div>
      <h5 className="sf-caty-icon-title">Room Cleaning</h5>
      <p>Pro house cleaners work with you to assess your home...</p>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 m-b30">
      <div className="sf-caty-icon-col">
      <div className="sf-caty-icon-box"><img alt="" src="/images/cat3.png"/></div>
      <h5 className="sf-caty-icon-title">Door Cleaning</h5>
      <p>Pro house cleaners work with you to assess your home...</p>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 m-b30">
      <div className="sf-caty-icon-col">
      <div className="sf-caty-icon-box"><img alt="" src="/images/cat4.png"/></div>
      <h5 className="sf-caty-icon-title">Glass Cleaning</h5>
      <p>Pro house cleaners work with you to assess your home...</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="section-content sf-caty-listResult-wrap">
      <div className="container">
      <div className="section-content">

      <div className="sf-search-result-top flex-wrap d-flex justify-content-between">
      <div className="sf-search-result-title"> <h5>Showing 1 – 10 of 16 results</h5></div>
      <div className="sf-search-result-option">
      <ul className="sf-search-sortby">
      <li className="sf-select-sort-by">
      <select className="sf-select-box form-control sf-form-control bs-select-hidden" id="setorderby" name="setorderby" title="SORT BY">
      <option className="bs-title-option" value="">SORT BY</option>
      <option value="rating">Rating</option>
      <option value="title">Title</option>
      <option value="distance">Distance</option>
      </select>
      </li>
      <li>
      <select className="sf-select-box form-control sf-form-control bs-select-hidden" id="setorder" name="setorder" title="DESC">
      <option className="bs-title-option" value="">DESC</option>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
      </select>
      </li>
      <li>
      <select className="sf-select-box form-control sf-form-control bs-select-hidden" id="numberofpages" name="numberofpages" title="9">
      <option className="bs-title-option" value="">9</option>
      <option value="9">9</option>
      <option value="12">12</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
      <option value="30">30</option>
      </select>
      </li>
      </ul>
      <ul className="sf-search-grid-option" id="viewTypes">
      <li data-view="grid-3">
      <button className="btn btn-border btn-icon" type="button"><i className="fa fa-th"></i></button>
      </li>
      <li className="active" data-view="listview">
      <button className="btn btn-border btn-icon" type="button"><i className="fa fa-th-list"></i></button>
      </li>
      </ul>
      </div>
      </div>

      <div className="row">

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic1.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Colin Farrell</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic2.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Jackie Chan</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic3.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Javier Bardem</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic4.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Mila Kunis</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic5.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Edward Luise</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic6.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>James McAvoy</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic7.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Jackie Chan</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic8.jpg)"}}>
      <Link className="sf-vender-pic-link" to="/profile-full"/>
      </div>
      <div className="sf-vender-list-info">
      <h4 className="sf-venders-title"><Link to="/profile-full"/>Colin Farrell</h4>
      <span className="sf-venders-address"><i className="fa fa-map-marker"></i>Queens, United States</span>
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="sf-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="sf-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="dropdown action-dropdown dropdown-left">
      <button aria-expanded="true" className="action-button gray dropdown-toggle" data-toggle="dropdown" type="button"><i className="fa fa-ellipsis-v"></i></button>
      <ul className="dropdown-menu">
      <li><a href="javascript:;"><i className="feather-sliders"></i> Display Services</a></li>
      <li><a href="javascript:;"><i className="feather-save"></i> 0 Review Comments</a></li>
      <li><a href="javascript:;"><i className="feather-trash"></i> Request A Quote</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

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
