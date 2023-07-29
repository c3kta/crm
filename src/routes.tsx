import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Content from "./components/Content";
import Team from "./components/Content/Team";
import Orders from "./components/Content/Orders";
import Price from "./components/Content/Price";
import Purchases from "./components/Content/Purchases";
import Schedule from "./components/Content/Schedule";
import Privacy from "./components/Content/Privacy";
import About from "./components/Content/About";
import Contacts from "./components/Content/Contacts";
import New from "./components/Content/Orders/Order/New";

class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/purchases" element={<Purchases />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/new" element={<New />} />
                </Routes>
            </div>
        );
    }
}

export default AppRoutes;