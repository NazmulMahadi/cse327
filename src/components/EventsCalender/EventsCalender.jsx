import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="text-dark">
                <h1 className="text-dark">Nothing Else matters</h1>

                <p>
                    One matter, I have to share that we had to change our time schedule one day before the event due to the venue pr One matter, I have to share that we had to change our time schedule one day before the event due to the venue problem& that is why many of our registered members for the event didn't join us that day. But we had to arrange the Meet up in time coz maximum of us was in favor to join.

                    Hope everybody loves this RECAP and share their opinion below... One matter, I have to share that we had to change our time schedule one day before the event due to the venue problem& that is why many of our registered members for the event didn't join us that day. But we had to arrange the Meet up in time coz maximum of us was in favor to join.

                    Hope everybody loves this RECAP and share their opinion below...oblem& that is why many of our registered members for the event didn't join us that day. But we had to arrange the Meet up in time coz maximum of us was in favor to join.

                    Hope everybody loves this RECAP and share their opinion below...
                </p>
            </Modal.Body>

        </Modal>
    );
}
const EventsCalender = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="text-center" style={{ marginTop: '55px' }}>
            <div>
                <Button onClick={() => setModalShow(true)} variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>create events</Button>
                < Button onClick={() => setModalShow(true)} variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }
                } className='col-md-6 fs-5 fw-bold m-1' > upcoming events</Button>
            </div >
            <div>
                <Button onClick={() => setModalShow(true)} variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>recent updates</Button>
                <Button onClick={() => setModalShow(true)} variant="transparent" style={{ backgroundColor: '#ff9800', width: '300px', borderRadius: '0', height: '200px', borderTop: '13px solid #270084' }} className='col-md-6 fs-5 fw-bold m-1'>join in a event</Button>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <br />
            <br />
        </div >
    );
};

export default EventsCalender;
