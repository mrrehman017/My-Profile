import React from "react";
import { TbBrandNextjs, TbBrandBootstrap } from "react-icons/tb";
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="copyright-text">
                <p>© 2022 Ab Rehman</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skills-text">
                <p>
                  Built with :
                  <a href="https://nextjs.org/">
                    <TbBrandNextjs />
                  </a>
                  <span>&#47;</span>
                  <a href="https://react-bootstrap.github.io/getting-started/introduction">
                    <TbBrandBootstrap />
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-social-icon">
                <a href="/">
                  <AiFillGithub />
                </a>
                <a href="/">
                  <BsStackOverflow />
                </a>
                <a href="/">
                  <AiFillLinkedin />
                </a>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
