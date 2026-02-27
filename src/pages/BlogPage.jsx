import React from "react";
import { Search, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import BlogBanner from "../components/blog/BlogBanner";
import AllBlogs from "../components/blog/AllBlogs";

const BlogPage = () => {
  return (
    <div className="page-content">
      {/* Banner */}
      {/* <div className="aon-page-benner-area">
        <div
          className="aon-page-banner-row relative"
          style={{ backgroundImage: "url(/images/banner/job-banner.jpg)" }}
        >
          <div
            className="sf-overlay-main absolute inset-0"
            style={{ opacity: "0.8", backgroundColor: "#022279" }}
          />
          <div className="sf-banner-heading-wrap relative">
            <div className="sf-banner-heading-area">
              <div className="sf-banner-heading-large">Blog</div>
              <div className="sf-banner-breadcrumbs-nav">
                <ul className="list-inline">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <BlogBanner />
      <AllBlogs />
      {/* Content wrapper */}
    </div>
  );
};

export default BlogPage;
