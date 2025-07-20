import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";
import frame4 from "../../../img/frame4.png";
import frame from "../../../img/Frame.png";
import frame2 from "../../../img/Frame2.png";
import saya from "../../../img/saya.png";
import sarah from "../../../img/sarah.png";

const Financy2 = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-5">
              <div>
                <p className="text-3xl">Financy</p>
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
            <section>
              <div className="flex flex-row">
                <div className="py-3 px-2 border rounded-full mr-2">
                  <a
                    className="py-2 px-4 rounded-full"
                    href="/admin/financy"
                  >
                    Tasks
                  </a>
                  <a className="py-2 px-4 rounded-full bg-blue-500 text-[#ffff]" href="/admin/financy2">
                    {" "}
                    Feed
                  </a>
                </div>
                <a href="" className="px-2 py-2 rounded-lg border mr-2">
                  Board View <i class="fa-solid fa-caret-down"></i>
                </a>
                <a href="" className="px-2 py-2 rounded-lg border">
                  <i class="fa-solid fa-filter"></i> Filters
                </a>
              </div>
              <hr className="mt-5" />
              <div className="py-5 px-5 mx-44 border rounded-lg w-auto mt-5">
                <div className="flex flex-row ">
                  <img className="h-10 w-10" src={saya} alt="" />
                  <div className="flex flex-row ml-auto py-2 px-2 border rounded-lg text-slate-400">
                    <p>What are you working on?</p>
                    <div className="ml-96">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-5">
                  <div className="py-2 px-2 border rounded-lg w-36">
                    <i class="fa-regular fa-image"></i> Ficture/Video
                  </div>
                  <div className="py-2 px-2 border rounded-lg w-36 ml-5">
                    <i class="fa-solid fa-link"></i> Attachment
                  </div>
                  <p className="py-2 px-2 bg-blue-500 rounded-lg text-[#ffff] ml-auto">
                    Post
                  </p>
                </div>
              </div>

              <div className="py-5 px-5 mx-44 mt-10 border rounded-lg w-auto">
                <p>Wireframes Update:</p>
                <p>
                  Hey team, I’ve completed the initial wireframes for the
                  landing page. Key sections include:
                </p>
                <li>
                  Header and Hero Section: Clean design with a strong
                  call-to-action.
                </li>
                <li>Services Section: Visual icons and brief descriptions.</li>
                <li>Customer Testimonials: Carousel format.</li>
                <li>
                  About Us and Blog Preview: Engaging content to build trust and
                  improve SEO.
                </li>
                <li>FAQ Section: Reduces customer inquiries.</li>
                <p className="mt-10">Next Steps:</p>
                <li>
                  Feedback Request: Please review and provide feedback by
                  Friday.
                </li>
                <li>
                  Timeline: Finalize wireframes and hand over to Jonathan next
                  Monday.
                </li>
                <div className="flex flex-row mt-10">
                  <img className="h-10 w-10" src={sarah} alt="" />
                  <p className="ml-5 mt-2">Alex</p>
                  <li className="ml-5 mt-2 text-slate-500">Now</li>
                </div>
                <div className="py-2 px-2 border rounded-lg flex flex-row mt-5 ">
                  <div className="py-3 px-3 bg-blue-500 text-white rounded-lg w-12">
                    <i class="fa-solid fa-link"></i>
                  </div>
                  <div className="ml-2">
                    <p>Financy - Landing Page (Wireframe)</p>
                    <p className="text-slate-400">Figma.com</p>
                  </div>
                </div>
                <hr className="mt-5" />
                <div className="flex flex-row border rounded-lg text-slate-500 py-2 px-2 mt-5">
                  <p>Add a comment</p>
                  <div className="ml-auto">
                    <i class="fa-regular fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Financy2;
