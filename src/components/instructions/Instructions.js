import {Button, ButtonGroup, Container, Form, FormText, Modal,} from "react-bootstrap";
import './Instructions.css'
import {useHistory} from "react-router-dom";
import {useState} from "react";

function Instructions() {

    const history = useHistory();
    let [showExampleModal, setShowExampleModal] = useState(false)

    const handleGoToSubmit = (e) => {
        e.preventDefault()
        history.push("/")
    }

    const handleExampleModalClose = (e) => {
        e.preventDefault()
        setShowExampleModal(false)
    }

    const handleExampleModalShow = (e) => {
        e.preventDefault()
        setShowExampleModal(true)
    }

    return (
        <>
            <Container id="instructions-container">
                <Form>
                    <FormText>
                        <section id={"contact"}>
                            <header>
                                <h4>
                                    How do I reach you out?
                                </h4>
                            </header>
                            <br/>
                            <p>
                                You can send me an email <a
                                href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a>.
                                I will try responding shortly.
                            </p>
                            <p>
                                If you find this service useful you can <a href={"https://revolut.me/nikinikolov"}
                                                                           target={"_new"}>buy me a beer or two.</a>
                            </p>
                        </section>
                        <br/>
                        <section id={"disclaimer"}>
                            <header>
                                <h4>
                                    Disclaimer
                                </h4>
                            </header>
                            <br/>
                            <p>
                                <b>
                                    I am not a tax consultant and I do not undertake any responsibility if you plan to
                                    use
                                    my paid cloud service to come up with calculations that you can use for Bulgarian
                                    tax
                                    declaration purposes. There might be discrepancies between the amounts that you need
                                    to
                                    declare and the ones calculated by your accountant.
                                    <br/>
                                    The web service works only with
                                    USD
                                    transactions from eToro and Revolut as well as only with US financial instruments.
                                    The
                                    web service is built specifically for the individual who needs to do tax
                                    declarations in
                                    Bulgaria.
                                </b>
                            </p>
                        </section>
                        <br/>
                        <section>
                            <header>
                                <h4>
                                    How does it work?
                                </h4>
                            </header>
                        </section>
                        <br/>
                        <section id={"etoro"}>
                            <header>
                                <h4>
                                    eToro
                                </h4>
                            </header>
                            <br/>
                            <p>
                                You need to export an Excel statement in the scope of the target year and maybe a month
                                after (e.g. Jan 1,2020 - Jan 31, 2021). It's also fine if you break down the statements
                                to several files. You should include January (next year) in your report if you want to
                                get a list of the open positions you carried over.
                            </p>
                        </section>
                        <section id={"revolut"}>
                            <header>
                                <h4>
                                    Revolut
                                </h4>
                            </header>
                            <br/>
                            <p>
                                You should export statements for all months you want to include in the report. Again,
                                make sure to attach next year's January to get carried over positions.
                            </p>
                            <br/>
                        </section>
                        <section id={"requirements"}>
                            <header>
                                <h4>
                                    What's required?
                                </h4>
                            </header>
                            <br/>
                            <p>
                                There is no limit to the number of files you can attach and submit. Just make sure they
                                are:
                                <ul>
                                    <li>no more than <strong>5 mb in total</strong></li>
                                    <li>
                                        in the correct format - <strong>PDF</strong> for Revolut
                                        and <strong>XLSX/XLS</strong> for eToro
                                    </li>
                                    <li>the statements are from the target year</li>
                                    <li>
                                        the right files - any other files in the correct format will be accepted, but
                                        they won't be red accurately and you will get inadequate results
                                    </li>
                                    <li>
                                        please do not upload Revolut statements and eToro statements at the same time,
                                        as these have different formats and require separate requests.
                                    </li>
                                </ul>
                            </p>
                            <br/>
                        </section>
                        <section id={"submission"}>
                            <header>
                                <h4>
                                    How do I submit?
                                </h4>
                            </header>
                            <br/>
                            <p>
                                <ol>
                                    <li>
                                        Select target year (it is set to 2020 by default) and report type from the
                                        dropdowns.
                                    </li>
                                    <li>
                                        Browse and attach your statement files.
                                    </li>
                                    <li>
                                        Enter your email and full names in the text fields - these are required as you
                                        will get your report on your email. You may enter Gin Tonic in the name field if
                                        you
                                        like. We don't judge anybody on how they prefer to be called. Just make sure
                                        that the
                                        email is correct.
                                    </li>
                                    <li>
                                        Input your coupon code. The coupon is personalized and you can request one by
                                        contacting me.
                                    </li>
                                </ol>
                                Once you fill everything needed hit the button at the end of the form and you will be
                                redirected to a success/fail page with your request ID and coupon code.<br/>If all goes
                                well you will receive an email with your report.
                            </p>
                            <br/>
                        </section>
                        <section id={"personal-data"}>
                            <header>
                                <h4>
                                    What about the data I submit?
                                </h4>
                            </header>
                            <br/>
                            <p>
                                Personal data is kept for 48 hours and deleted afterwards.
                            </p>
                        </section>
                        <br/>
                        <section id={"value"}>
                            <header>
                                <h4>
                                    What will I get after I submit my reports?
                                </h4>
                            </header>
                            <br/>
                            <p>
                                You will receive an email that features information that you can fill in <a
                                href="https://nra.bg/document?id=19524">annex 5</a> and <a
                                href="https://nra.bg/document?id=19527">annex 8</a> in your declarations. Тhe official
                                European Central Bank USD/BGN exchange rates
                                for the corresponding day and date of the transaction are taken into account.
                            </p>
                            <p>
                                If the statements you provide are exhaustive enough, you will get:
                                <ul>
                                    <li>
                                        a list of your open positions that were carried over from the previous year with
                                        their:
                                        <ul>
                                            <li>average USD price (if you bought the stock several times before carrying
                                                it
                                                over)
                                            </li>
                                            <li>average BGN price</li>
                                            <li>open date</li>
                                            <li>total units</li>
                                            <li>name and token of the stock in the position</li>
                                        </ul>
                                    </li>
                                    <li>
                                        dividends:
                                        <ul>
                                            <li>gross amount received</li>
                                            <li>net amount received</li>
                                            <li>taxes - there are some things to consider like if the dividends are
                                                already
                                                taxed and by what amount, but if this is greater than 0 you'll have to
                                                pay
                                                it to the NRA
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        transactions summarization:
                                        <ul>
                                            <li>total buy amount</li>
                                            <li>total sell amount</li>
                                            <li>taxes - the amount to pay to the NRA. <strong>Note if that is less than
                                                0,
                                                then you owe nothing or you can use the amount to reverse the tax amount
                                                of
                                                some of your other report types. If you are а legal entity you can use
                                                that sum to reverse taxes next year.</strong>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <p><a href="#" onClick={handleExampleModalShow}>Check the example report right now</a></p>
                        </section>
                    </FormText>
                    <br/>
                    <br/>
                    <Form.Group id="buttons-container">
                        <ButtonGroup>
                            <Button onClick={handleGoToSubmit}>Submit request</Button>
                        </ButtonGroup>
                    </Form.Group>
                    <Modal size="xl" show={showExampleModal}>
                        <Modal.Header>
                            <Modal.Title>Sample report</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Hi Stranger,<br/>
                                <br/>
                                Here are the results of the tax calculations you requested with inquiry ID
                                da761eca-da04-49fd-809c-5e719d63a0a2 (2020):<br/>
                                <br/>
                                ----------------------------------------<br/>
                                Operations (BGN):<br/>
                                ----------------------------------------<br/>
                                Total sell amount: XXX XXX,XX<br/>
                                Total buy amount: XXX XXX,XX<br/>
                                Total tax: XXX,XX<br/>
                                <br/>
                                ----------------------------------------<br/>
                                Dividends (BGN):<br/>
                                ----------------------------------------<br/>
                                Net amount: XXX,XX<br/>
                                Gross amount: XXXX,XX<br/>
                                Total tax: XXX,XX<br/>
                                <br/>
                                ----------------------------------------<br/>
                                Transferred positions 2020 (XX):<br/>
                                ----------------------------------------<br/>
                                1 | Date: 11-11-2020 | Token: TSLA | Name: Tesla, Inc. | Avg price (USD): XXX,XX | Avg
                                price (BGN): XXX,XX | Units: XX,XXX |<br/>
                                ---------------------<br/>
                                2 | Date: 19-11-2020 | Token: GME | Name: GameStop | Avg price (USD): XXX,XX | Avg
                                price (BGN): XXX,XX | Units: XX,XXX |<br/>
                                ---------------------<br/>
                                3 | Date: 20-11-2020 | Token: FVRR | Name: Fiverr | Avg price (USD): XXX,XX | Avg
                                price (BGN): XXX,XX | Units: XXX,XXX |<br/>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonGroup>
                                <Button variant="secondary" onClick={handleExampleModalClose}>Close</Button>
                            </ButtonGroup>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container>
        </>
    )
}

export default Instructions;