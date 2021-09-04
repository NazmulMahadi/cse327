import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic1 from '../Images/pic-1.png'

const Home = () => {
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <Link to='/updateprofile'>
          {' '}
          <Button
            size='sm'
            className='btn-success m-1'
            style={{ borderRadius: '0px' }}
          >
            Profile update
          </Button>
        </Link>
        <Link to='/MemberDirectory'>
          {' '}
          <Button
            size='sm'
            className='btn-success m-1'
            style={{ borderRadius: '0px' }}
          >
            Member Directory
          </Button>
        </Link>
        <Link to='/fundraising'>
          <Button
            size='sm'
            className='btn-success m-1'
            style={{ borderRadius: '0px' }}
          >
            University fundraising
          </Button>
        </Link>
      </div>

      <div className='order-0 p-2 d-flex justify-content-around align-items-center flex-wrap-reverse my-5'>
        <div className='col-md-6 p-2'>
          <h1 className='fw-bold'>North South University </h1>
          <p style={{ textAlign: 'justify' }}>
            {' '}
            North South University (Bengali: নর্থ সাউথ বিশ্ববিদ্যালয়, also
            known as NSU) is a private university based in Dhaka, Bangladesh.
            Its business school is the first Bangladeshi university to receive
            American accreditation from the ACBSP in 2015.[3] The NSU library
            has over 70,000 square feet (6,500 m2) floor area on the
            southeastern side of the campus. It is the first fully automated
            university library in Bangladesh using its own library management
            software,[9][10] which supports RFID system, web-based online
            circulation system, full-text e-books and online journal article
            repository services. The library can accommodate over 1,200 students
            in its reading rooms. On average 2,000 students use the library
            every day. As of August 2014, the library holds 49,500 books, 50,000
            online books, 6,000 bound journals (Foreign and local) and
            magazines, 1,890 CD-ROM databases and books, 226 DVD and videos, 159
            audio-cassettes, and other resources.[11]{' '}
          </p>
        </div>

        <div className='order-1 m-2'>
          <img
            alt='nsu'
            src={pic1}
            style={{ height: '350px', maxWidth: '80vw' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
