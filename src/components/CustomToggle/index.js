import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div className="fw-bold" ref={ref} onClick={(e) => {
        e.preventDefault();
        onClick(e);
    }}>
        {children}
        <RiArrowDropDownLine className="fs-4" />
    </div>
))

export default CustomToggle;