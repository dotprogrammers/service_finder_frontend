import React from "react";
import {
  Heart,
  Check,
  Grid2X2,
  List,
  SearchIcon,
  MapPin,
  LayoutGrid,
  Globe,
  Building,
  WholeWord,
  Earth,
  Star,
  Building2,
  CheckCircle,
} from "lucide-react";
import { Button } from "antd";

const BrowsCompanies = () => {
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
    {
      id: 3,
      name: "Test Freelancer",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Test Company",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Test Company Without cvr",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Test Company Without cvr",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Test Company Without CVR",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Testing",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Handsf",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "Test Freelancer/Handyman",
      city: "København NV",
      desc: "Professional Service Provider",
    },
    {
      id: 3,
      name: "dfsgfdsg",
      city: "København NV",
      desc: "Professional Service Provider",
    },
  ];

  return (
    <div className=" w-full ">
      <div className=" md:flex gap-6 ">
        {/* ================= LEFT SIDEBAR ================= */}
        <div
          className="w-full md:max-w-[300px]  bg-[#f8f9fa] px-5 pt-5 pb-8
             h-screen
             overflow-x-auto
             overflow-y-auto
             md:sticky md:top-0 border-slate-800/[.08] border-r"
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
              placeholder="Company name..."
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
              placeholder="City or adress"
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
          {/* size */}
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <Building className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none ">
                Company Size
              </label>
            </div>
            <select className="w-full mt-2 bg-white border rounded-lg px-3 py-2">
              <option>Any Size</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <Building className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none ">
                Years In Bussiness
              </label>
            </div>
            <select className="w-full mt-2 bg-white border rounded-lg px-3 py-2">
              <option>Any</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="flex  gap-1 items-start">
              <Building className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none ">
                Minimum Rating
              </label>
            </div>
            <select className="w-full mt-2 bg-white border rounded-lg px-3 py-2">
              <option>Any Rating</option>
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

          <div className="flex  items-center justify-center gap-2 bg-[#6AB33E]  mt-4 py-2 w-full rounded-lg">
            <SearchIcon className="text-white" size={16} />
            <button className=" text-white  font-medium gap-2">
              Search Companies
            </button>
          </div>
          <hr />
          <div className=" w-[320px]">
            <h2 className="text-blue-700 font-semibold text-lg mb-4">
              Statistics
            </h2>

            <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
              {/* Total Companies */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Building2 className="text-blue-600" size={18} />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">7</span>
                </div>
                <span className="text-gray-500 text-sm">Total Companies</span>
              </div>

              <hr />

              {/* Verified */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-xl font-semibold text-gray-800">2</span>
                </div>
                <span className="text-gray-500 text-sm">Verified</span>
              </div>

              <hr />

              {/* Featured */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <span className="text-xl font-semibold text-gray-800">2</span>
                </div>
                <span className="text-gray-500 text-sm">Featured</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="md:pr-5 ">
          {/* TOP BAR */}
          <div className="md:flex items-center justify-between mt-[45px] mb-2 ">
            <p className="text-sm text-gray-600 text-center">
              Showing 1 – 7 of 7 companies
            </p>

            <div className="flex-col flex md:flex-row text-center max-w-[150px] md:max-w-full mx-auto items-center gap-3">
              <div className="border px-4 py-2 rounded-lg text-sm">
                Most Popular
              </div>
              <div className="border px-4 py-2 rounded-lg text-sm">DESC</div>
              <div className="border px-4 py-2 rounded-lg text-sm">12</div>

              <div className="my-4 md:my-0">
                <button className=" p-2 border rounded-lg hover:!bg-blue-700  hover:!text-white">
                  <Grid2X2 size={18} className="" />{" "}
                </button>
                <button className=" p-2 border rounded-lg hover:!bg-blue-700 hover:!text-white">
                  <List size={18} className="" />
                </button>
              </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 pb-8">
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
                <Button
                  type="primary"
                  className=" text-white px-5 mt-4 py-2 w-full rounded-lg font-medium"
                >
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsCompanies;
