import React from "react";
import { Animation1 } from "./routes/Animation1/Animation1";
import { Animation2 } from "./routes/Animation2/Animation2";
import { Animation3 } from "./routes/Animation3/Animation3";
import { Animation4 } from "./routes/Animation4/Animation4";
import { Animation5 } from "./routes/Animation5/Animation5";
import { Animation6 } from "./routes/Animation6/Animation6";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/animation1" element={<Animation1 />} />
        <Route path="/animation2" element={<Animation2 />} />
        <Route path="/animation3" element={<Animation3 />} />
        <Route path="/animation4" element={<Animation4 />} />
        <Route path="/animation5" element={<Animation5 />} />
        <Route path="/animation6" element={<Animation6 />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
