import {Button, Form, FormControl, FormText, InputGroup, Row} from "react-bootstrap";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function FailCheckout({requestId}) {
    const history = useHistory();

    const defaultCopyButtonLabel = "Copy";
    const clickedCopyButtonLabel = "Copied";

    let [copyRequestIdButtonLabel, setCopyRequestIdButtonLabel] = useState(defaultCopyButtonLabel);
    const contactMail = process.env.REACT_APP_CONTACT_EMAIL;

    const handleRequestIDCopyClick = () => {
        setCopyRequestIdButtonLabel(clickedCopyButtonLabel)
        setTimeout(() =>
            setCopyRequestIdButtonLabel(defaultCopyButtonLabel), 500
        )
    }
    return (
        requestId != null && requestId.trim(" ") !== "" ?
            <Form>
                <Form.Group>
                    <FormText className="text-center"><h4>Unfortunately, we could not process your payment</h4>
                    </FormText>
                </Form.Group>
                <br/>
                <Form.Group>
                    <InputGroup className="mb-2">
                        <FormControl
                            value={requestId}
                            disabled
                            className="text-center"
                            placeholder=""
                        />
                        <InputGroup.Append>
                            <CopyToClipboard text={requestId}>
                                <Button variant={"outline-secondary"}
                                        onClick={handleRequestIDCopyClick}>{copyRequestIdButtonLabel}</Button>
                            </CopyToClipboard>
                        </InputGroup.Append>
                    </InputGroup>
                    <FormText>
                        Above is your request ID. Please try submitting another request or send this to <a
                        href={"mailto:" + contactMail}
                        className={"border-bottom"}>{contactMail}</a> and ask for details
                    </FormText>
                </Form.Group>
                <br/>
                <br/>
                <Button block onClick={() => history.push("/")}>Try again</Button>
            </Form> :
            <Form>
                <Form.Group>
                    <FormText className="text-center"><h4>Your request failed</h4>
                    </FormText>
                </Form.Group>
                <br/>
                <Form.Group>
                    <p>
                        You were not charged for this operation. If this happened more than once please
                        contact <a
                        href={"mailto:" + contactMail}
                        className={"border-bottom"}>{contactMail}</a> for more details.
                        Sorry for the inconvenience.
                    </p>
                </Form.Group>
                <br/>
                <br/>
                <Row md={15} className={"justify-content-md-center"}>
                    <Button onClick={() => history.push("/")}>Try again</Button>
                </Row>
            </Form>
    )
}

export default FailCheckout;