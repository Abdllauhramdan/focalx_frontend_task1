import "./Informations.css";
import icon1 from '/info-icon-01.png'
import icon2 from '/info-icon-02.png'
import icon3 from '/info-icon-03.png'
import icon4 from '/info-icon-04.png'
const Informations = ({ totalSpace }) => {
  return (
    <div className="contact-container">
      <div className="property-features">
        <div className="single-property-feature d-flex align-items-center">
          <img
            src={icon1}
            alt=""
          />
          <div className="single-property-feature-text">
            <h2>{totalSpace}</h2>
            <span>Total Flat Space</span>
          </div>
        </div>

        <div className="single-property-feature d-flex align-items-center">
          <img
            src={icon2}
            alt=""
          />
          <div className="single-property-feature-text">
            <h2>Contract</h2>
            <span>Contract Ready</span>
          </div>
        </div>

        <div className="single-property-feature d-flex align-items-center">
          <img
            src={icon3}
            alt=""
          />
          <div className="single-property-feature-text">
            <h2>Payment</h2>
            <span>Payment Process</span>
          </div>
        </div>

        <div className="single-property-feature d-flex align-items-center">
          <img
            src={icon4}
            alt=""
          />
          <div className="single-property-feature-text">
            <h2>Safety</h2>
            <span>24/7 Under Control</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
