import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/" },
    { name: "Contact Me", link: "/" },
    { name: "Login", link: "/" },
    { name: "Get Start", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex md:items-center md:justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer text-gray-600 font-bold text-2xl flex items-center :border-2 border-gray-600">
          <span className="text-3xl text-indigo-600 mt-1 pr-2 ">
            <Icon icon="ant-design:ant-design-outlined" />
          </span>
          Navbar
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-indigo-600 duration-500 cursor-pointer md:hidden right-8 top-6 text-3xl absolute"
        >
          <span>
            <Icon
              icon={open ? "ant-design:menu-outlined" : "ep:circle-close"}
            />
          </span>
        </div>
        <ul
          className={` md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-2 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          } `}
        >
          {links.map((link, index) => (
            <li
              className="hover:bg-white bg-indigo-400 py-1 px-2 md:rounded-md rounded-sm text-white font-bold md:ml-7 text-xl md:my-0 my-2 hover:text-indigo-600 duration-700 border  border-indigo-600 "
              key={index}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
