import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Content from "./components/Content";
import Team from "./components/Content/Team";
import Orders from "./components/Content/Orders";

class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        );
    }
}

export default AppRoutes;