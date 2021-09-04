import React from 'react';
import { Link } from 'react-router-dom';
import './AlumniStories.css'

const AlumniStories = () => {
    return (
        <div className=" d-flex justify-content-center my-5">
            <div>
                <Link to='/page'><div className="d-flex justify-content-center align-items-center m-2 custom" style={{ height: '100px', width: '350px', backgroundColor: '#dff4a0' }}>
                    <h3 className='text-dark fw-bold'>Special character</h3>
                </div></Link>
                <Link to='currentReacher'>
                    <div className="d-flex justify-content-center align-items-center m-2 custom" style={{ height: '100px', width: '350px', backgroundColor: '#dff4a0' }}>
                        <h3 className='text-dark fw-bold'>Current Researcher</h3>
                    </div></Link>
                <Link to="/TopMentor">
                    <div className="d-flex justify-content-center align-items-center m-2 custom" style={{ height: '100px', width: '350px', backgroundColor: '#dff4a0' }}>
                        <h3 className='text-dark fw-bold'>Top Mentors</h3>
                    </div></Link>
                <Link to='/Restricted'>
                    <div className="d-flex justify-content-center align-items-center m-2 custom" style={{ height: '100px', width: '350px', backgroundColor: '#dff4a0' }}>
                        <h3 className='text-dark fw-bold'>Restricted Materials</h3>
                    </div></Link>
            </div>
        </div>
    );
};

export default AlumniStories;