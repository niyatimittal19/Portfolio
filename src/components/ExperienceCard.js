import { Col } from "react-bootstrap";

export const ExperienceCard = ({ title, position, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{position}</span>
          <br></br>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
