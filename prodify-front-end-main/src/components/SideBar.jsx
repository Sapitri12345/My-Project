import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-sidebar-icon.svg";
import dropdownIcon from "../assets/arrow-down.svg";
import masterdata from "../assets/masterdata.svg";
// import gambar from "../img/gambar.png";

const SideBar = () => {
  const location = useLocation();

  const isLinkActive = (pathname) => {
    return location.pathname === pathname
      ? "bg-[#3572EF] text-[#ffff]"
      : "bg-white-500 text-black-500";
  };


  return (
    <div className="w-[280px] bg-[#ffff] pb-10 md:pb-0 md:grid border-r-2">
      <div id="sidebar-wrapper" className="h-screen text-black">
        <div title="profile" className="flex flex-row items-center ml-4 mt-2 mb-2">
          <div className="flex flex-row items-center px-6 py-3 bg-white-500 border-2 text-black-200 rounded-lg">
            <img src="/img/gambar.png" className="rounded-full w-5 h-5" />
            <p className="ml-2">Dinda Marli</p>
            <i class="fa-solid fa-ellipsis-vertical ml-5"></i>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <ul className="flex flex-col items-start justify-center gap-[10px]">
            <li>
              <div
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 text-slate-500 `}
              >
                Menu
              </div>
            </li>
            <li>
              <Link
                to="/admin/dashboard"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-[#3572EF] hover:text-[#ffff] ${isLinkActive(
                  "/admin/dashboard"
                )}`}
              >
                <i className="fa-solid fa-home"></i>
                {/* <i className="fa-solid fa-hand-holding-dollar"></i> */}
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/tasks"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-[#3572EF] hover:text-[#ffff] text-black-200 ${isLinkActive(
                  "/admin/tasks"
                )}`}
              >
                {/* <i className="fa-solid fa-file"></i> */}
                <i class="fa-solid fa-file"></i>
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/admin/timeline"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-[#3572EF] hover:text-[#ffff] text-black-200 ${isLinkActive(
                  "/admin/timeline"
                )}`}
              >
                {/* <i className="fa-solid fa-file"></i> */}
                <i class="fa-solid fa-calendar-days"></i>
                Weekly Plan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/massage"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-[#3572EF] hover:text-[#ffff] text-black-200 ${isLinkActive(
                  "/admin/massage"
                )}`}
              >
                {/* <i className="fa-solid fa-bell"></i> */}
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
                Massage
              </Link>
            </li>
            <li>
              <Link
                to="/admin/pomodoro"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-[#3572EF] hover:text-[#ffff] text-black-200 ${isLinkActive(
                  "/admin/pomodoro"
                )}`}
              >
                {/* <i className="fa-solid fa-bell"></i> */}
                <i class="fa-solid fa-clock"></i>
                Pomodoro
              </Link>
            </li>
            <hr className="w-full border-t-2 border-gray-300" />
            <li>
              <div
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 fon text-slate-500`}
              >
                {/* <i class="fa-solid fa-circle"></i> */}
                Projects
               <a href="" className="hover:bg-white hover:text-[#3572EF]"><i class="fa-solid fa-plus"></i></a> 
              </div>
            </li>
            <li className="mb-72">
              <Link
              to="/admin/financy"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 text-black-200 ${isLinkActive(
                  "/admin/financy"
                )}`} 
              >
                {/* <i class="fa-solid fa-circle"></i> */}
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                Financy
              </Link>
            </li>
            <li>
              <Link
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start hover:bg-white hover:text-red-500 rounded-full gap-2 text-black-200 `}
              >
                <i class="fa-solid fa-trash"></i>
                Trash
              </Link>
            </li>
            <li>
              <Link
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start hover:bg-white hover:text-[#3572EF] rounded-full gap-2 text-black-200 `}
              >
                <i class="fa-solid fa-gear"></i>
                Settings
              </Link>
            </li>
            <li>
              <Link
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start hover:bg-white hover:text-[#3572EF] rounded-full gap-2 text-black-200 `}
              >
                <i class="fa-solid fa-user-plus"></i>
                Invite Team
              </Link>
            </li>
            <li>
              <Link
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start hover:bg-white hover:text-[#3572EF] rounded-full gap-2 text-black-200 `}
              >
                <i class="fa-solid fa-comment"></i>
                Feedback
              </Link>
            </li>
            <li>
              <Link
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start hover:bg-white hover:text-[#3572EF] rounded-full gap-2 text-black-200 `}
              >
                <i class="fa-solid fa-circle-question"></i>
                Help Center
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
