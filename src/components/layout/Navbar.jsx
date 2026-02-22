import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dropdown, Drawer } from "antd";
import "antd/dist/reset.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const navRef = useRef(null);

  // Close dropdowns when clicking outside the navbar
  useEffect(() => {
    function onClickOutside(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setLinksOpen(false);
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const servicesItems = useMemo(
    () => [
      {
        key: "online-services",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/online-services"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Online Services
          </a>
        ),
      },
      {
        key: "opgaver",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/opgaver"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Opgaver
          </a>
        ),
      },
    ],
    []
  );

  const linksItems = useMemo(
    () => [
      {
        key: "win-win",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/en-win-win-for-b-de-kunde-og-virksomhed"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            En win win for både Kunde &amp; Virksomhed
          </a>
        ),
      },
      {
        key: "vision",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/vores-vision"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Vores vision
          </a>
        ),
      },
      {
        key: "blog",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/blog"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Artikler
          </a>
        ),
      },
      {
        key: "faq",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/faq"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Faq
          </a>
        ),
      },
      {
        key: "privacy",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/privatlivspolitik---cookiebrug"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Privatlivspolitik, Cookiebrug
          </a>
        ),
      },
      {
        key: "terms",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/regler-og-vilk-r"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Regler og vilkår
          </a>
        ),
      },
      {
        key: "law",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/lovhjemmel"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Lovhjemmel
          </a>
        ),
      },
      {
        key: "objection",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/ret-til-indsigelse"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Ret til indsigelse
          </a>
        ),
      },
    ],
    []
  );

  const accountItems = useMemo(
    () => [
      {
        key: "signup",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/register"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Sign Up
          </a>
        ),
      },
      {
        key: "signin",
        label: (
          <a
            href="https://dsy1.crateweb.cloud/login"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
          >
            Sign In
          </a>
        ),
      },
    ],
    []
  );

  // Shared dropdown props so Tailwind styles stay the same
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

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setLinksOpen(false);
    setAccountOpen(false);
  };

  return (
    <nav ref={navRef} className="w-full border-b border-slate-200 bg-white">
      {/* Small CSS patch for antd menu spacing, keeps your Tailwind look */}
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
        <a href="https://dsy1.crateweb.cloud" className="flex items-center gap-2">
          <img
            src="https://dsy1.crateweb.cloud/assets/uploads/media-uploader/logo-111705509884.png"
            alt="DSY"
            className="h-8 w-auto lg:h-10"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="https://dsy1.crateweb.cloud"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Forside
          </a>

          <a
            href="https://danskeserviceydelser.dk/register"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Tilmeld virksomhed
          </a>

          <a
            href="https://dsy1.crateweb.cloud/om-os"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Om os
          </a>

          {/* Services dropdown */}
          <Dropdown
            {...dropdownCommon}
            menu={{ items: servicesItems }}
            open={servicesOpen}
            onOpenChange={(open) => {
              setServicesOpen(open);
              if (open) {
                setLinksOpen(false);
                setAccountOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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

          {/* Links dropdown */}
          <Dropdown
            {...dropdownCommon}
            menu={{ items: linksItems }}
            open={linksOpen}
            onOpenChange={(open) => {
              setLinksOpen(open);
              if (open) {
                setServicesOpen(false);
                setAccountOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              aria-expanded={linksOpen}
            >
              Links
              <svg
                className={`h-4 w-4 transition-transform ${linksOpen ? "rotate-180" : ""}`}
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

          <a
            href="https://dsy1.crateweb.cloud/contact"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Kontakt os
          </a>
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <Dropdown
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="antd-navbar-dropdown"
            dropdownRender={(menu) => (
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                {menu}
              </div>
            )}
            menu={{ items: accountItems }}
            open={accountOpen}
            onOpenChange={(open) => {
              setAccountOpen(open);
              if (open) {
                setServicesOpen(false);
                setLinksOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              aria-expanded={accountOpen}
            >
              <span>Account</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 21a8 8 0 10-16 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
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

      {/* Mobile Drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          closeAllDropdowns();
        }}
        placement="right"
        width={320}
        title={
          <a href="https://dsy1.crateweb.cloud" className="flex items-center gap-2">
            <img
              src="https://dsy1.crateweb.cloud/assets/uploads/media-uploader/logo-111705509884.png"
              alt="DSY"
              className="h-8 w-auto"
            />
          </a>
        }
      >
        <div className="flex flex-col gap-1">
          <a
            href="https://dsy1.crateweb.cloud"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Forside
          </a>
          <a
            href="https://danskeserviceydelser.dk/register"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Tilmeld virksomhed
          </a>
          <a
            href="https://dsy1.crateweb.cloud/om-os"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Om os
          </a>

          {/* Mobile Services */}
          <Dropdown
            {...dropdownCommon}
            menu={{ items: servicesItems }}
            open={servicesOpen}
            onOpenChange={(open) => {
              setServicesOpen(open);
              if (open) {
                setLinksOpen(false);
                setAccountOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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

          {/* Mobile Links */}
          <Dropdown
            {...dropdownCommon}
            menu={{ items: linksItems }}
            open={linksOpen}
            onOpenChange={(open) => {
              setLinksOpen(open);
              if (open) {
                setServicesOpen(false);
                setAccountOpen(false);
              }
            }}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              aria-expanded={linksOpen}
            >
              <span>Links</span>
              <svg
                className={`h-4 w-4 transition-transform ${linksOpen ? "rotate-180" : ""}`}
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

          <a
            href="https://dsy1.crateweb.cloud/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Kontakt os
          </a>

          {/* Mobile Account */}
          <div className="mt-2 border-t border-slate-200 pt-2">
            <Dropdown
              placement="bottomLeft"
              trigger={["click"]}
              overlayClassName="antd-navbar-dropdown"
              dropdownRender={(menu) => (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                  {menu}
                </div>
              )}
              menu={{ items: accountItems }}
              open={accountOpen}
              onOpenChange={(open) => {
                setAccountOpen(open);
                if (open) {
                  setServicesOpen(false);
                  setLinksOpen(false);
                }
              }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                aria-expanded={accountOpen}
              >
                <span>Account</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 21a8 8 0 10-16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
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