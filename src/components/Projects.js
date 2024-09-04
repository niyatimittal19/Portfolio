import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import cmu from "../assets/img/cmu.png";
import nus from "../assets/img/nus.png";
import igdtu from "../assets/img/igdtu.png";
import secondary from "../assets/img/secondary.png";
import allied from "../assets/img/allied.png";
import ericsson from "../assets/img/ericsson.png";
import cerrid from "../assets/img/cerrid.png";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
import proj4 from "../assets/img/proj4.png";
import proj5 from "../assets/img/proj5.png";
import proj6 from "../assets/img/proj6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bookstore microservice application",
      description: "Microservices were deployed on AWS EKS. Circuit breaker pattern was applied to reduce peak load errors by 40%. A Kafka-based messaging system was designed to enable loose coupling and improve system resilience.",
      imgUrl: proj1,
    },
    {
      title: "Android Application- Spotify Clone",
      description: "Engineered a full-stack RESTful mobile application on Android using Java, SpringBoot, MySQL, and MongoDB. Configured GitHub Actions for CI/CD to automate Docker container deployments on GitHub Codespaces.",
      imgUrl: proj2,
    },
    {
      title: "Whac-a-Mole",
      description: "Created a Whac-A-Mole game utilizing multithreading concepts, with a Swing GUI and Java AWT for handling Action Events. Players earn a point each time they successfully hit a mole.",
      imgUrl: proj3,
    },
    {
      title: "Encrypted Key Exchange over TCP/UDP",
      description: "Implemented Diffie-Hellman key exchange between client and server over both TCP and UDP protocols, utilizing digital certificates for secure verification. Additionally, developed simple communication functionalities between client and server, including mathematical operations.",
      imgUrl: proj4,
    },
    {
      title: "Distributed Computing for Spatial Locality",
      description: "Utilized distributed computing with MapReduce and Spark services to demonstrate the principle of spatial locality by bringing computation closer to the data. The data is processed in parallel using big data infrastructure.",
      imgUrl: proj5,
    },
    {
      title: "Bookstore utiliing JWT, BFF and SRP ",
      description: "AWS CloudFormation template was customized to direct traffic for difference clients, with microservice health checks ensuring traffic avoidance to failing nodes. A robust cloud architecture was established by configuring load balancers, target groups, security groups.",
      imgUrl: proj6,
    },
  ];

  const experience = [
    {
      title: "Secondary DAO",
      position: "Software & Security Analyst",
      description: "Developed a dashboard using React and TypeScript to visualize and log transactions executed by an escrow smart contract. Conducted security assessments with automated tools and reviewed 2,000 lines of Solidity code to identify vulnerabilities.",
      imgUrl: secondary,
    },
    {
      title: "Allied Digital Services LLC ",
      position: "Software Engineer Intern",
      description: "Implemented a CI/CD pipeline utilizing Jenkins and GitLab CI to automate the deployment process, resulting in a 2x increase in release frequency. Achieved a 40% decrease in tech debts and bugs identified using SonarQube for static code analysis, leading to improved stability.",
      imgUrl: allied,
    },
    {
      title: "Ericsson",
      position: "Cloud Solutions Integrator",
      description: "Engineered 10+ Kubernetes deployments, boosting scalability by 40%. Crafted 20+ CRDs for custom networking, improved traffic management by 35% with Services and Ingress, and streamlined deployments using ConfigMaps and Secrets.",
      imgUrl: ericsson,
    },
    {
      title: "IGDTUW",
      position: "Software Engineer",
      description: "Developed a Python/Django application with MongoDB and Git for optimized data management. Deployed scalable microservices with Docker and extended functionality via REST APIs, automating hostel workflows to save 56 hours of manual work.",
      imgUrl: igdtu,
    },
    {
      title: "Cerrid Solutions",
      position: "Software Engineer Intern",
      description: "Migrated Loss Models to servers with Python, optimized data processes, and developed a Django app with metrics dashboard and PostgreSQL integration. Tested and debugged a 4000-line Python banking app with Selenium for improved reliability.",
      imgUrl: cerrid,
    },
  ];

  const educations = [
    {
      title: "Carnegie Mellon University",
      description: "Master of Information Systems Management",
      duration: "Aug 2022 - May 2024",
      gpa: "GPA: 3.75",
      imgUrl: cmu,
    },
    {
      title: "Indira Gandhi Delhi technical University for Women",
      description: "Bachelor of Technology, Information Technology",
      duration: "Aug 2016 - May 2020",
      gpa: "GPA: 3.53",
      imgUrl: igdtu,
    },
    {
      title: "National University of Singapore",
      description: "Summer training in Big Data and Data Analytics",
      duration: "Jun 2018 - Jul 2018",
      gpa: "",
      imgUrl: nus,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>More about me</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          experience.map((project, index) => {
                            return (
                              <ExperienceCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>}
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          educations.map((education, index) => {
                            return (
                              <EducationCard
                                key={index}
                                {...education}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
