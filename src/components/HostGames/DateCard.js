import React from 'react'


const DateCard = ({ date, day }) => {
    return (
        <>  <div className=" datecard mx-3">
            <p className='fw-bold'>{day}</p>
            <p>{date}</p>
        </div></>
    )
}

export default DateCard