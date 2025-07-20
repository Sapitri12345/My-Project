import React, { useState } from "react";
import SideBar from "../../../../components/SideBar";
import Navbar from "../../../../components/Navbar";
import Modal from "../../../../components/Modal";

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <Navbar />
          <main className="container mx-auto bg-white p-8">
            <section className="mb-5">
              <h2 className="text-3xl font-bold text-[#7A51E3]">User</h2>
            </section>

            <section>
              <div className="relative shadow-md sm:rounded-lg border overflow-hidden">
                <div className="mb-2 p-3">
                  <button
                    onClick={() => {
                      setShowModalAdd(true);
                    }}
                    className="bg-[#5925DC] hover:bg-[#4f388f] w-7 text-center rounded-sm inline-block mt-2.5">
                    <i className="fa-solid fa-plus text-white"></i>
                  </button>
                  <div className="float-right">
                    <input
                      type="search"
                      placeholder="Search"
                      name="username"
                      id="username"
                      autoComplete="off"
                      className="rounded-md border border-[#7A51E3] py-1.5 pl-3 text-[#7A51E3] placeholder:text-[#7A51E3] focus:ring-2 focus:ring-inset focus:ring-[#7A51E3] sm:text-sm sm:leading-6 w-60 mr-2"
                    />
                  </div>
                </div>

                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-white">
                    <tr className="bg-[#7A51E3]">
                      <th scope="col" className="px-6 py-3 text-center">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Username
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        No Telpon
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        OTP
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>001</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Anisa</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Ania21@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>085573098097</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>1245</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>EO</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className="bg-[#e6e946] border border-[#c4bb3d] focus:outline-none hover:bg-[#d8cf4e] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-yellow-200 focus:shadow-outline-yellow ring-yellow-200">
                          Detail
                        </button>
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-white bg-[#8069bb] border border-[#6941ce] focus:outline-none hover:bg-[#5d40ad] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-blue-300 focus:shadow-outline-blue">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>002</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Anisa</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Ania21@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>085573098097</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>1245</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Customer</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className="bg-[#e6e946] border border-[#c4bb3d] focus:outline-none hover:bg-[#d8cf4e] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-yellow-200 focus:shadow-outline-yellow ring-yellow-200">
                          Detail
                        </button>
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-white bg-[#8069bb] border border-[#6941ce] focus:outline-none hover:bg-[#5d40ad] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-blue-300 focus:shadow-outline-blue">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>003</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Anisa</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Ania21@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>085573098097</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>1245</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>EO</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className="bg-[#e6e946] border border-[#c4bb3d] focus:outline-none hover:bg-[#d8cf4e] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-yellow-200 focus:shadow-outline-yellow ring-yellow-200">
                          Detail
                        </button>
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-white bg-[#8069bb] border border-[#6941ce] focus:outline-none hover:bg-[#5d40ad] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-blue-300 focus:shadow-outline-blue">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>004</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Anisa</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Ania21@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>085573098097</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>1245</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Customer</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className="bg-[#e6e946] border border-[#c4bb3d] focus:outline-none hover:bg-[#d8cf4e] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-yellow-200 focus:shadow-outline-yellow ring-yellow-200">
                          Detail
                        </button>
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-white bg-[#8069bb] border border-[#6941ce] focus:outline-none hover:bg-[#5d40ad] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-blue-300 focus:shadow-outline-blue">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="text-center px-6 py-4">
                        <span>005</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Anisa</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>Ania21@gmail.com</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>085573098097</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>1245</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <span>EO</span>
                      </td>
                      <td className="text-center px-6 py-4">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className="bg-[#e6e946] border border-[#c4bb3d] focus:outline-none hover:bg-[#d8cf4e] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-yellow-200 focus:shadow-outline-yellow ring-yellow-200">
                          Detail
                        </button>
                        <button
                          onClick={() => {
                            setEditModal(true);
                          }}
                          className="text-white bg-[#8069bb] border border-[#6941ce] focus:outline-none hover:bg-[#5d40ad] focus:ring-4 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 w-16 focus:border-blue-300 focus:shadow-outline-blue">
                          Edit
                        </button>
                      </td>
                    </tr>
                    <tr className="border">
                      <td className="px-6 py-4" colSpan="5">
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

                      <td className="text-right px-6 py-4" colSpan={2}>
                        <span>Page 1 of 10</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {editModal && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <button
                    className="float-right px-2 py-2"
                    onClick={() => setEditModal(false)}>
                    <i className="fa fa-close"></i>
                  </button>
                  <h2 className="text-2xl font-bold text-[#7A51E3] mb-10">
                    Edit User
                  </h2>

                  <div className="form mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Nama
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value="Dhiya"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium leading-6">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          value="dhiyali@gmail.com"
                          name="email"
                          id="email"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="telpon"
                        className="block text-lg font-medium leading-6">
                        No Telpon
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value="081234567890"
                          name="telpon"
                          id="telpon"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="otp"
                        className="block text-lg font-medium leading-6">
                        OTP
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value="165730"
                          name="otp"
                          id="otp"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="password"
                        className="block text-lg font-medium leading-6">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          value="indonesia"
                          name="password"
                          id="password"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="password2"
                        className="block text-lg font-medium leading-6">
                        Konfirmasi Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          value="indonesia"
                          name="password2"
                          id="password2"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="username"
                        className="block text-lg font-medium leading-6">
                        Role
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value="EO"
                          name="username"
                          id="username"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                      onClick={() => setEditModal(false)}>
                      Simpan
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {showModal && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <button
                    className="float-right px-2 py-2"
                    onClick={() => setShowModal(false)}>
                    <i className="fa fa-close"></i>
                  </button>

                  <h2 className="text-2xl font-bold text-[#7A51E3] mb-10">
                    Detail User
                  </h2>

                  <div className="form mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Nama
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="Dhiya"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium leading-6">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          readOnly
                          value="dhiyali@gmail.com"
                          name="email"
                          id="email"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="telpon"
                        className="block text-lg font-medium leading-6">
                        No Telpon
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="081234567890"
                          name="telpon"
                          id="telpon"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="otp"
                        className="block text-lg font-medium leading-6">
                        OTP
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="165730"
                          name="otp"
                          id="otp"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="password"
                        className="block text-lg font-medium leading-6">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          readOnly
                          value="indonesia"
                          name="password"
                          id="password"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="password2"
                        className="block text-lg font-medium leading-6">
                        Konfirmasi Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          readOnly
                          value="indonesia"
                          name="password2"
                          id="password2"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="username"
                        className="block text-lg font-medium leading-6">
                        Role
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          readOnly
                          value="EO"
                          name="username"
                          id="username"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                      onClick={() => setShowModal(false)}>
                      Kembali
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {showModalAdd && (
              <Modal>
                <div className="max-w-2xl relative w-full p-16 mx-auto bg-white rounded-md shadow-lg">
                  <button
                    className="float-right px-2 py-2"
                    onClick={() => setShowModalAdd(false)}>
                    <i className="fa fa-close"></i>
                  </button>

                  <h2 className="text-3xl font-bold text-[#7A51E3] mb-10 mt-8">
                    Tambah User
                  </h2>

                  <div className="form mb-16">
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Nama
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan Nama User"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan Email user"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        No Telpon
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan No Telpon"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        OTP
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan No OTP"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan Password"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="nama"
                        className="block text-lg font-medium leading-6">
                        Konfirmasi Password
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Masukan Ulang Password"
                          name="nama"
                          id="nama"
                          autoComplete="off"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mb-4">
                      <label
                        htmlFor="cars"
                        className="block text-lg font-medium leading-6">
                        Role
                      </label>
                      <div className="mt-2">
                        <div
                          id="cars"
                          className="block w-full rounded-md py-1.5 pl-3 text-gray-400 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-[#7A51E3] border">
                          <select
                            name="cars"
                            id="cars"
                            className="block w-full">
                            <option value="eo">EO</option>
                            <option value="costumer">Costumer</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#7A51E3] border focus:outline-none hover:bg-[#7A51E3] focus:ring-4 focus:ring-[#7A51E3] font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 [#7A51E3]:bg-[#7A51E3] [#7A51E3]:text-white [#7A51E3]:border-[#7A51E3] dark:hover:bg-[#7A51E3] [#7A51E3]:focus:ring-[#7A51E3] float-right"
                      onClick={() => setShowModalAdd(false)}>
                      Tambah
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default User;
