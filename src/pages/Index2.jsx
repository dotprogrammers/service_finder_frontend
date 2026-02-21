import React from "react";
import { Link } from "react-router-dom";

export default function Index2() {
  return (
    <>
   
  
       CONTENT START 
      <div className="page-content">

      <section className="aon-banner-area2">

      <div className="container">
      <div className="aone-banner-area2-inner">
      <div className="row d-flex align-items-center">

      <div className="col-lg-5 col-md-12">
      <div className="aon-bnr2-content-wrap">

      <div className="aon-bnr-write">
      <h2 className="text-top-line">Hire 
                                              <span className="text-secondry">Experts</span> &amp; 
                                          </h2>
      <h2 className="text-bot-line">Get Your Job Done</h2>
      </div>


      <div className="aon-bnr2-search-bar">
      <form>
      <div className="aon-bnr2-search-box">

      <div className="aon-search-input keywords-input">
      <input className="form-control" placeholder="Search Keywords" type="text"/>
      </div>

      <div className="aon-search-input category-select">
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

      <div className="aon-search-btn-wrap">
      <button className="aon-search-btn" type="submit">Search</button>
      </div>
      </div>
      </form>
      </div>

      </div>
      </div>

      <div className="col-lg-7 col-md-12">
      <div className="aon-bnr2-media-wrap">

      <div className="aon-bnr2-media">
      <img alt="" src="/images/banner2/1.png"/>
      </div>

      <div className="aon-bnr2-lines-left">
      <div className="aon-bnr2-line-left-content">
      <img alt="" src="/images/banner2/line-left.png"/>
      <span className="circle-l-1 slide-fwd-center"></span>
      <span className="circle-l-2 slide-fwd-center2"></span>
      <span className="circle-l-3 slide-fwd-center3"></span>
      </div>
      </div>

      <div className="aon-bnr2-lines-right">
      <img alt="" src="/images/banner2/line-right.png"/>
      <span className="circle-r-1 slide-fwd-center3"></span>
      <span className="circle-r-2 slide-fwd-center2"></span>
      <span className="circle-r-3 slide-fwd-center"></span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      </section>


      <section className="bg-white aon-categories-area2">
      <div className="container">

      <div className="section-head">
      <div className="row">

      <div className="col-lg-6 col-md-12">
      <span className="aon-sub-title">categories</span>
      <h2 className="sf-title">Popular Categories</h2>
      </div>

      <div className="col-lg-6 col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      </div>

      <div className="section-content">
      <div className="aon-categories-area2-section">
      <div className="row justify-content-center">

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/1.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Car Service</h4>
      <p>124 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/2.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Salon Services</h4>
      <p>132 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/3.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Plumber</h4>
      <p>124 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/4.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Electrician</h4>
      <p>128 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/5.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Yoga Classes</h4>
      <p>145 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/6.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>House Ceaning</h4>
      <p>165 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/7.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Gym Classes</h4>
      <p>156 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/8.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>Transport</h4>
      <p>149 Listing</p>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="media-bg-animate mba-bdr-15">
      <div className="aon-categories-area2-iconbox aon-icon-effect">
      <div className="aon-cate-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/popular-categories-icon/9.png"/></i>
      </span>
      </div>
      <div className="aon-cate-area2-content">
      <h4 className="aon-tilte"><Link to="/categories-detail"/>AC Repair</h4>
      <p>175 Listing</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="aon-btn-pos-center">
      <Link className="site-button" to="/all-categories"/>View All
      </div>
      </div>
      </div>
      </div>
      </section>


      <section className="aon-howit-area2">
      <div className="container">
      <div className="aon-howit-area2-section">
      <div className="aon-howit-area2-bg">

      <div className="section-head aon-title-center white">
      <span className="aon-sub-title">Stpes</span>
      <h2 className="sf-title">How It Work</h2>
      </div>

      <div className="section-content">
      <div className="aon-categories-area2-section">
      <div className="row justify-content-center">

      <div className="col-lg-4 col-md-6">
      <div className="aon-howit-area2-iconbox aon-icon-effect">
      <div className="aone-howit-number">01</div>
      <div className="aon-howit-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/step-icon/1.png"/></i>
      </span>
      </div>
      <div className="aon-howit-area2-content">
      <h4 className="aon-tilte">Describe Your Task</h4>
      <p>This helps us determine which Taskers We are abest jobs.</p>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="aon-howit-area2-iconbox aon-howit-arrow aon-icon-effect">
      <div className="aone-howit-number">02</div>
      <div className="aon-howit-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/step-icon/2.png"/></i>
      </span>
      </div>
      <div className="aon-howit-area2-content">
      <h4 className="aon-tilte">Choose a Tasker</h4>
      <p>This helps us determine which Taskers We are abest jobs.</p>
      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6">
      <div className="aon-howit-area2-iconbox aon-icon-effect">
      <div className="aone-howit-number">03</div>
      <div className="aon-howit-area2-icon">
      <span>
      <i className="aon-icon"><img alt="" src="/images/step-icon/3.png"/></i>
      </span>
      </div>
      <div className="aon-howit-area2-content">
      <h4 className="aon-tilte">Live Smarter</h4>
      <p>This helps us determine which Taskers We are abest jobs.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>


      <section className="section-full aon-feature-vender-area2">
      <div className="container">

      <div className="section-head">
      <div className="row">
      <div className="col-lg-6 col-md-12">
      <span className="aon-sub-title">Vendor</span>
      <h2 className="sf-title">Featured Providers</h2>
      </div>
      <div className="col-lg-6 col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      </div>

      <div className="section-content">
      <div className="owl-carousel aon-vendor-provider-two-carousel aon-owl-arrow">

      <div className="item">
      <div className="aon-ow-provider-wrap2">
      <div className="aon-ow-provider2 shine-hover">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="sf-title"><Link to="/profile-full"/>Javier Bardem</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media media-bg-animate">
      <Link className="shine-box" to="/profile-full"/><img alt="" src="/images/providers/1.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <div className="aon-ow-bottom">
      <Link className="site-button" to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap2">
      <div className="aon-ow-provider2 shine-hover">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="sf-title"><Link to="/profile-full"/>Mila Kunis
      </h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media media-bg-animate">
      <Link className="shine-box" to="/profile-full"/><img alt="" src="/images/providers/2.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <div className="aon-ow-bottom">
      <Link className="site-button" to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap2">
      <div className="aon-ow-provider2 shine-hover">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="sf-title"><Link to="/profile-full"/>Edward Luise
      </h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media media-bg-animate">
      <Link className="shine-box" to="/profile-full"/><img alt="" src="/images/providers/3.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <div className="aon-ow-bottom">
      <Link className="site-button" to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap2">
      <div className="aon-ow-provider2 shine-hover">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="sf-title"><Link to="/profile-full"/>James McAvoy</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media media-bg-animate">
      <Link className="shine-box" to="/profile-full"/><img alt="" src="/images/providers/1.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <div className="aon-ow-bottom">
      <Link className="site-button" to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap2">
      <div className="aon-ow-provider2 shine-hover">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="sf-title"><Link to="/profile-full"/>Jackie Chan</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media media-bg-animate">
      <Link className="shine-box" to="/profile-full"/><img alt="" src="/images/providers/2.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <div className="aon-ow-bottom">
      <Link className="site-button" to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap2">
      <div className="aon-ow-provider2 shine-hover">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="sf-title"><Link to="/profile-full"/>Colin Farrell</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media media-bg-animate">
      <Link className="shine-box" to="/profile-full"/><img alt="" src="/images/providers/3.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      <div className="aon-ow-bottom">
      <Link className="site-button" to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>


      <section className="aon-why-choose2-area">
      <div className="container">
      <div className="aon-why-choose2-box">
      <div className="row">

      <div className="col-lg-6 col-md-12">
      <div className="aon-why-choose-info">

      <div className="section-head">
      <span className="aon-sub-title">Choose</span>
      <h2 className="aon-title">Why Choose us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <ul className="aon-why-choose-steps list-unstyled">

      <li className="d-flex">
      <div className="aon-w-choose-left aon-icon-effect">
      <div className="aon-w-choose-icon"><i className="aon-icon"><img alt="" src="/images/whychoose/1.png"/></i></div>
      </div>
      <div className="aon-w-choose-right">
      <h4 className="aon-title">Meet new customers</h4>
      <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
      </div>
      </li>

      <li className="d-flex">
      <div className="aon-w-choose-left aon-icon-effect">
      <div className="aon-w-choose-icon"><i className="aon-icon"><img alt="" src="/images/whychoose/2.png"/></i></div>
      </div>
      <div className="aon-w-choose-right">
      <h4 className="aon-title">Grow your revenue</h4>
      <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
      </div>
      </li>

      <li className="d-flex">
      <div className="aon-w-choose-left aon-icon-effect">
      <div className="aon-w-choose-icon"><i className="aon-icon"><img alt="" src="/images/whychoose/3.png"/></i></div>
      </div>
      <div className="aon-w-choose-right">
      <h4 className="aon-title">Build your online reputation</h4>
      <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>

      <div className="col-lg-6 col-md-12">
      <div className="aon-why-choose2-line">
      <div className="aon-why-choose2-pic"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>


      <div className="section-full aon-postjobs-area2">
      <div className="container">

      <div className="section-head">
      <div className="row">
      <div className="col-lg-6 col-md-12">
      <span className="aon-sub-title">Jobs</span>
      <h2 className="sf-title">Recently Posted Jobs</h2>
      </div>
      <div className="col-lg-6 col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      </div>
      <div className="section-content">
      <div className="aon-postjobs-area2-section">
      <div className="row">

      <div className="col-lg-6 col-md-6">
      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
      <div className="aon-post-jobs2 aon-icon-effect">
      <div className="job-comapny-logo">
      <img alt="" className="company_logo aon-icon" src="/images/jobs/1.jpg"/>
      </div>
      <div className="job-comapny-info">
      <div className="position">
      <h3><Link to="/job-detail"/>UI &amp; UX Designer</h3>
      <div className="company"><strong>Digital Asset</strong></div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Full Time</li>
      </ul>
      <div className="job-date">
      <span><i className="fa fa-calendar-o"></i>  3 years ago</span>
      </div>
      <div className="job-location">
      <i className="fa fa-map-marker"></i> Brooklyn 
                                                  </div>
      <div className="job-amount">
      <i className="fa fa-money"></i>
      <span>$1,200 - $1,500</span>
      </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-6 col-md-6">
      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
      <div className="aon-post-jobs2 aon-icon-effect">
      <div className="job-comapny-logo">
      <img alt="" className="company_logo aon-icon" src="/images/jobs/2.jpg"/>
      </div>
      <div className="job-comapny-info">
      <div className="position">
      <h3><Link to="/job-detail"/>Web &amp; App developer</h3>
      <div className="company"><strong>Digital Asset</strong></div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      </ul>
      <div className="job-date">
      <span><i className="fa fa-calendar-o"></i>  3 years ago</span>
      </div>
      <div className="job-location">
      <i className="fa fa-map-marker"></i> Brooklyn 
                                                  </div>
      <div className="job-amount">
      <i className="fa fa-money"></i>
      <span>$1,200 - $1,500</span>
      </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-6 col-md-6">
      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
      <div className="aon-post-jobs2 aon-icon-effect">
      <div className="job-comapny-logo">
      <img alt="" className="company_logo aon-icon" src="/images/jobs/3.jpg"/>
      </div>
      <div className="job-comapny-info">
      <div className="position">
      <h3><Link to="/job-detail"/>Hotel Interior Designer</h3>
      <div className="company"><strong>Digital Asset</strong></div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      </ul>
      <div className="job-date">
      <span><i className="fa fa-calendar-o"></i>  3 years ago</span>
      </div>
      <div className="job-location">
      <i className="fa fa-map-marker"></i> Brooklyn 
                                                  </div>
      <div className="job-amount">
      <i className="fa fa-money"></i>
      <span>$1,200 - $1,500</span>
      </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-6 col-md-6">
      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
      <div className="aon-post-jobs2 aon-icon-effect">
      <div className="job-comapny-logo">
      <img alt="" className="company_logo aon-icon" src="/images/jobs/4.jpg"/>
      </div>
      <div className="job-comapny-info">
      <div className="position">
      <h3><Link to="/job-detail"/>Digital Marketing Agency</h3>
      <div className="company"><strong>Digital Asset</strong></div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      </ul>
      <div className="job-date">
      <span><i className="fa fa-calendar-o"></i> 3 years ago</span>
      </div>
      <div className="job-location">
      <i className="fa fa-map-marker"></i> Brooklyn 
                                                  </div>
      <div className="job-amount">
      <i className="fa fa-money"></i>
      <span>$1,200 - $1,500</span>
      </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-6 col-md-6">
      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
      <div className="aon-post-jobs2 aon-icon-effect">
      <div className="job-comapny-logo">
      <img alt="" className="company_logo ao-icon" src="/images/jobs/5.jpg"/>
      </div>
      <div className="job-comapny-info">
      <div className="position">
      <h3><Link to="/job-detail"/>Fish &amp; Game Warden</h3>
      <div className="company"><strong>Digital Asset</strong></div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      </ul>
      <div className="job-date">
      <span><i className="fa fa-calendar-o"></i> 3 years ago</span>
      </div>
      <div className="job-location">
      <i className="fa fa-map-marker"></i> Brooklyn 
                                                  </div>
      <div className="job-amount">
      <i className="fa fa-money"></i>
      <span>$1,200 - $1,500</span>
      </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </div>
      </div>
      </div>

      <div className="col-lg-6 col-md-6">
      <div className="aon-post-jobsCol media-bg-animate mba-bdr-15">
      <div className="aon-post-jobs2 aon-icon-effect">
      <div className="job-comapny-logo">
      <img alt="" className="company_logo aon-icon" src="/images/jobs/6.jpg"/>
      </div>
      <div className="job-comapny-info">
      <div className="position">
      <h3><Link to="/job-detail"/>Certified Nursing Assistant</h3>
      <div className="company"><strong>Digital Asset</strong></div>
      </div>
      <ul className="meta">
      <li className="job-type hourly"><i className="fa fa-circle"></i>Hourly</li>
      </ul>
      <div className="job-date">
      <span><i className="fa fa-calendar-o"></i> 3 years ago</span>
      </div>
      <div className="job-location">
      <i className="fa fa-map-marker"></i> Brooklyn 
                                                  </div>
      <div className="job-amount">
      <i className="fa fa-money"></i>
      <span>$1,200 - $1,500</span>
      </div>
      <div className="job-label"><img alt="" src="/images/label.png"/></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>


      <div className="section-full aon-pricing-area2">
      <div className="container">

      <div className="section-head">
      <div className="row">
      <div className="col-lg-6 col-md-12">
      <span className="aon-sub-title">Pricing</span>
      <h2 className="sf-title">Our Pricing Plans</h2>
      </div>
      <div className="col-lg-6 col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      </div>
      <div className="section-content">
      <div className="aon-priceing-tb-control">
      <span>Bill Monthly</span>
      <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
      </label>
      <span>Bill Yearly</span>
      </div>
      <div className="sf-pricing-section-outer">
      <div className="row no-gutter">

      <div className="col-md-3">
      <div className="sf-pricing-section">
      <div className="sf-price-tb-info">
      <div className="sf-price-plan-name">Intro</div>
      <div className="sf-price-plan-discount">Save 20%</div>
      </div>
      <div className="sf-price-tb-list">
      <ul>
      <li><i className="fa fa-check"></i> Booking</li>
      <li><i className="fa fa-check"></i> Own Cover Image</li>
      <li className="disable"><i className="fa fa-check"></i> Multiple Categories</li>
      <li className="disable"><i className="fa fa-check"></i> Apply for Job</li>
      <li className="disable"><i className="fa fa-check"></i> Job Alerts</li>
      <li className="disable"><i className="fa fa-check"></i> Google Calendar</li>
      <li className="disable"><i className="fa fa-check"></i> Crop Profile Image</li>
      </ul>
      </div>
      <div className="sf-price-tb-plan">
      <div className="sf-price-plan-cost">$<span>29</span>/month</div>
      </div>
      <Link className="sf-choose-plan-btn" to="/contact-us"/>Choose Plan
      </div>
      </div>

      <div className="col-md-3">
      <div className="sf-pricing-section">
      <div className="sf-price-tb-info">
      <div className="sf-price-plan-name">Base</div>
      <div className="sf-price-plan-discount">Save 20%</div>
      </div>
      <div className="sf-price-tb-list">
      <ul>
      <li><i className="fa fa-check"></i> Booking</li>
      <li><i className="fa fa-check"></i> Own Cover Image</li>
      <li><i className="fa fa-check"></i> Multiple Categories</li>
      <li><i className="fa fa-check"></i> Apply for Job</li>
      <li><i className="fa fa-check"></i> Job Alerts</li>
      <li className="disable"><i className="fa fa-check"></i> Google Calendar</li>
      <li className="disable"><i className="fa fa-check"></i> Crop Profile Image</li>
      </ul>
      </div>
      <div className="sf-price-tb-plan">
      <div className="sf-price-plan-cost">$<span>39</span>/month</div>
      </div>
      <a className="sf-choose-plan-btn" href="#">Choose Plan</a>
      </div>
      </div>

      <div className="col-md-3">
      <div className="sf-pricing-section sf-pricing-active">
      <div className="sf-price-tb-info">
      <div className="sf-price-plan-name">Pro</div>
      <div className="sf-price-plan-discount">Save 20%</div>
      </div>
      <div className="sf-price-tb-list">
      <ul>
      <li><i className="fa fa-check"></i> Booking</li>
      <li><i className="fa fa-check"></i> Own Cover Image</li>
      <li><i className="fa fa-check"></i> Multiple Categories</li>
      <li><i className="fa fa-check"></i> Apply for Job</li>
      <li><i className="fa fa-check"></i> Job Alerts</li>
      <li><i className="fa fa-check"></i> Google Calendar</li>
      <li><i className="fa fa-check"></i> Crop Profile Image</li>
      </ul>
      </div>
      <div className="sf-price-tb-plan">
      <div className="sf-price-plan-cost">$<span>49</span>/month</div>
      </div>
      <Link className="sf-choose-plan-btn" to="/contact-us"/>Try 1 Month
      </div>
      </div>

      <div className="col-md-3">
      <div className="sf-pricing-section">
      <div className="sf-price-tb-info">
      <div className="sf-price-plan-name">Enterprise</div>
      <div className="sf-price-plan-discount">Save 20%</div>
      </div>
      <div className="sf-price-tb-list">
      <ul>
      <li><i className="fa fa-check"></i> Booking</li>
      <li><i className="fa fa-check"></i> Own Cover Image</li>
      <li><i className="fa fa-check"></i> Multiple Categories</li>
      <li><i className="fa fa-check"></i> Apply for Job</li>
      <li><i className="fa fa-check"></i> Job Alerts</li>
      <li><i className="fa fa-check"></i> Google Calendar</li>
      <li><i className="fa fa-check"></i> Crop Profile Image</li>
      </ul>
      </div>
      <div className="sf-price-tb-plan">
      <div className="sf-price-plan-cost">$<span>89</span>/month</div>
      </div>
      <Link className="sf-choose-plan-btn" to="/contact-us"/>Choose Plan
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>


      <div className="section-full aon-latest-blog-area2">
      <div className="container">

      <div className="section-head">
      <div className="row">
      <div className="col-lg-6 col-md-12">
      <span className="aon-sub-title">Blog</span>
      <h2 className="sf-title">Latest News</h2>
      </div>
      <div className="col-lg-6 col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      </div>
      <div className="section-content">
      <div className="aon-l-blog-area2-section">
      <div className="row d-flex justify-content-center">

      <div className="col-lg-4 col-md-6 shine-hover">
      <div className="aon-blog-style-1 media-bg-animate mba-bdr-20">
      <div className="post-bx">

      <div className="post-thum shine-box">
      <img alt="" src="/images/blog/blog-grid/1.jpg" title="title"/>
      </div>
      <div className="post-info">
      <div className="post-categories"><a href="#">Logistics</a></div>
      <div className="post-meta">
      <ul>
      <li className="post-date"><span>June 18, 2022</span></li>
      <li className="post-author">By
                                                      <a href="#" rel="author" title="Posts by admin">Nina Brown</a>
      </li>
      </ul>
      </div>
      <div className="post-text">
      <h4 className="post-title">
      <Link to="/blog-detail"/>Helping Companies in  Their Green Transition
      </h4>
      </div>
      </div>

      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6 shine-hover">
      <div className="aon-blog-style-1 media-bg-animate mba-bdr-20">
      <div className="post-bx">

      <div className="post-thum shine-box">
      <img alt="" src="/images/blog/blog-grid/2.jpg" title="title"/>
      </div>
      <div className="post-info">
      <div className="post-categories"><a href="#">Business</a></div>
      <div className="post-meta">
      <ul>
      <li className="post-date"><span>June 18, 2022</span></li>
      <li className="post-author">By
                                                      <a href="#" rel="author" title="Posts by admin">Nina Brown</a>
      </li>
      </ul>
      </div>
      <div className="post-text">
      <h4 className="post-title">
      <Link to="/blog-detail"/>There are two thing is very important in Consectetur
      </h4>
      </div>
      </div>

      </div>
      </div>
      </div>

      <div className="col-lg-4 col-md-6 shine-hover">
      <div className="aon-blog-style-1 media-bg-animate mba-bdr-20">
      <div className="post-bx">

      <div className="post-thum shine-box">
      <img alt="" src="/images/blog/blog-grid/3.jpg" title="title"/>
      </div>
      <div className="post-info">
      <div className="post-categories"><a href="#">Traveling</a></div>
      <div className="post-meta">
      <ul>
      <li className="post-date"><span>June 18, 2022</span></li>
      <li className="post-author">By
                                                      <a href="#" rel="author" title="Posts by admin">Nina Brown</a>
      </li>
      </ul>
      </div>
      <div className="post-text">
      <h4 className="post-title">
      <Link to="/blog-detail"/>Officia deserunt mollit anim id est labrum. duis
      </h4>
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


      <section className="bg-white aon-testimonials-two-area">
      <div className="aon-half-bg"></div>
      <div className="container">

      <div className="section-head">
      <div className="row">
      <div className="col-lg-6 col-md-12">
      <span className="aon-sub-title">Testimonials</span>
      <h2 className="aon-title">What People Say</h2>
      </div>
      <div className="col-lg-6 col-md-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      </div>
      <div className="section-content">
      <div className="owl-carousel testimonials-two-carousel-owl aon-owl-arrow">

      <div className="item">
      <div className="aon-test2-item">
      <div className="aon-test2-pic"><img alt="" src="/images/testimonials2/pic1.jpg"/></div>
      <h3 className="aon-test2-name">David Smith</h3>
      <div className="aon-test2-position">Web Designer</div>
      <div className="aon-test2-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore.</div>
      <div className="aon-test2-animate">
      <span className="aon-test2-circle1"></span>
      <span className="aon-test2-square1"></span>
      <span className="aon-test2-square2"></span>
      <span className="aon-test2-circle2"></span>
      <span className="aon-test2-plus">+</span>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-test2-item">
      <div className="aon-test2-pic"><img alt="" src="/images/testimonials2/pic2.jpg"/></div>
      <h3 className="aon-test2-name">David Smith</h3>
      <div className="aon-test2-position">Web Designer</div>
      <div className="aon-test2-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore.</div>
      <div className="aon-test2-animate">
      <span className="aon-test2-circle1"></span>
      <span className="aon-test2-square1"></span>
      <span className="aon-test2-square2"></span>
      <span className="aon-test2-circle2"></span>
      <span className="aon-test2-plus">+</span>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-test2-item">
      <div className="aon-test2-pic"><img alt="" src="/images/testimonials2/pic3.jpg"/></div>
      <h3 className="aon-test2-name">David Smith</h3>
      <div className="aon-test2-position">Web Designer</div>
      <div className="aon-test2-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore.</div>
      <div className="aon-test2-animate">
      <span className="aon-test2-circle1"></span>
      <span className="aon-test2-square1"></span>
      <span className="aon-test2-square2"></span>
      <span className="aon-test2-circle2"></span>
      <span className="aon-test2-plus">+</span>
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-test2-item">
      <div className="aon-test2-pic"><img alt="" src="/images/testimonials2/pic1.jpg"/></div>
      <h3 className="aon-test2-name">David Smith</h3>
      <div className="aon-test2-position">Web Designer</div>
      <div className="aon-test2-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore.</div>
      <div className="aon-test2-animate">
      <span className="aon-test2-circle1"></span>
      <span className="aon-test2-square1"></span>
      <span className="aon-test2-square2"></span>
      <span className="aon-test2-circle2"></span>
      <span className="aon-test2-plus">+</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>


      <section className="aon-statics-area2">
      <div className="container">
      <div className="aon-statics-area2-section">
      <div className="aon-statics-area2-bg">

      <div className="section-head aon-title-center white">
      <span className="aon-sub-title">Statics</span>
      <h2 className="sf-title">Trusted by thousands of people all over the world</h2>
      </div>
      <div className="section-content">
      <div className="aon-statics-blocks2">
      <div className="row">

      <div className="col-lg-3 col-md-6 col-6">
      <div className="aon-static-section2 aon-t-white2">
      <div className="aon-company-static-num2 counter">36</div>
      <div className="aon-company-static-name2">Providers</div>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-6">
      <div className="aon-static-section2 aon-t-skyblue2">
      <div className="aon-company-static-num2 counter">59</div>
      <div className="aon-company-static-name2">Categories</div>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-6">
      <div className="aon-static-section2 aon-t-yellow2">
      <div className="aon-company-static-num2 counter">108</div>
      <div className="aon-company-static-name2">Jobs</div>
      </div>
      </div>

      <div className="col-lg-3 col-md-6 col-6">
      <div className="aon-static-section2 aon-t-green2">
      <div className="aon-company-static-num2 counter">89</div>
      <div className="aon-company-static-name2">Customer</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>


      <section className="aon-newsletter-area2">
      <div className="container">
      <div className="aon-newsletter-area2-section">
      <h3 className="aon-title">We empower clients to grow their businesses based on the effective use of technology</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the standard dummy text ever since the 1500s, when.</p>
      <form className="aon-nl-width">
      <div className="form-group sf-news-l-form">
      <input className="form-control" placeholder="Enter Your Email" type="text"/>
      <button className="sf-sb-btn" type="submit">Submit</button>
      </div>
      </form>
      </div>
      </div>
      </section>

      </div>
       CONTENT END 
       FOOTER START 
       FOOTER END 
       BUTTON TOP START 
      <button className="scroltop"><span className="fa fa-angle-up relative" id="btn-vibrate"></span></button>

    </>
  );
}
