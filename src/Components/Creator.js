import React, { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap';

function Creator(props) {
    const [address, setAddress] = useState("");
    const [productName, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting ${productName}`)
    }

    return (
        <div>
            <h1 style={{ marginLeft: "45%",}} >Creator</h1>
            <div style={{ marginLeft: "25%", marginTop: "5%", border: "solid", height: "400px", width: "800px", padding: "20px" }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Enter your address:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Enter Product name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={productName} onChange={e => setName(e.target.value)} placeholder="Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Enter Product Price:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
                        </Col>
                    </Form.Group>
                    <input type="submit" value="Create product" style={{ marginLeft: "42%" }} />
                </Form>
            </div>
        </div>
            );
}

            export default Creator;