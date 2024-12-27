// app/components/Sidebar.tsx
'use client';
import { useState } from "react";
import { FaHome, FaUser, FaBook, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/landing" },
    { name: "Users", icon: <FaUser />, link: "/users" },
    { name: "Posts", icon: <FaBook />, link: "/posts" },
    { name: "Customer Support", icon: <FaHeadset />, link: "/customersupport" },
    { name: "Log Out", icon: <FaSignOutAlt />, link: "/" },
  ];

  return (
    <div
      className={`h-screen flex flex-col bg-black text-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      {/* Header Section */}
      <div className={`flex ${isCollapsed ? "flex-col" : "flex-row"} items-center justify-between py-4 px-2`}>
        {/* Logo */}
        <div className={`flex items-center justify-center ${isCollapsed ? "" : "ml-2"}`}>
          <Image
            src={isCollapsed ? "/images/logo_s.png" : "/images/logo.png"}
            alt="Logo"
            width={isCollapsed ? 40 : 120}
            height={isCollapsed ? 40 : 80}
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`text-white hover:bg-white hover:text-black p-2 rounded-md ${
            isCollapsed ? "mt-4" : "ml-auto"
          }`}
        >
          {isCollapsed ? ">" : "<"}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-6 flex flex-col">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="flex items-center p-2 my-2 mx-2 hover:bg-white hover:text-black rounded-md transition-colors duration-300"
          >
            <span className="text-xl mr-3">{item.icon}</span>
            {!isCollapsed && <span className="text-sm">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
