import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className="App">
          <div className="header fixed w-full left-0 top-0">
              <Header />
          </div>

          <div className="content 300 font-bold mt-[50px]">
            ss
          </div>

          <div className="footer absolute w-full left-0 bottom-0">
              <Footer />
          </div>
      </div>
  );
}

export default App;
