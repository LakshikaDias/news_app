import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/home";
import News1 from "./Components/news/news1";
import News2 from "./Components/news/news2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="news1" element={<News1 />}></Route>
          <Route path="news2" element={<News2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
