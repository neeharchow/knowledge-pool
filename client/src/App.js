import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./layouts/NavBar";
import Ocean from "./components/Ocean";
import Pool from "./components/Pool";
import Dashboard from "./components/Dashboard";
import Drop from "./components/Drop";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/drops" element={<Drop />}></Route>
        <Route path="/pools" element={<Pool />}></Route>
        <Route path="/oceans" element={<Ocean />}></Route>
      </Routes>
    </>
  );
}

export default App;
