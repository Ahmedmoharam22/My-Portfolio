import './contact.css'
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../../assest/images/contact-img.svg";
import contactImg from "../../assest/images/contact-img copy.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { errorMsg, successMsg } from '../Toast/Toast'

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const allFieldsEmpty = Object.values(formDetails).every(value => value === '');
    const { email, phone, message } = formDetails;

    if (allFieldsEmpty) {
      errorMsg('Please fill the fields');
      setButtonText("Send");
      return; // Stop further execution if fields are empty
    }
    else if ((email.trim() === '' || phone.trim() === '' || message.trim() == '')) {
      errorMsg('Email, phone, and message are required fields');
      setButtonText("Send");
      return;
    }
    else if (!/\S+@\S+\.\S+/.test(email.trim())) {
      errorMsg('Please enter a valid email address');
      setButtonText("Send");
      return;
    } else if (!/^\d{11}$/.test(phone.trim())) {
      errorMsg('Phone number must be 11 digits');
      setButtonText("Send");
      return;
    } else {
      setButtonText("Sending...");
      emailjs.sendForm('service_uhssk4x', 'template_num9kv7', form.current, 'owcI0ZHb-jsuS4DGx')
        .then((result) => {
          console.log(result.text);
          if (result.status === 200) {
            successMsg('Message sent successfully')
            setFormDetails(formInitialDetails);
            setButtonText("Send");
          }
        }, (error) => {
          errorMsg('Something went wrong, please try again later.')
          setButtonText("Send");
        });

      e.target.reset()
    }
  }
  return (

    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {/* {
                        status.message &&
                        <Col className="px-1">
                          <p className={`inline-block ${status.success === false ? "danger" : "success"}`}>{status.message}</p>
                        </Col>
                      } */}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact