import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import ScrollToTop from "../components/ScrollToTop"; 

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <ScrollToTop />
            <main className="flex-grow-1">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
