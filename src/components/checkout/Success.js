import {Button, Form, FormControl, FormLabel, FormText, InputGroup, OverlayTrigger, Tooltip} from "react-bootstrap";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import React from 'react';
import axios from "axios";

class SuccessCheckout extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    requestId = this.props.requestId
    state = {
        showCopyRequestTooltip: false,
        showCopyCouponTooltip: false,
        coupon: ""
    }

    componentDidMount() {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        axios.post(`${baseUrl}/api/payments/obtain-coupon`,
            {
                "request_id": this.requestId,
            })
            .then(res => {
                const coupon = res.data.coupon
                if (this.state.coupon !== "" && coupon === "") {
                    return
                }
                this.setState({...this.state, coupon})
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleRequestIDCopyClick = () => {
        this.setState({...this.state, showCopyRequestTooltip: true})
        setTimeout(() =>
            this.setState({...this.state, showCopyRequestTooltip: false}), 500
        )
    }

    handleCouponCopyClick = () => {
        this.setState({...this.state, showCopyCouponTooltip: true})
        setTimeout(() =>
            this.setState({...this.state, showCopyCouponTooltip: false}), 500
        )
    }

    render() {
        const {history} = this.props;
        return (
            <Form>
                <Form.Group>
                    <FormText className="text-center">
                        <h4>Your request was processed successfully and a report is on its way to your mailbox</h4>
                    </FormText>
                </Form.Group>
                <br/>
                <Form.Group>
                    <FormLabel>Request ID</FormLabel>
                    <InputGroup className="mb-2">
                        <FormControl
                            value={this.requestId}
                            disabled
                            className="text-center"
                            placeholder=""
                        />
                        <InputGroup.Append>
                            <OverlayTrigger
                                placement={"bottom"}
                                show={this.state.showCopyRequestTooltip}
                                overlay={<Tooltip id="tooltip-disabled">Copied</Tooltip>}>
                            <span className="d-inline-block">
                                <CopyToClipboard text={this.requestId}>
                                    <Button variant={"outline-info"}
                                            onClick={this.handleRequestIDCopyClick}>Copy</Button>
                                </CopyToClipboard>
                            </span>
                            </OverlayTrigger>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                <br/>
                <Form.Group>
                    <FormLabel>Coupon code</FormLabel>
                    <InputGroup className="mb-2">
                        <FormControl
                            value={this.state.coupon}
                            disabled
                            className="text-center"
                            placeholder=""
                        />
                        <InputGroup.Append>
                            <OverlayTrigger
                                placement={"bottom"}
                                show={this.state.showCopyCouponTooltip}
                                overlay={<Tooltip id="tooltip-disabled">Copied</Tooltip>}>
                            <span className="d-inline-block">
                                <CopyToClipboard text={this.state.coupon}>
                                    <Button variant={"outline-info"}
                                            onClick={this.handleCouponCopyClick}>Copy</Button>
                                </CopyToClipboard>
                            </span>
                            </OverlayTrigger>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                <br/>
                <br/>
                <Button block onClick={() => history.push("/")}>Try again</Button>
            </Form>
        )
    }
}

const
    SuccessCheckoutWithRouter = withRouter(SuccessCheckout);

export default SuccessCheckoutWithRouter;