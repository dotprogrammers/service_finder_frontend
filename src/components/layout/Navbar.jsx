import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dropdown, Drawer } from "antd";
import "antd/dist/reset.css";
import { Link, useLocation } from "react-router-dom";
import { NAV } from "../../config/nav.config";

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

function MenuLink({ to, children, onClick, active }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cx(
        "block px-4 py-3 text-sm hover:bg-slate-50",
        active ? "text-slate-900 font-semibold" : "text-slate-700"
      )}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Close dropdowns when clicking outside the navbar
  useEffect(() => {
    function onClickOutside(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) setOpenDropdown(null);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const dropdownCommon = {
    placement: "bottomLeft",
    trigger: ["click"],
    overlayClassName: "antd-navbar-dropdown",
    dropdownRender: (menu) => (
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        {menu}
      </div>
    ),
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // Build antd menu items from config
  const antdMenuItemsById = useMemo(() => {
    const map = {};
    for (const group of NAV.dropdowns) {
      map[group.id] = group.items.map((item) => ({
        key: item.id,
        label: (
          <MenuLink
            to={item.link}
            onClick={() => setOpenDropdown(null)}
            active={isActiveLink(location, item.link)}
          >
            {item.name}
          </MenuLink>
        ),
      }));
    }
    return map;
  }, [location.pathname, location.search]);

  const accountGroup = NAV.dropdowns.find((g) => g.id === "account");

  return (
    <nav ref={navRef} className="w-full border-b border-slate-200 bg-white">
      <style>{`
        .antd-navbar-dropdown .ant-dropdown-menu {
          border-radius: 0;
          box-shadow: none;
          padding: 0;
          background: transparent;
        }
        .antd-navbar-dropdown .ant-dropdown-menu-item,
        .antd-navbar-dropdown .ant-dropdown-menu-submenu-title {
          padding: 0 !important;
          margin: 0 !important;
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link to={NAV.logo.link} className="flex items-center gap-2" onClick={closeAll}>
          <img src={NAV.logo.src} alt={NAV.logo.alt} className="h-8 w-auto lg:h-10" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV.main
            .filter((x) => x.id !== "contact")
            .map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={cx(
                  "text-sm font-medium hover:text-slate-900",
                  isActiveLink(location, item.link) ? "text-slate-900" : "text-slate-700"
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
                open={openDropdown === group.id}
                onOpenChange={(open) => setOpenDropdown(open ? group.id : null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                  aria-expanded={openDropdown === group.id}
                >
                  {group.name}
                  <svg
                    className={cx("h-4 w-4 transition-transform", openDropdown === group.id ? "rotate-180" : "")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Dropdown>
            ))}

          {/* contact at end */}
          {NAV.main
            .filter((x) => x.id === "contact")
            .map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={cx(
                  "text-sm font-medium hover:text-slate-900",
                  isActiveLink(location, item.link) ? "text-slate-900" : "text-slate-700"
                )}
              >
                {item.name}
              </Link>
            ))}
        </div>

        {/* Desktop account */}
        <div className="hidden items-center gap-3 lg:flex">
          <Dropdown
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="antd-navbar-dropdown"
            dropdownRender={(menu) => (
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">{menu}</div>
            )}
            menu={{ items: antdMenuItemsById.account }}
            open={openDropdown === "account"}
            onOpenChange={(open) => setOpenDropdown(open ? "account" : null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              aria-expanded={openDropdown === "account"}
            >
              <span>{accountGroup?.name || "Account"}</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </Dropdown>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          setOpenDropdown(null);
        }}
        placement="right"
        width={320}
        title={
          <Link to={NAV.logo.link} className="flex items-center gap-2" onClick={closeAll}>
            <img src={NAV.logo.src} alt={NAV.logo.alt} className="h-8 w-auto" />
          </Link>
        }
      >
        <div className="flex flex-col gap-1">
          {/* Main links */}
          {NAV.main.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={closeAll}
              className={cx(
                "rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50",
                isActiveLink(location, item.link) ? "text-slate-900" : "text-slate-700"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile dropdowns (services, links) */}
          {NAV.dropdowns
            .filter((g) => g.id !== "account")
            .map((group) => (
              <Dropdown
                key={group.id}
                {...dropdownCommon}
                menu={{
                  items: group.items.map((item) => ({
                    key: item.id,
                    label: (
                      <MenuLink
                        to={item.link}
                        onClick={closeAll}
                        active={isActiveLink(location, item.link)}
                      >
                        {item.name}
                      </MenuLink>
                    ),
                  })),
                }}
                open={openDropdown === group.id}
                onOpenChange={(open) => setOpenDropdown(open ? group.id : null)}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                  aria-expanded={openDropdown === group.id}
                >
                  <span>{group.name}</span>
                  <svg
                    className={cx("h-4 w-4 transition-transform", openDropdown === group.id ? "rotate-180" : "")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75" // keep your original path if you want, I shortened here
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Dropdown>
            ))}

          {/* Mobile Account */}
          <div className="mt-2 border-t border-slate-200 pt-2">
            <Dropdown
              placement="bottomLeft"
              trigger={["click"]}
              overlayClassName="antd-navbar-dropdown"
              dropdownRender={(menu) => (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">{menu}</div>
              )}
              menu={{
                items: accountGroup.items.map((item) => ({
                  key: item.id,
                  label: (
                    <MenuLink to={item.link} onClick={closeAll} active={isActiveLink(location, item.link)}>
                      {item.name}
                    </MenuLink>
                  ),
                })),
              }}
              open={openDropdown === "account"}
              onOpenChange={(open) => setOpenDropdown(open ? "account" : null)}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                aria-expanded={openDropdown === "account"}
              >
                <span>{accountGroup.name}</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 21a8 8 0 10-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </Dropdown>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}