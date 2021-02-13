import * as React from "react";
import {useState} from "react";
import {Col, Container, Dropdown, DropdownButton, Form, Row} from "react-bootstrap";

function Upload() {

    const [year, setYear] = useState('2020')
    const [type, setType] = useState('')

    const handleSelectYear = (e) => {
        console.log(e);
        setYear(e)
    }

    const handleSelectType = (e) => {
        console.log(e);
        setType(e)
    }
    return (
        <Container>
            <Row className="align-items-start">
                <Col>
                    <Form>
                        <Form.Group controlId="formUploadStatements">
                            <Form.File label="Select statements" type="file" name="statements" multiple/>
                            <Form.Text className="text-muted">
                                Tax calculations will be applied on selected files only
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formUploadYear">
                            <Dropdown>
                                <DropdownButton title="Select year" variant="outline-dark" id="dropdown-year"
                                                onSelect={handleSelectYear}>
                                    <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
                                </DropdownButton>
                                <Form.Text><strong>{year}</strong></Form.Text>
                            </Dropdown>
                        </Form.Group>

                        <Form.Group controlId="formUploadType">
                            <Dropdown>
                                <DropdownButton title="Select type" variant="outline-dark" id="dropdown-type"
                                                onSelect={handleSelectType}>
                                    <Dropdown.Item eventKey="revolut">revolut</Dropdown.Item>
                                    <Dropdown.Item eventKey="etoro">etoro</Dropdown.Item>
                                </DropdownButton>
                                <Form.Text><strong>{type}</strong></Form.Text>
                            </Dropdown>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Upload;