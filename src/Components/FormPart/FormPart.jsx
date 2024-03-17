import HMap from "../map/map";
import HForm from "../form/Form";
import phoneIcon from "/phone-icon.png";
import emailIcon from "/email-icon.png";
import "./FormPart.css";

const FormPart = ({formPart}) => {
  return (
    <div className={(formPart)?"formPart-wrapper":"contactPart-wrapper"}>
      <div className="formPart-content">
        <h2> CONTACT US</h2>
        <h5>
          Get In Touch With <br />
          Our Agents
        </h5>
        <p>When you really need to download free CSS templates, please remember our website
        <br/> TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a
        <br/>variety of Bootstrap HTML CSS templates on our website. If you need more information,
        <br/> please contact us</p>
      </div>
      <div className="wrapper-contact">
        <div className="left-side-map">
          <HMap />
          <div className="details-wrapper">
            <div className="details-child">
              <img src={phoneIcon} alt="" />
              <div className="details-text">
                <h4>010-020-0340</h4>
                <span>Phone Number</span>
              </div>
            </div>
            <div className="details-child">
              <img
                src={emailIcon}
                alt=""
              />
              <div className="details-text">
                <h4>info@villa.co</h4>
                <span>Business Email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side-contact">
          <HForm />
        </div>
      </div>
    </div>
  );
};

export default FormPart;
