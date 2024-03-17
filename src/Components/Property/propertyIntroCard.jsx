import "./propertyIntroCard.css";

const PropertyIntroCard = ({ title, subTitle }) => {
  return (
    <div className="intro-card-wrapper">
      <div className="card-content">
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
      </div>
    </div>
  );
};

export default PropertyIntroCard;
