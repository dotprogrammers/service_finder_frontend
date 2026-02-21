import React from "react";
import { Link } from "react-router-dom";
import HomeBanner from "../components/home/HomeBanner";
import StatsBar from "../components/home/StatsBar";

export default function Index() {
  return (
    <>
      <HomeBanner />
      <StatsBar />
      <div className="page-content">

        <section className="aon-banner-wrap">

          <div className="aon-banner-outer sf-overlay-wrapper">
            <div className="aon-banner-pic">
              <div className="aon-curve-area"></div>
              <div className="aon-overlay-main" style={{ opacity: "0.85", backgroundColor: "#022278" }}></div>
              <img alt="" height="976" src="/images/banner/bnr-pic.jpg" width="1919" />
            </div>
            <div className="aon-banner-text">
              <div className="container">
                <div className="aon-bnr-write">
                  <h2 className="text-top-line">Hire <span className="text-secondry">Experts</span> &amp; </h2>
                  <h2 className="text-bot-line">Get Your Job Done</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="aon-find-bar aon-findBar-vertical">
            <div className="container">

              <div className="search-form">
                <form className="clearfix search-providers" method="get">
                  <input name="s" type="hidden" value="" />
                  <div className="aon-searchbar-table">
                    <div className="aon-searchbar-left">
                      <ul className="clearfix sf-searchfileds-count-5">
                        <li>
                          <label>Keyword</label>
                          <input className="form-control sf-form-control" id="keyword" name="keyword" placeholder="Enter Keyword" type="text" value="" />
                          <span className="sf-search-icon"><img alt="" src="/images/search-bar/keyword.png" /></span>
                        </li>
                        <li>
                          <label>Category</label>
                          <select className="form-control sf-form-control aon-categories-select sf-select-box" id="categorysrh" name="catid" title="Select Category">
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
                          <span className="sf-search-icon"><img alt="" src="/images/search-bar/maintenance.png" /></span>
                        </li>
                        <li>
                          <label>Country</label>
                          <select className="sf-select-box form-control sf-form-control bs-select-hidden" data-header="Select a Country" data-live-search="true" id="country" name="country" title="Country">
                            <option className="bs-title-option" value="">Select Country</option>
                            <option value="">Select Country</option>
                            <option value="Turkey">Turkey</option>
                            <option value="United States">United States</option>
                          </select>
                          <span className="sf-search-icon"><img alt="" src="/images/search-bar/globe.png" /></span>
                        </li>
                        <li>
                          <label>City</label>
                          <select className="sf-select-box form-control sf-form-control bs-select-hidden" data-header="Select a City" data-live-search="true" id="city" name="city" title="City">
                            <option className="bs-title-option" value="">Select City</option>
                            <option value="">Select City</option>
                            <option value="">London</option>
                            <option value="">Japan</option>
                            <option value="">US</option>
                          </select>
                          <span className="sf-search-icon"><img alt="" src="/images/search-bar/city.png" /></span>
                        </li>
                      </ul>
                    </div>
                    <div className="aon-searchbar-right">
                      <button className="site-button" type="button"><i className="fa fa-search"></i> Find Provider</button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>


        <section className="bg-white aon-categories-area sf-curve-pos">
          <div className="container">

            <div className="section-head">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <span className="aon-sub-title">categories</span>
                  <h2 className="aon-title">Popular Categories</h2>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="owl-carousel categories-carousel-owl aon-owl-arrow">

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="shine-box" to="/categories-detail" /><img alt="" src="/images/popular-categories/1.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Food &amp; Drink</h4>
                  </div>
                </div>

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="shine-box" to="/categories-detail" /><img alt="" src="/images/popular-categories/2.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Plumber</h4>
                  </div>
                </div>

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="shine-box" to="/categories-detail" /><img alt="" src="/images/popular-categories/3.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Cleaning Services</h4>
                  </div>
                </div>

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="figure" to="/categories-detail" /><img alt="" src="/images/popular-categories/4.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Yoga Classes</h4>
                  </div>
                </div>

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="shine-box" to="/categories-detail" /><img alt="" src="/images/popular-categories/5.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Salon &amp; Spa</h4>
                  </div>
                </div>

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="shine-box" to="/categories-detail" /><img alt="" src="/images/popular-categories/6.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Gym</h4>
                  </div>
                </div>

                <div className="item">
                  <div className="aon-cat-item">
                    <div className="aon-cat-pic media-bg-animate shine-hover">
                      <Link className="shine-box" to="/categories-detail" /><img alt="" src="/images/popular-categories/7.jpg" />
                    </div>
                    <h4 className="aon-cat-title">Transport</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white aon-how-service-area sf-curve-pos">
          <div className="container">
            <div className="section-content">
              <div className="row">

                <div className="col-lg-4 col-md-12">
                  <span className="aon-sub-title">Steps</span>
                  <h2 className="sf-title">How Service Finder Works</h2>
                </div>

                <div className="col-lg-8 col-md-12">

                  <div className="aon-step-blocks">
                    <div className="row">

                      <div className="col-md-4 col-sm-4 m-b30">
                        <div className="aon-step-section step-position-1 aon-icon-effect">
                          <div className="aon-step-icon aon-icon-box">
                            <span>
                              <i className="aon-icon"><img alt="" src="/images/step-icon/1.png" /></i>
                            </span>
                          </div>
                          <div className="aon-step-info">
                            <h4 className="aon-title">Describe Your Task</h4>
                            <p>This helps us determine which Taskers are abest job.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4 m-b30">
                        <div className="aon-step-section step-position-2 aon-icon-effect">
                          <div className="aon-step-icon">
                            <span>
                              <i className="aon-icon"><img alt="" src="/images/step-icon/2.png" /></i>
                            </span>
                          </div>
                          <div className="aon-step-info">
                            <h4 className="aon-title">Choose a Tasker</h4>
                            <p>This helps us determine which Taskers are abest job.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4 m-b30">
                        <div className="aon-step-section step-position-3 aon-icon-effect">
                          <div className="aon-step-icon">
                            <span>
                              <i className="aon-icon"><img alt="" src="/images/step-icon/3.png" /></i>
                            </span>
                          </div>
                          <div className="aon-step-info">
                            <h4 className="aon-title">Live Smarter</h4>
                            <p>This helps us determine which Taskers are abest job.</p>
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


        <section className="site-bg-gray aon-feature-provider-area sf-curve-pos">
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
              <div className="row">
                <div className="owl-carousel aon-featurd-provider-carousel aon-owl-arrow">

                  <div className="item">
                    <div className="aon-ow-provider-wrap">
                      <div className="aon-ow-provider shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
                          <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                          <div className="aon-ow-info">
                            <h4 className="aon-title"><Link to="/profile-full" /> Edward Luise</h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <Link className="shine-box" to="/profile-full" /><img alt="" src="/images/providers/1.jpg" />
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
                        <Link to="/profile-full" />Request A Quote
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="aon-ow-provider-wrap">
                      <div className="aon-ow-provider shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
                          <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                          <div className="aon-ow-info">
                            <h4 className="aon-title"><Link to="/profile-full" />Javier Bardem</h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <Link className="shine-box" to="/profile-full" /><img alt="" src="/images/providers/2.jpg" />
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
                        <Link to="/profile-full" />Request A Quote
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="aon-ow-provider-wrap">
                      <div className="aon-ow-provider shine-hover">
                        <div className="aon-ow-top">
                          <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
                          <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                          <div className="aon-ow-info">
                            <h4 className="aon-title"><Link to="/profile-full" />Mila Kunis</h4>
                            <span>Queens, United States</span>
                          </div>
                        </div>
                        <div className="aon-ow-mid">
                          <div className="aon-ow-media media-bg-animate">
                            <Link className="shine-box" to="/profile-full" /><img alt="" src="/images/providers/3.jpg" />
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
                        <Link to="/profile-full" />Request A Quote
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="item">
                      <div className="aon-ow-provider-wrap">
                        <div className="aon-ow-provider shine-hover">
                          <div className="aon-ow-top">
                            <div className="aon-pro-check"><span><i className="fa fa-check"></i></span></div>
                            <div className="aon-pro-favorite"><a href="#"><i className="fa fa-heart-o"></i></a></div>
                            <div className="aon-ow-info">
                              <h4 className="aon-title"><Link to="/profile-full" />Edward Luise</h4>
                              <span>Queens, United States</span>
                            </div>
                          </div>
                          <div className="aon-ow-mid">
                            <div className="aon-ow-media media-bg-animate">
                              <Link className="shine-box" to="/profile-full" /><img alt="" src="/images/providers/4.jpg" />
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
                          <Link to="/profile-full" />Request A Quote
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="site-bg-primary aon-statics-area sf-curve-pos">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex flex-wrap align-items-center a-b-none">
                <div className="col-lg-6 col-md-12">

                  <div className="section-head">
                    <span className="aon-sub-title">Statics</span>
                    <h2 className="sf-title">Trusted by thousands of people all over the world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12">

                  <div className="aon-statics-blocks">
                    <div className="row">

                      <div className="col-lg-6 m-b30 aon-static-position-1">
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-blue">
                            <div className="aon-company-static-num counter aon-icon">36</div>
                            <div className="aon-company-static-name">Providers</div>
                          </div>
                        </div>
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-yellow">
                            <div className="aon-company-static-num counter aon-icon">108</div>
                            <div className="aon-company-static-name">Jobs</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 m-b30 aon-static-position-2">
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-green">
                            <div className="aon-company-static-num counter aon-icon">89</div>
                            <div className="aon-company-static-name">Customer</div>
                          </div>
                        </div>
                        <div className="media-bg-animate media-statics aon-icon-effect">
                          <div className="aon-static-section aon-t-skyblue">
                            <div className="aon-company-static-num counter aon-icon">59</div>
                            <div className="aon-company-static-name">Categories</div>
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


        <div className="aon-news-section-wrap sf-curve-pos">
          <div className="container">

            <div className="section-head">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <span className="aon-sub-title">News</span>
                  <h2 className="sf-title">Recent News Articles</h2>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="row">

                <div className="col-md-4">
                  <div className="media-bg-animate">
                    <div className="aon-blog-section-1 shine-hover">
                      <div className="aon-post-media shine-box">
                        <Link to="/blog-detail" /><img alt="" src="/images/blog/latest-blog1/1.jpg" />
                      </div>
                      <div className="aon-post-meta">
                        <ul>
                          <li className="aon-post-category">Latest</li>
                          <li className="aon-post-author"><Link to="/blog-detail" />By |<span>Admin</span> </li>
                        </ul>
                      </div>
                      <div className="aon-post-info">
                        <h4 className="aon-post-title"><Link to="/blog-detail" />Helping Companies in their Green.</h4>
                        <div className="aon-post-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="media-bg-animate">
                    <div className="aon-blog-section-1 shine-hover">
                      <div className="aon-post-media shine-box">
                        <Link to="/blog-detail" /><img alt="" src="/images/blog/latest-blog1/2.jpg" />
                      </div>
                      <div className="aon-post-meta">
                        <ul>
                          <li className="aon-post-category">Latest</li>
                          <li className="aon-post-author"><Link to="/blog-detail" />By |<span>Admin</span> </li>
                        </ul>
                      </div>
                      <div className="aon-post-info">
                        <h4 className="aon-post-title"><Link to="/blog-detail" />There are two thing is very important.</h4>
                        <div className="aon-post-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="media-bg-animate">
                    <div className="aon-blog-section-1 shine-hover">
                      <div className="aon-post-media shine-box">
                        <Link to="/blog-detail" /><img alt="" src="/images/blog/latest-blog1/3.jpg" />
                      </div>
                      <div className="aon-post-meta">
                        <ul>
                          <li className="aon-post-category">Latest</li>
                          <li className="aon-post-author"><Link to="/blog-detail" />By |<span>Admin</span> </li>
                        </ul>
                      </div>
                      <div className="aon-post-info">
                        <h4 className="aon-post-title"><Link to="/blog-detail" />Officia deserunt mollit anim id labrum.</h4>
                        <div className="aon-post-text">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="aon-whycoose-area sf-curve-pos">
          <div className="container-fluid">
            <div className="sf-whycoose-section">
              <div className="row sf-w-choose-bg-outer d-flex flex-wrap a-b-none">

                <div className="col-md-7 margin-b-50 sf-w-choose-left-cell">
                  <div className="sf-w-choose-info-left">

                    <div className="section-head">
                      <div className="row">
                        <div className="col-md-12 margin-b-50">
                          <span className="aon-sub-title">Choose</span>
                          <h2 className="sf-title">Why Choose us</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>


                    <div className="sf-w-choose margin-b-20">
                      <div className="sf-w-choose-icon">
                        <span>
                          <img alt="" src="/images/whychoose/1.png" />
                        </span>
                      </div>
                      <div className="sf-w-choose-info">
                        <h4 className="sf-title">Meet new customers</h4>
                        <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                      </div>
                    </div>

                    <div className="sf-w-choose margin-b-20">
                      <div className="sf-w-choose-icon">
                        <span>
                          <img alt="" src="/images/whychoose/2.png" />
                        </span>
                      </div>
                      <div className="sf-w-choose-info">
                        <h4 className="sf-title">Grow your revenue</h4>
                        <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                      </div>
                    </div>

                    <div className="sf-w-choose">
                      <div className="sf-w-choose-icon">
                        <span>
                          <img alt="" src="/images/whychoose/3.png" />
                        </span>
                      </div>
                      <div className="sf-w-choose-info">
                        <h4 className="sf-title">Build your online reputation</h4>
                        <p>Suspendisse tincidunt rutrum ante. Vestibulum elementum ipsum sit amet turpis elementum lobortis.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-5 sf-w-choose-bg-wrap sf-w-choose-right-cell">
                  <div className="sf-w-choose-bg" style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="aon-recent-post-area sf-curve-pos">
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
              <div className="sf-blog-section-1-wrap">
                <div className="row">

                  <div className="col-lg-4 col-md-6">
                    <div className="media-bg-animate">
                      <div className="sf-jobs-section">
                        <div className="sf-jobs-head">
                          <Link className="sf-jobs-media" to="/job-detail" /><img alt="" src="/images/jobs/1.jpg" />
                          <span className="sf-jobs-position">Freelance</span>
                        </div>
                        <div className="sf-jobs-info">
                          <div className="sf-job-company">Blue Hills Pvt.LTD</div>
                          <h4 className="sf-title"><Link to="/job-detail" />Account Executive Required</h4>
                          <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                        </div>
                        <div className="sf-jobs-footer">
                          <div className="sf-job-location"><i className="fa fa-map-marker"></i>London</div>
                          <div className="sf-jobs-cost"><span>$25</span>/hour</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="media-bg-animate">
                      <div className="sf-jobs-section">
                        <div className="sf-jobs-head">
                          <Link className="sf-jobs-media" to="/job-detail" /><img alt="" src="/images/jobs/2.jpg" />
                          <span className="sf-jobs-position">Freelance</span>
                        </div>
                        <div className="sf-jobs-info">
                          <div className="sf-job-company">Blue Hills Pvt.LTD</div>
                          <h4 className="sf-title"><Link to="/job-detail" />Project Manager Required</h4>
                          <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                        </div>
                        <div className="sf-jobs-footer">
                          <div className="sf-job-location"><i className="fa fa-map-marker"></i>London</div>
                          <div className="sf-jobs-cost"><span>$25</span>/hour</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="media-bg-animate">
                      <div className="sf-jobs-section">
                        <div className="sf-jobs-head">
                          <Link className="sf-jobs-media" to="/job-detail" /><img alt="" src="/images/jobs/3.jpg" />
                          <span className="sf-jobs-position">Freelance</span>
                        </div>
                        <div className="sf-jobs-info">
                          <div className="sf-job-company">Blue Hills Pvt.LTD</div>
                          <h4 className="sf-title"><Link to="/job-detail" />Electrician Required in Brooklyn</h4>
                          <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                        </div>
                        <div className="sf-jobs-footer">
                          <div className="sf-job-location"><i className="fa fa-map-marker"></i>London</div>
                          <div className="sf-jobs-cost"><span>$25</span>/hour</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="media-bg-animate">
                      <div className="sf-jobs-section">
                        <div className="sf-jobs-head">
                          <Link className="sf-jobs-media" to="/job-detail" /><img alt="" src="/images/jobs/4.jpg" />
                          <span className="sf-jobs-position">Freelance</span>
                        </div>
                        <div className="sf-jobs-info">
                          <div className="sf-job-company">Blue Hills Pvt.LTD</div>
                          <h4 className="sf-title"><Link to="/job-detail" />Librarian Required in Brooklyn</h4>
                          <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                        </div>
                        <div className="sf-jobs-footer">
                          <div className="sf-job-location"><i className="fa fa-map-marker"></i>London</div>
                          <div className="sf-jobs-cost"><span>$25</span>/hour</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="media-bg-animate">
                      <div className="sf-jobs-section">
                        <div className="sf-jobs-head">
                          <a className="sf-jobs-media" href="javascript:void(0);"><img alt="" src="/images/jobs/5.jpg" /></a>
                          <span className="sf-jobs-position">Freelance</span>
                        </div>
                        <div className="sf-jobs-info">
                          <div className="sf-job-company">Blue Hills Pvt.LTD</div>
                          <h4 className="sf-title"><a href="javascript:void(0);">Nursing Assistant Required</a></h4>
                          <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                        </div>
                        <div className="sf-jobs-footer">
                          <div className="sf-job-location"><i className="fa fa-map-marker"></i>London</div>
                          <div className="sf-jobs-cost"><span>$25</span>/hour</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="media-bg-animate">
                      <div className="sf-jobs-section">
                        <div className="sf-jobs-head">
                          <a className="sf-jobs-media" href="javascript:void(0);"><img alt="" src="/images/jobs/6.jpg" /></a>
                          <span className="sf-jobs-position">Freelance</span>
                        </div>
                        <div className="sf-jobs-info">
                          <div className="sf-job-company">Blue Hills Pvt.LTD</div>
                          <h4 className="sf-title"><a href="javascript:void(0);">President of Sales Required</a></h4>
                          <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
                        </div>
                        <div className="sf-jobs-footer">
                          <div className="sf-job-location"><i className="fa fa-map-marker"></i>London</div>
                          <div className="sf-jobs-cost"><span>$25</span>/hour</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="aon-pricing-area sf-curve-pos">
          <div className="container">

            <div className="section-head">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <span className="aon-sub-title">Pricing</span>
                  <h2 className="aon-title">Our Pricing Plans</h2>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

            <div className="section-content">

              <div className="sf-priceing-tb-control">
                <span>Bill Monthly</span>
                <label className="switch">
                  <input type="checkbox" />
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
                      <Link className="sf-choose-plan-btn" to="/contact-us" />Choose Plan
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
                      <Link className="sf-choose-plan-btn" to="/contact-us" />Choose Plan
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
                      <Link className="sf-choose-plan-btn" to="/contact-us" />Try 1 Month
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
                      <Link className="sf-choose-plan-btn" to="/contact-us" />Choose Plan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="aon-testmonials-area sf-curve-pos">
          <div className="container">

            <div className="section-head">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <span className="sf-sub-title">Testimonial</span>
                  <h2 className="sf-title">What People Say</h2>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

            <div className="section-content">

              <div className="slider-vertical-wrap">

                <div className="slick-testimonials-thumbnails">

                  <div className="slick-item">
                    <div className="sf-testimonial-user">
                      <div className="sf-testimonial-media"><img alt="" src="/images/testimonials/pic1.jpg" /></div>
                      <div className="sf-testimonial-user-detail">
                        <div className="sf-testi-user-name">Mark, Homestay </div>
                        <div className="sf-testi-user-position">Sales Manager</div>
                      </div>
                    </div>
                  </div>

                  <div className="slick-item">
                    <div className="sf-testimonial-user">
                      <div className="sf-testimonial-media"><img alt="" src="/images/testimonials/pic1.jpg" /></div>
                      <div className="sf-testimonial-user-detail">
                        <div className="sf-testi-user-name">Mark, Homestay </div>
                        <div className="sf-testi-user-position">Sales Manager</div>
                      </div>
                    </div>
                  </div>

                  <div className="slick-item">
                    <div className="sf-testimonial-user">
                      <div className="sf-testimonial-media"><img alt="" src="/images/testimonials/pic2.jpg" /></div>
                      <div className="sf-testimonial-user-detail">
                        <div className="sf-testi-user-name">Mark, Homestay </div>
                        <div className="sf-testi-user-position">Sales Manager</div>
                      </div>
                    </div>
                  </div>

                  <div className="slick-item">
                    <div className="sf-testimonial-user">
                      <div className="sf-testimonial-media"><img alt="" src="/images/testimonials/pic3.jpg" /></div>
                      <div className="sf-testimonial-user-detail">
                        <div className="sf-testi-user-name">Mark, Homestay </div>
                        <div className="sf-testi-user-position">Sales Manager</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slick-testimonials-carousel">

                  <div className="slick-item">
                    <div className="sf-testimonial-info text-center">
                      <div className="sf-testimonial-title">It was a great experience</div>
                      <div className="sf-ow-pro-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star text-gray"></span>
                      </div>
                      <div className="sf-testimonial-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin</p>
                      </div>
                      <div className="sf-testimonial-quote"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>

                  <div className="slick-item">
                    <div className="sf-testimonial-info text-center">
                      <div className="sf-testimonial-title">It was a great experience</div>
                      <div className="sf-ow-pro-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star text-gray"></span>
                      </div>
                      <div className="sf-testimonial-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin</p>
                      </div>
                      <div className="sf-testimonial-quote"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>

                  <div className="slick-item">
                    <div className="sf-testimonial-info text-center">
                      <div className="sf-testimonial-title">It was a great experience</div>
                      <div className="sf-ow-pro-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star text-gray"></span>
                      </div>
                      <div className="sf-testimonial-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin</p>
                      </div>
                      <div className="sf-testimonial-quote"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>

                  <div className="slick-item">
                    <div className="sf-testimonial-info text-center">
                      <div className="sf-testimonial-title">It was a great experience</div>
                      <div className="sf-ow-pro-rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star text-gray"></span>
                      </div>
                      <div className="sf-testimonial-text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin</p>
                      </div>
                      <div className="sf-testimonial-quote"><i className="fa fa-quote-left"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      CONTENT END
      FOOTER START
      FOOTER END
      BUTTON TOP START
      <button className="scroltop"><span className="fa fa-angle-up relative" id="btn-vibrate"></span></button>

    </>
  );
}
