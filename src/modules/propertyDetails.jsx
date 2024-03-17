import TheFooter from "../Components/TheFooter/TheFooter";
import Navbar from "../Components/Navbar/Navbar";
import Comunication from "../Components/Comunication/Comunication";
import PropertyIntroCard from "../Components/Property/propertyIntroCard";
import "./propertyDetails.css";
import Accordion from "./accordion";
import BestDeal from "./BestDeal";
import Informations from "../Components/informations/Informations";

const PropertyDetails = () => {
  return (
    <div className="app">
      <Comunication/>
      <Navbar active={3} />
      <PropertyIntroCard
        title="HOME / SINGLE PROPERTY"
        subTitle={"SINGLE PROPERTY"}
      />
      <div className="container" style={{borderBottom:"none"}}>
        <div className="property-details-wrapper">
          <div className="property-details-left-child">
            <img
              src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/single-property.jpg"
              alt=""
            />
          </div>
          <div className="property-details-right-child ">
           <Informations totalSpace="450 m2"/>
          </div>
        </div> 
        <button className="btn mb-5" style={{ backgroundColor: "#fbd9cf" }}>
          Apparment
        </button>
        <h3 className="pb-4 border-bottom">24 New Street Miami, OR 24560</h3>
        <p className="pt-4" style={{ width: "70%", opacity: ".8" }}>
          Get the best villa agency HTML CSS Bootstrap Template for your company
          website. TemplateMo provides you the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            best free CSS templates
          </a>{" "}
          in the world. Please tell your friends about it. Thank you. Cloud
          bread kogi bitters pitchfork shoreditch tumblr yr succulents
          single-origin coffee schlitz enamel pin you probably haven&apos;t
          heard of them ugh hella.
          <br />
          <br />
          When you look for free CSS templates, you can simply type TemplateMo
          in any search engine website. In addition, you can type TemplateMo
          Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
          +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
          PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </p>
        <br />
        <Accordion />
      </div>
      <BestDeal />
      <TheFooter />
    </div>
  );
};

export default PropertyDetails;
