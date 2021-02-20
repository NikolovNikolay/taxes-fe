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
                        <section id={"motivation"}>
                            <header>
                                <h4>
                                    Motivation
                                </h4>
                            </header>
                            <br/>
                            <p>
                                I'm a Bulgarian individual and software developer who does day trading. Most likely you
                                are
                                trading with shares too, and that's why you are here.
                            </p>
                            <p>
                                After several unsuccessful attempts to negotiate a reasonable price with accountants for
                                the
                                audit of several thousand transactions per year, broken down to multiple PDFs and other
                                type
                                of e-files, I decided to collect the required information and prepare the needed
                                calculations for the Bulgarian NRA myself.
                            </p>
                            <p>
                                <strong>
                                    Just a few things to note first:
                                    <ul>
                                        <li>
                                            there may be a discrepancy with the amount of annual tax calculated by your
                                            accountant and the online service - I do not undertake any responsibility in
                                            this regard
                                        </li>
                                        <li>
                                            this is a paid service - I believe that time is priceless, and the time and
                                            effort I invested, combined with the time and money you can save, they can
                                            be
                                            put together for a symbolic price.
                                        </li>
                                        <li>
                                            the domain is pretty fresh and that is the only service in my portfolio I am
                                            offering at the moment; the complete lack of information about the author
                                            and
                                            the services offered may be a big no go, but you are free to pass anyways.
                                            For more info you can reach me at <a
                                            href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a>
                                        </li>
                                        <li>
                                            right now the service works with trades placed in USD only
                                        </li>
                                        <li>
                                            there are foreigners that are happy to use the service and declare taxes to
                                            the Bulgarian NRA, so the page is in English.
                                        </li>
                                    </ul>
                                </strong>
                            </p>
                        </section>
                        <br/>
                        <section id={"personal-data"}>
                            <header>
                                <h4>
                                    Export statements from eToro or Revolut
                                </h4>
                            </header>
                            <br/>
                            <p>
                                If you need your taxes from <strong>eToro</strong> calculated, then you might want to
                                export
                                an <strong>Excel</strong> statement in the scope of the target year and maybe a month
                                after
                                (e.g. 01-01-2020 - 31.01.2021). It's also fine if you break down the statements to
                                several
                                files. You should include January (next year) in your report if you want to get a list
                                of
                                the open positions you carried over.
                            </p>
                            <p>
                                For <strong>Revolut</strong> you should export statements for all months you want to
                                include
                                in the report. Again, make sure to attach next year's January to get carried over
                                positions.
                            </p>
                            <br/>
                        </section>
                        <section id={"statements"}>
                            <header>
                                <h4>
                                    About that statement files themselves
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
                                        they
                                        won't
                                        be red accurately and you will get inadequate results
                                    </li>
                                </ul>
                            </p>
                            <br/>
                        </section>
                        <section id={"submission"}>
                            <header>
                                <h4>
                                    The submission
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
                                        will
                                        get
                                        your report on your email. You may enter Gin Tonic in the name field if you
                                        like. We
                                        don't judge anybody on how they prefer to be called. Just make sure that the
                                        email
                                        is
                                        correct.
                                    </li>
                                    <li>
                                        Use a coupon if you have one. The coupon lets you submit your statements without
                                        paying
                                        anything.<br/>You will get your coupon when you do your first submission. You
                                        can
                                        use
                                        the code <strong>two</strong> more times for the <strong>same report type and
                                        email</strong>.
                                    </li>
                                </ol>
                                Once you fill everything needed hit the button at the end of the form and you will be
                                redirected
                                to a success/fail page with your request ID and coupon code.<br/>If all goes well you
                                will
                                receive an email with your report. If not please contact <a
                                href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a> for
                                more details.
                            </p>
                            <br/>
                        </section>
                        <section id={"personal-data"}>
                            <header>
                                <h4>
                                    Your data
                                </h4>
                            </header>
                            <br/>
                            <p>
                                Personal data is kept for 48 hours and deleted afterwards.
                            </p>
                        </section>
                        <br/>
                        <section id={"payments"}>
                            <header>
                                <h4>
                                    Payments
                                </h4>
                            </header>
                            <br/>
                            <p>
                                Payments are made via the <a href={"https://stripe.com/"} rel={"noreferrer"}
                                                             target={"_blank"}>Stripe</a> platform.
                                After the server receives your request you will be redirected to a checkout page, hosted
                                in
                                Stripe, using secure connection. Then you should input your card details. Your request
                                will
                                cost you <strong>10 BGN</strong> and you will get a coupon code if you need to re-submit
                                your data.
                            </p>
                            <p>
                                Once on the checkout page you will have
                            </p>
                        </section>
                        <br/>
                        <section id={"calculations"}>
                            <header>
                                <h4>
                                    The calculations
                                </h4>
                            </header>
                            <br/>
                            <p>
                                The calculations will output the information needed to fill <a
                                href="https://nra.bg/document?id=19524">annex 5</a> and <a
                                href="https://nra.bg/document?id=19527">annex 8</a> in your
                                declarations. Тhe official exchange rates for the corresponding day and date of the
                                transaction are taken into account.
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
                                <br/>
                                Use the following coupon to submit two more times: 4430ba64-06cd-4572-bedb-1cc9135422b1.
                                It is bound to the current report type and your email only.<br/>
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