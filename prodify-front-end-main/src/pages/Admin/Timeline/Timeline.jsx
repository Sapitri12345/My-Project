import React, { useState } from "react";
import SideBar from "../../../components/SideBar";


const Timeline = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Timeline</p>
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
              <div className="flex flex-row">
                <h1 className="text-2xl">June 3rd - June 9th</h1>
                <div className="ml-auto">
                  <a href="" className="px-2 py-1.5 rounded-md border-2 mr-5">
                    <i class="fa-solid fa-chevron-left"></i>
                  </a>
                  <a href="" className="px-2 py-1.5 rounded-md border-2 mr-5">
                    <i class="fa-solid fa-chevron-right"></i>
                  </a>
                  <a
                    href=""
                    className=" bg-[#3572EF] text-[#ffff] px-2 py-1.5 rounded-md border-2"
                  >
                    <i class="fa-solid fa-plus"></i> Add Task
                  </a>
                </div>
              </div>

              <table className="w-full mt-5 text-left rtl:text-right border-t-2 border-b-2">
                <thead className="text-xl ">
                  <tr className="border-b-2">
                    <th scope="col" className="px-6 py-3 text-center">
                      GMT+7
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Monday
                      <p className="text-base">3 Juni</p>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Tuesday
                      <p className="text-base">4 Juni</p>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Wednesday
                      <p className="text-base">5 Juni</p>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Thursday
                      <p className="text-base">6 Juni</p>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Friday
                      <p className="text-base">7 Juni</p>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Saturday
                      <p className="text-base">8 Juni</p>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Sunday
                      <p className="text-base">9 Juni</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>07:00</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>08:00</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span>-</span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                    <td className="text-center px-6 py-4">
                      <span className="text-green-500 font-semibold italic">
                        -
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
