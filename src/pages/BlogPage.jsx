// import React from "react";
// import { Search, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { Button } from "antd";

// const posts = [
//   {
//     id: 1,
//     category: "BUSINESS",
//     date: "June 18, 2022",
//     name: "By Nina Brown",
//     title: "Helping Companies in Their Green Transition",
//   },
//   {
//     id: 2,
//     category: "BUSINESS",
//     date: "June 18, 2022",
//     name: "By Nina Brown",
//     title: "There are two thing is very important in Consectetur",
//   },
//   {
//     id: 3,
//     category: "FINANCE",
//     date: "June 18, 2022",
//     name: "By Nina Brown",
//     title: "Ultricies scelerisque mollit enim id est laborum. Duiis",
//   },
//   {
//     id: 4,
//     category: "BUSINESS",
//     date: "June 18, 2022",
//     name: "By Nina Brown",
//     title: "There are two thing is very important in Consectetur",
//   },
//   {
//     id: 5,
//     category: "BUSINESS",
//     date: "June 18, 2022",
//     name: "By Nina Brown",
//     title: "Deserunt mollit anim id est laborum. Duiis aute iruret",
//   },
//   {
//     id: 6,
//     category: "FINANCE",
//     date: "June 18, 2022",
//     name: "By Nina Brown",
//     title: "Helping Companies in Their Green Transition",
//   },
// ];

// const BlogPage = () => {
//   return (
//     <div className="bg-[#f5f6f8] py-10">
//       <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
//         {/* LEFT BLOG GRID */}
//         <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white border-b-4 border-t-none border-l-none border-r-none border-b-[#073088] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
//             >
//               {/* Image Placeholder */}
//               <div className="bg-gray-300 h-[200px] flex items-center justify-center text-gray-500 text-xl rounded-xl relative">
//                 406 x 305
//               </div>
//               <Button
//                 type="primary"
//                 className="absolute -top-[5%] -right-[10%] text-white text-xs font-semibold px-3 py-1 rounded-xl"
//               >
//                 {post.category}
//               </Button>
//               {/* Content */}
//               <div className="p-5">
//                 <p className="mt-3 font-normal text-gray-800 text-[18px] leading-snug">
//                   {post.date} | {post.name}
//                 </p>
//                 <h3 className="mt-3 font-semibold text-gray-800 text-lg leading-snug hover:text-blue-600 cursor-pointer">
//                   {post.title}
//                 </h3>

//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="space-y-8">
//           {/* Search */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h4 className="font-semibold mb-4">Search</h4>
//             <div className="flex">
//               <input
//                 type="text"
//                 placeholder="enter your text"
//                 className="w-full border rounded-l-lg px-3 py-2 focus:outline-none"
//               />
//               <button className="bg-yellow-400 px-4 rounded-r-lg flex items-center justify-center">
//                 <Search size={18} className="text-white" />
//               </button>
//             </div>
//           </div>

//           {/* Follow Us */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h4 className="font-semibold mb-4">Follow Us</h4>
//             <div className="flex gap-3">
//               <div className="bg-blue-600 p-2 rounded-full text-white">
//                 <Facebook size={16} />
//               </div>
//               <div className="bg-sky-400 p-2 rounded-full text-white">
//                 <Twitter size={16} />
//               </div>
//               <div className="bg-pink-500 p-2 rounded-full text-white">
//                 <Instagram size={16} />
//               </div>
//               <div className="bg-blue-700 p-2 rounded-full text-white">
//                 <Linkedin size={16} />
//               </div>
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h4 className="font-semibold mb-4">Categories</h4>
//             <ul className="space-y-2 text-gray-600 text-sm">
//               <li className="flex justify-between border-b pb-2">
//                 <span>Accounting</span>
//                 <span>(04)</span>
//               </li>
//               <li className="flex justify-between border-b pb-2">
//                 <span>Business</span>
//                 <span>(05)</span>
//               </li>
//               <li className="flex justify-between border-b pb-2">
//                 <span>Design</span>
//                 <span>(02)</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Gallery</span>
//                 <span>(08)</span>
//               </li>
//             </ul>
//           </div>

//           {/* Recent Posts */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h4 className="font-semibold mb-4">Recent Posts</h4>
//             <div className="space-y-4">
//               {posts.slice(0, 3).map((post) => (
//                 <div key={post.id} className="flex gap-3">
//                   <div className="bg-gray-300 w-16 h-14 flex items-center justify-center text-xs text-gray-500">
//                     80x80
//                   </div>
//                   <p className="text-sm text-gray-700 leading-snug">
//                     {post.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h4 className="font-semibold mb-4">Tags</h4>
//             <div className="flex flex-wrap gap-2">
//               {["Audit", "Business", "Consulting", "Taxation", "Finance"].map(
//                 (tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm bg-gray-100 rounded-md text-gray-600"
//                   >
//                     {tag}
//                   </span>
//                 ),
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

import React from "react";
import { Search, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "antd";
import { Link } from "react-router-dom";

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

const BlogPage = () => {
  return (
    <>
      <div className="page-content">
        <div className="aon-page-benner-area">
          <div
            className="aon-page-banner-row"
            style={{ backgroundImage: "url(/images/banner/job-banner.jpg)" }}
          >
            <div
              className="sf-overlay-main"
              style={{ opacity: "0.8", backgroundColor: "#022279" }}
            ></div>
            <div className="sf-banner-heading-wrap">
              <div className="sf-banner-heading-area">
                <div className="sf-banner-heading-large">Pricing</div>
                <div className="sf-banner-breadcrumbs-nav">
                  <ul className="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>/</li>

                    <li>Pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 aon-why-choose2-area grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            {/* Blog Grid */}
            <div className=" grid sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border-b-4 border-t-none border-l-none border-r-none border-b-[#073088] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  {/* Image Placeholder */}
                  <div className="bg-gray-300 h-[200px] flex items-center justify-center text-gray-500 text-xl rounded-xl relative">
                    406 x 305
                  </div>
                  <Button
                    type="primary"
                    className="absolute -top-[5%] -right-[10%] text-white text-xs font-semibold px-3 py-1 rounded-xl"
                  >
                    {post.category}
                  </Button>
                  {/* Content */}
                  <div className="p-5">
                    <p className="mt-3 font-normal text-gray-800 text-[18px] leading-snug">
                      {post.date} | {post.name}
                    </p>
                    <h3 className="mt-3 font-semibold text-gray-800 text-lg leading-snug hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Pagination (Blog Card er Niche) */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
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
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Search</h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="enter your text"
                  className="w-full border rounded-l-lg px-3 py-2 focus:outline-none"
                />
                <button className="bg-yellow-400 px-4 rounded-r-lg flex items-center justify-center">
                  <Search size={18} className="text-white" />
                </button>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
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
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Categories</h4>
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
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Recent Posts</h4>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="bg-gray-300 w-16 h-14 flex items-center justify-center text-xs text-gray-500">
                      80x80
                    </div>
                    <p className="text-sm text-gray-700 leading-snug">
                      {post.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {["Audit", "Business", "Consulting", "Taxation", "Finance"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-md text-gray-600"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
