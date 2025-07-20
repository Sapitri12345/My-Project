import React from "react";

function Login() {
  return (
    <div className="bg-[#926cf1]">
      <div className="container max-w-5xl mx-auto py-24">
        <div className="grid grid-cols-2">
          <div className="bg-[#7A51E3] p-20 border-r-2 border-b-2 border-[#7A51E3]">
            <form action="/admin/dashboard" method="postX">
              <img src="/src/img/Logo.png" alt="Logo" className="mx-auto" />
              <h1 className="font-extrabold mb-5 mt-3 text-3xl text-center text-white">
                Lapak Event
              </h1>
              <div className="sm:col-span-3 mb-3">
                <label
                  for="username"
                  className="block text-xl font-medium leading-6 text-white">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    nameX="username"
                    id="username"
                    autocomplete="off"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3 mb-3">
                <label
                  for="password"
                  className="block font-medium leading-6 text-white text-xl">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    nameX="password"
                    id="password"
                    autocomplete="off"
                    className="px-3 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="rememberme">
                  <input type="checkbox" nameX="" id="rememberme" />
                  <span className="text-white">Remember me</span>
                </label>

                <span className="float-right text-white">Forget password</span>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-3 py-2 text-sm w-full font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                LOGIN
              </button>
            </form>
          </div>
          <div className="text-center">
            <img
              src="/src/img/image-login.png"
              alt="Image Login"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </div>
  );
}

export default Login;
