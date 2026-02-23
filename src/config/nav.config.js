export const NAV = {
  logo: {
    link: "/",
    src: "https://dsy1.crateweb.cloud/assets/uploads/media-uploader/logo-111705509884.png",
    alt: "DSY",
  },

  main: [
    { id: "home", name: "Home", link: "/" },
    { id: "contact", name: "Contact", link: "/contact" },
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
          link: "/single-categories",
        },
      ],
    },
    {
      id: "find-services",
      name: "Find Services",
      items: [
        {
          id: "search-services",
          name: "Search services",
          link: "/search-services",
        },
        {
          id: "browse-companies",
          name: "Browse companies",
          link: "/browse-companies",
        },
        {
          id: "find-freelancers",
          name: "Find freelancers",
          link: "/find-freelancers",
        },
      ],
    },
    {
      id: "pages",
      name: "Pages",
      items: [
        {
          id: "about-us",
          name: "About us",
          link: "/about-us",
        },
        {
          id: "how-it-works",
          name: "How it works",
          link: "/how-it-works",
        },
        {
          id: "pricing",
          name: "Pricing",
          link: "/pricing",
        },
        {
          id: "blog",
          name: "Blog",
          link: "/blog",
        },
      ],
    },

    {
      id: "account",
      name: "Account",
      align: "right",
      items: [
        { id: "signup", name: "Sign Up", link: "/signup" },
        { id: "signin", name: "Sign In", link: "/signin" },
      ],
    },
  ],
};
