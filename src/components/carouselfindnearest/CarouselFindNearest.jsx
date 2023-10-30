import React from "react";
import "./carouselFindNearest.css";
import left1 from "../../assets/images/carousel3images/left1.png";
import left2 from "../../assets/images/carousel3images/left2.png";
import left3 from "../../assets/images/carousel3images/left3.png";
import right1 from "../../assets/images/carousel3images/right1.png";
import right3 from "../../assets/images/carousel3images/right3.png";
import player1 from "../../assets/images/carousel3images/player1.png";
import player2 from "../../assets/images/carousel3images/player2.png";
import player3 from "../../assets/images/carousel3images/player3.png";
import top1 from "../../assets/images/carousel3images/top1.png";
import bottom1 from "../../assets/images/carousel3images/bottom1.png";
import bottom2 from "../../assets/images/carousel3images/bottom2.png";
import bottom3 from "../../assets/images/carousel3images/bottom3.png";
import top2 from "../../assets/images/carousel3images/top2.png";
import top3 from "../../assets/images/carousel3images/top3.png";
import CarouselSingleComponent from "./CarouselSingleComponent";

const CarouselFindNearest = () => {
  return (
    <>
      <div className="carouselfindnearest">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CarouselSingleComponent
                imgleft={left1}
                imgright={right1}
                category="sports"
                imgplayer={player1}
                imgtop={top1}
                imgbottom={bottom1}
                width="416px"
                number=".01"
                nearcolor="#4a8fff"
              />
            </div>
            <div className="carousel-item">
              <CarouselSingleComponent
                imgleft={left2}
                imgplayer={player2}
                imgtop={top2}
                imgbottom={bottom2}
                width="600px"
                number=".01"
                nearcolor="#aff2ff"
              />
            </div>
            <div className="carousel-item">
              <CarouselSingleComponent
                imgleft={left3}
                imgright={right3}
                category="players"
                imgplayer={player3}
                imgtop={top3}
                imgbottom={bottom3}
                width="680px"
                number=".02"
                nearcolor="#9bffcf"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselFindNearest;
