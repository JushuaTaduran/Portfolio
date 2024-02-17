import React from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} tit />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
