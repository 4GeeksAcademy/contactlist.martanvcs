import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark px-4">
        <Link className="navbar-brand text-white" to="/">📱Contactos Pelusos</Link>
    </nav>
);

export default Navbar;
