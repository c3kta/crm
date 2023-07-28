import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Content from "./components/Content";

class Routes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Content />} />
                </Routes>
            </>
        );
    }
}

export default Routes;