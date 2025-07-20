import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";

const TambahPomodoro = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Pomodoro</p>
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
            <section className="mb-7 flex flex-row">
              <div>
                <div className="w-96 h-96 rounded-lg border p-6 ml-24">
                  <div className="flex flex-row">
                    <p className="font-bold">Task List (5 Task)</p>
                    <div className="flex flex-row mt-2 ml-auto">
                      <a href="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </a>
                      <a className="ml-5" href="#">
                        <i class="fa-solid fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <hr className="mt-3" />
                  <div className="flex flex-row">
                    <div>
                      <i class="fa-regular fa-circle"></i>
                    </div>
                    <p className="mb-2 ml-3">Learn UX Research</p>
                    <div className="ml-auto">
                      <i class="fa-solid fa-grip"></i>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <i class="fa-regular fa-circle"></i>
                    </div>
                    <p className="mb-2 ml-3">Daily Meeting - Financy</p>
                    <div className="ml-auto">
                      <i class="fa-solid fa-grip"></i>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <i class="fa-regular fa-circle"></i>
                    </div>
                    <p className="mb-2 ml-3">
                      Designing UI For Financy Landing Page
                    </p>
                    <div className="ml-auto">
                      <i class="fa-solid fa-grip"></i>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div>
                      <i class="fa-regular fa-circle"></i>
                    </div>
                    <p className="mb-2 ml-3">Create Presentation Slides</p>
                    <div className="ml-auto">
                      <i class="fa-solid fa-grip"></i>
                    </div>
                  </div>
                  <p className="mb-2 border rounded-lg py-2 px-2">
                    Create a Dribbble Shot for Fitster 1
                  </p>
                  <div className="flex flex-row bg-blue-100 rounded-lg py-2 px-2">
                    <p className="py-2 px-2 rounded-lg">Delete</p>
                    <div className="flex flex-row ml-auto">
                        <p className="py-2 px-2 rounded-lg">Cancel</p>
                        <a href="/admin/savepamodoro"><p className="ml-2 py-2 px-3 rounded-lg bg-blue-500 text-[#ffff]">Save</p></a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border p-6 ml-24 w-96">
                  <div className="rounded-lg border py-2 px-2 flex flex-row justify-center">
                    <a href="/admin/pomodoro">
                      <p className="mr-3 rounded-lg  py-2 px-2 ">Pomodoro</p>
                    </a>
                    <a href="/admin/pomodoro2">
                      <p className="mr-3 rounded-lg py-2 px-2  ">Short Break</p>
                    </a>
                    <a href="#">
                      <p className="rounded-lg py-2 px-2 bg-blue-500 text-[#ffff]">
                        Long Break
                      </p>
                    </a>
                  </div>
                  <p className="text-8xl font-bold flex flex-center justify-center mt-32 mb-32">
                    25 : 00
                  </p>
                  <div className="flex flex-center justify-center">
                    <a
                      className="py-2 px-2 rounded-lg bg-blue-100 mr-5"
                      href=""
                    >
                      <i class="fa-solid fa-arrows-rotate"></i>
                    </a>
                    <a
                      className="py-2 px-2 rounded-lg bg-blue-500 text-[#ffff] mr-5"
                      href=""
                    >
                      <i class="fa-solid fa-play"></i> Start
                    </a>
                    <a className="py-2 px-3 rounded-lg bg-blue-100" href="">
                      <i class="fa-solid fa-forward-step"></i>
                    </a>
                  </div>
                </div>
                <div className="h-200 rounded-lg border p-6 ml-24 mt-5">
                  <div className="flex flex-row">
                    <p className="font-bold">Custom Timer (Minutes)</p>
                  </div>
                  <hr className="mt-3 mb-3" />
                  <div className="flex flex-row mb-3">
                    <p className="mb-2 ml-3">Pomodoro</p>
                    <div className="ml-auto">
                      <p className="py-2 px-7 border rounded-lg">25</p>
                    </div>
                  </div>
                  <div className="flex flex-row mb-3">
                    <p className="mb-2 ml-3">Short Break</p>
                    <div className="ml-auto">
                      <p className="py-2 px-8 border rounded-lg">5</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <p className="mb-2 ml-3">Long Break</p>
                    <div className="ml-auto">
                      <p className="py-2 px-7 border rounded-lg">15</p>
                    </div>
                  </div>
                  <a href="">
                    <div className="flex flex-end justify-end mt-5 ">
                      <p className="py-2 px-5 border rounded-lg bg-blue-500 text-[#ffff]">
                        Save
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TambahPomodoro;
