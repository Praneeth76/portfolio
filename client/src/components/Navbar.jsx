import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-20">
        {/* Logo or Brand Name */}
        <h1 className="text-xl font-bold">
          <Link to="/" onClick={closeMenu}>
            PRANEETH KANDUKURI
          </Link>
        </h1>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center z-30">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute lg:static lg:flex lg:space-x-6 lg:items-center bg-gray-800 lg:bg-transparent transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "top-16 opacity-100 visible"
              : "-top-full opacity-0 invisible"
          } lg:opacity-100 lg:visible`}
          style={{ zIndex: 20 }} // Increased z-index
        >
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-blue-400 block text-center lg:inline-block py-2 px-4"
                onClick={closeMenu} // Close menu on link click (mobile)
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10" // Lower z-index
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;