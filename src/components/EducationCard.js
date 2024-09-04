import { Col } from "react-bootstrap";

export const EducationCard = ({ title, description, duration, gpa, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <span>{duration}</span>
          <br></br>
          <span>{gpa}</span>
        </div>
      </div>
    </Col>
  )
}
