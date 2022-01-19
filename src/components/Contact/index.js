import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
    Container,
    FormWrap,
    Icon,
    GobackArrow,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    FormMessage
} from './ContactElements';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'gmail-portfolio-template', form.current, "user_Sr9d8tG2DBi0JlardPvxC")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      form.current.reset();
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        KH
                        <GobackArrow>
                            <BsFillArrowLeftCircleFill />
                        </GobackArrow>
                    </Icon>
                    <FormContent>
                        <Form ref={form} onSubmit={sendEmail}>
                            <FormH1>Contact Me</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput type="text" required name="from_name"/>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required name="email"/>
                            <FormLabel htmlFor="for">Message</FormLabel>
                            <FormMessage type="text" required name="message"/>
                            <FormButton type="submit">Send Message</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Contact
