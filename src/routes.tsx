import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Content from "./components/Content";
import Index from "./components/Content/Team";
import Orders from "./components/Content/Orders";

class Routes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='/team' element={<Index />} />
                    <Route path='/orders' element={<Orders />} />
                </Routes>
            </>
        );
    }
}

export default Routes;