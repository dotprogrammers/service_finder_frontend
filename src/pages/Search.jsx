import React from "react";
import {
  Heart,
  Check,
  Grid2X2,
  List,
  SearchAlert,
  SearchIcon,
  Loader2Icon,
  LocateIcon,
  LocationEditIcon,
  MapPin,
  LayoutGrid,
  Globe,
  Building,
  WholeWord,
  Earth,
  Star,
} from "lucide-react";
import { Button } from "antd";

const Search = () => {
  const listings = [
    {
      id: 1,
      name: "Nielsen El-Service A/S",
      city: "Aarhus",
      desc: "Autoriseret elinstallatør med over 20 års erfaring.",
    },
    {
      id: 2,
      name: "Grøn Have Service",
      city: "Odense",
      desc: "Professionel haveservice. Vi klarer alt fra plæneklipning...",
    },
    {
      id: 3,
      name: "Test Handyman",
      city: "København NV",
      desc: "Test handyman",
    },
  ];

  return (
    <div className=" w-full ">
      <div className=" flex gap-6 ">
        {/* ================= LEFT SIDEBAR ================= */}
        <div
          className="max-w-[300px] bg-[#f8f9fa] p-5
             h-screen
             overflow-x-auto
             overflow-y-auto
             sticky top-0 border-slate-800/[.08] border-r"
        >
          <h2 className="!text-sm font-semibold text-slate-800 mb-3">
            Search Filters
          </h2>

          {/* Keyword */}
          <div className="mb-4">
            <div className="flex gap-1  items-start ">
              <SearchIcon className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none">
                Keyword
              </label>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="w-full mt-2 border bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-slate-800"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <MapPin className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none">
                Location
              </label>
            </div>

            <input
              type="text"
              placeholder="Adress..."
              className="w-full mt-2 border bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-slate-800"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <LayoutGrid className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none ">
                Category
              </label>
            </div>
            <select className="w-full mt-2 border rounded-lg px-3 py-2">
              <option>All Categories</option>
            </select>
          </div>

          {/* Country */}
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <Earth className="text-slate-800" size={16} />
              <label className="text-sm  text-slate-800 font-medium leading-none ">
                Country
              </label>
            </div>
            <select className="w-full bg-white mt-2 border rounded-lg px-3 py-2">
              <option>Denmark</option>
            </select>
          </div>
          {/* City */}
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <Building className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none ">
                City
              </label>
            </div>
            <select className="w-full mt-2 bg-white border rounded-lg px-3 py-2">
              <option>All Cities</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-sm  text-slate-800 font-medium leading-none mb-3">
              Filters
            </label>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="Verified"
                className="w-4 h-4 text-blue-600 bg-white border border-gray-300 rounded focus:ring-slate-800"
              />
              <label htmlFor="norway" className="ml-2 text-sm text-slate-800">
                Verified Only
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="Featured"
                className="w-4 h-4 text-blue-600 bg-white border border-gray-300 rounded focus:ring-slate-800"
              />
              <label htmlFor="norway" className="ml-2 text-sm text-slate-800">
                Featured Only
              </label>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="pr-5 ">
          {/* TOP BAR */}
          <div className="flex items-center justify-between mt-[45px] mb-2 ">
            <p className="text-sm text-gray-600">
              Showing 1 – 12 of 12 results
            </p>

            <div className="flex items-center gap-3">
              <button className="border px-4 py-2 rounded-lg text-sm">
                SORT BY
              </button>
              <button className="border px-4 py-2 rounded-lg text-sm">
                DESC
              </button>
              <button className="border px-4 py-2 rounded-lg text-sm">
                12
              </button>

              <button className="flex gap-2 p-2 border rounded-lg hover:!bg-blue-700  hover:!text-white">
                <Grid2X2 size={18} className="" />{" "}
              </button>
              <button className="flex gap-2 p-2 border rounded-lg hover:!bg-blue-700 hover:!text-white">
                <List size={18} className="" />
              </button>

              {/* <button className="p-2 border rounded-lg">
                <List size={18} />
              </button> */}

              <Button
                type="primary"
                className=" text-white px-5 py-2 rounded-lg font-medium"
              >
                View Map
              </Button>
            </div>
          </div>
          <hr />
          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
            {listings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-md transition relative"
              >
                {/* Verified Badge */}
                <div className="absolute top-4 left-4 bg-[#6AB33E] w-9 h-9 rounded-full flex items-center justify-center shadow">
                  <Check size={18} className="text-white" />
                </div>

                {/* Wishlist */}
                <div
                  className="absolute top-4 right-4 group bg-white hover:!text-white hover:!bg-blue-700 w-9 h-9 rounded-full flex items-center justify-center
                 shadow cursor-pointer"
                >
                  <Heart size={18} className="text-!bg-blue-700  " />
                </div>

                {/* Title */}
                <h3 className="!text-[20px] font-semibold text-center mt-10">
                  {item.name}
                </h3>
                <p className="text-center text-sm text-gray-500">{item.city}</p>

                {/* Image Placeholder */}
                <div className="bg-gray-200 h-[200px] rounded-xl mt-5 flex items-center justify-center text-gray-400 text-lg">
                  600 x 446
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-4">{item.desc}</p>

                {/* Rating (example) */}
                <div className="flex items-center gap-1 mt-4 text-yellow-400 text-sm">
                  <span className="">
                    <Star className="text-yellow-400 text-xs" />
                  </span>
                  <span className=" text-xs">
                    <Star className="text-yellow-400 text-xs" />
                  </span>
                  <span className=" text-xs">
                    <Star className="text-yellow-400 text-xs" />
                  </span>
                  <span className=" text-xs">
                    <Star className="text-yellow-400 text-xs" />
                  </span>
                  <span className=" text-xs">
                    <Star className="text-gray-500 text-xs" />
                  </span>
                  <span className="text-gray-500 text-xs">(0)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
