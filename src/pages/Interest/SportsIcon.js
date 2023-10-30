import React from "react";
import football from "../../assets/images/football.png";
import cricket from "../../assets/images/cricket.png";
import basketball from "../../assets/images/basketball.png";
import hockey from "../../assets/images/hockey.png";
import baseball from "../../assets/images/baseball.png";
import kabaddi from "../../assets/images/kabaddi.png";

const Sports_icon = () => {
  return (
    <>
      <div className="sports_icon ">
        <img src={football} className="m-3" alt="..." />
        <img src={cricket} className="m-3" alt="..." />
        <img src={basketball} className="m-3" alt="..." />
        <img src={hockey} className="m-3" alt="..." />
        <img src={baseball} className="m-3" alt="..." />
        <img src={kabaddi} className="m-3" alt="..." />
        <img src={baseball} className="m-3" alt="..." />
        <img src={kabaddi} className="m-3" alt="..." />
      </div>
    </>
  );
};

export default Sports_icon;
