import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">
          GrowthPro<span className="text-green-500">AI</span>
        </h1>

        {/* Hamburger Menu Button */}
        <button
          className="sm:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-700 dark:text-gray-300 ${
          menuOpen ? "block" : "hidden sm:flex"
        }`}
      >
        <li>
          <a
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://prasadchodagiri-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="/project-description"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Project Description
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yourusername/growthpro-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
