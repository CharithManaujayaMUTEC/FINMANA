import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import './OffCan.css';
import { Stack } from 'react-bootstrap';

function OffCan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      
      <Button className="btn" variant="primary" onClick={handleShow}>
        Menu
      </Button>
      
      <Offcanvas expand='lg' show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='OffCan'>
        
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" size="lg" >Income
          </Button>
          <Button variant="secondary" size="lg" href='./Pages/Expenditure.jsx'>
          Expendture
          </Button>
          <Button variant="secondary" size="lg" href='./Pages/Bankbalance.jsx'>
          Bank Balance
          </Button></Stack></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCan;