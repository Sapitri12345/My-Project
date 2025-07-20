import React from "react";
import SideBar from "../../../components/SideBar";
import bag from "../../../img/bag.png";

function Admin() {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Welcome Back, Dinda!</p>
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
          <main className="container mx-auto bg-white p-5">
            <section>
              <div>
                <p className="text-xl mb-3 font-semibold">My Project</p>
                <div className="flex flex-row">
                  <div className="w-60">
                    <div className="py-2 px-2 bg-pink-500 rounded-t-lg border-t border-l border-r">
                      <br />
                      <br />
                    </div>
                    <div className="flex flex-row py-2 px-2 rounded-b-lg  border border-b border-l border-r">
                      <p>Financy</p>
                      <div className="ml-auto">
                        <i class="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-5 px-10 bg-blue-100 rounded-lg w-60 ml-5">
                   <a className="ml-14 text-xl mt-2" href=""><i class="fa-solid fa-plus"></i></a> 
                    <p className="text-xs mr-3 ml-10 mt-2">Add Project</p>
                  </div>
                </div>
              </div>

              
              <div className="h-100 mb-60 border rounded-lg p-6 mt-20">
                <div className="mb-4">
                  <div className="flex flex-row ">
                    <h1 className="ml-10 text-3xl">Project Summary</h1>
                    <div className="ml-96">
                      <a
                        href=""
                        className="px-2 py-1.5 rounded-md ml-auto mr-5 border-2 mt-5"
                      >
                        Project <i class="fa-solid fa-caret-down"></i>
                      </a>
                      <a
                        href=""
                        className="px-2 py-1.5 rounded-md ml-auto mr-5 border-2 mt-5"
                      >
                        Project Manager <i class="fa-solid fa-caret-down"></i>
                      </a>
                      <a
                        href=""
                        className="px-2 py-1.5 rounded-md ml-auto border-2 mt-5"
                      >
                        Status <i class="fa-solid fa-caret-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <table className="w-full text-sm mt-5 text-left rtl:text-right">
                  <thead className="text-xs text-white">
                    <tr className="bg-[#3572EF]">
                      <th scope="col" className="px-6 py-3 text-center">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Project Manager
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Due Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
                      {/* <td className="text-center px-6 py-4">
                          <div className="mx-auto">
                            <button
                              onClick={() => {
                                setShowModal(true);
                              }}
                              className="bg-[#e6e946] border border-[#c4bb3d] focus:outline-none hover:bg-[#d8cf4e] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-yellow-200 focus:shadow-outline-yellow ring-yellow-200 "
                            >
                              Detail
                            </button>
                            <button
                              onClick={() => {
                                setshowDeleteModal(true);
                              }}
                              className="text-white bg-[#e35151] border border-[#a83434] focus:outline-none hover:bg-[#913535] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 ring-red-300"
                            >
                              Hapus
                            </button>
                          </div>
                        </td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
