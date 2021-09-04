import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton className='text-dark'>
        <Modal.Title id='contained-modal-title-vcenter'>
          ADDIJTDTEDATER
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-dark'>
        <p>
          One matter, I have to share that we had to change our time schedule
          one day before the event due to the venue problem& that is why many of
          our registered members for the event didn't join us that day. But we
          had to arrange the Meet up in time coz maximum of us was in favor to
          join. Hope everybody loves this RECAP and share their opinion below...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='dark' onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const Program = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div className='text-center' style={{ marginTop: '55px' }}>
      <div>
        <Button
          onClick={() => setModalShow(true)}
          variant='transparent'
          style={{
            backgroundColor: 'wheat',
            width: '300px',
            borderRadius: '0',
            height: '200px',
            borderTop: '13px solid #270084',
          }}
          className='col-md-6 fs-5 fw-bold m-1'
        >
          Annaul Meetup
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Button
          onClick={() => setModalShow(true)}
          variant='transparent'
          style={{
            backgroundColor: 'wheat',
            width: '300px',
            borderRadius: '0',
            height: '200px',
            borderTop: '13px solid #270084',
          }}
          className='col-md-6 fs-5 fw-bold m-1'
        >
          Holidays with NSU club's
        </Button>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Program
