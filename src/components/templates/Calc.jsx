import React from "react";
import './Calc.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default props =>
    <React.Fragment>

        <Form className="p-3 col-md-8 mx-auto" id="calc">
            <Form.Group className="mb-3 col-md-8 col-sm-12 text-center float-center" controlId="formBasicEmail">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="text" placeholder="Seu peso (Kg)" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-8 col-sm-12" controlId="formBasicPassword">
                <Form.Label>Altura</Form.Label>
                <Form.Control type="text" placeholder="Sua Altura (m)" />
            </Form.Group>
            <h1 className="text-center my-4">
                Seu IMC
            </h1>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </React.Fragment>



