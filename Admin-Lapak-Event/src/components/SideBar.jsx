import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-sidebar-icon.svg";
import dropdownIcon from "../assets/arrow-down.svg";
import masterdata from "../assets/masterdata.svg";
import gambar from "../img/gambar.png";

const SideBar = () => {
  const location = useLocation();
  const [openDropDown, setOpenDropDown] = useState(true);

  const isLinkActive = (pathname) => {
    return location.pathname === pathname
      ? "bg-white text-violet-500 font-bold"
      : "";
  };

  const handleDropdown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="w-[280px] bg-[#7A51E3] pb-10 md:pb-0 md:grid">
      <div id="sidebar-wrapper" className="h-screen text-white">
        <div title="profile" className="flex flex-col items-center mt-4">
          <div>
            <img src={gambar} className="rounded-full" />
          </div>
          <h1>Dinda marli</h1>
          <h2>abilong@gmial.com</h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 pt-8 shadow-inner shadow-slate-600">
          <ul className="flex flex-col items-start justify-center gap-[24px]">
            <li>
              <Link
                to="/admin/dashboard"
                className={` py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/dashboard"
                )}`}>
                <i className="fa-solid fa-gauge"></i>
                Dashboard
              </Link>
            </li>
            <ul>
              <li
                className={`py-1 pl-2 pr-1 text-white rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold cursor-pointer`}
                onClick={handleDropdown}>
                <img src={masterdata} className="w-4 " />
                Master Data
                <i className="fa-solid fa-caret-down"></i>
              </li>
              <ul className={`${openDropDown ? "hidden" : "block"} `}>
                <li>
                  <Link
                    to="/admin/kategori"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/kategori"
                    )}`}>
                    <i className="fa-solid fa-folder"></i>
                    Kategori
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/produk"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/produk"
                    )}`}>
                    <i className="fa-solid fa-film"></i>
                    Produk
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/user"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/user"
                    )}`}>
                    <i className="fa-solid fa-book-open-reader"></i>
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/promo"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/promo"
                    )}`}>
                    <i className="fa-solid fa-receipt"></i>
                    Promo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/metode"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/metode"
                    )}`}>
                    <i className="fa-solid fa-bars-progress"></i>
                    Metode
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/bank"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/bank"
                    )}`}>
                    <i className="fa fa-bank"></i>
                    Bank 
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/kota"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/kota"
                    )}`}>
                    <i className="fas fa-city"></i>
                    Kota 
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/provinsi"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                      "/admin/provinsi"
                    )}`}>
                    <i className="fa-solid fa-bars-progress"></i>
                    Provinsi
                  </Link>
                </li>
              </ul>
            </ul>
            <li>
              <Link
                to="/admin/transaksi"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/transaksi"
                )}`}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                Transaksi
              </Link>
            </li>
            <li>
              <Link
                to="/admin/pendaftaran"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/pendaftaran"
                )}`}>
                <i className="fa-solid fa-file"></i>
                Pendaftaran
              </Link>
            </li>
            <li>
              <Link
                to="/admin/notifikasi"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 font-semibold ${isLinkActive(
                  "/admin/notifikasi"
                )}`}>
                <i className="fa-solid fa-bell"></i>
                Notifikasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
