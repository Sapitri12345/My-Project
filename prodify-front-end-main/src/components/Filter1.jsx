import React, { useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownContent = (
    <div
      className={`absolute right-0 mt-2 w-96 bg-slate-50 border border-gray-200 rounded shadow-lg shadow-slate-600 ${
        isOpen ? "block" : "hidden"
      }`}>
      <div className="mx-5 mt-5 mb-3 head">
        <h6 className="text-xl font-bold text-[#7A51E3]">Kategori</h6>
      </div>
      <div className="body mx-5 mb-5">
        <span className="text-lg font-semibold">Urutkan Berdasarkan</span>
        <div className="flex flex-wrap mt-2">
          <div className="w-40">
            <ul>
              <li className="mb-1">ID</li>
              <li className="mb-1">Nama</li>
            </ul>
          </div>
          <div className="w-20">
            <ul>
              <li className="mb-1">
                <input type="radio" name="" id="idNaik" className="mr-1" />
                <label htmlFor="idNaik">Naik</label>
              </li>
              <li className="mb-1">
                <input type="radio" name="" id="promoAz" className="mr-1" />
                <label htmlFor="promoAz">A-Z</label>
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="mb-1">
                <input type="radio" name="" id="idNaik" className="mr-1" />
                <label htmlFor="idNaik">Turun</label>
              </li>
              <li className="mb-1">
                <input type="radio" name="" id="promoAz" className="mr-1" />
                <label htmlFor="promoAz">A-Z</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer text-right m-5 mt-8">
        <button
          type="button"
          className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3]">
          Filter
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3] inline-flex justify-center items-center w-full leading-5 focus:border-blue-300 focus:shadow-outline-blue"
        onClick={toggleDropdown}>
        <i className="fa-solid fa-filter mr-2"></i> Filter
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && dropdownContent}
    </div>
  );
};

export default DropdownButton;
