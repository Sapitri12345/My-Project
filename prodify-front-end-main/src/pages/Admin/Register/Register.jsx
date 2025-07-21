import React, { useState } from "react";
// import gambar10 from "../../../img/gambar10.png";
import { Axios } from "axios";

function Register() {
  const [full_name, setFull_name] = useState(``)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const createUser = ()=>{
    Axios.post(`http://localhost:5000/users`, {
      FullName:full_name,
      Email:email,
      Password:password,
    }).then(()=>{
      console.log(`User Has Been Created`)
    })
  }


  return (
    <div>
      <div className="container max-w-screen">
        <div className="grid grid-cols-2">
          <div className=" p-20 border-r-2">
            <form action="/admin/Verification" method="postX">
              <img
                className=" mb-5 mt-3 text-center mx-auto"
                src="/img/gambar10.png"
                alt=""
              />
              <h1 className=" mb-5 mt-3 text-3xl text-center">
                Welcome to Proditify
              </h1>
              <p className=" mb-5 mt-3 text-center ">
                Create an account to get started
              </p>
              <div className="sm:col-span-3 mb-3 mt-10">
                <label for="username" className="block font-medium leading-6">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="full_name"
                    id="username"
                    autocomplete="off"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event)=>{
                      setFull_name(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="sm:col-span-3 mb-3">
                <label for="password" className="block font-medium leading-6">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    nameX="email"
                    id="email"
                    placeholder="Enter your Email"
                    autocomplete="off"
                    className="px-3 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event)=>{
                      setEmail(event.target.value)
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-3 mb-3">
                <label for="password" className="block font-medium leading-6">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    nameX="password"
                    id="password"
                    placeholder="Enter your password"
                    autocomplete="off"
                    className="px-3 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event)=>{
                      setPassword(event.target.value)
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-[#3572EF] px-3 py-2 text-sm w-full font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={createUser}
              >
                Sign Up
              </button>
              <p className="mb-5 mt-3 text-center mt-5">Or</p>
              <div className="text-center">
                <a href="">
                  <img
                    src="/img/google.png"
                    alt="Image Login"
                    className="mx-auto"
                  />
                </a>
              </div>
              <p className="mb-5 mt-3 text-center text-xs mt-5">Already have an account? <a href="/admin/Login">Sign In</a></p>
            </form>
          </div>
          <div className="text-center max-w-full">
            <img
              src="/img/banner.png"
              alt="Image Login"
              className="mx-auto w-full"
            />
          </div>
        </div>
      </div>
      <div id="root"></div>
      <script type="module" src="/main.jsx"></script>
    </div>
  );
}

export default Register;
