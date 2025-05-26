import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { GoDash } from "react-icons/go";

const navItems = [
  {
    name: "Home",
    subItems: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5"],
  },
  {
    name: "Page",
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
    name: "Portfolio",
    subItems: ["Portfolios", "Portfolio details"],
  },
  {
    name: "Blog",
    subItems: ["Blog", "Blog grid", "Blog width sidebar", "Blog details"],
  },
  { name: "Contact", subItems: [] },
];

export default function NavbarItems() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState("Home 1");

  return (
    <nav className="relative shadow-md px-6 py-4 hidden lg:block">
      <ul className="flex text-tertiary space-x-6">
        {navItems.map((item) => (
          <li
            key={item.name}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative group"
          >
            {/* clickable link */}
            <a
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-1 font-semibold hover:text-secondary"
            >
              {item.name}
              {item.name !== "Contact" && <IoIosArrowDown />}
            </a>

            {/* Progress bar (triggered on hovering the whole group) */}

            {/* Dropdown submenu */}
            <AnimatePresence>
              {hoveredItem === item.name && item.subItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12   left-0 w-56 text-gray-600 bg-white shadow-md rounded-md z-10 group/submenu"
                >
                  <div className="w-full h-0.5 bg-gray-200 rounded overflow-hidden ">
                    <motion.div
                      initial={{ width: "50%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.7 }}
                      className="h-full bg-secondary"
                    />{" "}
                  </div>
                  <ul className="flex flex-col gap-4 px-6 py-4">
                    {item.subItems.map((subItem, idx) => {
                      const isActive = activeSubItem === subItem;
                      return (
                        <li
                          key={idx}
                          onMouseEnter={() => setActiveSubItem(subItem)}
                          className={`flex flex-col cursor-pointer transition delay-75 duration-400 ${
                            isActive ? "text-secondary" : ""
                          }`}
                        >
                          <div className="flex z-80 items-center gap-1">
                            {isActive && (
                              <GoDash className="text-secondary size-6" />
                            )}
                            <span className="text-lg font-semibold">
                              {subItem}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
}
