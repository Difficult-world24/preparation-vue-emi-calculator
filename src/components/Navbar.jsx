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
    </header>
  );
};

export default Navbar;
