import React from "react";
import "./carouselsinglecomponent.css";
const CarouselSingleComponent = (props) => {
  return (
    <div className="CarouselSingleComponent w-100 d-flex justify-content-between position-relative">
      <div className="carousel__single__left">
        <img src={props.imgleft} alt="..." />
      </div>
      <div className="carousel__single__right">
        {props.imgright ? <img src={props.imgright} alt="..." /> : ""}
      </div>
      <h1 className="carousel__category text-uppercase">{props.category}</h1>
      <h2 className="carousel__logo__absolute">PlayersVictory</h2>
      <div className="carousel__content__absolute">
        <h1 className="splashscreen__find">Find</h1>
        <h1
          className="splashscreen__nearest"
          style={{ color: `${props.nearcolor}` }}
        >
          Nearest Events
        </h1>
        <p className="carousel__content__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu blandit
          a nibh et, etiam ipsum, neque. Commodo, metus purus pharetra, neque,
          quis nec. Orci neque in
        </p>
        <button className="carousel__item__book mt-5">Book Venue</button>
      </div>

      <div
        className="carousel__single__absolute"
        style={{ width: `${props.width}` }}
      >
        <img src={props.imgplayer} alt="player" />
      </div>
      <img src={props.imgtop} alt="..." className="carousel__top__absolute" />
      <img
        src={props.imgbottom}
        alt="..."
        className="carousel__bottom__absolute"
      />
      <div className="carousel__number">{props.number}</div>
    </div>
  );
};

export default CarouselSingleComponent;
