import React from "react";
import Layout from "../Layout/index";
import "./Preview.scss";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { GoScreenFull } from "react-icons/go";
import { LuSettings2 } from "react-icons/lu";
import { FaShare } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { GoImage } from "react-icons/go";
import { PiUserList } from "react-icons/pi";
import { FaHandSparkles } from "react-icons/fa6";
import { FiNavigation } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
const Preview = () => {
    const location = useLocation();
    console.log(location?.search?.split("?")?.[1], "location");
    const type = location?.search?.split("?")?.[1];
    return (
        <div className="doodle">
            <Layout>
                <div className="grup ">
                    <div style={{ height: "1000px" }}>
                        <MdMoreVert className="kum-icon" />
                        <img
                            className="template"
                            src={`${type == "1" || type == "2" ? "/images/mobile-phone-video.jpg" : "/images/technology.jpg"}`}
                        />
                        <div class="audio-player">
                            <FaPlay style={{ fill: "#ffffff", marginRight: "15px", marginLeft: "10px" }} />
                            <progress id="file" style={{ width: "400px" }} value="22" max="100">
                                {" "}
                                32%{" "}
                            </progress>
                            <div class="time">
                                <span class="current-time">02:44</span> / <span class="total-time">13:33</span>
                            </div>
                            <FaVolumeHigh style={{ fill: "#ffffff", marginLeft: "10px", height: "25px", width: "25px" }} />
                            <LuSettings2
                                style={{ fill: "rgb(33 31 31 / 70%)", stroke: "#ffffff", marginLeft: "10px", height: "25px", width: "25px" }}
                            />
                            <GoScreenFull style={{ fill: "#ffffff", marginLeft: "10px", height: "25px", width: "25px" }} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="alin">
                                <h2>Ship Stars Cosmos</h2>
                                <div style={{ display: "flex", fontSize: "14px", position: "space-between", marginTop: "-29px" }}>
                                    <p style={{ fontStyle: "italic" }}>Created on</p>
                                    <span> {"  "}</span>
                                    <h5> 01 Jan 2000</h5>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginLeft: "200px", marginTop: "10px" }}>
                                <div>
                                    <FaShare className="checker" style={{ marginLeft: "29px" }} />
                                    <button className="btn-preview">Share</button>
                                </div>
                                <div>
                                    <MdEdit className="checker" />
                                    <button className="btn-preview">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginLeft: "100px", marginTop: "10px" }}>
                            <div>
                                <div className="opt-btn">
                                    <GoImage style={{ height: "25px", width: "25px", marginRight: "162px", marginTop: "1px" }} />
                                    <span className="block">Video thumbnail</span>
                                </div>
                                <div className="opt-btn">
                                    <PiUserList style={{ height: "25px", width: "25px", marginRight: "162px", marginTop: "1px" }} />
                                    <span className="block">Interactive CTAs</span>
                                </div>
                            </div>
                            <div>
                                <div className="opt-btn">
                                    <FaHandSparkles style={{ height: "25px", width: "25px", marginRight: "162px", marginTop: "1px" }} />
                                    <span className="block">Virtual background</span>
                                </div>
                                <div className="opt-btn">
                                    <FiNavigation style={{ height: "25px", width: "25px", marginRight: "162px", marginTop: "1px" }} />
                                    <span className="block">Track video</span>
                                </div>
                            </div>
                        </div>
                        <div className="master">
                            <div style={{ display: "flex" }}>
                                <div>
                                    <p style={{ fontWeight: "600", marginLeft: "-125px" }}>Last Watched</p>
                                    <p className="havo" style={{}}>
                                        Last person watched details shown here
                                    </p>
                                </div>
                                <div>
                                    <h4 className="vaaga">Anonymous view (217.XXX.108.XXX)</h4>
                                    <p className="villay">2023-02--17T16:28:38Z</p>
                                </div>
                            </div>
                            <hr style={{ color: "#e7e0e0", border: "1px solid" }} />
                            <div style={{ display: "flex" }}>
                                <div>
                                    <p style={{ fontWeight: "600", marginLeft: "-195px" }}>Edit Sales Page</p>
                                    <p className="havo">Add/Select/remove sales page template for this video</p>
                                </div>
                                <div>
                                    <div>
                                        <h4 className="new-year">New year greetings</h4>
                                        <div className="did">
                                            <div>
                                                <a href="" style={{ color: "cadetblue" }}>
                                                    Preview
                                                </a>
                                            </div>
                                            <div>
                                                <a href="" style={{ color: "cadetblue" }}>
                                                    Edit
                                                </a>
                                            </div>
                                            <div>
                                                <a href="" style={{ color: "#727878" }}>
                                                    Remove
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="spcs" src="/images/preview.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "1000px" }}>
                        <p className="paramom">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco minim veniam, quis nostrud exercitation ullamco s
                            sdlslsi sls la <span style={{ color: "#0a94f3" }}>more...</span>
                        </p>
                        <div style={{ display: "flex", marginBottom: "18px" }}>
                            <label className="tit">Folders</label>
                            <input className="fieldty" />
                            <p className="tester">Test</p>
                            <div className="plusminus">
                                <GoPlus style={{ fill: "#ffffff" }} />
                                <LuMinus style={{ fill: "#ffffff", stroke: "#fff" }} />
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <label className="titag">Tags</label>
                            <input className="fieldty" placeHolder="Click here to add tags" />
                            {/* <p className="tester">Click here to add tags</p> */}
                            <div className="plusminus" style={{ marginLeft: "154px" }}>
                                <GoPlus style={{ fill: "#ffffff" }} />
                                <LuMinus style={{ fill: "#ffffff", stroke: "#fff" }} />
                            </div>
                        </div>
                        <div className="griup">
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                                <div>
                                    <div>
                                        <h2>136</h2>
                                        <p>Total Plays</p>
                                    </div>
                                    {/* <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} /> */}
                                    <div>
                                        <h2>76</h2>
                                        <p>Unique Views</p>
                                    </div>{" "}
                                    {/* <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} /> */}
                                </div>
                                <div>
                                    <div>
                                        <h2>88%</h2>
                                        <p>Avg watch rate</p>
                                        {/* <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} /> */}
                                    </div>{" "}
                                    <div>
                                        <h2>36</h2>
                                        <p>Fully Watched</p>
                                        {/* <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} /> */}
                                    </div>{" "}
                                </div>
                                <div>
                                    <div>
                                        <h2>12</h2>
                                        <p>Actions</p>
                                    </div>{" "}
                                    {/* <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} /> */}
                                    <div>
                                        <h2>Ind</h2>
                                        <p>Popular Region</p>
                                        {/* <PiLineVerticalLight style={{ fill: "rgb(132 126 126)" }} /> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="matty">View Detailed Reports</h3>
                            </div>
                        </div>
                        <div className="lastmodule">
                            <div style={{ display: "flex" }}>
                                <div style={{ width: "50%" }}>
                                    <div className="textler">Player theme</div>
                                    <div className="textler">Player logo</div>
                                    <div className="textler">Privacy</div>
                                    <div className="textler">Subtitiles</div>
                                    <div className="textler">Settings enabled</div>
                                </div>
                                <div>
                                    <div style={{ marginLeft: "180px", fontStyle: "italic" }}>
                                        #4080F0
                                        <FaCircle style={{ fill: "#4080F0", marginLeft: "5px", marginTop: "2px", position: "absolute" }} />
                                    </div>
                                    <div style={{ marginTop: "16px", marginLeft: "150px", display: "flex" }}>
                                        <div className="img-holl">
                                            <img src="/images/bmw.png" style={{ height: "20px", width: "20px" }} />
                                        </div>
                                        <FaLink style={{ marginTop: "" }} />
                                    </div>
                                    <div style={{ display: "flex", marginLeft: "126px" }}>
                                        <p style={{ fontFamily: "sans-serif" }}>Anyone with the link</p>
                                        <FaGlobe style={{ marginTop: "17px", marginLeft: "2px" }} />
                                    </div>
                                    <div style={{ fontFamily: "sans-serif", marginLeft: "230px" }}>English</div>
                                    <div style={{ textAlign: "end", marginTop: "10px" }}>
                                        <div>Comments </div>
                                        <div>Reactions </div>
                                        <div>Playback speed</div>
                                    </div>
                                </div>
                            </div>
                            <div className="matty" style={{ padding: "15px", marginTop: "11px" }}>
                                Change Video settings
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Preview;
