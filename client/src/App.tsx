import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./layouts/NavBar";
import Pool from "./features/Pool";
import Dashboard from "./features/Dashboard";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="*" element={<Navigate to="/" />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/pools" element={<Pool />}></Route>
      </Routes>
    </div>
  );
}

export default App;
