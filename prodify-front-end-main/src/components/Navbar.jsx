import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#ffff] p-3 border-b-2">
      <div className="flex flex-row ml-5">
        <div>
          <p className="text-3xl">Welcomne Back, Dinda!</p>
        </div>
          <a
            href=""
            className="bg-slate-200 px-2 py-1.5 rounded-md ml-auto"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href=""
            className="bg-slate-200 px-2 py-1.5 rounded-md ml-5"
          >
            <i class="fa-solid fa-bell"></i>
          </a>
          <a
            href=""
            className="bg-slate-200 px-2 py-1.5 rounded-md ml-5"
          >
            <img src="" className="rounded-full w-5 h-5" />
          </a>
          <a
            href=""
            className="bg-[#ffff] px-2 py-1.5 rounded-md ml-2"
          >
            <i class="fa-solid fa-caret-down"></i>
          </a>
      </div>
    </nav>
  );
}

export default Navbar;
