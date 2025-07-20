import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gambar1 from "../../../img/gambar1.png";
import gambar2 from "../../../img/gambar2.png";
import sarah from "../../../img/sarah.png";
import alex from "../../../img/alex.png";
import saya from "../../../img/saya.png";
import SideBar from "../../../components/SideBar";

const Massage2 = () => {
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
                  <div className="flex flex-row mx-auto ml-5 mt-2">
                    <div className="flex flex-row mr-80">
                      <img className="w-50 h-50 mr-5" src={gambar1} alt="" />
                      <div>
                        <p>Financy</p>
                        <p>6 Members</p>
                      </div>
                    </div>
                    <input
                      type="search"
                      placeholder="Search"
                      name="username"
                      id="username"
                      autoComplete="off"
                      className="rounded-md border-2 py-1.5 pl-3 focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 w-60 mr-2"
                    />
                  </div>
                  <hr className="mt-2" />
                  <p className="text-xl text-center mt-10 font-bold">Today</p>
                  <div className="flex flex-row mt-10 ml-5">
                    <img className="w-10 h-10" src={sarah} alt="" />
                    <div className="mt-2 ml-2">
                      <p>Sarah</p>
                      <div className="mt-2 flex flex-row">
                        <p className="rounded-lg mr-5 bg-blue-100 px-2 py-2">
                          Hi team, let's kick off the discussion about the new
                          Finance Website <br />
                          Landing Page Project. We need to finalize the design
                          and content <br />
                          strategy. Thoughts?
                        </p>
                        <p className="mt-16">08.15 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-10 ml-5">
                    <img className="w-10 h-10" src={alex} alt="" />
                    <div className="mt-2 ml-2">
                      <p>Alex</p>
                      <div className="mt-2 flex flex-row">
                        <p className="rounded-lg mr-5 bg-blue-100 px-2 py-2">
                          Hey everyone! For the UX part, we should focus on a
                          clean and <br />
                          intuitive layout. Our target audience is looking for
                          easy access <br />
                          to financial services and information. I'll create
                          wireframes that <br />
                          emphasize simplicity and accessibility.
                        </p>
                        <p className="mt-24">08.15 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end mt-10 ml-5">
                    <div className="mt-2 ml-2">
                      <p className="flex flex-end justify-end mr-2">You</p>
                      <div className=" flex flex-row">
                        <p className="mt-20 mr-5">08.15 AM</p>
                        <p className="rounded-lg mr-2 bg-blue-500 text-[#ffff] px-2 py-2">
                          Sounds good, Alex. I'll work on the visual elements.
                          I'm <br />
                          thinking of using a modern color scheme with a lot of{" "}
                          <br />
                          whitespaces to keep it clean. Any preferences for
                          colors?
                        </p>
                      </div>
                    </div>
                    <img className="w-10 h-10 mr-5" src={saya} alt="" />
                  </div>
                  <div>
                    <div className="flex flex-row py-2 px-2 border rounded-lg ml-2 mt-32">
                      <p>Type a message</p>
                      <div className="ml-auto">
                        <i class="fa-regular fa-face-smile"></i>{" "}
                        <i class="fa-solid fa-link"></i>
                      </div>
                    </div>
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

export default Massage2;
