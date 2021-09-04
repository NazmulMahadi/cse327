import React from 'react';
import { Link } from 'react-router-dom';

const FundRaising = () => {
    return (
        <div className=" d-flex justify-content-center my-5">
            <div>
                <Link to='/DonationMethodes'>
                    <div className="d-flex justify-content-center align-items-center m-2 custom" style={{ height: '100px', width: '350px', backgroundColor: '#dff4a0' }}>
                        <h3 className='text-dark fw-bold'>Donation Methods</h3>
                    </div>
                </Link>
                <Link to='CurrentPartners'>
                    <div className="d-flex justify-content-center align-items-center m-2 custom" style={{ height: '100px', width: '350px', backgroundColor: '#dff4a0' }}>
                        <h3 className='text-dark fw-bold'>Current Partners</h3>
                    </div></Link>

            </div>
        </div>
    );
};

export default FundRaising;