import React from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const ContactForm = () => {
  return (
    <>
      <div className="ContactFormContainer">
        <div className="FormImage">
          <div className="FormImageContent">
            <div className="FormImageText">
              <h1>Contact Information</h1>
              <p>
                Stay connected with us! Follow Mr. Carlift on social media for
                the latest updates, special offers, and community news. Join our
                growing community and be part of our journey
              </p>
            </div>
            <div className="FormImageButtons">
              <Link>Fackbook</Link>
              <Link>Instagram</Link>
              <Link>LinkedIn</Link>
              <Link>Gmail</Link>
            </div>
          </div>
        </div>
        <div className="ContactFormContent">
          <div className="ContactFormHeading">
            <h1>
              Please Fill In The <span> Form Below</span>
            </h1>
            <p>
              Have a question or need assistance? Fill out the form below, and
              our team will get back to you as soon as possible. We value your
              feedback and are here to help!
            </p>
          </div>
          <div className="ContactFormMainSection">
            <div className="twoinputs">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
            <div className="twoinputs">
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="text"
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder="Whatsapp Number"
              />
            </div>
            <div className="oneinput">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="oneinput">
              <textarea
                name="contactmessage"
                id="contactmessage"
                rows={5}
                placeholder="Enter Message"
              ></textarea>
              <div className="button">
                <Button variant="outlined">Contact on Whatsapp</Button>
                <Button variant="contained">Submit your response</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
