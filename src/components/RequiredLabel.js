import {Form} from "react-bootstrap";
import * as React from "react";

function RequiredLabel({label}) {
    return (
        <Form.Label className={"text-start"}>
            {label}<span className={"text-danger"}>*</span>
        </Form.Label>
    )
}

export default RequiredLabel;