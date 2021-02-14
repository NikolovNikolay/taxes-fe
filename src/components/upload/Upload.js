import * as React from "react";
import {useState} from "react";
import {Button, Col, Container, Dropdown, DropdownButton, Form, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

function Upload() {

    const defaultFormFileTitle = 'Select statements';
    const [year, setYear] = useState('2020')
    const [type, setType] = useState('')
    const [files, setFiles] = useState([])

    const handleSelectYear = (e) => {
        setYear(e)
    }

    const handleSelectType = (e) => {
        setType(e)
    }

    const handleSelectedFiles = (e) => {
        const fNames = []
        console.log(e)
        for (let i = 0; i < e.target.files.length; i++) {
            fNames.push(e.target.files[i].name)
        }
        setFiles(fNames)
    }

    const getFileControlTitle = () => {
        if (files.length === 0) {
            return defaultFormFileTitle;
        }

        if (files.length === 1) {
            return "1 file selected";
        } else {
            return files.length + " files selected";
        }
    }

    const canSubmit = () => {
        return year !== '' && type !== '' && files.length > 0
    }

    return (
        <Container fluid className="align-content-center">
            <Row>
                <Col/>
                <Col md={15}>
                    <Form>
                        <Form.Group controlId="formUploadStatements">
                            <Form.File onChange={handleSelectedFiles}
                                       label={getFileControlTitle()}
                                       type="file" name="statements" multiple custom/>
                            {files.length === 0
                                ? <Form.Text muted>
                                    Tax calculations will be applied on selected files
                                </Form.Text>
                                : files.map((fName, i) =>
                                    <Form.Text key={i} muted>
                                        {fName}
                                    </Form.Text>)
                            }
                        </Form.Group>
                        <Form.Group controlId="formUploadYear">
                            <Dropdown>
                                <DropdownButton title="Select year" variant="outline-dark" id="dropdown-year"
                                                alignRight
                                                onSelect={handleSelectYear}>
                                    <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
                                </DropdownButton>
                                <Form.Text><strong>{year}</strong></Form.Text>
                            </Dropdown>
                        </Form.Group>

                        <Form.Group controlId="formUploadType">
                            <Dropdown>
                                <DropdownButton title="Select type"
                                                variant="outline-dark" id="dropdown-type"
                                                alignRight
                                                onSelect={handleSelectType}>
                                    <Dropdown.Item eventKey="revolut">revolut</Dropdown.Item>
                                    <Dropdown.Item eventKey="etoro">etoro</Dropdown.Item>
                                </DropdownButton>
                                <Form.Text><strong>{type}</strong></Form.Text>
                            </Dropdown>
                        </Form.Group>

                        <Form.Group controlId="formSubmitButton">
                            {
                                canSubmit() ?
                                    <Button title="submit" variant="success"
                                            onClick={() => {
                                                alert("click");
                                            }}>
                                        Submit
                                    </Button> :
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{show: 250, hide: 400}}
                                        overlay={
                                            <Tooltip id="button-tooltip">Select statements and type to
                                                submit
                                            </Tooltip>
                                        }
                                    >
                                        <Button title="submit" variant="outline-danger">Submit</Button>
                                    </OverlayTrigger>
                            }
                        </Form.Group>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Upload;