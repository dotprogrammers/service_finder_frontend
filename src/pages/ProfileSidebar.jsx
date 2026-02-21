import React from "react";
import { Link } from "react-router-dom";

export default function ProfileSidebar() {
  return (
    <>
   
  
       Content 
      <div className="page-content">

      <div className="sf-profile-banner">
      <div className="container sf-proBnr-container">
      <div className="sf-proBnr-row row">
      <div className="col-md-6 sf-proBnr-left text-center">
      <div className="sf-provi-pic"><img alt="" src="/images/pro-pic.jpg"/></div>
      <h3 className="sf-provi-name">Chris Luisa</h3>
      <div className="sf-provi-tagline">We Provide best Cleaning services</div>
      <div className="sf-provi-gallery">
      <a className="elem pic-long" href="/images/profile/pic1.jpg">12 Photos</a>
      <a className="elem pic-long" href="/images/profile/pic2.jpg"></a>
      <a className="elem pic-long" href="/images/profile/pic3.jpg"></a>
      <a className="elem pic-long" href="/images/profile/pic4.jpg"></a>
      <a className="elem pic-long" href="/images/profile/pic5.jpg"></a>
      <a className="elem pic-long" href="/images/profile/pic6.jpg"></a>
      </div>
      <div className="sf-provi-rating">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      <div className="sf-provi-social">
      <ul className="share-social-bx">
      <li className="fb"><a href="javascript:;"> <i className="fa fa-facebook"></i> Share </a></li>
      <li className="tw"><a href="javascript:;"> <i className="fa fa-twitter"></i> Share </a></li>
      <li className="lin"><a href="javascript:;"> <i className="fa fa-linkedin"></i> Share </a></li>
      <li className="pin"><a href="javascript:;"> <i className="fa fa-pinterest"></i> Share </a></li>
      <li className="gp"><a href="javascript:;"> <i className="fa fa-google-plus"></i> Share </a></li>
      <li className="dig"><a href="javascript:;"> <i className="fa fa-digg"></i> Share </a></li>
      </ul>
      </div>
      <div className="sf-provi-btn">
      <a className="site-button" data-action="login" data-redirect="yes" data-target="#login-Modal" data-toggle="modal" href="javascript:void(0);">
      <i className="fa fa-user"></i>Invite for Job
                                      </a>
      <a className="site-button" data-action="login" data-redirect="yes" data-target="#login-Modal" data-toggle="modal" href="javascript:void(0);">
      <i className="fa fa-user"></i>Add To Fav
                                      </a>
      </div>
      </div>
      <div className="col-md-6 sf-proBnr-right">
      <div className="sf-proBnr-pic"></div>
      </div>
      </div>
      </div>
      </div>


      <div className="sf-page-scroll-wrap sf-page-scroll-wrap2">
      <div className="container">
      <div className="sf-page-scroll-nav clearfix">
      <ul className="clearfix">
      <li><a href="#aon-provider-info">About</a></li>
      <li><a href="#aon-provider-services">Services</a></li>
      <li><a href="#aon-provider-coInfo">Contact Info</a></li>
      <li><a href="#aon-provider-video">Video</a></li>
      <li><a href="#aon-provider-articles">Articles</a></li>
      <li><a href="#aon-provider-review">Review</a></li>
      </ul>
      </div>
      </div>
      </div>


      <div className="container">
      <div className="row">

      <div className="col-lg-4 col-md-12">
      <aside className="sf-sidebar-left">
      <h3 className="sf-sidebar-title">Request a Quote</h3>
      <div className="p-a30 m-b30 bg-white sf-shadow-box sf-border-box sf-radius-10">
      <div className="form-quot-bx">
      <form action="?" method="post">
      <div className="form-group">
      <label>Name</label>
      <input className="form-control" name="name" required="" type="text"/>
      </div>
      <div className="form-group">
      <label>Email</label>
      <input className="form-control" name="email" required="" type="text"/>
      </div>
      <div className="form-group">
      <label>Phone</label>
      <input className="form-control" name="phone" required="" type="text"/>
      </div>
      <div className="form-group">
      <label>Message</label>
      <textarea className="form-control" name="message" rows="8"></textarea>
      </div>
      <div className="form-group">
      <button className="site-button btn-block" type="submit">Send information</button>
      </div>
      </form>
      </div>
      </div>
      <h3 className="sf-sidebar-title">Related Providers</h3>
      <div className="owl-carousel aon-related-provi-sidebar sf-owl-arrow">

      <div className="item">
      <div className="aon-ow-provider-wrap">
      <div className="aon-ow-provider">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="aon-title"><Link to="/profile-full"/>Mila Kunis</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media">
      <Link to="/profile-full"/><img alt="" src="/images/providers/1.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </div>
      <div className="aon-ow-bottom">
      <Link to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap">
      <div className="aon-ow-provider">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="aon-title"><Link to="/profile-full"/>Javier Bardem</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media">
      <Link to="/profile-full"/><img alt="" src="/images/providers/2.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </div>
      <div className="aon-ow-bottom">
      <Link to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap">
      <div className="aon-ow-provider">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="aon-title"><Link to="/profile-full"/>Edward Luise</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media">
      <Link to="/profile-full"/><img alt="" src="/images/providers/3.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </div>
      <div className="aon-ow-bottom">
      <Link to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap">
      <div className="aon-ow-provider">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="aon-title"><Link to="/profile-full"/>James McAvoy</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media">
      <Link to="/profile-full"/><img alt="" src="/images/providers/4.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </div>
      <div className="aon-ow-bottom">
      <Link to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap">
      <div className="aon-ow-provider">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="aon-title"><Link to="/profile-full"/>Jackie Chan</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media">
      <Link to="/profile-full"/><img alt="" src="/images/providers/5.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </div>
      <div className="aon-ow-bottom">
      <Link to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>

      <div className="item">
      <div className="aon-ow-provider-wrap">
      <div className="aon-ow-provider">
      <div className="aon-ow-top">
      <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
      <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
      <div className="aon-ow-info">
      <h4 className="aon-title"><Link to="/profile-full"/>Colin Farrell</h4>
      <span>Queens, United States</span>
      </div>
      </div>
      <div className="aon-ow-mid">
      <div className="aon-ow-media">
      <Link to="/profile-full"/><img alt="" src="/images/providers/6.jpg"/>
      </div>
      <p>Through our expertise, technological knowledge, global presence and bespoke.</p>
      <div className="aon-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </div>
      <div className="aon-ow-bottom">
      <Link to="/profile-full"/>Request A Quote
      </div>
      </div>
      </div>
      </div>
      </aside>
      </div>


      <div className="col-lg-8 col-md-12">

      <div className="sf-provi-bio-box m-b50">
      <h3 className="sf-provi-title">Home Made Clianing Service</h3>
      <div className="sf-divider-line"></div>
      <div className="sf-provi-cat"><strong>Categories:</strong> Packers and Movers</div>
      <div className="sf-provi-bio-text">
      <p>We have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge to help you increase your presence on the web.Through our expertise, technological knowledge, global presence and betspoke web solutions, we can help knowledge to help you increase your presence you transform your business, maximize performance and surpass the competition.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor nec tellus sollicitudin lacinia id per conubia nostra, per inceptos himenaeos.</p>
      </div>
      <div className="social-share-icon social-share-icon2">
      <div className="social-share-cell">
      <strong>Explore Us On Social Media</strong>
      </div>
      <div className="social-share-cell">
      <ul className="share-buttons">
      <li><a className="fb-share" href="https://www.facebook.com/" rel="nofollow" target="_blank"><i className="fa fa-facebook"></i></a></li>
      <li><a className="twitter-share" href="https://twitter.com/" rel="nofollow" target="_blank"><i className="fa fa-twitter"></i></a></li>
      <li><a className="linkedin-share" href="https://linkedin.com" rel="nofollow" target="_blank"><i className="fa fa-linkedin"></i></a></li>
      <li><a className="pinterest-share" href="https://in.pinterest.com/" rel="nofollow" target="_blank"><i className="fa fa-pinterest"></i></a></li>
      </ul>
      </div>
      </div>
      </div>

      <div className="sf-provi-service-box m-b50" id="aon-provider-services">
      <h3 className="sf-provi-title">Service</h3>
      <div className="sf-divider-line"></div>
      <ul className="sf-provi-service-list">
      <li className="sf-provi-service-box">
      <div className="sf-provi-service-top">
      <div className="sf-provi-service-left">
      <h4 className="sf-provi-service-ttle"><span className="sf-provi-toggle-btn">+</span> 3 bedroom or a house <span>Offer</span></h4>
      <div className="sf-provi-service-price">$124.00</div>
      <div className="sf-provi-service-hour"><i className="fa fa-clock-o"></i>Hour</div>
      </div>
      <div className="sf-provi-service-right">
      <button className="site-button btn-schedules">Schedule</button>
      </div>
      </div>
      <div className="sf-provi-service-bottom">
      <div className="sf-provi-descriptio">Many serives have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge.</div>
      </div>
      </li>
      <li className="sf-provi-service-box">
      <div className="sf-provi-service-top">
      <div className="sf-provi-service-left">
      <h4 className="sf-provi-service-ttle"><span className="sf-provi-toggle-btn">+</span> 3 bedroom or a house <span>Offer</span></h4>
      <div className="sf-provi-service-price">$124.00</div>
      <div className="sf-provi-service-hour"><i className="fa fa-clock-o"></i>Hour</div>
      </div>
      <div className="sf-provi-service-right">
      <button className="site-button btn-schedules">Schedule</button>
      </div>
      </div>
      <div className="sf-provi-service-bottom">
      <div className="sf-provi-descriptio">Many serives have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge.</div>
      </div>
      </li>
      <li className="sf-provi-service-box">
      <div className="sf-provi-service-top">
      <div className="sf-provi-service-left">
      <h4 className="sf-provi-service-ttle"><span className="sf-provi-toggle-btn">+</span> 3 bedroom or a house <span>Offer</span></h4>
      <div className="sf-provi-service-price">$ 12.00/Hour</div>
      </div>
      <div className="sf-provi-service-right">
      <div className="sf-provi-service-count">
      <input id="demo1" name="demo1" type="text" value="55"/>
      </div>
      <button className="site-button btn-schedules">Schedule</button>
      </div>
      </div>
      <div className="sf-provi-service-bottom">
      <div className="sf-provi-descriptio">Many serives have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge.</div>
      </div>
      </li>
      <li className="sf-provi-service-box">
      <div className="sf-provi-service-top">
      <div className="sf-provi-service-left">
      <h4 className="sf-provi-service-ttle"><span className="sf-provi-toggle-btn">+</span> 3 bedroom or a house <span>Offer</span></h4>
      <div className="sf-provi-service-price">$ 10.00/Hour</div>
      </div>
      <div className="sf-provi-service-right">
      <div className="sf-provi-service-count">
      <input id="demo2" name="demo1" type="text" value="55"/>
      </div>
      <button className="site-button btn-schedules">Schedule</button>
      </div>
      </div>
      <div className="sf-provi-service-bottom">
      <div className="sf-provi-descriptio">Many serives have a wide spectrum of expertise in web solutions within these industries, giving us the necessary skills and knowledge.</div>
      </div>
      </li>
      </ul>
      </div>

      <div className="sf-provi-coInfo-box m-b50" id="aon-provider-coInfo">
      <h3 className="sf-provi-title">Cotact Information</h3>
      <div className="sf-divider-line"></div>
      <div className="row">
      <div className="col-md-6">
      <div className="sf-provi-coInfo-map">
      <div className="gmap-area">
      <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-provi-coInfo-hour sf-list-business-hours">
      <ul className="list-unstyled sf-bh-wrapper">
      <li>
      <span>Monday<b>:</b></span><span>08:00 am to 06:00 pm</span>
      <ul className="sf-bh-breaktime"></ul>
      </li>
      <li>
      <span>Tuesday<b>:</b></span><span>08:00 am to 06:00 pm</span>
      <ul className="sf-bh-breaktime"></ul>
      </li>
      <li>
      <span>Wednesday<b>:</b></span><span>08:00 am to 06:00 pm</span>
      <ul className="sf-bh-breaktime"></ul>
      </li>
      <li>
      <span>Thursday<b>:</b></span><span>08:00 am to 06:00 pm</span>
      <ul className="sf-bh-breaktime"></ul>
      </li>
      <li>
      <span>Friday<b>:</b></span><span>08:00 am to 06:00 pm</span>
      <ul className="sf-bh-breaktime"></ul>
      </li>
      <li>
      <span>Saturday<b>:</b></span><span>Closed</span>
      </li>
      <li>
      <span>Sunday<b>:</b></span><span>Closed</span>
      </li>
      </ul>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <div className="sf-provi-coInfo-box">
      <h5>Address</h5>
      <div className="sf-provi-coInfo-text">William Spyropoulos School 732 Northern Blvd Queens NY, New York, United States</div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-provi-coInfo-box">
      <h5>Telephone</h5>
      <div className="sf-provi-coInfo-text">Tel: +01 2344 567 895</div>
      <div className="sf-provi-coInfo-text">Mob: +1 2364 567 895</div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-provi-coInfo-box">
      <h5>Email</h5>
      <div className="sf-provi-coInfo-text">davidwood15@gmail.com</div>
      <div className="sf-provi-coInfo-text">zohansmth@gmail.com</div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-provi-coInfo-box">
      <h5>Web</h5>
      <div className="sf-provi-coInfo-text">https://aonetheme.com/service-finder</div>
      <div className="sf-provi-coInfo-text">https://aonetheme.com/service-finder</div>
      </div>
      </div>
      </div>
      </div>

      <div className="sf-provi-laexce-box m-b50">
      <div className="sf-custom-tabs sf-custom-new">
      <ul className="nav nav-tabs nav-table-cell font-20">
      <li className="active"><a data-toggle="tab" href="#tab-111">Language </a></li>
      <li className=""><a data-toggle="tab" href="#tab-222">Experience</a></li>
      <li className=""><a data-toggle="tab" href="#tab-333">Certificates &amp; Awards </a></li>
      </ul>
      <div className="tab-content">
      <div className="tab-pane active" id="tab-111">
      <div className="sf-languages-tab">
      <ul className="sf-languages-list sf-languages-list-new clearfix">
      <li><span><img alt="" src="/images/maps/af.png"/></span> Afrikaans</li>
      <li><span><img alt="" src="/images/maps/ar.png"/></span> Arabic</li>
      <li><span><img alt="" src="/images/maps/ca.png"/></span> Catalan</li>
      <li><span><img alt="" src="/images/maps/da.png"/></span> Danish</li>
      <li><span><img alt="" src="/images/maps/de.png"/></span> German</li>
      <li><span><img alt="" src="/images/maps/fr.png"/></span> French</li>
      <li><span><img alt="" src="/images/maps/ga.png"/></span> Irish</li>
      <li><span><img alt="" src="/images/maps/th.png"/></span> Thai</li>
      <li><span><img alt="" src="/images/maps/tr.png"/></span> Turkish</li>
      </ul>
      </div>
      </div>
      <div className="tab-pane" id="tab-222">
      <div className="sf-document-tab">
      <div className="sf-experience-acord" id="experience-acord">
      <div className="panel sf-panel">
      <div className="acod-head acc-actives">
      <h6 className="acod-title text-uppercase"> <a data-parent="#experience-acord" data-toggle="collapse" href="#experience34"> <span className="exper-author">Java Programmer</span> <span className="exper-slogan">Tata Consultancy Pvt. Ltd.</span> <span className="exper-date"><i className="fa fa-clock-o"></i> Jul 01 2018 -  Jul 01 2020</span> </a></h6>
      </div>
      <div className="acod-body collapse in" id="experience34">
      <div className="acod-content p-tb15">I am working as senior Java Programmer.</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="tab-pane" id="tab-333">
      <div className="sf-document-tab">
      <ul className="sf-certificates-list">
      <li>
      <div className="awards-pic"><img alt="" src="/images/java-150x150-34.jpg"/></div>
      <span className="awards-title">Java Certified Programmer</span> <span className="awards-date"><i className="fa fa-clock-o"></i> Mar 12 2019</span>
      <div className="awards-text"></div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="sf-provi-vido-box m-b50" id="aon-provider-video">
      <h3 className="sf-provi-title">Video</h3>
      <div className="sf-divider-line"></div>
      <div className="owl-carousel aon-video-carousel aon-owl-arrow">

      <div className="item">
      <div className="sf-video-box">
      <div className="sf-video-pic" style={{backgroundImage: "url(/images/video/pic1.jpg)"}}></div>
      <a className="sf-video-play-btn mfp-video" href="https://www.youtube.com/watch?v=GLhzTrtGO3A"><i className="fa fa-play"></i></a>
      </div>
      </div>

      <div className="item">
      <div className="sf-video-box">
      <div className="sf-video-pic" style={{backgroundImage: "url(/images/video/pic2.jpg)"}}></div>
      <a className="sf-video-play-btn mfp-video" href="https://www.youtube.com/watch?v=GLhzTrtGO3A"><i className="fa fa-play"></i></a>
      </div>
      </div>

      <div className="item">
      <div className="sf-video-box">
      <div className="sf-video-pic" style={{backgroundImage: "url(/images/video/pic3.jpg)"}}></div>
      <a className="sf-video-play-btn mfp-video" href="https://www.youtube.com/watch?v=GLhzTrtGO3A"><i className="fa fa-play"></i></a>
      </div>
      </div>

      <div className="item">
      <div className="sf-video-box">
      <div className="sf-video-pic" style={{backgroundImage: "url(/images/video/pic1.jpg)"}}></div>
      <a className="sf-video-play-btn mfp-video" href="https://www.youtube.com/watch?v=GLhzTrtGO3A"><i className="fa fa-play"></i></a>
      </div>
      </div>
      </div>
      </div>

      <div className="sf-provi-amqudo-box m-b50">
      <div className="sf-custom-tabs sf-custom-new">
      <ul className="nav nav-tabs nav-table-cell font-20">
      <li className="active"><a data-toggle="tab" href="#tab-1111">Amenities &amp; Features  </a></li>
      <li className=""><a data-toggle="tab" href="#tab-2222">Qualification</a></li>
      <li className=""><a data-toggle="tab" href="#tab-3333">Documents</a></li>
      </ul>
      <div className="tab-content">
      <div className="tab-pane active" id="tab-1111">
      <div className="sf-languages-tab">
      <ul className="sf-features-list sf-features-list-new clearfix">
      <li><span className="features-icon"><img alt="" src="/images/amenities/credit_card-20x20.png"/></span> Accepts Credit Cards</li>
      <li><span className="features-icon"><img alt="" src="/images/amenities/coffee-1-20x20.png"/></span> Coffee</li>
      <li><span className="features-icon"><img alt="" src="/images/amenities/coupons-20x20.png"/></span> Coupons</li>
      <li><span className="features-icon"><img alt="" src="/images/amenities/car-20x20.png"/></span> Parking street</li>
      <li><span className="features-icon"><img alt="" src="/images/amenities/wheelchair-20x20.png"/></span> Wheelchair Accesible</li>
      <li><span className="features-icon"><img alt="" src="/images/amenities/wifi-20x20.png"/></span> Wireless Internet</li>
      </ul>
      </div>
      </div>
      <div className="tab-pane" id="tab-2222">
      <div className="sf-documents-tab">
      <div className="sf-qualification-acord" id="qualification-acord">
      <div className="panel sf-panel">
      <div className="acod-head acc-actives">
      <h6 className="acod-title text-uppercase"> <a data-parent="#qualification-acord" data-toggle="collapse" href="#qualification34"> <span className="exper-author"> B.Tech</span> <span className="exper-slogan">Charles Andrew University</span> <span className="exper-date"><i className="fa fa-clock-o"></i> 2012 -  2016</span> </a></h6>
      </div>
      <div className="acod-body collapse in" id="qualification34">
      <div className="acod-content p-tb15">I am an engineer and have B.Tech degree.</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="tab-pane" id="tab-3333">
      <div className="sf-documents-tab">
      <div className="table-responsive">
      <table className="table borderless margin-0">
      <tbody>
      <tr>
      <td><div className="panel panel-default">
      <div className="panel-heading"> <Link download="Microsoft-Office-Excel-Worksheet-46.xlsx" to="/contact-us"/> <strong className="price-bx"><i className="fa fa-download"></i></strong> <span className="service-title">Microsoft-Office-Excel-Worksheet-46.xlsx</span> </div>
      </div></td>
      <td><div className="panel panel-default">
      <div className="panel-heading"> <Link download="Microsoft-Office-PowerPoint-Presentation-28.pptx" to="/contact-us"/> <strong className="price-bx"><i className="fa fa-download"></i></strong> <span className="service-title">Microsoft-Office-PowerPoint-Presentation-28.pptx</span> </div>
      </div></td>
      </tr>
      <tr>
      <td><div className="panel panel-default">
      <div className="panel-heading"> <Link download="Microsoft-Office-Word-Document-26.docx" to="/contact-us"/> <strong className="price-bx"><i className="fa fa-download"></i></strong> <span className="service-title">Microsoft-Office-Word-Document-26.docx</span> </div>
      </div></td>
      <td><div className="panel panel-default">
      <div className="panel-heading"> <Link download="PDF-Document-28.pdf" to="/contact-us"/> <strong className="price-bx"><i className="fa fa-download"></i></strong> <span className="service-title">PDF-Document-28.pdf</span> </div>
      </div></td>
      </tr>
      <tr>
      <td><div className="panel panel-default">
      <div className="panel-heading"> <Link download="Text-Document-26.txt" to="/contact-us"/> <strong className="price-bx"><i className="fa fa-download"></i></strong> <span className="service-title">Text-Document-26.txt</span> </div>
      </div></td>
      <td><div className="panel panel-default">
      <div className="panel-heading"> <Link download="Microsoft-Office-PowerPoint-Presentation-29.pptx" to="/contact-us"/> <strong className="price-bx"><i className="fa fa-download"></i></strong> <span className="service-title">Microsoft-Office-PowerPoint-Presentation-29.pptx</span> </div>
      </div></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className="sf-provi-articles-box m-b50" id="aon-provider-articles">
      <h3 className="sf-provi-title">Articles</h3>
      <div className="sf-divider-line"></div>
      <ul className="sf-provi-articles-list">
      <li>
      <div className="sf-provi-art-list d-flex flex-wrap">
      <div className="sf-provi-art-left d-flex flex-wrap">
      <div className="sf-provi-art-pic"><img alt="" src="/images/pro-pic/pic1.jpg"/></div>
      <div className="sf-provi-art-date"><i className="fa fa-calendar-o"></i> May 18, t2020</div>
      <div className="sf-provi-art-comment"><i className="fa fa-comment-o"></i> Comments (25)</div>
      </div>
      <div className="sf-provi-art-right d-flex flex-wrap">
      <h4 className="sf-provi-art-title">Make a medical negligence claim today</h4>
      <div className="sf-provi-art-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div>
      <Link className="sf-provi-art-btn" to="/blog-detail"/>Read More
      </div>
      </div>
      </li>
      <li>
      <div className="sf-provi-art-list d-flex flex-wrap">
      <div className="sf-provi-art-left d-flex flex-wrap">
      <div className="sf-provi-art-pic"><img alt="" src="/images/pro-pic/pic2.jpg"/></div>
      <div className="sf-provi-art-date"><i className="fa fa-calendar-o"></i> May 18, t2020</div>
      <div className="sf-provi-art-comment"><i className="fa fa-comment-o"></i> Comments (25)</div>
      </div>
      <div className="sf-provi-art-right d-flex flex-wrap">
      <h4 className="sf-provi-art-title">There are two thing is very important</h4>
      <div className="sf-provi-art-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div>
      <Link className="sf-provi-art-btn" to="/blog-detail"/>Read More
      </div>
      </div>
      </li>
      <li>
      <div className="sf-provi-art-list d-flex flex-wrap">
      <div className="sf-provi-art-left d-flex flex-wrap">
      <div className="sf-provi-art-pic"><img alt="" src="/images/pro-pic/pic3.jpg"/></div>
      <div className="sf-provi-art-date"><i className="fa fa-calendar-o"></i> May 18, t2020</div>
      <div className="sf-provi-art-comment"><i className="fa fa-comment-o"></i> Comments (25)</div>
      </div>
      <div className="sf-provi-art-right d-flex flex-wrap">
      <h4 className="sf-provi-art-title">Deserunt mollit anim id est labrum</h4>
      <div className="sf-provi-art-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</div>
      <Link className="sf-provi-art-btn" to="/blog-detail"/>Read More
      </div>
      </div>
      </li>
      </ul>
      </div>

      <div className="sf-provi-amqudo-box m-b50">
      <div className="sf-custom-tabs sf-custom-new">
      <ul className="nav nav-tabs nav-table-cell font-20">
      <li className="active"><a data-toggle="tab" href="#tab-11111">Q &amp; A</a></li>
      <li className=""><a data-toggle="tab" href="#tab-22222">Ask Question</a></li>
      </ul>
      <div className="tab-content">
      <div className="tab-pane active" id="tab-11111">
      <ul className="sf-qes-answer-list">
      <li>
      <h5 className="sf-qestion-line">1. What is the return policy? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">2. What are the shipping options? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">3. What do I do if I never received my order? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">4. When will I receive my order? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">5. How do I make sure I order the right size? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">6. Where are you located? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      </ul>
      </div>
      <div className="tab-pane" id="tab-22222">
      <ul className="sf-qes-answer-list">
      <li>
      <h5 className="sf-qestion-line">1. What is the return policy? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">2. What are the shipping options? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      <li>
      <h5 className="sf-qestion-line">3. What do I do if I never received my order? <i className="fa fa-plus"></i></h5>
      <div className="sf-answer-line">I had a v small superficial cut and my dog's saliva accidentally touched it.  His yearly rabies shot is pending and a few days back he ran away should I get vaccinated.</div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>

      <div className="sf-provi-articles-box m-b50" id="aon-provider-review">
      <h3 className="sf-provi-title">Local Customer Reviews</h3>
      <div className="sf-divider-line"></div>
      <div className="sf-rating-outer sf-rating-outer-border clearfix">
      <div className="sf-rating-averages-wraps sf-rating-averages-new">
      <div className="sf-rating-averages-table">
      <div className="sf-rating-averages-cell">
      <div className="sf-rating-holder"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      </div>
      <div className="sf-rating-averages-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">0</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-averages-table">
      <div className="sf-rating-averages-cell">
      <div className="sf-average-rating&amp;review"><span>4.8 stars</span> - <span>921 reviews</span></div>
      </div>
      <div className="sf-rating-averages-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">0</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-averages-table">
      <div className="sf-rating-averages-cell">
      <div className="sf-completion-rate"> <span className="sf-rate-persent">92% Completion Rate</span>
      <span className="sf-average-question" data-original-title="625 North Washington St, Suite 400, Alexandria, Virginia, United States" data-placement="top" data-toggle="tooltip" id="example" title=""> <i className="fa fa-question-circle"></i> </span></div>
      </div>
      <div className="sf-rating-averages-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">0</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-averages-table">
      <div className="sf-rating-averages-cell"> <span className="sf-completed-tasks">1081 completed tasks</span></div>
      <div className="sf-rating-averages-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">0</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-averages-table">
      <div className="sf-rating-averages-cell"></div>
      <div className="sf-rating-averages-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">0</div>
      </div>
      </div>
      </div>
      </div>
      <div className="sf-rating-categories-wraps sf-rating-categories-new">
      <div className="sf-rating-categories-table">
      <div className="sf-rating-categories-cell">Quality</div>
      <div className="sf-rating-categories-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">4.7</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-categories-table">
      <div className="sf-rating-categories-cell">Cost</div>
      <div className="sf-rating-categories-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">3.8</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-categories-table">
      <div className="sf-rating-categories-cell">Response Time</div>
      <div className="sf-rating-categories-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">2.6</div>
      </div>
      </div>
      </div>
      <div className="sf-rating-categories-table">
      <div className="sf-rating-categories-cell">Timeline</div>
      <div className="sf-rating-categories-cell">
      <div className="sf-reviews-row">
      <div className="sf-reviews-star"> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
      <div className="sf-reviews-star-no">1.6</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="row d-flex flex-wrap a-b-none">
      <div className="col-md-6">
      <div className="sf-review-box sf-shadow-box">
      <div className="sf-review-head clearfix">
      <div className="sf-review-pic"><img alt="#" src="/images/pro-pic/pic1.jpg"/></div>
      <div className="sf-review-info">
      <h5 className="sf-review-name">Zohn Odriscoll</h5>
      <div className="sf-review-feedback">Good service</div>
      </div>
      <div className="sf-review-date">March 12, 2022 at 5:40 am</div>
      </div>
      <div className="sf-review-body">
      <ul className="sf-review-rating d-flex flex-wrap">
      <li>
      <div className="sf-customer-rating-names">Quality</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Cost</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Response Time</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Timeline</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      </ul>
      </div>
      <div className="sf-review-footer sf-shadow-box">
      <span className="sf-review-write">Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien.</span>
      <span className="sf-review-red-less">Read More</span>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-review-box sf-shadow-box">
      <div className="sf-review-head clearfix">
      <div className="sf-review-pic"><img alt="#" src="/images/pro-pic/pic2.jpg"/></div>
      <div className="sf-review-info">
      <h5 className="sf-review-name">Mila Kunis</h5>
      <div className="sf-review-feedback">Good service</div>
      </div>
      <div className="sf-review-date">March 12, 2022 at 5:40 am</div>
      </div>
      <div className="sf-review-body">
      <ul className="sf-review-rating d-flex flex-wrap">
      <li>
      <div className="sf-customer-rating-names">Quality</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Cost</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Response Time</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Timeline</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      </ul>
      </div>
      <div className="sf-review-footer sf-shadow-box">
      <span className="sf-review-write">Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien.</span>
      <span className="sf-review-red-less">Read More</span>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-review-box sf-shadow-box">
      <div className="sf-review-head clearfix">
      <div className="sf-review-pic"><img alt="#" src="/images/pro-pic/pic3.jpg"/></div>
      <div className="sf-review-info">
      <h5 className="sf-review-name">Jackie Chan</h5>
      <div className="sf-review-feedback">Good service</div>
      </div>
      <div className="sf-review-date">March 12, 2022 at 5:40 am</div>
      </div>
      <div className="sf-review-body">
      <ul className="sf-review-rating d-flex flex-wrap">
      <li>
      <div className="sf-customer-rating-names">Quality</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Cost</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Response Time</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Timeline</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      </ul>
      </div>
      <div className="sf-review-footer sf-shadow-box">
      <span className="sf-review-write">Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien.</span>
      <span className="sf-review-red-less">Read More</span>
      </div>
      </div>
      </div>
      <div className="col-md-6">
      <div className="sf-review-box sf-shadow-box">
      <div className="sf-review-head clearfix">
      <div className="sf-review-pic"><img alt="#" src="/images/pro-pic/pic4.jpg"/></div>
      <div className="sf-review-info">
      <h5 className="sf-review-name">James McAvoy</h5>
      <div className="sf-review-feedback">Good service</div>
      </div>
      <div className="sf-review-date">March 12, 2022 at 5:40 am</div>
      </div>
      <div className="sf-review-body">
      <ul className="sf-review-rating d-flex flex-wrap">
      <li>
      <div className="sf-customer-rating-names">Quality</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Cost</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Response Time</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      <li>
      <div className="sf-customer-rating-names">Timeline</div>
      <div className="sf-customer-rating-star">
      <div className="sf-ow-pro-rating">
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star text-gray"></span>
      </div>
      </div>
      </li>
      </ul>
      </div>
      <div className="sf-review-footer sf-shadow-box">
      <span className="sf-review-write">Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien.</span>
      <span className="sf-review-red-less">Read More</span>
      </div>
      </div>
      </div>
      <div className="col-md-12 text-center">
      <button className="site-button">Load More</button>
      </div>
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
