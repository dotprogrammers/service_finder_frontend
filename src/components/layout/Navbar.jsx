import React, { useMemo, useRef, useState, useEffect } from "react";
import { Dropdown, Drawer } from "antd";
import "antd/dist/reset.css";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "../Faq/Modal/AuthModal";

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
        { id: "all-categories", name: "All categories", link: "/all-categories" },
        { id: "single-categories", name: "Single categories", link: "/categories-detail" },
      ],
    },
    {
      id: "find-services",
      name: "Find Services",
      items: [
        { id: "search-services", name: "Search services", link: "/search" },
        { id: "browse-companies", name: "Browse companies", link: "/companies" },
        { id: "find-freelancers", name: "Find freelancers", link: "/freelancers" },
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

  // Desktop dropdown state only
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  // Mobile accordion state only
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const [authOpen, setAuthOpen] = useState(false);
  const [tabType, setTabType] = useState("login");

  const navRef = useRef(null);
  const location = useLocation();

  const closeDrawerOnly = () => setMobileOpen(false);

  const closeAll = () => {
    setDesktopDropdown(null);
    setMobileAccordion(null);
    setMobileOpen(false);
  };

  const openAuthModal = (type) => {
    // Close any dropdown state first to prevent flash
    setDesktopDropdown(null);
    setMobileAccordion(null);
    setTabType(type);
    setAuthOpen(true);
    setMobileOpen(false);
  };

  // On route change, kill everything immediately
  useEffect(() => {
    setDesktopDropdown(null);
    setMobileAccordion(null);
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // While drawer is open, never keep desktop dropdown open
  useEffect(() => {
    if (mobileOpen) setDesktopDropdown(null);
  }, [mobileOpen]);

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
              onClick={() => openAuthModal(item.id === "signin" ? "login" : "signup")}
              className="block cursor-pointer px-4 py-3 text-sm hover:bg-slate-50"
            >
              {item.name}
            </span>
          ) : (
            <Link
              to={item.link}
              onClick={() => {
                // close dropdown first, then navigate via Link
                setDesktopDropdown(null);
              }}
              className={cx(
                "block px-4 py-3 text-sm hover:bg-slate-50",
                isActiveLink(location, item.link)
                  ? "font-semibold text-slate-900"
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

  const mobileSection = (title) => (
    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
      {title}
    </div>
  );

  const MobileLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => {
        // Important: close drawer and accordion in the same tick
        // so nothing tries to render during route change
        closeAll();
      }}
      className={cx(
        "block rounded-lg px-4 py-3 text-sm hover:bg-slate-50",
        isActiveLink(location, to) ? "font-semibold text-slate-900" : "text-slate-700",
      )}
    >
      {children}
    </Link>
  );

  const MobileGroup = ({ group }) => {
    const open = mobileAccordion === group.id;
    return (
      <div className="px-2">
        <button
          type="button"
          onClick={() => setMobileAccordion(open ? null : group.id)}
          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <span>{group.name}</span>
          <svg
            className={cx("h-4 w-4 transition-transform", open ? "rotate-180" : "rotate-0")}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open ? (
          <div className="mb-2 space-y-1 px-2">
            {group.items.map((item) => (
              <MobileLink key={item.id} to={item.link}>
                {item.name}
              </MobileLink>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <nav ref={navRef} className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <Link to={NAV.logo.link} className="flex items-center gap-2" onClick={closeAll}>
            <img src={NAV.logo.src} alt={NAV.logo.alt} className="h-8 w-auto lg:h-10" />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV.main.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={cx(
                  "text-sm font-medium hover:text-slate-900",
                  isActiveLink(location, item.link) ? "text-slate-900" : "text-slate-700",
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
                  menu={{ items: antdMenuItemsById[group.id] }}
                  open={desktopDropdown === group.id}
                  onOpenChange={(open) => setDesktopDropdown(open ? group.id : null)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    {group.name}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Dropdown>
              ))}
          </div>

          <div className="hidden lg:block">
            <Dropdown
              {...dropdownCommon}
              menu={{ items: antdMenuItemsById.account }}
              open={desktopDropdown === "account"}
              onOpenChange={(open) => setDesktopDropdown(open ? "account" : null)}
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
              onClick={() => {
                // Ensure desktop dropdown is closed before opening drawer
                setDesktopDropdown(null);
                setMobileOpen(true);
              }}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-2">
            <img src={NAV.logo.src} alt={NAV.logo.alt} className="h-8 w-auto" />
          </div>
        }
        placement="left"
        open={mobileOpen}
        onClose={closeDrawerOnly}
        afterOpenChange={(open) => {
          // When drawer closes, also reset accordion to avoid any quick UI flash
          if (!open) setMobileAccordion(null);
        }}
        closable
        width={320}
        bodyStyle={{ padding: 0 }}
        destroyOnClose
      >
        <div className="border-b border-slate-200 py-2">
          {mobileSection("Main")}
          <div className="space-y-1 px-2 pb-2">
            {NAV.main.map((item) => (
              <MobileLink key={item.id} to={item.link}>
                {item.name}
              </MobileLink>
            ))}
          </div>
        </div>

        <div className="border-b border-slate-200 py-2">
          {mobileSection("Menu")}
          <div className="space-y-1">
            {NAV.dropdowns
              .filter((g) => g.id !== "account")
              .map((group) => (
                <MobileGroup key={group.id} group={group} />
              ))}
          </div>
        </div>

        <div className="py-2">
          {mobileSection("Account")}
          <div className="space-y-1 px-2">
            <button
              type="button"
              onClick={() => openAuthModal("login")}
              className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => openAuthModal("signup")}
              className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Sign Up
            </button>
          </div>
        </div>
      </Drawer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} initialTab={tabType} />
    </>
  );
}