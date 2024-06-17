import React from "react";
import "./Sidebar.scss";
import { TbHexagonPlusFilled } from "react-icons/tb";
import { LuFiles } from "react-icons/lu";
import { MdNotifications } from "react-icons/md";
import { PiSealQuestionFill } from "react-icons/pi";
import { MdChat } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="feather" src="/images/feather.png" />
            <div>
                <TbHexagonPlusFilled style={{ height: "25px", width: "25px", marginBottom: "10px" }} />
            </div>
            <hr className="line_div" />
            <div>
                <LuFiles style={{ height: "25px", width: "25px", marginTop: "10px" }} />
            </div>
            <div className="footer-menu">
                <div>
                    <MdNotifications style={{ height: "25px", width: "25px", marginTop: "20px" }} />
                </div>
                <div>
                    <PiSealQuestionFill style={{ height: "25px", width: "25px", marginTop: "20px" }} />
                </div>
                <div>
                    <MdChat style={{ height: "25px", width: "25px", marginTop: "20px" }} />
                </div>
                <div>
                    <FaUser style={{ height: "25px", width: "25px", marginTop: "20px" }} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
