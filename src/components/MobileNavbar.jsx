import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    subItems: [
      "Home 01",
      "Home 02",
      "Home 03",
      "Home 04",
      "Home 05",
      "Home 06",
    ],
  },
  {
    name: "Pages",
    subItems: [
      "About",
      "History",
      "Careers",
      "Career details",
      "Team",
      "Team details",
      "Faq",
      "Price plan",
    ],
  },
  {
    name: "Services",
    subItems: ["Services", "Service details"],
  },
  {
    name: "Portfolios",
    subItems: ["Portfolios", "Portfolio details"],
  },
  {
    name: "Blog",
    subItems: ["Blog", "Blog grid", "Blog with sidebar", "Blog details"],
  },
  { name: "Contact", subItems: [] },
];

export default function MobileNavbar({
  openIndex,
  setOpenIndex,
  toggleDropdown,
}) {
  return (
    <div className="w-72 bg-[#071c3f] text-white min-h-screen p-4">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search here"
          className="w-full p-2 pr-10 bg-[#142850] text-white rounded outline-none"
        />
        <FaSearch className="absolute right-3 top-2.5 text-white" />
      </div>

      {/* Navigation Items */}
      {navItems.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            onClick={() => toggleDropdown(index)}
            className="flex justify-between items-center cursor-pointer py-2 hover:text-blue-400 transition"
          >
            <span className="font-semibold text-2xl">{item.name}</span>
            {item.subItems.length > 0 &&
              (openIndex === index ? <FaChevronUp /> : <FaChevronDown />)}
          </div>

          {openIndex === index && item.subItems.length > 0 && (
            <div className="text-xl text-gray-300  border-gray-600 ">
              {item.subItems.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="py-1 hover:text-white transition"
                >
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="px-4">
        <h1 className="border-b pb-2 font-bold text-3xl border-gray-500">
          Contact Info
        </h1>
        <div className="text-xl">
          <div className="flex flex-col gap-1 my-2">
            <h1 className="text-gray-700">Phone</h1>
            <p className="">(+012) 3456 7890</p>
          </div>
          <div className="flex flex-col gap-1 my-2">
            <h1 className="text-gray-700">Email</h1>
            <p className="">support@solvior.com</p>
          </div>
          <div className="flex flex-col gap-1 my-2">
            <h1 className="text-gray-700">Location</h1>
            <p className="">8821 Street Mosco, Russia</p>
          </div>
        </div>
      </div>
      <div className="px-4 pt-8">
        <h1 className="border-b pb-2 font-bold text-3xl border-gray-500">
          Follow us
        </h1>
        <div className="text-3xl flex items-center pt-4 ">
          <FaFacebook className="hover:text-secondary transition duration-300 ease-in-out" />
          <FaInstagram className="mx-2 hover:text-secondary transition duration-300 ease-in-out" />
          <FaXTwitter className="mx-2 hover:text-secondary transition duration-300 ease-in-out" />
          <FaLinkedinIn className="mx-2 hover:text-secondary transition duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}
