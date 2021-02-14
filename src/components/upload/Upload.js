import * as React from "react";
import {useState} from "react";
import {
    Alert,
    Button,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    Modal,
    OverlayTrigger,
    Row,
    Tooltip
} from "react-bootstrap";
import './Uplaod.css'
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

function Upload() {

    const statusSuccess = "SUCCESS";
    const statusFail = "FAILED";

    const defaultFormFileTitle = 'Select statements';
    const defaultSubmitModalHeader = 'Submitting request';
    const completedSubmitModalHeader = 'Submitted';

    const [year, setYear] = useState('2020')
    const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [files, setFiles] = useState([])
    const [fullName, setFullName] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [requestID, setRequestID] = useState('')
    const [requestStatus, setRequestStatus] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

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

    const handleDismissAlert = () => {
        setShowAlert(false)
    }

    const handleCopyReqID = () => {
        setShowAlert(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
        setShowAlert(false)
        setSubmitted(false)
        setRequestStatus('')
        setRequestID('')
    }

    const handleSubmit = () => {
        if (submitted) {
            return
        }

        setSubmitted(true)
        setShowModal(true)
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
                setRequestID(res.data.request_id)
                setRequestStatus('SUCCESS')
            })
            .catch(e => {
                console.error(e.response.data)
                setRequestStatus('FAILED')
            })
            .finally(() => {
                setSubmitted(false)
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
                                          autoComplete="off"
                                          onChange={handleFullNameChange}/>
                        </Form.Group>
                        <Form.Group controlId="formEmail" id='form-group-email-id'>
                            <Form.Control type="email" className="text-center" placeholder="Your email"
                                          autoComplete="off"
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
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {requestStatus === '' ? defaultSubmitModalHeader : completedSubmitModalHeader}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Status</h5>
                    {
                        requestID === '' ?
                            <Skeleton/> :
                            <Form.Text className="text-success">{requestStatus}</Form.Text>

                    }
                    <br/>
                    <h5>Request ID</h5>
                    {
                        requestID !== '' || requestStatus === statusFail ?
                            <Form.Text>{requestID}</Form.Text> :
                            <Skeleton/>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Alert dismissible onClick={handleDismissAlert} show={showAlert}
                           variant={"success"}>
                        <Form.Text>Copied <strong> {requestID}</strong> to clipboard</Form.Text>
                    </Alert>
                    <CopyToClipboard text={requestID}>
                        <Button onClick={handleCopyReqID}>Copy request ID</Button>
                    </CopyToClipboard>
                    <Button variant="danger" onClick={handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Upload;