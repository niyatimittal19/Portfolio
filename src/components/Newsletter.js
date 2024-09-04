import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import linkedin from '../assets/img/linkedin.webp';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={12} xl={10}>
              <h3>Connect with me on LinkedIn! Let's discuss exciting opportunities</h3>
            </Col>
            <Col md={6} xl={2}>
               
               <a href="https://www.linkedin.com/in/niyati19/"><img src={linkedin} alt="" size={15} margin={30} padding={30}/></a>

            </Col>
          </Row>
        </div>
      </Col>
  )
}
