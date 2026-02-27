import React, { useMemo, useRef, useState } from "react";
import { Dropdown, Drawer } from "antd";
import "antd/dist/reset.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../Faq/Modal/AuthModal";

// SignIn/SignUp modal component import

const cx = (...classes) => classes.filter(Boolean).join(" ");

function splitLink(link) {
  const [path, query] = link.split("?");
  return { path, query: query || "" };
}

function isActiveLink(location, link) {
  const { path, query } = splitLink(link);
  if (location.pathname !== path) return false;
  if (!query) return true;

  const linkParams = new URLSearchParams(query);
  const currentParams = new URLSearchParams(location.search);

  for (const [k, v] of linkParams.entries()) {
    if (currentParams.get(k) !== v) return false;
  }
  return true;
}

export const NAV = {
  logo: {
    link: "/",
    src: "https://dsy1.crateweb.cloud/assets/uploads/media-uploader/logo-111705509884.png",
    alt: "DSY",
  },
  main: [
    { id: "home", name: "Home", link: "/" },
    { id: "contactus", name: "Contact", link: "/contact-us" },
  ],
  dropdowns: [
    {
      id: "categories",
      name: "Categories",
      items: [
        {
          id: "all-categories",
          name: "All categories",
          link: "/all-categories",
        },
        {
          id: "single-categories",
          name: "Single categories",
          link: "/categories-detail",
        },
      ],
    },
    {
      id: "find-services",
      name: "Find Services",
      items: [
        { id: "search-services", name: "Search services", link: "/search" },
        {
          id: "browse-companies",
          name: "Browse companies",
          link: "/companies",
        },
        {
          id: "find-freelancers",
          name: "Find freelancers",
          link: "/freelancers",
        },
      ],
    },
    {
      id: "pages",
      name: "Pages",
      items: [
        { id: "about-us", name: "About us", link: "/about-us" },
        { id: "how-it-works", name: "How it works", link: "/how-it-works" },
        { id: "pricing", name: "Pricing", link: "/pricing" },
        { id: "blog", name: "BlogPage", link: "/blog" },
      ],
    },
    {
      id: "account",
      name: "Account",
      align: "right",
      items: [
        { id: "signin", name: "Sign In", link: "/signin" },
        { id: "signup", name: "Sign Up", link: "/signup" },
      ],
    },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [authOpen, setAuthOpen] = useState(false); // modal state
  const [tabType, setTabType] = useState("login"); // login / signup

  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const openAuthModal = (type) => {
    setTabType(type);
    setAuthOpen(true);
  };

  const dropdownCommon = {
    placement: "bottomLeft",
    trigger: ["click"],
    overlayClassName: "antd-navbar-dropdown",
    getPopupContainer: () => navRef.current || document.body,
    dropdownRender: (menu) => (
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        {menu}
      </div>
    ),
  };

  const antdMenuItemsById = useMemo(() => {
    const map = {};
    for (const group of NAV.dropdowns) {
      map[group.id] = group.items.map((item) => ({
        key: item.id,
        label:
          group.id === "account" ? (
            <span
              onClick={() =>
                openAuthModal(item.id === "signin" ? "login" : "signup")
              }
              className="block px-4 py-3 text-sm hover:bg-slate-50 cursor-pointer"
            >
              {item.name}
            </span>
          ) : (
            // <span
            //   className={cx(
            //     "block px-4 py-3 text-sm hover:bg-slate-50",
            //     isActiveLink(location, item.link)
            //       ? "text-slate-900 font-semibold"
            //       : "text-slate-700",
            //   )}
            // >
            //   {item.name}
            // </span>
            <Link
              to={item.link}
              onClick={closeAll}
              className={cx(
                "block px-4 py-3 text-sm hover:bg-slate-50",
                isActiveLink(location, item.link)
                  ? "text-slate-900 font-semibold"
                  : "text-slate-700",
              )}
            >
              {item.name}
            </Link>
          ),
      }));
    }
    return map;
  }, [location.pathname, location.search]);

  return (
    <>
      <nav ref={navRef} className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <Link
            to={NAV.logo.link}
            className="flex items-center gap-2"
            onClick={closeAll}
          >
            <img
              src={NAV.logo.src}
              alt={NAV.logo.alt}
              className="h-8 w-auto lg:h-10"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV.main.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={cx(
                  "text-sm font-medium hover:text-slate-900",
                  isActiveLink(location, item.link)
                    ? "text-slate-900"
                    : "text-slate-700",
                )}
              >
                {item.name}
              </Link>
            ))}

            {NAV.dropdowns
              .filter((g) => g.id !== "account")
              .map((group) => (
                <Dropdown
                  key={group.id}
                  {...dropdownCommon}
                  menu={{
                    items: antdMenuItemsById[group.id],
                  }}
                  open={openDropdown === group.id}
                  onOpenChange={(open) =>
                    setOpenDropdown(open ? group.id : null)
                  }
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    {group.name}
                  </button>
                </Dropdown>
              ))}

            {/* Account dropdown */}
            <Dropdown
              {...dropdownCommon}
              menu={{
                items: antdMenuItemsById.account,
              }}
              open={openDropdown === "account"}
              onOpenChange={(open) => setOpenDropdown(open ? "account" : null)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Account
              </button>
            </Dropdown>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialTab={tabType}
      />
    </>
  );
}
