import { Routes, Route } from "react-router-dom";

import DotGrid from "./components/DotGrid/DotGrid";
import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar";
import Part from "./components/Part/Part.jsx";
import Parts from "./components/Parts/Parts.jsx";
import Temat from "./components/Temat/Temat.jsx";
import { CATEGORIES } from "../data/categories";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lekcje" element={<Parts działy={CATEGORIES} />} />
        <Route path="/dział/:name" element={<Part />} />
        <Route path="/temat/:name" element={<Temat />} />
      </Routes>
      <DotGrid
        dotSize={6}
        gap={15}
        baseColor="#2F293A"
        activeColor="#1f7a8c"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        className="dot-grid"
      />
    </div>
  );
};

export default App;
