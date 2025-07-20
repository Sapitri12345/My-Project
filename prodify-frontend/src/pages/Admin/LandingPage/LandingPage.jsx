import React, { useState } from "react";
import SideBar from "../../../components/SideBar";
import { Link } from "react-router-dom";
import logoo from "../../../img/logoo.jpeg";
import image from "../../../img/image.png";
import image2 from "../../../img/image2.png";
import image3 from "../../../img/image3.png";
import image4 from "../../../img/image4.png";
import image5 from "../../../img/image5.png";
import image6 from "../../../img/image6.png";
import image7 from "../../../img/image7.png";
import image8 from "../../../img/image8.png";
import image9 from "../../../img/image9.png";

const Pomodoro3 = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div>
        <div className="bg-slate-950 w-full">
          <nav className="bg-[#ffff] p-3 border-b-2">
            <div className="flex flex-row ml-auto">
              <div className="flex flex-row">
                <img src={logoo} alt="" />
                <p className="mt-2 ml-2">Prodify</p>
              </div>
              <div className="mt-2 ml-auto">
                <a href="" className="px-2 py-1.5 rounded-md">
                  Home
                </a>
                <a href="" className="px-2 py-1.5 rounded-md">
                  About
                </a>
                <a href="" className=" px-2 py-1.5 rounded-md">
                  Features
                </a>
              </div>

              <div className="flex flex-row ml-auto">
                <a href="/admin/Register">
                  <div className="py-2 px-2 border rounded-lg mr-2">
                    Sign Up
                  </div>
                </a>
                <a href="">
                  <div className="py-2 px-2 bg-blue-500 rounded-lg text-[#ffff]">
                    Start for free
                  </div>
                </a>
              </div>
            </div>
          </nav>
          <div className="bg-[#ffff]">
            <div className="flex flex-row mx-20">
              <div className="mt-36">
                <p className="text-5xl">
                  The Project Management Solution Built for You
                </p>
                <p className="text-slate-400 mt-5">
                  Prodify streamlines personal and team tasks, helping achieve
                  goals faster and more efficiently.
                </p>
                <div className="flex flex-row mt-5">
                  <a href="">
                    <p className="py-2 px-2 bg-blue-500 rounded-lg text-[#ffff] w-28 mr-2">
                      Start for free
                    </p>
                  </a>
                  <a href="">
                    <p className="py-2 px-2 border rounded-lg w-28">
                      Learn more
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
            <div className="flex flex-row mx-28 mt-5">
              <div className="mr-20">
                <img className="w-full" src={image2} alt="" />
              </div>
              <div className="mt-30">
                <a href="">
                  <p className="py-2 px-2 text-center border border-blue-500 rounded-full text-blue-500 w-28 mr-2">
                    About Us
                  </p>
                </a>
                <p className="text-4xl mt-5">
                  Your Solution to Productivity Challenges
                </p>
                <p className="text-slate-400 mt-5 mb-5">
                  At Prodify, we know the challenges of staying organized and
                  achieving goals. That’s why we created a powerful platform to
                  help individuals and teams boost productivity and reach their
                  full potential.
                </p>
                <a href="">
                  <p className="py-2 px-2 border rounded-lg w-28">Learn more</p>
                </a>
              </div>
            </div>
            <div className="flex justify-center align-items-center mt-20">
              <button className="border border-blue-500 rounded-lg py-2 px-2 text-blue-500">
                Features
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <p className="text-4xl">Features to Boost Your Focus</p>
            </div>
            <div className="flex justify-center mt-3">
              <p className="text-slate-400 text">
                Prodify helps you organize personal tasks and collaborative
                projects with ease and efficiency.
              </p>
            </div>
            <div className="flex justify-center">
              <p className="text-slate-400 text">
                Boost your productivity and achieve your goals with our
                comprehensive set of features
              </p>
            </div>
            <div className="flex flex-row justify-center mx-20 mt-20 ">
              <div className="py-5 px-4 bg-blue-100 rounded-lg">
                <p className="text-4xl">Weekly Plan</p>
                <p className="text-slate-400 mt-3">
                  Manage your personal task and weekly plans effortlessly.
                </p>
                <img className="mt-3" src={image3} alt="" />
              </div>
              <div className="py-5 px-4 bg-blue-100 rounded-lg ml-5">
                <p className="text-4xl">My Projects</p>
                <p className="text-slate-400 mt-3">
                  Keep track of collaborative projects seamlessly & Stay
                  organized.
                </p>
                <img className="mt-3" src={image4} alt="" />
              </div>
              <div className="py-5 px-4 bg-blue-100 rounded-lg ml-5">
                <p className="text-4xl">Chats</p>
                <p className="text-slate-400 mt-3">
                  Communicate effortlessly with your project team members.{" "}
                </p>
                <img className="mt-3" src={image5} alt="" />
              </div>
            </div>
            <div className="flex flex-row justify-center mx-20 mt-10 ">
              <div className="py-5 px-4 bg-blue-100 rounded-lg">
                <p className="text-4xl">Pomodoro Timer</p>
                <p className="text-slate-400 mt-3">
                  Improve focus with the Pomodoro technique. Split tasks into
                  intervals to optimize efficiency.
                </p>
                <img className="mt-3" src={image6} alt="" />
              </div>
              <div className="py-5 px-4 bg-blue-100 rounded-lg ml-5">
                <p className="text-4xl">Task Management</p>
                <p className="text-slate-400 mt-3">
                  Effortlessly manage and track your tasks. Prioritize,
                  delegate, and complete tasks efficiently.
                </p>
                <img className="mt-3" src={image7} alt="" />
              </div>
              <div className="py-5 px-4 bg-blue-100 rounded-lg ml-5">
                <p className="text-4xl">Real-Time Collaboration</p>
                <p className="text-slate-400 mt-3">
                  Collaborate effortlessly with real-time features, boosting
                  teamwork and productivity.
                </p>
                <img className="mt-3" src={image8} alt="" />
              </div>
            </div>
            <div className="mt-20 mx-20">
              <button className="border border-blue-500 rounded-lg py-2 px-2 text-blue-500">
                Testimonials
              </button>
              <div className="flex flex-row mt-5">
                <p className="text-4xl">What Do Users Say About Prodify?</p>
                <p className="ml-24">
                  Boosting Productivity and Team Collaboration Made Easy. Hear
                  from Those Who Have Used Prodify to Manage Tasks and Projects
                  More Efficiently.
                </p>
              </div>
            </div>
            <img className="mx-20 mt-20" src={image9} alt="" />
            <div className="flex justify-center align-items-center mt-56">
              <button className="border border-blue-500 rounded-lg py-2 px-2 text-blue-500">
                Get Started
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <p className="text-4xl">Let’s Get Started with Prodify</p>
            </div>
            <div className="flex justify-center">
              <p className="text-slate-400 text">
                Join Prodify today for a streamlined, collaborative approach to
                task and project management. Start now and see your goals come
                to life.
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <a href="">
                <p className="py-2 px-2 bg-blue-500 rounded-lg text-[#ffff]">
                  Start for free
                </p>
              </a>
              <a href="">
                <p className="py-2 px-2 border rounded-lg ml-5 ">Learn more</p>
              </a>
            </div>

            <div className="flex flex-row mx-20 mt-64">
              <div>
                <div className="flex flex-row">
                  <img src={logoo} alt="" />
                  <p className="mt-2 ml-2">Prodify</p>
                </div>
                <p className="mr-60 mt-3">
                  A task management and collaboration
                </p>
                <p>website to help individuals and teams</p>
                <p>boost productivity by organizing tasks and projects</p>
              </div>
              <div className="flex flex-row ml-auto">
                <div className="mr-10">
                  <p>Company</p>
                  <p className="mt-3 text-slate-500">About Us</p>
                  <p className="mt-3 text-slate-500">Contact Us</p>
                </div>
                <div className="mr-10">
                  <p>Resource</p>
                  <p className="mt-3 text-slate-500">Help Center</p>
                  <p className="mt-3 text-slate-500">Guidnes & Tutorials</p>
                </div>
                <div>
                  <p>Legal</p>
                  <p className="mt-3 text-slate-500">Privacy Policy</p>
                  <p className="mt-3 text-slate-500">Term Or Services</p>
                </div>
              </div>
            </div>

            <hr className="mt-20" />
            <div className="flex flex-row py-5 px-5 mx-16">
              <p className="text-xs">
                Copyright 2024 © Prodify. All Rights reserved
              </p>
              <div className="flex flex-row ml-auto">
                <a className="mr-2" href="">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a className="mr-2" href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a className="mr-2" href="">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a className="mr-2" href="">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro3;
