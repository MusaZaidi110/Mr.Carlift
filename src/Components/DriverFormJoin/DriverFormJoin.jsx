import React, { useState } from "react";
import "./DriverFormJoin.css";

import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "@mui/material/Button";

const DriverFormJoin = () => {
  const [statesNameDropdown, setstatesNameDropdown] = useState("");
  const statesNameOptions = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al-Quwain",
    "Fujairah",
    "Ras Al Khaimah",
  ];

  return (
    <>
      <div className="DriverFormJoin">
        <div className="FormSection">
          <div className="FormText">
            <h1>
              Fill the <span>form below</span> to join us
            </h1>
            <p>
              Have a question or need assistance? Fill out the form below, and
              our team will get back to you as soon as possible. We value your
              feedback and are here to help!
            </p>
          </div>
          <div className="FormContentSection">
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
              <CustomDropdown
                options={statesNameOptions}
                value={statesNameDropdown}
                onChange={(value) => setstatesNameDropdown(value)}
              />
            </div>

            <div className="oneinput">
              <textarea
                name="anyquestions"
                id="anyquestions"
                rows={5}
                placeholder="Any Questions"
              ></textarea>
              <div className="button">
                <Button variant="contained">Submit your response</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="ImageSection">
          <div className="ImageContentSection">
            <h1>
              Join Mr.Carlift as a <span>Driver</span>
            </h1>
            <p>
              Enjoy safe, reliable, and affordable pick-and-drop services
              tailored to your schedule. Become a part of our growing community
              of satisfied passengers today.
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default DriverFormJoin;
