import React, { useMemo, useState } from "react";
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
  Eye,
} from "lucide-react";
import { Button } from "antd";

const FindFreelancers = () => {
  const [sortBy, setSortBy] = useState("popular");
  //   const [order, setOrder] = useState("desc");
  const [perPage, setPerPage] = useState(12);
  const freelancers = [
    {
      id: 1,
      name: "testing",
      location: "sdfdsf",
      rating: 4.5,
      createdAt: "2024-01-10",
    },
    {
      id: 2,
      name: "Test freelancer",
      location: "København NV",
      rating: 5,
      createdAt: "2024-03-05",
    },
  ];
  const sortedFreelancers = useMemo(() => {
    let sorted = [...freelancers];

    switch (sortBy) {
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "recent":
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    // if (order === "asc") {
    //   sorted.reverse();
    // }

    return sorted.slice(0, perPage);
  }, [freelancers, sortBy, perPage]);

  return (
    <div className=" w-full  ">
      <div className="bg-[#f8f9fa] py-6 px-6 mb-6 ">
        <h2 className="text-4xl font-bold aon-title  ">Browse Freelancers</h2>
      </div>
      <div className=" grid  grid-cols-12 gap-6 m-6">
        {/* ================= LEFT SIDEBAR ================= */}

        <div
          className="col-span-12 lg:col-span-3  w-full     
             h-screen
               overflow-x-auto
             overflow-y-auto
             lg:sticky lg:top-0
              shadow-2xl rounded"
        >
          <h2 className="!text-sm font-semibold w-full px-3 p-4 bg-[#6AB33E] mb-3 text-white rounded-xl rounded-b-none">
            Search Freelancers
          </h2>

          {/* Keyword */}
          <div className=" px-3 py-2">
            <div className="flex gap-1  items-start ">
              <SearchIcon className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none">
                Keyword
              </label>
            </div>

            <input
              type="text"
              placeholder="Name or skills..."
              className="w-full mt-2 border bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-slate-800"
            />
          </div>

          {/* Category */}
          <div className="px-3 py-2">
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

          {/* Location */}
          <div className="px-3 py-2">
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

          {/* Country */}
          <div className="px-3 py-2">
            <div className="flex  gap-1 items-start">
              <Star className="text-slate-800" size={16} />
              <label className="text-sm  text-slate-800 font-medium leading-none ">
                Experience Level
              </label>
            </div>
            <select className="w-full bg-white mt-2 border rounded-lg px-3 py-2">
              <option>Any level</option>
            </select>
          </div>
          {/* City */}
          <div className="px-3 py-2">
            <div className="flex  gap-1 items-start">
              <Building className="text-slate-800" size={16} />
              <label className="text-sm text-slate-800 font-medium leading-none ">
                Hourly Rate
              </label>
            </div>
            <select className="w-full mt-2 bg-white border rounded-lg px-3 py-2">
              <option>Any Rate</option>
            </select>
          </div>

          <div className="px-3 py-2">
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
          </div>

          <div className="flex  items-center justify-center gap-2 bg-[#667eea] mt-4 py-2 w-full rounded-lg">
            <SearchIcon className="text-white" size={16} />
            {/* <button className=" text-white  font-medium gap-2">
              Search Freelancers
            </button> */}
            <Button
              type="primary"
              className=" text-white px-5 py-2 rounded-lg font-medium"
            >
              View Map
            </Button>
          </div>
          <hr />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className=" col-span-12  lg:col-span-9">
          {/* TOP BAR */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mt-[45px] mb-2  ">
            <p className="text-sm text-gray-600 flex justify-center lg:justify-start">
              Showing 1 – 7 of 7 companies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 text-center items-center gap-3">
              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border px-4 py-2 rounded-lg text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name (A-Z)</option>
                <option value="recent">Recently Joined</option>
              </select>

              {/* Order */}
              {/* <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="border px-4 py-2 rounded-lg text-sm"
              >
                <option value="desc">DESC</option>
                <option value="asc">ASC</option>
              </select> */}

              {/* Per Page */}
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="border px-4 py-2 rounded-lg text-sm"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>

              <div className="my-4 lg:my-0 flex">
                <Button
                  type="primary"
                  className=" p-2 border rounded-lg hover:!bg-primary/[.01]  hover:!text-white"
                >
                  <Grid2X2 size={18} className="" />{" "}
                </Button>
                <Button
                  type="primary"
                  className=" p-2 border rounded-lg hover:!bg-primary/[.01]  hover:!text-white"
                >
                  <List size={18} className="" />
                </Button>
              </div>
            </div>
          </div>
          <hr />
          {/* CARDS GRID */}
          <div className="grid grid-cols-1  gap-4 mt-4 pb-8">
            {sortedFreelancers.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-lg transition relative"
              >
                {/* Left Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="flex items-center gap-5">
                    {/* Avatar */}
                    <div className="sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
                      </svg>
                    </div>

                    {/* Info */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h2>

                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        {item.location}
                      </div>

                      <p className="text-gray-600 text-sm mt-2">
                        Experienced freelance professional ready to help with
                        your project.
                      </p>

                      <p className="text-gray-400 text-sm mt-2">
                        No reviews yet
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 ">
                    <button className="flex items-center justify-center gap-2 px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 transition ">
                      <Heart size={16} />
                      Save
                    </button>

                    <Button
                      type="primary"
                      className="flex items-center justify-center gap-2 px-6 py-2 bg-[#667eea] text-white rounded-lg hover:bg-[#667eea] transition"
                    >
                      <Eye size={16} />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFreelancers;
