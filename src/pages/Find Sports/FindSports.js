import React from "react";
import "./find_sports.css";
import find_sports_bg_img from "../../assets/images/find_sports.png";
import search from "../../assets/images/search.jpg"
import locate from "../../assets/images/locate.jpg"


const FindSports = () => {
  return (
    <>
      <div className="container-fluid p-0 find___sports">
        <div className="find_sports_bg_img">
          <img src={find_sports_bg_img} alt="..." />
          <div className="find_sports_bg_img_content">   <h5 className="find_sports_title text-center mb-5">Find sports venue around me</h5>
            <div className="search_box d-flex justify-content-center ">  <input type="text" placeholder="Search for cities,places..." className="search_text"></input>
              <img src={search} alt="..." className="search_icon" />
              <div className="d-flex align-items-center locate____me">
                <img src={locate} alt="..." className="locate_icon me-2" />
                <p className="locate_title"> Locate me</p>
              </div>
            </div></div>
        </div>
      </div>
    </>
  );
};

export default FindSports;
