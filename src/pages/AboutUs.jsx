import React from "react";
import { Link } from "react-router-dom";
import WhyChooseSection from "../components/home/WhyChooseSection";

export default function AboutUs() {
  return (
    <>
      <div className="page-content">
        <div className="aon-page-benner-area">
          <div className="aon-page-banner-row" style={{ backgroundImage: "url(/images/banner/job-banner.jpg)" }}>
            <div className="sf-overlay-main" style={{ opacity: "0.8", backgroundColor: "#022279" }}></div>
            <div className="sf-banner-heading-wrap">
              <div className="sf-banner-heading-area">
                <div className="sf-banner-heading-large">About Us</div>
                <div className="sf-banner-breadcrumbs-nav">
                  <ul className="list-inline">
                    <li><Link to="/" /> Home </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhyChooseSection />


        <div className="aon-about-area">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex flex-wrap align-items-center a-b-none">
                <div className="col-lg-6 col-md-12">
                  <div className="aon-about-pic">
                    <img alt="" src="/images/about-pic.jpg" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">

                  <div className="section-head">
                    <span className="aon-sub-title">About</span>
                    <h2 className="sf-title">Upgrade Your Skills With Service Finder</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravidal abore et dolore magna aliqua. </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="bg-white aon-how-service-area">
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


        <div className="site-bg-primary aon-statics-area">
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
      <button className="scroltop"><span className="fa fa-angle-up relative" id="btn-vibrate"></span></button>

    </>
  );
}
