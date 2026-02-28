import React from "react";
import { Search, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import BlogBanner from "../components/blog/BlogBanner";
import AllBlogs from "../components/blog/AllBlogs";

const BlogPage = () => {
  return (
    <div className="page-content">
      <BlogBanner />
      <AllBlogs />
    </div>
  );
};

export default BlogPage;
