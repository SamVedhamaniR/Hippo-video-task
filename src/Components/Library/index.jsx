import React from "react";
import Layout from "../Layout/index";
import "../Library/Library.scss";
import { RiDragMove2Fill } from "react-icons/ri";
import { IoGitMergeOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { PiLineVerticalLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosPlayCircle } from "react-icons/io";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";

const Library = () => {
    const navigate = useNavigate();
    return (
        <div className="doodle">
            <Layout>
                <div className="card">
                    <Link to="/preview?1" style={{ textDecoration: "none" }}>
                        <div className="lib_card">
                            <div className="icon_mo">
                                <CiGlobe style={{ fill: "white" }} />
                                <FaVideo style={{ fill: "white", marginLeft: "10px" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    color: "white",
                                    position: "absolute",
                                    marginTop: "145px",
                                    marginLeft: "250px",
                                    fontSize: "14px",
                                    backgroundColor: "#313131",
                                }}
                            >
                                {/* <IoIosPlayCircle style={{ fill: "white", marginTop: "1px" }} /> */}
                                <div>48:27</div>
                            </div>
                            <img src="/images/mobile-phone-video.jpg" className="image_crtn" />

                            <div className="text-check">
                                <div>
                                    <h4 style={{ marginLeft: "-41px", marginBottom: "6px", color: "black" }}>Autumn Springs</h4>
                                    <span style={{ marginLeft: "10px", color: "#b5b0b0" }}>Recorded on 01 Jan 2000</span>
                                </div>
                                <div className="more-opt">
                                    <MdModeEdit style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                    <RiDeleteBin5Fill style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/preview?2" style={{ textDecoration: "none" }}>
                        <div className="lib_card">
                            <input type="checkbox" className="checkbox_mo" style={{ height: "17px", width: "17px", margin: "17px 2px 2px 12px" }} />
                            <div className="icon_mo">
                                <CiGlobe style={{ fill: "white" }} />
                                <FaVideo style={{ fill: "white", marginLeft: "10px" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    color: "white",
                                    position: "absolute",
                                    marginTop: "145px",
                                    marginLeft: "258px",
                                    fontSize: "14px",
                                    backgroundColor: "#313131",
                                }}
                            >
                                <IoIosPlayCircle style={{ fill: "white", marginTop: "1px" }} />
                                <div>22</div>
                            </div>
                            <img src="/images/mobile-phone-video.jpg" className="image_crtn" />

                            <div className="text-check">
                                <div>
                                    <h4 style={{ marginLeft: "-41px", marginBottom: "6px", color: "black" }}>Autumn Springs</h4>
                                    <span style={{ marginLeft: "10px", color: "#b5b0b0" }}>Recorded on 01 Jan 2000</span>
                                </div>
                                <div className="more-opt">
                                    <MdModeEdit style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                    <RiDeleteBin5Fill style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/preview?3" style={{ textDecoration: "none" }}>
                        <div className="lib_card">
                            <input type="checkbox" className="checkbox_mo" style={{ height: "17px", width: "17px", margin: "17px 2px 2px 12px" }} />
                            <div className="icon_mo">
                                <CiGlobe style={{ fill: "white" }} />
                                <FaVideo style={{ fill: "white", marginLeft: "10px" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    color: "white",
                                    position: "absolute",
                                    marginTop: "145px",
                                    marginLeft: "250px",
                                    fontSize: "14px",
                                    backgroundColor: "#313131",
                                }}
                            >
                                <IoIosPlayCircle style={{ fill: "white", marginTop: "1px" }} />
                                <div>123</div>
                            </div>
                            <img src="/images/technology.jpg" className="image_crtn" />

                            <div className="text-check">
                                <div>
                                    <h4 style={{ marginLeft: "-41px", marginBottom: "6px", color: "black" }}>Autumn Springs</h4>
                                    <span style={{ marginLeft: "10px", color: "#b5b0b0" }}>Recorded on 01 Jan 2000</span>
                                </div>
                                <div className="more-opt">
                                    <MdModeEdit style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                    <RiDeleteBin5Fill style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/preview?4" style={{ textDecoration: "none" }}>
                        <div className="lib_card">
                            <div className="icon_mo">
                                <CiGlobe style={{ fill: "white" }} />
                                <FaVideo style={{ fill: "white", marginLeft: "10px" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    color: "white",
                                    position: "absolute",
                                    marginTop: "145px",
                                    marginLeft: "250px",
                                    fontSize: "14px",
                                    backgroundColor: "#313131",
                                }}
                            >
                                {/* <IoIosPlayCircle style={{ fill: "white", marginTop: "1px" }} /> */}
                                <div>48:27</div>
                            </div>
                            <img src="/images/technology.jpg" className="image_crtn" />

                            <div className="text-check">
                                <div>
                                    <h4 style={{ marginLeft: "-41px", marginBottom: "6px", color: "black" }}>Autumn Springs</h4>
                                    <span style={{ marginLeft: "10px", color: "#b5b0b0" }}>Recorded on 01 Jan 2000</span>
                                </div>
                                <div className="more-opt">
                                    <MdModeEdit style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                    <RiDeleteBin5Fill style={{ marginLeft: "10px", fill: "#3c3a3a" }} className="btn-round" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div style={{ marginLeft: "-180px", marginTop: "-250px" }}>
                    <div className="library_menu">
                        <div style={{ display: "flex" }}>
                            <input type="checkbox" style={{ padding: "10px", height: "17px", width: "17px", marginTop: "10px" }} />
                            <span className="test_name">
                                <p style={{ marginTop: "10px" }}>Select All</p>
                            </span>
                        </div>
                        <div>
                            <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} />
                        </div>
                        <div className="lib_flex">
                            <RiDragMove2Fill />
                            <span className="test_name">Move</span>
                        </div>
                        <div>
                            <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} />
                        </div>
                        <div className="lib_flex">
                            <IoGitMergeOutline />
                            <span className="test_name">Merge</span>
                        </div>
                        <div>
                            <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} />
                        </div>
                        <div className="lib_flex">
                            <ImBin className="bin"></ImBin>
                            <span className="test_name">Delete</span>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Library;
