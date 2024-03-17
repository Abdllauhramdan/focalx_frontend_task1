import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";
import Informations from "../informations/Informations";
import Accordion from "../../modules/accordion";
function Hero() {
  return (
    <>
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-light "
            src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-01.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <span>
              Toronto, <em>Canada</em>
            </span>
            <h2 className="carousel-h2">HURRY !</h2>
            <h2 className="carousel-h2">
              GET THE BEST
              <br /> VILLA FOR YOU
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-light "
            src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <span>
              Melbourne,<em> Australia</em>
            </span>
            <h2 className="carousel-h2">BE QUIQ!</h2>
            <h2 className="carousel-h2">
              GET TE BEST
              <br /> VILLA IN TOWN
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-light "
            src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <span>
              Miami,<em> South Florida</em>
            </span>
            <h2 className="carousel-h2">ACT NOW</h2>
            <h2 className="carousel-h2">
              GET THE
              <br /> HIGHEST LEVEL
              <br /> PENTHOUSE
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container align-items-center justify-content-between my-5 appartment-view-wrapper">
        <div className="col-lg-3 col-12">
          <div className="a-with-img relative">
            <a href="/live/templatemo_591_villa_agency">
              <img
                className="first-img"
                src="	https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured-icon.png"
              />
            </a>
          </div>
          <img
            className="second-img"
            src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured.jpg"
          />
        </div>
        <div className="second-part col-lg-6 col-12">
          <div className="featured">
            <h6>FEATURED</h6>
          </div>
          <h2>Best Appartment Sea View</h2>

          <Accordion />
        </div>

        <div className="third-part col-lg-3 col-12">
          <Informations totalSpace="250 m2" />
        </div>
      </div>
    </>
  );
}

export default Hero;
