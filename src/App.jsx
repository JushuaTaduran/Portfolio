import React from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./pages/cv";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} tit />
          <Route path="cv" element={<CV />} tit />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
