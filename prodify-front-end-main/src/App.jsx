import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Admin/Login/Login";
import Admin from "./pages/Admin/Dashboard/Dashboard";
import Transaction from "./pages/Admin/Transaction/transaksi";
import Tasks from "./pages/Admin/Tasks/tasks";
import Timeline from "./pages/Admin/Timeline/Timeline";
import Tasks2 from "./pages/Admin/Tasks/Task2";
import Tasks3 from "./pages/Admin/Tasks/Taks3";
import Massage2 from "./pages/Admin/Massage/Massage2";
import Massage from "./pages/Admin/Massage/Massage";
import Pomodoro from "./pages/Admin/Pomodoro/Pomodoro";
import Pomodoro2 from "./pages/Admin/Pomodoro/Pomodoro2";
import Pomodoro3 from "./pages/Admin/Pomodoro/Pamodoro3";
import TambahPomodoro from "./pages/Admin/Pomodoro/TambahPamodoro";
import SavePomodoro from "./pages/Admin/Pomodoro/SavePamodoro";
import Financy from "./pages/Admin/Financy/Financy";
import Financy2 from "./pages/Admin/Financy/Financy2";
import LandingPage from "./pages/Admin/LandingPage/LandingPage";
import Register from "./pages/Admin/Register/Register";
import ForgotPassword from "./pages/Admin/ForgotPassword/ForgotPassword";
import PasswordReset from "./pages/Admin/PasswordReset/PasswordReset";
import SetNewPassword from "./pages/Admin/SetNewPassword/SetNewPassword";
import Verification from "./pages/Admin/Verification/Verification";
import Done from "./pages/Admin/Done/Done";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Login />} path="/admin/Login" />
          <Route element={<Register />} path="/admin/Register" />
          <Route element={<ForgotPassword />} path="/admin/ForgotPassword"/>
          <Route element={<PasswordReset />} path="/admin/PasswordReset"/>
          <Route element={<SetNewPassword/>} path="/admin/SetNewPassword"/>
          <Route element={<Verification/>} path="/admin/Verification"/>
          <Route element={<Done/>} path="/admin/Done"/>
          <Route element={<Admin />} path="/admin/dashboard" />
          <Route element={<Tasks />} path="/admin/tasks" />
          <Route element={<Tasks2 />} path="/admin/tasks2" />
          <Route element={<Tasks3 />} path="/admin/tasks3" />
          <Route element={<Timeline />} path="/admin/timeline" />
          <Route element={<Massage />} path="/admin/massage" />
          <Route element={<Massage2 />} path="/admin/massage2" />
          <Route element={<Pomodoro />} path="/admin/pomodoro" />
          <Route element={<Pomodoro2 />} path="/admin/pomodoro2" />
          <Route element={<Pomodoro3 />} path="/admin/pomodoro3" />
          <Route element={<TambahPomodoro />} path="/admin/tambahpamodoro" />
          <Route element={<SavePomodoro />} path="/admin/savepamodoro" />
          <Route element={<Financy />} path="/admin/financy" />
          <Route element={<Financy2 />} path="/admin/financy2" />
          <Route element={<LandingPage />} path="/admin/landingpage" />


          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
