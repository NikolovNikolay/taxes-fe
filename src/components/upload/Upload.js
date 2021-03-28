import * as React from "react";
import {useState} from "react";
import {validate as uuidValidate} from 'uuid';
import {
    Button,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    FormCheck,
    FormText,
    Image,
    Modal,
    OverlayTrigger,
    Row,
    Spinner,
    Tooltip
} from "react-bootstrap";
import './Uplaod.css'
import logo from './stripe_logo.svg'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

function Upload({stripePromise}) {
    const history = useHistory();

    const defaultFormFileTitle = 'nothing selected';

    const [year, setYear] = useState('2020')
    const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [files, setFiles] = useState([])
    const [validEmail, setValidEmail] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [coupon, setCoupon] = useState("")
    const [isValidCoupon, setIfIsValidCoupon] = useState(false)
    const [agreedWithTerms, setAgreedWithTerms] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

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
        const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        if (e.target.value != null) {
            setValidEmail(pattern.test(e.target.value.toLowerCase()))
        }
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
        return year !== '' && type !== '' && files.length > 0 && validEmail && agreedWithTerms
    }

    const handleCouponChange = (e) => {
        if (coupon.length + (e.target.value.length - coupon.length) > 36) {
            return
        }
        if (uuidValidate(e.target.value)) {
            setIfIsValidCoupon(true)
        } else {
            setIfIsValidCoupon(false)
        }
        setCoupon(e.target.value)
        setErrorMessage('')
    }

    const handleSubmit = async () => {
        if (submitted) {
            return
        }

        setErrorMessage('')
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
        formData.append('coupon', coupon)

        try {
            const stripe = await stripePromise

            const baseUrl = process.env.REACT_APP_API_BASE_URL;

            const uploadResponse = await axios.post(`${baseUrl}/api/statements/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-API-KEY": btoa(process.env.REACT_APP_CLIENT_TOKEN)
                }
            })
            const requestId = uploadResponse.data.request_id;

            if (!isValidCoupon) {
                const checkoutResponse = await axios.post(`${baseUrl}/api/payments/create-checkout-session`,
                    {
                        "request_id": requestId,
                    }, {
                        headers: {
                            "X-API-KEY": btoa(process.env.REACT_APP_CLIENT_TOKEN)
                        }
                    })
                const sessionID = checkoutResponse.data.id
                const result = await stripe.redirectToCheckout({
                    sessionId: sessionID,
                });

                if (result.error) {
                    history.push("/checkout?success=false&request_id=" + requestId)
                }
            } else {
                history.push(`/checkout?success=true&coupon=${coupon}&request_id=${requestId}`)
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.description) {
                setErrorMessage(err.response.data.description)
                return;
            }
            history.push(`/checkout?success=false`)
        } finally {
            setSubmitted(false)
            setShowModal(false)
        }
    }

    const handleInstructions = (e) => {
        e.preventDefault()
        history.push("/faq")
    }

    const handleTerms = (e) => {
        e.preventDefault()
        history.push("/terms-of-use")
    }

    return (
        <Container fluid id="upload-container">
            <Row className="justify-content-md-center">
                <Col justify-content-sm-center sm={15}>
                    <Form>
                        <FormText>Make sure you read the <Link onClick={handleInstructions}>FAQ</Link> first</FormText>
                        <br/>
                        <Form.Group className={"text-center"}>
                            <FormText><h4>Submit new request</h4></FormText>
                        </Form.Group>
                        <Form.Group controlId="formUploadYear" id='form-group-year-dd'>
                            <Form.Label className={"text-start"}>Select year</Form.Label>
                            <Dropdown>
                                <DropdownButton title={year !== '' ? year : 'select'} variant="outline-dark"
                                                id="dropdown-year"
                                                onSelect={handleSelectYear}>
                                    <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group controlId="formUploadType">
                            <Form.Label className={"text-start"}>Select type</Form.Label>
                            <Dropdown>
                                <DropdownButton title={type !== '' ? type : 'select'}
                                                variant="outline-dark" id="dropdown-type"
                                                onSelect={handleSelectType}>
                                    <Dropdown.Item eventKey="revolut">revolut</Dropdown.Item>
                                    <Dropdown.Item eventKey="etoro">etoro</Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group controlId="formUploadStatements">
                            <Form.Label className={"text-start"}>Upload</Form.Label>
                            <Form.File onChange={handleSelectedFiles}
                                       label={getFileControlTitle()}
                                       id='statements'
                                       type="file" name="statements" multiple custom/>
                            {files.length === 0
                                ? <Form.Text muted>
                                    Tax calculations will be applied on selected files for {year}
                                </Form.Text>
                                : files.map((fName, i) =>
                                    <Form.Text key={i} muted>
                                        {fName}
                                    </Form.Text>)
                            }
                        </Form.Group>
                        <Form.Group controlId="formEmail" id='form-group-email-id'>
                            <Form.Label className={"text-start"}>Email</Form.Label>
                            <Form.Control type="input" placeholder="example@domain.com"
                                          onChange={handleEmailChange}/>
                            <Form.Text muted>
                                You will receive your report on the provided email
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formCoupon" id='form-group-coupon'>
                            <Form.Label className={"text-start"}>Coupon</Form.Label>
                            <Form.Control type="input" placeholder="Enter coupon if available"
                                          value={coupon}
                                          onChange={handleCouponChange}/>
                            <Form.Text muted>
                                Skip payments if valid code
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formSubmitButton" id='form-group-submit-btn-id'>
                            <>
                                <FormText muted>
                                    <div id="terms-container">
                                        <Row className="justify-content-sm-start">
                                            <Col xs={2}><FormCheck id="terms"
                                                                   onClick={(e) => setAgreedWithTerms(!agreedWithTerms)}/>
                                            </Col>
                                            <Col xs={10} style={{"paddingLeft": 0}}
                                                 className={"justify-content-sm-start"}>
                                                <label htmlFor={"terms"}>I have read and agreed with the &nbsp;
                                                    <Link onClick={handleTerms}>terms and conditions</Link>
                                                </label>
                                            </Col>
                                        </Row>
                                    </div>
                                </FormText>

                                {
                                    canSubmit() && isValidCoupon ?
                                        <Button title="submit" variant="success"
                                                onClick={handleSubmit}
                                                block>
                                            Submit
                                        </Button> :
                                        (!canSubmit() ?
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{show: 250, hide: 400}}
                                                    overlay={
                                                        <Tooltip>
                                                            Select statements, type and input your name and email to
                                                            submit
                                                        </Tooltip>
                                                    }>
                                                    <Button title="submit"
                                                            className="btn-outline-dark"
                                                            style={{
                                                                color: "#FFF",
                                                                backgroundColor: "#5433FF"
                                                            }}>
                                                        Submit and checkout with
                                                        <Image className='align-content-end' src={logo}/>
                                                    </Button>
                                                </OverlayTrigger> :
                                                <Button title="submit"
                                                        className="btn-outline-dark"
                                                        onClick={handleSubmit}
                                                        style={{
                                                            color: "#FFF",
                                                            backgroundColor: "#5433FF",
                                                            cursor: "pointer"
                                                        }}>
                                                    Submit and checkout with
                                                    <Image className='align-content-end' src={logo}/>
                                                </Button>
                                        )
                                }
                            </>
                            <FormText className="text-danger">{errorMessage}</FormText>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Processing request &nbsp;
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </Container>
    )
}

export default Upload;