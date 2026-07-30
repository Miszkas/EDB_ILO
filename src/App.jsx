import { Routes, Route } from "react-router-dom";

import DotGrid from "./components/DotGrid/DotGrid";
import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar";
import Part from "./components/Part/Part.jsx";
import Parts from "./components/Parts/Parts.jsx";
import Temat from "./components/Temat/Temat.jsx";
import { CATEGORIES } from "../data/categories";
import "./App.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="App">
      <Analytics />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lekcje" element={<Parts działy={CATEGORIES} />} />
        <Route path="/dzial/:dzialName" element={<Part />} />
        <Route path="/dzial/:dzialName/temat/:tematName" element={<Temat />} />
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
