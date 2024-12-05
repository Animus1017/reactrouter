import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const[isLoggedIn,setLoggedIn] =useState(false);
  return (
    <div className="w-screen h-screen overflow-x-hidden font-inter bg-richblack-900">
      <div className="w-[1080px] h-full mx-auto flex flex-col gap-10">
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard setLoggedIn={setLoggedIn}/>
            </PrivateRoute>
          }/>
        </Routes>
      </div>
    </div>

  )
}
export default App;
