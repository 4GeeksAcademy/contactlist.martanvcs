import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; 
import { Outlet, useLocation } from "react-router-dom"; 

export const Layout = () => {
    const location = useLocation(); 

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <ScrollToTop location={location}>
                <main className="flex-grow-1">
                    <Outlet /> 
                </main>
            </ScrollToTop>
            <Footer />
        </div>
    );
};




