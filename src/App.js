import React from "react";
import { Animation2 } from "./routes/Animation2/Animation2";
import { Animation3 } from "./routes/Animation3/Animation3";
import { Animation4 } from "./routes/Animation4/Animation4";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Animation1 } from "./routes/Animation1/Animation1";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/animation1" element={<Animation1 />} />
        <Route path="/animation2" element={<Animation2 />} />
        <Route path="/animation3" element={<Animation3 />} />
        <Route path="/animation4" element={<Animation4 />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
