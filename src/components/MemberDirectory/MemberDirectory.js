import React from 'react';
import { Button, ButtonToolbar, Form, FormControl, Table } from 'react-bootstrap';

const MemberDirectory = () => {
    return (
        <>
            <div className="d-flex justify-content-center m-5">

                <Form className="d-flex flex-wrap m-auto justify-content-center">
                    <Form.Select className="m-2" size="sm" style={{ width: '200px', borderRadius: '0', height: '30px' }} >
                        <option>By Department</option>
                        <option>By Name</option>
                    </Form.Select>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="m-2"
                        aria-label="Search"
                        style={{ width: '200px', borderRadius: '0', height: '30px' }}
                    />


                    <Button className="m-2" variant="outline-light" size="sm" style={{ borderRadius: '0', height: '30px' }}>Search</Button>
                </Form>
            </div>
            <div className=" d-flex justify-content-center my-5 mx-3 fw-bold">
                <Table striped bordered hover responsive variant="dark" style={{ width: '550px', borderLeft: '5px double #bd0000' }}>

                    <tbody>
                        <tr>
                            <td>Member Name</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>CSE</td>
                        </tr>
                        <tr>
                            <td>Batch</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Occupation</td>
                            <td>Software Engineer</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="text-center">
                <Button className="mx-5" size="sm" variant='outline-success' style={{ borderRadius: '0', width: '75px' }}>Previous</Button>
                <Button className="mx-5" size="sm" variant='outline-success' style={{ borderRadius: '0', width: '75px' }}>Next</Button>
            </div>

        </>
    );
};

export default MemberDirectory;