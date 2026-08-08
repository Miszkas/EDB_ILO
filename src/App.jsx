import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar";
import Parts from "./components/Parts/Parts.jsx";
import { CATEGORIES } from "../data/categories";
import "./App.css";

const Part = lazy(() => import("./components/Part/Part.jsx"));
const Temat = lazy(() => import("./components/Temat/Temat.jsx"));
const DotGrid = lazy(() => import("./components/DotGrid/DotGrid"));
const Analytics = lazy(() =>
  import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })),
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const useAfterPaint = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const id = idle(() => setReady(true));
    return () => cancel(id);
  }, []);

  return ready;
};

const App = () => {
  const deferredReady = useAfterPaint();

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lekcje" element={<Parts działy={CATEGORIES} />} />
          <Route path="/dzial/:dzialName" element={<Part />} />
          <Route
            path="/dzial/:dzialName/temat/:tematName"
            element={<Temat />}
          />
        </Routes>
      </Suspense>
      {deferredReady && (
        <Suspense fallback={null}>
          <Analytics />
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
            className="dot-grid-bg"
          />
        </Suspense>
      )}
    </div>
  );
};

export default App;
