import React from "react";
import "./HowWeWork.css";

const WorkCard = ({ img, title, description }) => {
  return (
    <>
      <div className="Card">
        <div className="cardLogo">
          <img src={img} alt="" height={27} width={25} />
        </div>
        <div className="cardText">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkCard;