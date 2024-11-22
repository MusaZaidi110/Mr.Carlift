import React from "react";
import "./PassangerFormJoin.css";

import Button from "@mui/material/Button";

const PassangerFormJoin = () => {
  return (
    <>
      <div className="PassangerFormJoin">
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

            <div className="twoinputs">
              <input
                type="text"
                name="pickuppoint"
                id="pickuppoint"
                placeholder="Pick-Up Point"
              />
              <input
                type="text"
                name="dropoffpoint"
                id="dropoffpoint"
                placeholder="Drop-Off Point"
              />
            </div>

            <div className="twoinputs">
              <input
                type="text"
                name="pickuptime"
                id="pickuptime"
                placeholder="Pick-Up Time"
              />
              <input
                type="text"
                name="dropofftime"
                id="dropofftime"
                placeholder="Drop-Off Time"
              />
            </div>
            <div className="oneinput">
              <textarea
                name="routedetails"
                id="routedetails"
                rows={5}
                placeholder="Route Details"
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
              Join Mr.Carlift as a <span>Passenger</span>
            </h1>
            <p>
              Enjoy safe, reliable and affordable pick-and-drop services
              tailored to your schedule. Become a part of our growing community
              of satisfied passengers todays .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassangerFormJoin;
