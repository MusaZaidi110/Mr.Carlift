import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import WorkCard from "./WorkCard";

import routeImg from "../../assets/route.svg";
import WorkDaysImg from "../../assets/briefcase.png";
import PriceNote from "../../assets/PriceNote.svg";
import Booking from "../../assets/Booking.svg";

import "./HowWeWork.css";

const HowWeWork = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="WorksContainer">
        <div className="WorkTextContainer">
          <div className="WorkText">
            <h1>
              How <span>Mr. CarLift</span> Works
            </h1>
            <p>
              Whether you're a passenger looking for reliable rides or a driver
              ready to earn, our simple process makes commuting hassle-free.
              Select your role to get started!
            </p>
          </div>
          <div className="WorkTabs">
            <TabContext value={value}>
              <TabList onChange={handleChange}>
                <Tab label="Passengers" value="1" />
                <Tab label="Drivers" value="2" />
              </TabList>

              <div className="TabsCards">
                <TabPanel value="1">
                  <WorkCard
                    img={routeImg}
                    title={"Select Your Route"}
                    description={
                      "Choose your starting point and destination for a seamless commute."
                    }
                  />
                  <WorkCard
                    img={WorkDaysImg}
                    title={"Choose Working Days"}
                    description={
                      "Pick the days of the week you need our service for your regular commute."
                    }
                  />
                  <WorkCard
                    img={PriceNote}
                    title={"Estimate Your Price"}
                    description={
                      "Get an instant fare estimate based on your route and selected days."
                    }
                  />
                  <WorkCard
                    img={Booking}
                    title={"Book Ride"}
                    description={
                      "Reach out to finalize your booking and secure your monthly pick & drop."
                    }
                  />
                </TabPanel>

                <TabPanel value="2">
                  <WorkCard
                    img={routeImg}
                    title={"Select Your Route"}
                    description={
                      "Choose your starting point and destination for a seamless commute."
                    }
                  />
                  <WorkCard
                    img={WorkDaysImg}
                    title={"Choose Working Days"}
                    description={
                      "Pick the days of the week you need our service for your regular commute."
                    }
                  />
                  <WorkCard
                    img={PriceNote}
                    title={"Estimate Your Price"}
                    description={
                      "Get an instant fare estimate based on your route and selected days."
                    }
                  />
                  <WorkCard
                    img={Booking}
                    title={"Book Ride"}
                    description={
                      "Reach out to finalize your booking and secure your monthly pick & drop."
                    }
                  />
                </TabPanel>
              </div>
            </TabContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
