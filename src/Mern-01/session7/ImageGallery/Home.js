import React from "react";
import Albums from "./Albums";
import Photos from "./Photos";
import { Route, Routes } from "react-router-dom";

const Home = () => {
    return(
        <Routes>
            <Route path="/" element={<Albums/>} />
            <Route path="/photos/:id" element={<Photos/>} />
        </Routes>
    );
};

export default Home;