import React from "react";
import "./App.css";
import { Animation1 } from "./routes/Animation1/Animation1";
import { Animation2 } from "./routes/Animation2/Animation2";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/animation1" element={<Animation1 />} />
        <Route path="/animation2" element={<Animation2 />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
