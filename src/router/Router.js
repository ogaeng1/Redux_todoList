import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./page/Detail";
import Home from "./page/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/detail/:id" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;