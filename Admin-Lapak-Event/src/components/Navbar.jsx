import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#966efa] p-2">
      <div className="flex flex-end justify-end">
        <a href="/" className="bg-red-500 px-4 py-2.5 rounded-md text-white">
          Logout <i className="fa-solid fa-right-from-bracket"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
