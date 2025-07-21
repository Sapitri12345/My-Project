import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";

const Tasks2 = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Tasks</p>
              </div>
              <a
                href=""
                className="bg-slate-200 px-2 py-1.5 rounded-md ml-auto"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="" className="bg-slate-200 px-2 py-1.5 rounded-md ml-5">
                <i class="fa-solid fa-bell"></i>
              </a>
              <a href="" className="bg-slate-200 px-2 py-1.5 rounded-md ml-5">
                <img src="" className="rounded-full w-5 h-5" />
              </a>
              <a href="" className="bg-[#ffff] px-2 py-1.5 rounded-md ml-2">
                <i class="fa-solid fa-caret-down"></i>
              </a>
            </div>
          </nav>
          <main className="container mx-auto h-200 bg-white p-8">
            <section className="mb-7">
              <div className="flex flex-end justify-end">
                <a href="" className="px-2 py-1.5 rounded-md border-2 mr-5">
                  Board View <i class="fa-solid fa-caret-down"></i>
                </a>
                <a href="" className="px-2 py-1.5 rounded-md border-2 mr-5">
                  <i class="fa-solid fa-filter"></i> Filters
                </a>
              </div>
              <hr className="mt-5 " />

              <div>
                <div className="h-200 rounded-lg p-6 mr-3 flex flex-row">
                  <div className="mb-4 mr-5 ml-2">
                    <div className="flex flex-row">
                      <div
                        className={`py-1 pl-2 pr-5 text-sm rounded h-10 w-25 flex items-center justify-start gap-2 px-2 py-1.5 rounded-md  bg-red-100 mr-5 `}
                      >
                        {/* <i class="fa-solid fa-circle"></i> */}
                        <div className="w-3 h-3 bg-red-300 rounded-full" />
                        To Do
                      </div>
                      <div
                        className={`py-1 pl-2 pr-5 rounded-full w-10 h-10 flex text-center justify-start gap-2 font-bold px-2 py-1.5 bg-slate-200 `}
                      >
                        2
                      </div>
                      <div className="flex flex-row">
                        <Link
                          className={`py-1 pl-2 pr-5 rounded h-10 w-25 flex items-center justify-start gap-2 font-semibold px-2 py-1.5 rounded-md ml-20 `}
                        >
                          <i class="fa-solid fa-plus"></i>
                          <i class="fa-solid fa-grip-vertical"></i>
                        </Link>
                      </div>
                    </div>
                    <hr className="mt-3 border border-2 border-red-500" />
                    <div className="h-40 border rounded-lg p-6 mr-3 mt-5 mb-5">
                      <div className="mb-4">
                        <div
                          className={`px-1 py-1 rounded bg-orange-100 rounded text-xs text-yellow-500 font-semibold rounded-md mr-5 `}
                        >
                          Medium
                        </div>
                        <p className="font-semibold text-xl mt-5">
                          Dribbble Exploration - Modern Device
                        </p>
                      </div>
                    </div>
                    <input
                    type="teks"
                    nameX="teks"
                    id="teks"
                    placeholder="Enter a title for this card"
                    autocomplete="off"
                    required
                    className="px-3 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-5"
                  />
                    <a href="/admin/tasks3" className="px-2 py-2  bg-blue-500 rounded-md text-[#ffff]">
                      Add a card
                    </a>
                    <a href="/admin/tasks"> Close</a>
                  </div>

                  <div className="mb-4 mr-5">
                    <div className="flex flex-row">
                      <div
                        className={`py-1 pl-2 pr-5 text-sm rounded flex items-center justify-start gap-2 px-2 py-1.5 rounded-md bg-blue-100 mr-5 `}
                      >
                        {/* <i class="fa-solid fa-circle"></i> */}
                        <div className="w-3 h-3 bg-blue-300 rounded-full" />
                        In Progress
                      </div>
                      <div
                        className={`py-1 pl-2 pr-5 rounded-full w-10 h-10 flex text-center justify-start gap-2 font-bold px-2 py-1.5 bg-slate-200 `}
                      >
                        2
                      </div>
                      <div className="flex flex-row">
                        <Link
                          className={`py-1 pl-2 pr-5 rounded h-10 w-25 flex items-center justify-start gap-2 font-semibold px-2 py-1.5 rounded-md ml-16 `}
                        >
                          <i class="fa-solid fa-plus"></i>
                          <i class="fa-solid fa-grip-vertical"></i>
                        </Link>
                      </div>
                    </div>
                    <hr className="border border-2 border-blue-500 mt-3" />
                    <div className="h-45 border rounded-lg p-6 mr-3 mt-5">
                      <div className="mb-4">
                        <div
                          className={`px-1 py-1 text-xs rounded text-orange-500 flex items-center justify-start gap-2 font-semibold rounded-md bg-red-100 mr-5 `}
                        >
                          High
                        </div>
                        <p className="font-semibold text-xl mt-5">
                          Learn Foundation of UI UX Design
                        </p>

                        <hr className="mt-3" />
                        <div className="flex flex-end justify-end mt-3">
                          <div>
                            <i class="fa-regular fa-circle-check"></i> 120/150{" "}
                            <i class="fa-regular fa-clock"></i> 5d
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-60 border rounded-lg p-6 mr-3 mt-5 mb-5">
                      <div className="mb-4">
                        <div
                          className={`py-1 px-1 rounded text-xs text-orange-500 flex items-center justify-start gap-2 font-semibold rounded-md border-2 bg-red-100 mr-5 `}
                        >
                          High
                        </div>
                        <p className="font-semibold text-xl mt-5">
                          Revamp PixelPulse - Agency Website
                        </p>
                        <p className="text-slate-500 mt-5">
                          Gather insights from potential....
                        </p>
                        <hr className="mt-3" />
                        <div className="flex flex-end justify-end mt-3">
                          <div>
                            <i class="fa-regular fa-circle-check"></i> 80/142{" "}
                            <i class="fa-regular fa-clock"></i> 14d
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="" className="px-2 py-1.5 rounded-md ">
                      <i class="fa-solid fa-plus"></i> Add a card
                    </a>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-row">
                      <div
                        className={`py-1 pl-2 pr-5 text-sm rounded flex items-center justify-start gap-2 px-2 py-1.5 rounded-md bg-green-100 mr-5 `}
                      >
                        {/* <i class="fa-solid fa-circle"></i> */}
                        <div className="w-3 h-3 bg-green-300 rounded-full" />
                        Done
                      </div>
                      <div
                        className={`py-1 pl-2 pr-5 rounded-full w-10 h-10 flex text-center justify-start gap-2 font-bold px-2 py-1.5 bg-slate-200 `}
                      >
                        1
                      </div>
                      <div className="flex flex-row">
                        <Link
                          className={`py-1 pl-2 pr-5 rounded h-10 w-25 flex items-center justify-start gap-2 font-semibold px-2 py-1.5 rounded-md ml-24 `}
                        >
                          <i class="fa-solid fa-plus"></i>
                          <i class="fa-solid fa-grip-vertical"></i>
                        </Link>
                      </div>
                    </div>
                    <hr className="border-green-500 mt-3 border border-2" />

                    <div className="h-40 border rounded-lg p-6 mr-3 mt-5 mb-5">
                      <div className="mb-4">
                        <div
                          className={`py-1 px-1 rounded text-xs text-blue-500 flex items-center justify-start gap-2 font-semibold rounded-md border-2 bg-blue-100 mr-5 `}
                        >
                          Low
                        </div>
                        <p className="font-semibold text-xl mt-5">
                          24 Bottom Navbar References (Freebies)
                        </p>
                      </div>
                    </div>
                    <a href="" className="px-2 py-1.5 rounded-md md-3 ">
                      <i class="fa-solid fa-plus"></i> Add a card
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* <section>
              <div>
                <div className="h-40 border rounded-lg p-6 mr-3">
                  <div className="mb-4">
                    <div>
                      <img className="w-50 h-50" src={bag} alt="" />
                    </div>
                    <p>Project</p>
                    <p className="mb-2">
                      <span className="text-2xl">50</span>/100
                    </p>
                    <div className="flex flex-row ">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      <p className="ml-1">Increase from last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tasks2;
