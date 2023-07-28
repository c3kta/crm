import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Team from "./components/Content/Team/Team";
// import Routes from "./routes";
// import Content from "./components/Content";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <div className="header fixed w-full left-0 top-0">
                  <Header />
              </div>

              <div className="content 300 font-bold mt-[50px]">
                  {/*<Routes>*/}
                  {/*    <Route path='/' element={<Content />} />*/}
                  {/*</Routes>*/}

                  <Team />


                  {/*<Routes />*/}
              </div>

              <div className="footer absolute w-full left-0 bottom-0">
                  <Footer />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
