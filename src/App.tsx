import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <div className="header fixed w-full left-0 top-0">
                  <Header />
              </div>

              <div className="content 300 font-bold mt-[100px]">
                  <AppRoutes />
              </div>

              <div className="footer absolute w-full left-0 bottom-0">
                  <Footer />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
