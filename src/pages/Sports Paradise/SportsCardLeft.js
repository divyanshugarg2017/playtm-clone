import React from 'react'


const SportsCardLeft = ({ img, title , discription }) => {
    return (
        <>
            <div className="sports___card d-flex align-items-center justify-content-center">
                {/* <div className='card_triangle' ></div> */}
                <img src={img} alt="..." className='img-fluid' />
                <div className='ms-3'>
                    <h5 className='text-start'>{title}</h5>
                    {
                        discription ? <p className="mt-2 text-start">{discription}</p> : null
                    }
                </div>

            </div>


        </>
    )
}

export default SportsCardLeft