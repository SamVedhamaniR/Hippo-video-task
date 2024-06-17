import React from "react";
import Header from "../Header/index";
import Sidebar from "../Sidebar/index";
const Layout = (props) => {
    return (
        <>
            {" "}
            <Sidebar />
            <Header />
            <div>{props?.children}</div>
        </>
    );
};

export default Layout;
