import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Nav from "./components/nav";
import Register from "./components/register";
import Device from "./components/device";
import Detail from "./components/detail";
import Dashboard from "./components/dashboard";

function App() {





  return (
    <div className="App">
      <>
          <Routes>
            <Route exact path="*" element={<Nav />} />
            <Route exact path="/login/*" element={<Login />} />
            <Route exact path="/register/*" element={<Register />} />
            <Route exact path="/device/*" element={<Device />} />
            <Route exact path="/detail/*" element={<Detail />} />
            <Route exact path="/dashboard/*" element={<Dashboard />} />
          </Routes>

      </>

    </div>
  )
}


export default App;
