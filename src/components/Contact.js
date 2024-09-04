import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import funastro from "../assets/img/funastro.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={funastro} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Fun Facts about me</h2>
                <li><b>Paddle Power:</b> I proudly represented my state in Table Tennis, competing with the best!</li>
                <p></p>
                <li><b>Globetrotter:</b> With 15 countries under my belt, I’m on a quest to explore the world.</li>
                <p></p>
                <li><b>Magnet Mania:</b> My fridge tells stories of my adventures, adorned with magnets from unique places I’ve visited.</li>
                <p></p>
                <li><b>Music Head:</b> From my playlist to live concerts, music is my constant companion.</li>
                <p></p>
                <li><b>Aurora Dreamer:</b> One of my dreams is to witness the breathtaking Northern Lights in all their glory.</li>
                <p></p>
                <li><b>Cultural Connoisseur:</b> Exploring diverse cultures and cuisines fuels my passion for discovery.</li>
                <p></p>
                <li><b>Fundraising Whiz:</b> Rallied the troops and raised big bucks to turn our college cultural event into an epic celebration!</li>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
