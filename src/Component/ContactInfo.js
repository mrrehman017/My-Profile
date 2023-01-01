import React from "react";
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BsStackOverflow, BsFillPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./Style.css";

const ContactInfo = () => {
  return (
    <>
      <section id="contactPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contactUspage-heading">
                <h1>Contact</h1>
                <p>Feel free to contact me for any queries.</p>
              </div>
            </div>
          </div>
          <div className="ContactInfoMain">
            <div className="row">
              <div className="col-md-6">
                <div className="contactInfoText">
                  <div className="contact-Info-heading">
                    <h1>Form Details</h1>
                    <p>Fill up the form below to contact</p>
                  </div>
                  <div className="contact-Info-num-email">
                    <div className="num-email-location">
                      <a href="tel:+923084030471" className="contact-Info-number">
                        <HiPhone />
                        +92 308 4030471
                      </a>
                      <a href="mailto: mrrehmansiddique777@gmail.com" className="contact-Info-email">
                        <MdEmail />
                        mrrehmansiddique777@gmail.com
                      </a>
                      <a href="/" className="contact-Info-location">
                        <MdLocationOn />
                        Lahore, Pakistan
                      </a>
                    </div>
                  </div>
                  <div className="contact-Info-socailLink">
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
              <div className="col-md-6">
                <div className="contactFormMain">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="">Your Name</label>
                      <div className="input-icon-main">
                        <div className="input-icon">
                          <BsFillPersonFill />
                        </div>
                        <input type="text" placeholder="Abdul Rehman" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Mail</label>
                      <div className="input-icon-main">
                        <div className="input-icon">
                          <MdEmail />
                        </div>
                        <input type="email" placeholder="mrrehmansiddique777@gmail.com" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Message</label>
                      <textarea name="" id="" cols="30" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button className="btn contactFormPageBtn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
