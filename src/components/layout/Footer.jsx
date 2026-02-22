import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="site-footer footer-light">

        <div className="footer-top-newsletter">
          <div className="container">
            <div className="border !border-[#022278] !rounded-lg p-6 flex justify-between items-center flex-wrap gap-6">
              <span className="text-2xl text-[#022278]">Subscribe Our Newsletter</span>
              <form>
                <div className="flex justify-center">
                  <div className="flex max-w-[600px] w-full">
                    <Input
                      size="large"
                      placeholder="Enter Your Email Address"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      className="!rounded-tr-[0px] !rounded-br-[0px]"

                    />

                    <Button
                      type="primary"
                      size="large"
                      // loading={loading}
                      // onClick={handleSubscribe}
                      className="!rounded-tl-[0px] !rounded-bl-[0px]"

                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="sf-site-link sf-widget-link">
                  <h4 className="sf-f-title">Site Links</h4>
                  <ul>
                    <li><Link to="/blog-grid" />Blog</li>
                    <li><Link to="/contact-us" />Contact Us</li>
                    <li><Link to="/job-grid" />Jobs</li>
                    <li><Link to="/all-categories" />Categories</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="sf-site-link sf-widget-cities">
                  <h4 className="sf-f-title">Popular Cities</h4>
                  <ul>
                    <li><Link to="/all-categories" />Ballston Lake</li>
                    <li><Link to="/all-categories" />Batumi</li>
                    <li><Link to="/all-categories" />Brooklyn</li>
                    <li><Link to="/all-categories" />Cambridge</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="sf-site-link sf-widget-categories">
                  <h4 className="sf-f-title">Categories</h4>
                  <ul>
                    <li><Link to="/categories-detail" />Car Service</li>
                    <li><Link to="/categories-detail" />House Cleaning</li>
                    <li><Link to="/categories-detail" />Transport</li>
                    <li><Link to="/categories-detail" />Yoga Classes</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="sf-site-link sf-widget-contact">
                  <h4 className="sf-f-title">Contact Info</h4>
                  <ul>
                    <li>India</li>
                    <li>+41 232 525 5257</li>
                    <li>+41 856 525 5369</li>
                    <li>hello@Servicefinder.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="sf-footer-bottom-section">
              <a href="https://dsy1.crateweb.cloud" className="flex items-center gap-2">
                <img
                  src="https://dsy1.crateweb.cloud/assets/uploads/media-uploader/logo-111705509884.png"
                  alt="DSY"
                  className="h-8 w-auto lg:h-10"
                />
              </a>
              <div className="sf-f-copyright">
                <span>Copyright 2022 | Aone Theme. All Rights Reserved</span>
              </div>
              <div className="sf-f-social">
                <ul className="socila-box">
                  <li><a href="javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
