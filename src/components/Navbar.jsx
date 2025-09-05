import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "SEARCH", to: "/" },
    { name: "WEBSITE", href: "https://girmantech.com" },
    { name: "LINKEDIN", href: "https://www.linkedin.com/company/girman-technologies/" },
    { name: "CONTACT", href: "mailto:contact@girmantech.com" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-60 h-[90px]">
        <div className="flex items-center gap-2 ">
          <img
            src="https://media.instahyre.com/CACHE/images/images/profile/base/employer/47511/1337a7f7b9/1715654435372/1578d5ca3987f3e80cae5a6bbbda10ae.webp"
            alt="Logo"
            className="w-14 h-14 md:w-16 md:h-16 rounded"
          />
          <div>
            <h1 className="font-bold text-2xl md:text-3xl ml-2">Girman</h1>
            <p className="text-[10px] ml-2 tracking-[0.4em]">TECHNOLOGIES</p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-base md:text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-0 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }`
            }
          >
            SEARCH
          </NavLink>
          {navItems.slice(1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="pb-0 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>

      
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>


      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-6 top-20 bg-white shadow-md rounded-lg flex flex-col w-40 text-sm font-medium md:hidden"
        >
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
              }`
            }
          >
            SEARCH
          </NavLink>
          {navItems.slice(1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
