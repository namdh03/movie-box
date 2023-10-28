import { Button, Container, Typography } from "@mui/material";
import * as Styled from "./Contact.styled";

const Contact = () => {
    return (
        <Styled.ContactSection>
            <Container>
                <Typography variant="h1">Contact With Us</Typography>
                <Typography variant="body1">
                    The right move at the right time saves your investment. live
                    the dream of expanding your business.
                </Typography>
                <form action="" method="POST" className="contact__form">
                    <Styled.ContactFormGroup>
                        <Styled.ContactFormInput
                            type="text"
                            className="contact__form-input"
                            name="firstName"
                            id="firstName"
                            placeholder="First name"
                            required
                        />

                        <Styled.ContactFormInput
                            type="text"
                            className="contact__form-input"
                            name="lastName"
                            id="lastName"
                            placeholder="Last name"
                            required
                        />
                    </Styled.ContactFormGroup>

                    <Styled.ContactFormGroup>
                        <Styled.ContactFormInput
                            type="email"
                            className="contact__form-input"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            required
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />

                        <Styled.ContactFormInput
                            type="tel"
                            className="contact__form-input"
                            name="phone"
                            id="phone"
                            placeholder="Phone number"
                            required
                            // pattern="^(0|\+?84)(3|5|7|8|9)[0-9]{8}$"
                        />
                    </Styled.ContactFormGroup>
                    <Styled.ContactFormGroup>
                        <textarea
                            className="contact__form-textarea"
                            name="yourself"
                            id="yourself"
                            placeholder="Tell us about yourself"
                            minLength={10}
                        ></textarea>
                    </Styled.ContactFormGroup>
                    <Styled.ContactFormGroup>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                minWidth: "130px",
                                fontSize: "1.4rem",
                                height: "46px",
                                padding: "10px 20px",
                            }}
                        >
                            Contact us
                        </Button>
                    </Styled.ContactFormGroup>
                </form>
            </Container>
        </Styled.ContactSection>
    );
};

export default Contact;
