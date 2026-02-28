import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const posts = [
  {
    id: 1,
    category: "LOGISTICS",
    date: "June 18, 2022",
    name: "By Nina Brown",
    title: "Helping Companies in Their Green Transition",
  },
  {
    id: 2,
    category: "BUSINESS",
    date: "June 18, 2022",
    name: "By Nina Brown",
    title: "There are two thing is very important in Consectetur",
  },
  {
    id: 3,
    category: "FINANCE",
    date: "June 18, 2022",
    name: "By Nina Brown",
    title: "Ultricies scelerisque mollit enim id est laborum. Duiis",
  },
  {
    id: 4,
    category: "BUSINESS",
    date: "June 18, 2022",
    name: "By Nina Brown",
    title: "There are two thing is very important in Consectetur",
  },
  {
    id: 5,
    category: "BUSINESS",
    date: "June 18, 2022",
    name: "By Nina Brown",
    title: "Deserunt mollit anim id est laborum. Duiis aute iruret",
  },
  {
    id: 6,
    category: "TRAVELING",
    date: "June 18, 2022",
    name: "By Nina Brown",
    title: "Helping Companies in Their Green Transition",
  },
];
const AllBlogs = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
        <div className="aon-why-choose2-area grid grid-cols-12 gap-6 lg:gap-8 py-6 sm:py-10">
          {/* LEFT SIDE */}
          <div className="col-span-12 lg:col-span-8">
            {/* Cards section with x-axis padding */}
            <div className="px-0 sm:px-2 lg:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer border-b-4 border-b-[#073088]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigate(`/blog/${post.id}`);
                      }
                    }}
                  >
                    {/* Image */}
                    <div className="bg-gray-200 h-[190px] sm:h-[200px] md:h-[220px] flex items-center justify-center text-gray-500 text-xl rounded-xl m-3">
                      406 x 305
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <Button
                        type="primary"
                        className="!rounded-lg !text-xs !font-semibold"
                      >
                        {post.category}
                      </Button>
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-5 pt-1">
                      <p className="mt-2 text-gray-700 text-sm sm:text-[15px] leading-snug">
                        {post.date} | {post.name}
                      </p>
                      <h3 className="mt-3 font-semibold text-gray-900 text-base sm:text-lg leading-snug group-hover:text-blue-600">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 sm:mt-12">
              <div className="flex items-center gap-2 flex-wrap">
                <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">
                  {"<"}
                </button>

                <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                  1
                </button>

                <button className="px-3 py-2 border rounded-md bg-primary text-white">
                  2
                </button>

                <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                  3
                </button>

                <button className="px-3 py-2 border rounded-md">...</button>

                <button className="px-3 py-2 border rounded-md hover:bg-gray-100">
                  11
                </button>

                <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">
                  {">"}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-6">
              {/* Search */}
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-6 bg-[#6AB33E]" />
                  <h4 className="font-semibold">Search</h4>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="enter your text"
                    className="w-full border rounded-l-lg px-3 py-2 focus:outline-none"
                  />
                  <button className="bg-[#6AB33E] px-4 rounded-r-lg flex items-center justify-center">
                    <Search size={18} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Follow Us */}
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-6 bg-[#6AB33E]" />
                  <h4 className="font-semibold">Follow Us</h4>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <div className="bg-blue-600 p-2 rounded-full text-white">
                    <Facebook size={16} />
                  </div>
                  <div className="bg-sky-400 p-2 rounded-full text-white">
                    <Twitter size={16} />
                  </div>
                  <div className="bg-pink-500 p-2 rounded-full text-white">
                    <Instagram size={16} />
                  </div>
                  <div className="bg-blue-700 p-2 rounded-full text-white">
                    <Linkedin size={16} />
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-6 bg-[#6AB33E]" />
                  <h4 className="font-semibold">Categories</h4>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex justify-between border-b pb-2">
                    <span>Accounting</span>
                    <span>(04)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Business</span>
                    <span>(05)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Design</span>
                    <span>(02)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gallery</span>
                    <span>(08)</span>
                  </li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-6 bg-[#6AB33E]" />
                  <h4 className="font-semibold">Recent Posts</h4>
                </div>

                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="bg-gray-200 w-16 h-14 flex items-center justify-center text-xs text-gray-500 rounded-md shrink-0">
                        80x80
                      </div>
                      <p className="text-sm text-gray-700 leading-snug line-clamp-3">
                        {post.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-6 bg-[#6AB33E]" />
                  <h4 className="font-semibold">Tags</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Audit",
                    "Business",
                    "Consulting",
                    "Taxation",
                    "Finance",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-md text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
