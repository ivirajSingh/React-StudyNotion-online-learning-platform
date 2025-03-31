import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute"

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return(
    <div className="flex flex-col w-screen min-h-screen bg-richblack-800  ">
     <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/signup" element={<SignUp setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>}/>

     </Routes>
    </div>
  )
}

export default App;
