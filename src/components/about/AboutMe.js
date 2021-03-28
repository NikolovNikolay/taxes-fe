import {Container, Form, FormText,} from "react-bootstrap";
import './AboutMe.css'

function AboutMe() {

    return (
        <>
            <Container id="instructions-container">
                <Form>
                    <FormText>
                        <section id={"motivation"}>
                            <header>
                                <h4>
                                    About me
                                </h4>
                            </header>
                            <br/>
                            <p>
                                Hey there, I'm a Bulgarian individual and software developer who trades US financial
                                instruments (to be precise - real stocks as well as CFDs) on a daily basis.
                            </p>
                            <p>
                                I have
                                reached out to Bulgarian accountants because I wanted someone else to fill in my
                                Bulgarian tax declaration on behalf of me. It came out they either do not want to take
                                care of day traders or of hundreds, sometimes even thousands of transactions, for a
                                reasonable price. So, I decided to create an app that collects the required information
                                and prepares the calculations that I needed to fill in my Bulgarian tax declaration.
                            </p>
                            <p>
                                You can reach me out at <a
                                href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a>
                            </p>
                        </section>
                    </FormText>
                </Form>
            </Container>
        </>
    )
}

export default AboutMe;