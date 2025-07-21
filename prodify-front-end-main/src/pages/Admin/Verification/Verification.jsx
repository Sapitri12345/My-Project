import React from "react";
import gambar10 from "../../../img/gambar10.png";

function Verification() {
  return (
    <div>
      <div className="container max-w-screen">
        <div className="grid grid-cols-2">
          <div className=" p-20 border-r-2">
            <form action="/admin/Dashboard" method="postX">
              <img
                className=" mb-5 mt-3 text-center mx-auto"
                src="/img/gambar10.png"
                alt=""
              />
              <h1 className=" mb-5 mt-3 text-3xl text-center">
                Check your inbox
              </h1>
              <p className=" mb-5 mt-3 text-center ">
                We've just emailed you a 6-digit code. Please enterit below
              </p>

              <div className="sm:col-span-3 mb-3">
                <div className="flex justify-center gap-4 mt-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    nameX="password"
                    id="code1"
                    placeholder="0"
                    autocomplete="off"
                    required
                    className="px-1 block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    nameX="password"
                    id="code1"
                    placeholder="0"
                    autocomplete="off"
                    required
                    className="px-1 block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    nameX="password"
                    id="code1"
                    placeholder="0"
                    autocomplete="off"
                    required
                    className="px-1 block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    nameX="password"
                    id="code1"
                    placeholder="0"
                    autocomplete="off"
                    required
                    className="px-1 block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    nameX="password"
                    id="code1"
                    placeholder="0"
                    autocomplete="off"
                    required
                    className="px-1 block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    nameX="password"
                    id="code1"
                    placeholder="0"
                    autocomplete="off"
                    required
                    className="px-1 block w-10 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                <button
                type="submit"
                className="rounded-lg bg-[#3572EF] px-3 py-2 text-sm w-full font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
              <p className="mb-5 mt-3 text-center text-xs mt-5">Didn't receive the email? Click to resend </p>
            </form>
          </div>
          <div className="text-center max-w-full">
            <img
              src="/img/verif.png"
              alt="Image Login"
              className="mx-auto w-full"
            />
          </div>
        </div>
      </div>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </div>
  );
}

export default Verification;