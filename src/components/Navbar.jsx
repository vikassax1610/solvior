import { useState } from "react";
import NavbarItems from "./NavbarItems";
import { Menu, X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import primaryLogo from "/images/navbar/primary-logo.png"; // Adjust the path as necessary
import AnimatedButton from "./AnimatedButton";
import MobileNavbar from "./MobileNavbar"; // Import the mobile navbar component
const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openSideBar, setOpenSidebar] = useState(false);
  const handleSidebar = () => setOpenSidebar(!openSideBar); // Toggle the sideBar

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const toggleMenu = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <header className="h-20  w-full text-[18px] font-lato border-b border-gray-700 bg-primary">
      <div className="flex lg:hidden items-center justify-between px-2 py-5">
        <img src={primaryLogo} alt="" className=" w-40" />
        <button
          onClick={handleSidebar}
          className="flex text-white items-center gap-1"
        >
          <h1 className="  font-LibreFranklinRegular text-xl font-semibold">
            Menu
          </h1>
          <IoMdMenu className="size-6" />
        </button>
      </div>
      <div className="container mx-auto lg:px-12 px-2 py-5 lg:py-3 flex items-center justify-between">
        {/* Logo */}
        <img src={primaryLogo} alt="" className="hidden lg:block w-40" />
        <NavbarItems />

        <div className="hidden lg:flex  gap-4">
          <button
            onClick={toggleMenu}
            className="text-tertiary font-semibold  tracking-tight flex items-center gap-1 justify-center "
          >
            Explore <BiSearch className="w-6 h-6" />
          </button>

          <AnimatedButton text="Get in touch" width="110" />
        </div>
        {/* Mobile Toggle */}
      </div>

      {/* Mobile Nav */}

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="absolute z-60 top-0 bg-primary w-full h-72 px-12"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between  pb-4">
              <h1 className="text-white font-LibreFranklinRegular text-3xl font-semibold py-8">
                Search blog, projects, service or people.
              </h1>
              <RxCross1
                onClick={toggleMenu}
                className="text-white text-3xl hover:rotate-90 duration-700"
              />
            </div>
            <div className="w-full text-white border border-gray-700 flex  focus-within:outline-2 focus-within:outline-secondary">
              <input
                type="text"
                className="w-[96%] px-4 py-4 border-r border-gray-700 focus:none"
              />
              <BiSearch className="size-12 pt-2 px-2 w-[4%] " />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {openSideBar && (
        <div className="md:hidden absolute top-20 left-25 w-full bg-primary z-90">
          <MobileNavbar
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            toggleDropdown={toggleDropdown}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
