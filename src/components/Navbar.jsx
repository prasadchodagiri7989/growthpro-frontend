import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Brand */}
        <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">
          GrowthPro<span className="text-green-500">AI</span>
        </h1>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          ☰
        </button>

        {/* Nav Items */}
        <ul
          className={`${isOpen ? "block" : "hidden"
            } w-full space-y-3 sm:space-y-0 sm:flex sm:items-center sm:w-auto sm:space-x-6 text-sm text-gray-700 dark:text-gray-300 mt-4 sm:mt-0`}
        >
          <li>
            <a
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://prasadchodagiri-portfolio.vercel.app/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition block"
              target="_blank"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="/project-description"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition block"
            >
              Project Description
            </a>
          </li>
          <li>
            <a
              href="https://github.com/prasadchodagiri7989/growthpro-assignment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition block"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
