import React from "react";


function Login() {
  return (
    <div>
      <div className="container max-w-screen">
        <div className="grid grid-cols-2">
          <div className=" p-20 border-r-2">
            <form action="/admin/dashboard" method="postX">
              <img
                className=" mb-5 mt-3 text-center mx-auto"
                src="/img/gambar10.png"
                alt=""
              />
              <h1 className=" mb-5 mt-3 text-3xl text-center">
                Welcome to Proditify
              </h1>
              <p className=" mb-5 mt-3 text-center ">
                Enter your email and password to access your account
              </p>

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
                    required
                    className="px-3 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    required
                    className="px-3 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-end py-2">
              <p> <a href="/admin/ForgotPassword?">Forgot Password?</a></p>
              </div>
              <button
                type="submit"
                className="rounded-lg bg-[#3572EF] px-3 py-2 text-sm w-full font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
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
              <p className="mb-5 mt-3 text-center text-xs mt-5">Dont have account? <a href="/admin/Register">Sign Up</a></p>
            </form>
          </div>
          <div className="text-center max-w-full">
            <img
              src="/img/gambarlogin.png"
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

export default Login;
