import React from "react";
import AuthNav from "./AuthNav";

export default function NavBar() {
    return (
        <div className="nav-container mb-3">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand logo" />
                    <AuthNav />
                </div>
            </nav>
        </div>
    )
}
