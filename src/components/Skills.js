import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import languages from "../assets/img/language.png"
import database from "../assets/img/database.png"
import framework from "../assets/img/framework.png"
import cloud from "../assets/img/cloud.png"
import other from "../assets/img/other.png"
import bg from "../assets/img/inverted.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={languages} alt="Image" />
                                <h5>Languages</h5>
                            </div>
                            <div className="item">
                                <img src={database} alt="Image" />
                                <h5>Databases</h5>
                            </div>
                            <div className="item">
                                <img src={cloud} alt="Image" />
                                <h5>Cloud Technologies</h5>
                            </div>
                            <div className="item">
                                <img src={framework} alt="Image" />
                                <h5>Frameworks</h5>
                            </div>
                            <div className="item">
                                <img src={other} alt="Image" />
                                <h5>Others</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={bg} alt="Image" />
    </section>
  )
}
