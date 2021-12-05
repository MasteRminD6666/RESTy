import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';


class AppForm extends React.Component {
    render() {
        return (
            <>

                <Form>
                    <Form.Group className="mb-3" controlId="formPlaintextEmail">
                        <Button variant="primary">Get</Button>{' '}
                        <Button variant="success">Post</Button>{' '}
                        <Button variant="warning">Put</Button>{' '}
                        <Button variant="danger">Delete</Button> 
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                           
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default AppForm;
