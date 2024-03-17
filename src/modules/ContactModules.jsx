import Comunication from "../Components/Comunication/Comunication";
import FormPart from "../Components/FormPart/FormPart";
import Navbar from "../Components/Navbar/Navbar";
import PropertyIntroCard from "../Components/Property/propertyIntroCard";
import TheFooter from "../Components/TheFooter/TheFooter";
import "./ContactModules.css"
const ContactModules = () => {
  return (
    <div>
      <Comunication />
      <Navbar active={4} />
      <PropertyIntroCard title="HOME / CONTACT US" subTitle="CONTACT US" />
      <div className="container">
        <FormPart formPart={false}/>
      </div>
      <TheFooter />
    </div>
  );
};

export default ContactModules;
