import { createBrowserRouter } from "react-router-dom";
import AllCategories from "../pages/AllCategories";
import BlogDetail from "../pages/BlogDetail";
import BlogGrid2 from "../pages/BlogGrid2";
import BlogGrid from "../pages/BlogGrid";
import BlogList2 from "../pages/BlogList2";
import BlogList3 from "../pages/BlogList3";
import BlogList4 from "../pages/BlogList4";
import BlogList from "../pages/BlogList";
import CategoriesDetail2 from "../pages/CategoriesDetail2";
import CategoriesDetail from "../pages/CategoriesDetail";
import ContactUs from "../pages/ContactUs";
import Index2 from "../pages/Index2";
import Index from "../pages/Index";
import JobDetail from "../pages/JobDetail";
import JobGrid from "../pages/JobGrid";
import JobListing from "../pages/JobListing";
import McAvailability from "../pages/McAvailability";
import McBusinessHours from "../pages/McBusinessHours";
import McDashboard from "../pages/McDashboard";
import McFeaturedMember from "../pages/McFeaturedMember";
import McMessanger from "../pages/McMessanger";
import McMyBooking from "../pages/McMyBooking";
import McMyServices from "../pages/McMyServices";
import McProfile from "../pages/McProfile";
import McTeamMembers from "../pages/McTeamMembers";
import McUpgradeAccount from "../pages/McUpgradeAccount";
import McUploadIdentity from "../pages/McUploadIdentity";
import NewSearchList2 from "../pages/NewSearchList2";
import ProfileFull from "../pages/ProfileFull";
import ProfileSidebar from "../pages/ProfileSidebar";
import SearchGridMap2 from "../pages/SearchGridMap2";
import SearchGrid from "../pages/SearchGrid";
import SearchGridsMap from "../pages/SearchGridsMap";
import SearchListMap from "../pages/SearchListMap";
import SearchListMap2 from "../pages/SearchListMap2";
import SearchList from "../pages/SearchList";
import AboutUs from "../pages/AboutUs";
import Layout from "../components/layout/Layout";
import Search from "../pages/Search";
import BrowsCompanies from "../pages/BrowsCompanies";
import PricingPage from "../pages/PricingPage";
import HowItWorks from "../pages/HowItWorks";
import FindFreelancers from "../pages/FindFreelancers";

function NotFound() {
  return (
    <div className="section-full p-t80 p-b80">
      <div className="container">
        <h2>404, Page not found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "index-2", element: <Index2 /> },

      { path: "search", element: <Search /> },
      { path: "companies", element: <BrowsCompanies /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "how-it-works", element: <HowItWorks /> },
      { path: "freelancers", element: <FindFreelancers /> },

      { path: "about-us", element: <AboutUs /> },
      { path: "all-categories", element: <AllCategories /> },

      { path: "blog-detail", element: <BlogDetail /> },
      { path: "blog-grid", element: <BlogGrid /> },
      { path: "blog-grid-2", element: <BlogGrid2 /> },

      { path: "blog-list", element: <BlogList /> },
      { path: "blog-list-2", element: <BlogList2 /> },
      { path: "blog-list-3", element: <BlogList3 /> },
      { path: "blog-list-4", element: <BlogList4 /> },

      { path: "categories-detail", element: <CategoriesDetail /> },
      { path: "categories-detail-2", element: <CategoriesDetail2 /> },

      { path: "contact-us", element: <ContactUs /> },

      { path: "job-detail", element: <JobDetail /> },
      { path: "job-grid", element: <JobGrid /> },
      { path: "job-listing", element: <JobListing /> },

      { path: "mc-availability", element: <McAvailability /> },
      { path: "mc-business-hours", element: <McBusinessHours /> },
      { path: "mc-dashboard", element: <McDashboard /> },
      { path: "mc-featured-member", element: <McFeaturedMember /> },
      { path: "mc-messanger", element: <McMessanger /> },
      { path: "mc-my-booking", element: <McMyBooking /> },
      { path: "mc-my-services", element: <McMyServices /> },
      { path: "mc-profile", element: <McProfile /> },
      { path: "mc-team-members", element: <McTeamMembers /> },
      { path: "mc-upgrade-account", element: <McUpgradeAccount /> },
      { path: "mc-upload-identity", element: <McUploadIdentity /> },

      { path: "new-search-list-2", element: <NewSearchList2 /> },
      { path: "profile-full", element: <ProfileFull /> },
      { path: "profile-sidebar", element: <ProfileSidebar /> },

      { path: "search-grid-map2", element: <SearchGridMap2 /> },
      { path: "search-grid", element: <SearchGrid /> },
      { path: "search-grids-map", element: <SearchGridsMap /> },
      { path: "search-list-map", element: <SearchListMap /> },
      { path: "search-list-map2", element: <SearchListMap2 /> },
      { path: "search-list", element: <SearchList /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
