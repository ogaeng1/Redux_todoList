import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>        
                {/* path 속성에 경로를 적고, 경로에 접속했을 때 보여줄 HTML 을 element 속성에 넣어준다 */}
                <Route path="/" element={<Home />}/>
                <Route path="/detail/:id" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;