import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";

const Financy = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Financy</p>
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
              <div className="flex flex-row mr-auto">
                <div className="flex flex-row">
                  <div className="py-3 px-2 border rounded-full mr-2">
                    <a
                      className="py-2 px-4 bg-blue-500 text-[#ffff] rounded-full"
                      href=""
                    >
                      Tasks
                    </a>
                    <a className="py-2 px-4 rounded-full" href="/admin/financy2">
                      {" "}
                      Feed
                    </a>
                  </div>
                  <a href="" className="px-2 py-2 rounded-lg border mr-2">
                    Board View <i class="fa-solid fa-caret-down"></i>
                  </a>
                  <a href="" className="px-2 py-2 rounded-lg border">
                    <i class="fa-solid fa-filter"></i> Filters
                  </a>
                </div>
                <div className="flex flex-row ml-auto">
                  <img className="mt-2 w-28 h-8 mr-2" src="/img/frame4.png" alt="" />
                  <a href="" className="px-2 py-2 rounded-lg border-2 mr-2">
                    <i class="fa-solid fa-user-plus"></i> Share
                  </a>
                  <a href="" className="px-2 py-1.5 rounded-lg border-2">
                    <i class="fa-solid fa-plus"></i> Add Board
                  </a>
                </div>
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
                      <div className="flex flex-row ml-auto">
                        <Link
                          className={`py-1 pl-2 pr-5 rounded h-10 w-25 flex items-center justify-start gap-2 font-semibold px-2 py-1.5 rounded-md`}
                        >
                          <i class="fa-solid fa-plus"></i>
                          <i class="fa-solid fa-grip-vertical"></i>
                        </Link>
                      </div>
                    </div>
                    <hr className="mt-3 border border-2 border-red-500" />
                    <div className="h-60 border rounded-lg p-6 mr-3 mt-5 mb-5">
                      <div className="mb-4">
                        <p
                          className={`px-1 py-1 rounded bg-orange-100 rounded text-xs text-yellow-500 font-semibold rounded-md mr-5 `}
                        >
                          Medium
                        </p>
                        <p className="font-semibold text-xl mt-5">
                          Prototyping & Testing
                        </p>
                        <p className="mt-2 text-slate-400">
                          Develop interactive prototypes using tools like
                          Sketch,....
                        </p>
                        <hr className="mt-3" />
                        <div className="flex flex-row mt-2">
                          <img className="h-5 w-9" src="/img/frame.png" alt="" />
                          <div className="ml-auto">
                            <i class="fa-regular fa-circle-check"></i> 0/28{" "}
                            <i class="fa-regular fa-clock"></i> 20d
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-60 border rounded-lg p-6 mr-3 mt-5 mb-5">
                      <div className="mb-4">
                        <p
                          className={`px-1 py-1 rounded bg-orange-100 rounded text-xs text-yellow-500 font-semibold rounded-md mr-5 `}
                        >
                          Medium
                        </p>
                        <p className="font-semibold text-xl mt-5">
                          Launch and Development
                        </p>
                        <p className="mt-2 text-slate-400">
                          Publish the website or application to the live
                          server...
                        </p>
                        <hr className="mt-3" />
                        <div className="flex flex-row mt-2">
                          <img className="h-5 w-9" src="/img/frame.png" alt="" />
                          <div className="ml-auto">
                            <i class="fa-regular fa-circle-check"></i> 0/28{" "}
                            <i class="fa-regular fa-clock"></i> 20d
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <a href="/admin/tasks2" className="px-2 py-1.5 rounded-md">
                      <i class="fa-solid fa-plus"></i> Add a card
                    </a>
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
                      <div className="flex flex-row ml-auto">
                        <Link
                          className={`py-1 pl-2 pr-5 rounded h-10 w-25 flex items-center justify-start gap-2 font-semibold px-2 py-1.5 rounded-md  `}
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
                          Visual Design
                        </p>
                        <p className="text-slate-400 mt-3">
                          Design detailed mockups or prototypes that showcase
                          the...
                        </p>

                        <hr className="mt-3" />
                        <div className="flex flex-row mt-3">
                          <img className="w-8 h-5" src="/img/frame2.png" alt="" />
                          <div className="ml-auto">
                            <i class="fa-regular fa-circle-check"></i> 10/32{" "}
                            <i class="fa-regular fa-clock"></i> 10d
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
                          User Research
                        </p>
                        <p className="text-slate-500 mt-5">
                          Gather insights from potential users to understand
                          their needs...
                        </p>
                        <hr className="mt-3" />
                        <div className="flex flex-row mt-3">
                          <img className="w-8 h-5" src="/img/frame2.png" alt="" />
                          <div className="ml-auto">
                            <i class="fa-regular fa-circle-check"></i> 10/12{" "}
                            <i class="fa-regular fa-clock"></i> 3d
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
                      <div className="flex flex-row ml-auto">
                        <Link
                          className={`py-1 pl-2 pr-5 rounded h-10 w-25 flex items-center justify-start gap-2 font-semibold px-2 py-1.5 rounded-md`}
                        >
                          <i class="fa-solid fa-plus"></i>
                          <i class="fa-solid fa-grip-vertical"></i>
                        </Link>
                      </div>
                    </div>
                    <hr className="border-green-500 mt-3 border border-2" />

                    <div className="h-60 border rounded-lg p-6 mr-3 mt-5 mb-5">
                      <div className="mb-4">
                        <div
                          className={`py-1 px-1 rounded text-xs text-red-500 flex items-center justify-start gap-2 font-semibold rounded-md border-2 bg-red-100 mr-5 `}
                        >
                          High
                        </div>
                        <p className="font-semibold text-xl mt-5">
                          Project Kickoff
                        </p>
                        <p className="text-slate-400 mt-5">
                          Understand the client's objectives, target audience,
                          and project scope.
                        </p>
                      </div>
                      <hr />
                      <div className="flex flex-row mt-3">
                          <img className="w-20 h-5" src="/img/frame4.png" alt="" />
                          <div className="ml-auto">
                            <i class="fa-regular fa-circle-check"></i> 18/18{" "}
                            <i class="fa-regular fa-clock"></i> 0d
                          </div>
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

export default Financy;
