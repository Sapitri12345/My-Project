import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gambar1 from "../../../img/gambar1.png";
import gambar2 from "../../../img/gambar2.png";
import pesan from "../../../img/pesan.png";
import SideBar from "../../../components/SideBar";

const Massage = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Message</p>
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
          <main className="container mx-auto bg-white">
            <div class="container mx-auto">
              <div class="flex ml-2 ">
                <aside class="w-100 bg-white-500 border-r-2">
                  <div>
                    <div className="mb-6 p-3">
                      <div>
                        <div>
                          <input
                            type="search"
                            placeholder="Search"
                            name="username"
                            id="username"
                            autoComplete="off"
                            className="rounded-md border-2 py-1.5 pl-3 focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 w-80 mr-2"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mb-10 text-2xl">Team Project</p>
                    <div>
                      <div className="flex flex-row">
                        <div className="h-20 border rounded-lg p-3 mr-3">
                          <div className="mb-4">
                            <a href="/admin/massage2">
                              <div className="flex flex-row">
                                <img
                                  className="w-50 h-50 mr-5"
                                  src={gambar1}
                                  alt=""
                                />
                                <div>
                                  <p>Financy</p>
                                  <p>You: Sounds good,....</p>
                                </div>
                                <p className="ml-5">3:25 PM</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="mt-10 text-2xl">Personal</p>
                      <a href="">
                        <div className="flex flex-row mt-10">
                          <img className="mr-5" src={gambar2} alt="" />
                          <div>
                            <p>Joleha</p>
                            <p>hahaha, it’s okay</p>
                          </div>
                          <p className="ml-10">10:25 AM</p>
                        </div>
                      </a>
                      <hr className="mt-2" />
                      <a href="">
                        <div className="flex flex-row mt-8">
                          <img className="mr-5" src={gambar2} alt="" />
                          <div>
                            <p>Joleha</p>
                            <p>hahaha, it’s okay</p>
                          </div>
                          <p className="ml-10">10:25 AM</p>
                        </div>
                      </a>
                      <hr className="mt-2" />
                      <a href="">
                        <div className="flex flex-row mt-8">
                          <img className="mr-5" src={gambar2} alt="" />
                          <div>
                            <p>Joleha</p>
                            <p>hahaha, it’s okay</p>
                          </div>
                          <p className="ml-10">10:25 AM</p>
                        </div>
                      </a>
                      <hr className="mt-2" />
                      <a href="">
                        <div className="flex flex-row mt-8">
                          <img className="mr-5" src={gambar2} alt="" />
                          <div>
                            <p>Joleha</p>
                            <p>hahaha, it’s okay</p>
                          </div>
                          <p className="ml-10">10:25 AM</p>
                        </div>
                      </a>
                      <hr className="mt-2" />
                      <a href="">
                        <div className="flex flex-row mt-8">
                          <img className="mr-5" src={gambar2} alt="" />
                          <div>
                            <p>Joleha</p>
                            <p>hahaha, it’s okay</p>
                          </div>
                          <p className="ml-10">10:25 AM</p>
                        </div>
                      </a>
                      <hr className="mt-2" />
                      <a href="">
                        <div className="flex flex-row mt-8">
                          <img className="mr-5" src={gambar2} alt="" />
                          <div>
                            <p>Joleha</p>
                            <p>hahaha, it’s okay</p>
                          </div>
                          <p className="ml-10">10:25 AM</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </aside>

                <main class="flex-grow bg-white-500">
                  <div class="flex flex-row justify-center p-4 mt-96">
                    <img className="" src={pesan} alt="" />
                  </div>
                </main>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Massage;
