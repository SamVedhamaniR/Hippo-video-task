import React from "react";
import "../Header/Header.scss";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className={`${location?.pathname == "/preview" ? "header-dark" : "header"}`}>
            {/* <div className="header__logo">Header</div> */}
            <div className="header__title">
                <h2>Assets</h2>
            </div>
            <div className="grup">
                {location?.pathname !== "/preview" && (
                    <div style={{ marginRight: "30px" }}>
                        <input className="search" placeholder="Search here" />
                        <IoIosSearch className="search_icon" />
                    </div>
                )}
                <div>
                    <button type="button" className={`${location?.pathname == "/preview" ? "btn-grad" : "create_btn"}`}>
                        <span style={{ marginRight: "15px" }}>Create</span>
                    </button>
                    <IoMdArrowDropdown className="arrow_icon" />
                </div>
            </div>
        </div>
    );
};

export default Header;
