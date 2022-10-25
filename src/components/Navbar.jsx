import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-20 border flex items-center justify-between p-2 px-5 bg-slate-100">
      <a
        href="/"
        className="font-semibold cursor-pointer tracking-wide text-xl text-gray-700"
      >
        EMI Calculator
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </header>
  );
};

export default Navbar;
