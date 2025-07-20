import React from "react";
import gambar10 from "../../../img/gambar10.png";

function Done() {
  return (
    <div>
      <div className="container max-w-screen">
        <div className="grid grid-cols-2">
          <div className=" p-20 border-r-2">
            <form action="/admin/Login" method="postX">
              <img
                className=" mb-5 mt-3 text-center mx-auto"
                src={gambar10}
                alt=""
              />
              <h1 className=" mb-5 mt-3 text-3xl text-center">
                All done!
              </h1>
              <p className=" mb-5 mt-3 text-center ">
                Your password has been reset
              </p>

              <div className="sm:col-span-3 mb-3 py-4">
              <img
              src="/src/img/Donee.png"
              alt="Image Login"
              className="mx-auto w-medium"
            />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-[#3572EF] px-3 py-2 text-sm w-full font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </form>
          </div>
          <div className="text-center max-w-full">
            <img
              src="/src/img/gambarlogin.png"
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

export default Done
