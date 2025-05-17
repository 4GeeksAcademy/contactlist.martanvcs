import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact"; 
import Layout from "./pages/Layout";

const AppRoutes = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<AddContact />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default AppRoutes;

