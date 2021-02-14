import * as React from "react";
import {useState} from "react";
import {Button, Col, Container, Dropdown, DropdownButton, Form, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import './Uplaod.css'
import axios from "axios";

function Upload() {

    const defaultFormFileTitle = 'Select statements';
    const [year, setYear] = useState('2020')
    const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [files, setFiles] = useState([])
    const [fullName, setFullName] = useState('')
    const [validEmail, setValidEmail] = useState(false)

    const handleSelectYear = (e) => {
        setYear(e)
    }

    const handleSelectType = (e) => {
        setType(e)
    }

    const handleSelectedFiles = (e) => {
        const fNames = []
        for (let i = 0; i < e.target.files.length; i++) {
            fNames.push(e.target.files[i].name)
        }
        setFiles(fNames)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        //const pattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i);
        const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        setValidEmail(pattern.test(email.toLowerCase()))
    }

    const handleFullNameChange = (e) => {
        setFullName(e.target.value)
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
        return year !== '' && type !== '' && files.length > 0 && validEmail && fullName !== ''
    }

    const handleSubmit = () => {
        const formData = new FormData();
        const statements = document.querySelector('#statements');
        for (let i = 0; i < statements.files.length; i++) {
            formData.append('statements', statements.files[i])
        }

        formData.append('type', type)
        formData.append('year', year)
        formData.append('email', email)
        formData.append('fullName', fullName)

        axios.post('https://taxes-api.digitools-it.com/api/statements/upload', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.error(e.response.data)
            })
    }

    return (
        <Container fluid id="upload-container">
            <Row>
                <Col/>
                <Col md={15}>
                    <Form>
                        <Form.Group controlId="formUploadStatements">
                            <Form.File onChange={handleSelectedFiles}
                                       label={getFileControlTitle()}
                                       id='statements'
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
                        <Form.Group controlId="formFullName" id='form-group-full-name'>
                            <Form.Control type="input" className="text-center" placeholder="Full name: eg. John Doe"
                                          onChange={handleFullNameChange}/>
                        </Form.Group>
                        <Form.Group controlId="formEmail" id='form-group-email-id'>
                            <Form.Control type="email" className="text-center" placeholder="Your email"
                                          onChange={handleEmailChange}/>
                            <Form.Text muted>
                                You will receive your report on the provided email
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formUploadYear" id='form-group-year-dd'>
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
                        <Form.Group controlId="formSubmitButton" id='form-group-submit-btn-id'>
                            {
                                canSubmit() ?
                                    <Button title="submit" variant="success"
                                            onClick={handleSubmit}
                                            block>
                                        Submit
                                    </Button> :
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{show: 250, hide: 400}}
                                        overlay={
                                            <Tooltip id="button-tooltip">Select statements, type and input email to
                                                submit
                                            </Tooltip>
                                        }>
                                        <Button title="submit" variant="outline-danger" block>Submit</Button>
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