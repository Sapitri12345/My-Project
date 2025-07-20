import React from "react";
import SideBar from "../../../components/SideBar";
import Navbar from "../../../components/Navbar";

function Admin() {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section>
              <h2 className="text-3xl font-bold text-[#7A51E3]">Dashboard</h2>

              <div className="grid grid-cols-3 my-5 gap-0">
                <div className="h-40 border rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg inline">
                      Total Customers
                    </h3>
                    <div className="pt-2 float-right hover:cursor-pointer">
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 mb-4">
                    <h3 className="ml-4 text-3xl font-bold">2,420</h3>
                    <div className="user mt-1">
                      <i className="fa-solid fa-user-group text-3xl text-green-600"></i>
                    </div>
                  </div>

                  <div className="">
                    <span className="text-green-600">
                      <i className="fa-sharp fa-solid fa-arrow-up"></i>
                    </span>
                    <span className="text-[#027A48] font-semibold">125</span>{" "}
                    <span className="text-slate-400">Online</span>
                  </div>
                </div>

                <div className="h-40 border rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg inline">
                      Total Produk
                    </h3>
                    <div className="pt-2 float-right hover:cursor-pointer">
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 mb-4">
                    <h3 className="ml-4 text-3xl font-bold">1,210</h3>
                    <div className="user mt-1">
                      <i className="fa-solid fa-chart-simple text-red-600 text-3xl"></i>
                    </div>
                  </div>

                  <div className="">
                    <span className="text-red-600">
                      <i className="fa-sharp fa-solid fa-arrow-up"></i>
                    </span>
                    <span className="text-red-600 font-semibold">125</span>{" "}
                    <span className="text-slate-400">Online</span>
                  </div>
                </div>

                <div className="h-40 border rounded-lg p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg inline">Total Eo</h3>
                    <div className="pt-2 float-right hover:cursor-pointer">
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                      <span className="block w-1 h-1 bg-slate-400 rounded-full mb-0.5"></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 mb-4">
                    <h3 className="ml-4 text-3xl font-bold">316</h3>
                    <div className="user mt-1">
                      <i className="fa-solid fa-user-group text-3xl text-green-600"></i>
                    </div>
                  </div>

                  <div className="">
                    <span className="text-green-600">
                      <i className="fa-sharp fa-solid fa-arrow-up"></i>
                    </span>
                    <span className="text-[#027A48] font-semibold">125</span>{" "}
                    <span className="text-slate-400">Online</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-10">
                <h2 className="text-xl font-bold text-[#7A51E3] inline">
                  Informasi
                </h2>
                <input
                  type="search"
                  placeholder="Search"
                  name="username"
                  id="username"
                  autoComplete="off"
                  className="rounded-md border border-[#7A51E3] py-1.5 pl-3 text-[#7A51E3] placeholder:text-[#7A51E3] focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 float-right w-72"
                />
              </div>

              <div className="relative shadow-md sm:rounded-lg border">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Event Organizer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Kategori
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Costumer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Deskripsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-100">
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          <div className="mr-2">
                            <img src="/src/img/Avatar.png" alt="Avatar 1" />
                          </div>
                          <div className="w">
                            <span className="block font-semibold">Catalog</span>
                            <span className="block text-slate-500">
                              catalogapp.io
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-green-200 rounded-lg px-2 inline text-sm">
                          Pernikahan
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <img src="/src/img/Avatars-1.png" alt="Users" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="block">Content curating app</span>
                        <span className="text-slate-400">
                          Brings all your news into one place
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          <div className="mr-2">
                            <img src="/src/img/Avatar-1.png" alt="Avatar 1" />
                          </div>
                          <div className="w">
                            <span className="block font-semibold">
                              Circooles
                            </span>
                            <span className="block text-slate-500">
                              getcirooles.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-slate-200 rounded-lg px-2 inline text-sm">
                          Musik
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <img src="/src/img/Avatars-2.png" alt="Users" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="block">Design software</span>
                        <span className="text-slate-400">
                          Super lightweight design app
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-slate-100">
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          <div className="mr-2">
                            <img src="/src/img/Avatar-2.png" alt="Avatar 1" />
                          </div>
                          <div className="w">
                            <span className="block font-semibold">
                              Command+R
                            </span>
                            <span className="block text-slate-500">
                              cmdr.ai
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-green-200 rounded-lg px-2 inline text-sm">
                          Bazar
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <img src="/src/img/Avatars-3.png" alt="Users" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="block">Data prediction</span>
                        <span className="text-slate-400">
                          AI and machine learning data
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          <div className="mr-2">
                            <img src="/src/img/Avatar-3.png" alt="Avatar 1" />
                          </div>
                          <div className="w">
                            <span className="block font-semibold">Layers</span>
                            <span className="block text-slate-500">
                              getlayers.io
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-slate-200 rounded-lg px-2 inline text-sm">
                          Pernikahan
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <img src="/src/img/Avatars-4.png" alt="Users" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="block">Productivity app</span>
                        <span className="text-slate-400">
                          Time management and productivity
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-slate-100">
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          <div className="mr-2">
                            <img src="/src/img/Avatar-4.png" alt="Avatar 1" />
                          </div>
                          <div className="w">
                            <span className="block font-semibold">
                              Quotient
                            </span>
                            <span className="block text-slate-500">
                              quotient.co
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-green-200 rounded-lg px-2 inline text-sm">
                          Musik
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <img src="/src/img/Avatars-5.png" alt="Users" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="block">Web app integrations</span>
                        <span className="text-slate-400">
                          Connect web apps seamlessly
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          <div className="mr-2">
                            <img src="/src/img/Avatar-5.png" alt="Avatar 1" />
                          </div>
                          <div className="w">
                            <span className="block font-semibold">
                              Sisyphus
                            </span>
                            <span className="block text-slate-500">
                              sisyphus.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="bg-green-200 rounded-lg px-2 inline text-sm">
                          Pernikahan
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <img src="/src/img/Avatars-6.png" alt="Users" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="block">Sales CRM</span>
                        <span className="text-slate-400">
                          Web-based sales doc management
                        </span>
                      </td>
                    </tr>

                    <tr className="border">
                      <td className="px-6 py-4" colSpan="3">
                        <div className="">
                          <button
                            type="button"
                            className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]">
                            Previous
                          </button>
                          <button
                            type="button"
                            className="text-white bg-[#7A51E3] border border-[#7A51E3] focus:outline-none hover:bg-[#4d3591] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:hover:bg-[#7A51EB] dark:focus:ring-[#7A51E3]">
                            Next
                          </button>
                        </div>
                      </td>

                      <td className="text-right px-6 py-4">
                        <span>Page 1 of 10</span>
                      </td>
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
