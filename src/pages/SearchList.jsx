import React from "react";
import { Link } from "react-router-dom";

export default function SearchList() {
  return (
    <>
   
  
       Content 
      <div className="page-content">

      <div className="sf-seach-vertical sf-search-bar-panel">
      <div className="search-form">
      <form className="clearfix search-providers" method="get">
      <div className="sf-searchbar-box">
      <ul className="sf-searchbar-area">
      <li>
      <div className="sf-search-title">
      <label>Keyword</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/keyword.png"/></span>
      </div>
      <div className="sf-search-feild">
      <input className="form-control sf-form-control" id="keyword" name="keyword" placeholder="Keyword" type="text" value=""/>
      </div>
      </li>
      <li>
      <div className="sf-search-title">
      <label>Location</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/location-pin.png"/></span>
      </div>
      <div className="sf-search-feild">
      <input autoComplete="off" className="form-control sf-form-control pac-target-input" id="searchAddress" name="searchAddress" placeholder="Address" type="text" value=""/>
      </div>
      </li>
      <li>
      <div className="sf-search-title">
      <label>Category</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/maintenance.png"/></span>
      </div>
      <div className="sf-search-feild">
      <select className="form-control sf-form-control aon-categories-select sf-select-box" id="categorysrh" name="catid" title="Category">
      <option className="bs-title-option" value="">Select a Category</option>
      <option data-content="&lt;img className='childcat-img' width='50' height='auto' src=images\cat-thum\cat-1.jpg&gt;
                                        &lt;span className='childcat'&gt;Cab Service&lt;/span&gt;" value="17">Cab Service
                                      </option>
      <option data-content="&lt;img className='childcat-img' width='50' height='auto' src=images\cat-thum\cat-2.jpg&gt;
                                        &lt;span className='childcat'&gt;Car Dealers&lt;/span&gt;" value="30">Car Dealers
                                      </option>
      <option data-content="&lt;img className='childcat-img' width='50' height='auto' src=images\cat-thum\cat-3.jpg&gt;
                                        &lt;span className='childcat'&gt;Food &amp; Drink&lt;/span&gt;" value="19">Food &amp; Drink
                                      </option>
      <option data-content="&lt;img className='childcat-img' width='50' height='auto' src=images\cat-thum\cat-4.jpg&gt;
                                        &lt;span className='childcat'&gt;Plumber&lt;/span&gt;" value="19">Plumber
                                      </option>
      <option data-content="&lt;img className='childcat-img' width='50' height='auto' src=images\cat-thum\cat-5.jpg&gt;
                                        &lt;span className='childcat'&gt;Electrician&lt;/span&gt;" value="19">Electrician 
                                      </option>
      </select>
      </div>
      </li>
      <li>
      <div className="sf-search-title">
      <label>Country</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/globe.png"/></span>
      </div>
      <div className="sf-search-feild">
      <select className="sf-select-box form-control sf-form-control bs-select-hidden" data-header="Select a Country" data-live-search="true" id="country" name="country" title="Country">
      <option className="bs-title-option" value="">Country</option>
      <option value="">Select Country</option>
      <option value="Turkey">Turkey</option>
      <option value="United States">United States</option>
      </select>
      </div>
      </li>
      <li>
      <div className="sf-search-title">
      <label>City</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/city.png"/></span>
      </div>
      <div className="sf-search-feild">
      <select className="sf-select-box form-control sf-form-control bs-select-hidden" data-header="Select a City" data-live-search="true" id="city" name="city" title="City">
      <option className="bs-title-option" value="">City</option>
      <option value="">Select City</option>
      </select>
      </div>
      </li>
      <li>
      <div className="sf-search-title">
      <label>Filter by price interval:</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/city.png"/></span>
      </div>
      <div className="sf-search-feild">
      <input className="span2" data-slider-max="1000" data-slider-min="10" data-slider-step="5" data-slider-value="[250,450]" id="ex2" type="text" value=""/>
      <b className="sf-left-value">€ 10</b>
      <b className="sf-right-value">€ 1000</b>
      </div>
      </li>
      <li>
      <div className="sf-search-title">
      <label>Filter by Radius:</label>
      <span className="sf-search-icon"><img alt="" src="/images/search-bar/city.png"/></span>
      </div>
      <div className="sf-search-feild">
      <input data-slider-id="ex1Slider" data-slider-max="20" data-slider-min="0" data-slider-step="1" data-slider-value="14" id="ex3" type="text"/>
      <b className="sf-left-value">€ 10</b>
      <b className="sf-right-value">€ 1000</b>
      </div>
      </li>
      </ul>
      <button className="site-button sf-search-btn" type="button"><i className="fa fa-search"></i> Search Now</button>
      </div>
      </form>
      </div>
      </div>


      <div className="aon-search-result-area">

      <div className="sf-search-result-top flex-wrap d-flex justify-content-between align-items-center">
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

      <div className="sf-map-filter">
      <button className="search-filter-btn btn site-button" type="button"><i className="fa fa-sliders"></i> Search Filter</button>
      </div>

      <div className="aon-vender-list-wrap-outer">
      <div className="row">

      <div className="col-md-6">
      <div className="sf-vender-list-wrap">
      <div className="sf-vender-list-box d-flex">
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic1.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic2.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic3.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic4.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic5.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic6.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic7.jpg)"}}>
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
      <div className="sf-vender-list-pic" style={{backgroundImage: "url(/images/categories/pic8.jpg)"}}>
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
      <li className="page-item"><a className="page-link" href="#">4</a></li>
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
       Content END

    </>
  );
}
