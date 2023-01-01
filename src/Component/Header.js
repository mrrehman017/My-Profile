import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Style.css";

const Header = () => {
  const [theme, setTheme] = useState("dark-theme");
  const [sidebar, setSidebar] = useState(false);
  const [showlight, setShowlight] = useState(true);
  const [showdark, setShowdark] = useState(false);

  const lighttheme = () => {
    setTheme("light-theme");
    setShowlight(false);
    setShowdark(true);
  };
  const darktheme = () => {
    setTheme("dark-theme");
    setShowlight(true);
    setShowdark(false);
  };

  const addClass = () => {
    setSidebar(true);
  };
  const removeClass = () => {
    setSidebar(false);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="navbar">
                <div className="nav-logo-menu">
                  <div className="nav-logo">
                    <Link to="/">
                      Abdul Rehman
                      <svg
                        className="path-under css-1kvazvd"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 265 43"
                        strokeWidth="5px"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                      >
                        <path
                          className="animated-underline"
                          d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="nav-menu">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                    <Link to=".././Project" className="nav-link">
                      Projects
                    </Link>
                    <Link to=".././Resume" className="nav-link">
                      Resume
                    </Link>
                    <Link to=".././ContactUs" className="nav-link">
                      Contact
                    </Link>
                    <div className="dark-light-toogle">
                      {showdark && (
                        <button className="btn dark-mod-btn" onClick={() => darktheme()}>
                          <CiDark />
                        </button>
                      )}

                      {showlight && (
                        <button className="btn light-mod-btn" onClick={() => lighttheme()}>
                          <MdOutlineLightMode />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* ---------------------------- MOB MENU START ---------------------------- */}
                  <div className="nav-menu-mob">
                    <div className="dark-light-toogle">
                      {showdark && (
                        <button className="btn dark-mod-btn" onClick={() => darktheme()}>
                          <CiDark />
                        </button>
                      )}

                      {showlight && (
                        <button className="btn light-mod-btn" onClick={() => lighttheme()}>
                          <MdOutlineLightMode />
                        </button>
                      )}
                    </div>

                    <button className="btn menubarBtn" onClick={() => addClass()}>
                      <FiMenu />
                    </button>
                  </div>
                  {/* ---------------------------- MOB MENU END ---------------------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------- MOB MENU content start ---------------------------- */}
        <div className={sidebar ? "mob-side-bar MenuActive" : "mob-side-bar"}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul onClick={() => removeClass()}>
                  <li className="menulistclosebtn">
                    <Link to="#" className="btn closeBtn">
                      <AiOutlineClose />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to=".././Project" className="nav-link">
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link to=".././Resume" className="nav-link">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to=".././ContactUs" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------- MOB MENU content start ---------------------------- */}
      </header>
    </>
  );
};

export default Header;
