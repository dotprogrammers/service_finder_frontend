

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";

// import AboutUs from "./pages/AboutUs";
// import AllCategories from "./pages/AllCategories";
// import BlogDetail from "./pages/BlogDetail";
// import BlogGrid2 from "./pages/BlogGrid2";
// import BlogGrid from "./pages/BlogGrid";
// import BlogList2 from "./pages/BlogList2";
// import BlogList3 from "./pages/BlogList3";
// import BlogList4 from "./pages/BlogList4";
// import BlogList from "./pages/BlogList";
// import CategoriesDetail2 from "./pages/CategoriesDetail2";
// import CategoriesDetail from "./pages/CategoriesDetail";
// import ContactUs from "./pages/ContactUs";
// import Error404 from "./pages/Error404";
// import Index2 from "./pages/Index2";
// import Index from "./pages/Index";
// import JobDetail from "./pages/JobDetail";
// import JobGrid from "./pages/JobGrid";
// import JobListing from "./pages/JobListing";
// import McAvailability from "./pages/McAvailability";
// import McBusinessHours from "./pages/McBusinessHours";
// import McDashboard from "./pages/McDashboard";
// import McFeaturedMember from "./pages/McFeaturedMember";
// import McMessanger from "./pages/McMessanger";
// import McMyBooking from "./pages/McMyBooking";
// import McMyServices from "./pages/McMyServices";
// import McProfile from "./pages/McProfile";
// import McTeamMembers from "./pages/McTeamMembers";
// import McUpgradeAccount from "./pages/McUpgradeAccount";
// import McUploadIdentity from "./pages/McUploadIdentity";
// import NewSearchList2 from "./pages/NewSearchList2";
// import ProfileFull from "./pages/ProfileFull";
// import ProfileSidebar from "./pages/ProfileSidebar";
// import SearchGridMap2 from "./pages/SearchGridMap2";
// import SearchGrid from "./pages/SearchGrid";
// import SearchGridsMap from "./pages/SearchGridsMap";
// import SearchListMap from "./pages/SearchListMap";
// import SearchListMap2 from "./pages/SearchListMap2";
// import SearchList from "./pages/SearchList";

// function NotFound() {
//   return (
//     <Layout>
//       <div className="section-full p-t80 p-b80">
//         <div className="container">
//           <h2>404, Page not found</h2>
//           <p>The page you are looking for does not exist.</p>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />        <Route path="/all-categories" element={<Layout><AllCategories /></Layout>} />        <Route path="/blog-detail" element={<Layout><BlogDetail /></Layout>} />        <Route path="/blog-grid-2" element={<Layout><BlogGrid2 /></Layout>} />        <Route path="/blog-grid" element={<Layout><BlogGrid /></Layout>} />        <Route path="/blog-list-2" element={<Layout><BlogList2 /></Layout>} />        <Route path="/blog-list-3" element={<Layout><BlogList3 /></Layout>} />        <Route path="/blog-list-4" element={<Layout><BlogList4 /></Layout>} />        <Route path="/blog-list" element={<Layout><BlogList /></Layout>} />        <Route path="/categories-detail-2" element={<Layout><CategoriesDetail2 /></Layout>} />        <Route path="/categories-detail" element={<Layout><CategoriesDetail /></Layout>} />        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />        <Route path="/error-404" element={<Layout><Error404 /></Layout>} />        <Route path="/index-2" element={<Layout><Index2 /></Layout>} />        <Route path="/" element={<Layout><Index /></Layout>} />        <Route path="/job-detail" element={<Layout><JobDetail /></Layout>} />        <Route path="/job-grid" element={<Layout><JobGrid /></Layout>} />        <Route path="/job-listing" element={<Layout><JobListing /></Layout>} />        <Route path="/mc-availability" element={<Layout><McAvailability /></Layout>} />        <Route path="/mc-business-hours" element={<Layout><McBusinessHours /></Layout>} />        <Route path="/mc-dashboard" element={<Layout><McDashboard /></Layout>} />        <Route path="/mc-featured-member" element={<Layout><McFeaturedMember /></Layout>} />        <Route path="/mc-messanger" element={<Layout><McMessanger /></Layout>} />        <Route path="/mc-my-booking" element={<Layout><McMyBooking /></Layout>} />        <Route path="/mc-my-services" element={<Layout><McMyServices /></Layout>} />        <Route path="/mc-profile" element={<Layout><McProfile /></Layout>} />        <Route path="/mc-team-members" element={<Layout><McTeamMembers /></Layout>} />        <Route path="/mc-upgrade-account" element={<Layout><McUpgradeAccount /></Layout>} />        <Route path="/mc-upload-identity" element={<Layout><McUploadIdentity /></Layout>} />        <Route path="/new-search-list-2" element={<Layout><NewSearchList2 /></Layout>} />        <Route path="/profile-full" element={<Layout><ProfileFull /></Layout>} />        <Route path="/profile-sidebar" element={<Layout><ProfileSidebar /></Layout>} />        <Route path="/search-grid-map2" element={<Layout><SearchGridMap2 /></Layout>} />        <Route path="/search-grid" element={<Layout><SearchGrid /></Layout>} />        <Route path="/search-grids-map" element={<Layout><SearchGridsMap /></Layout>} />        <Route path="/search-list-map" element={<Layout><SearchListMap /></Layout>} />        <Route path="/search-list-map2" element={<Layout><SearchListMap2 /></Layout>} />        <Route path="/search-list" element={<Layout><SearchList /></Layout>} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
