import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Team from "./components/Content/Team";
import Orders from "./components/Content/Orders";
import Content from "./components/Content";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <div className="header fixed w-full left-0 top-0">
                  <Header />
              </div>

              <div className="content 300 font-bold mt-[100px]">
                  <Routes>
                      <Route path="/" element={<Content />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/orders" element={<Orders />} />
                  </Routes>
              </div>

              <div className="footer absolute w-full left-0 bottom-0">
                  <Footer />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
