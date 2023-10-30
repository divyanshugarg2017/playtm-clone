import React from "react";

const DateCard = ({ day, date, id, name,onClick=()=>{},disable=false , type="radio" }) => {
  const highlight = disable ? 'bg-danger bg-opacity-50' : '';
  return (
    <>
      <label htmlFor={id}>
        <input disabled={disable} onChange={onClick} type={type} id={id} name={name} className="datacard__radio" />
        <div className={`datecard mx-2 my-2 p-3 ${highlight}`}>
          <p className="fw-bold">{day}</p>
          <p>{date}</p>
        </div>
      </label>
    </>
  );
};

export default DateCard;
