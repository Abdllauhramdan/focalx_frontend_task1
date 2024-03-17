import "../App.css";
import HCard from "../Components/HCard/HCard";
import Comunication from "../Components/Comunication/Comunication";
import Hero from "../Components/Hero/Hero";
import HfourAndHtwo from "../Components/HfourAndHtwo/HfourAndHtwo";
import Navbar from "../Components/Navbar/Navbar";
import SmallCard from "../Components/SmallCard/SmallCard";
import VideoPart from "../Components/VideoPart/VideoPart";
import pic1 from "/property-01.jpg";
import pic2 from "/property-02.jpg";
import pic3 from "/property-03.jpg";
import pic4 from "/property-04.jpg";
import pic5 from "/property-05.jpg";
import pic6 from "/property-06.jpg";

import FormPart from "../Components/FormPart/FormPart";
import TheFooter from "../Components/TheFooter/TheFooter";
import BestDeal from "./BestDeal";
function Landing() {
  return (
    <div className="app">
      <Comunication />
      <Navbar active={1} />
      <Hero />
      <VideoPart />
      <div className="carddesign">
        <SmallCard number="34" pargraph="Buildings" rest="Finished Now" />
        <SmallCard number="12" pargraph="years" rest="Experience" />
        <SmallCard number="24" pargraph="Awwards" rest="Won 2023" />
      </div>
      <BestDeal />
      <HfourAndHtwo />

      <div className="cssforcards">
        <HCard
          photo={pic1}
          type="Luxury Villa"
          price="$2.264.000"
          location="18 New Street Miami, OR 97219"
          items={[
            {
              bedrooms: 8,
              bathrooms: 8,
              area: "545m2",
              floor: 3,
              parking: "6 spots",
            },
          ]}
        />
        <HCard
          photo={pic2}
          type="Luxury Villa"
          price="$1.180.000"
          location="54 Mid Street Florida, OR 27001"
          items={[
            {
              bedrooms: 6,
              bathrooms: 5,
              area: "450m2",
              floor: 3,
              parking: "8 spots",
            },
          ]}
        />
        <HCard
          photo={pic3}
          type="Luxury Villa"
          price="$1.460.000"
          location="26 Old Street Miami,OR 38540"
          items={[
            {
              bedrooms: 5,
              bathrooms: 4,
              area: "225m2",
              floor: 3,
              parking: "10 spots",
            },
          ]}
        />
        <HCard
          photo={pic4}
          type="Apartment"
          price="$584.500"
          location="12 New Street Miami,OR 12650"
          items={[
            {
              bedrooms: 4,
              bathrooms: 83,
              area: "125m2",
              floor: "25th",
              parking: "2 cars",
            },
          ]}
        />
        <HCard
          photo={pic5}
          type="Penthouse"
          price="$925.600"
          location="34 Beach Street Miami, OR 43680"
          items={[
            {
              bedrooms: 4,
              bathrooms: 4,
              area: "180m2",
              floor: "38th",
              parking: "2 cars",
            },
          ]}
        />
        <HCard
          photo={pic6}
          type="Modern Condo"
          price="$450.000"
          location="122 New Street Portland,OR 16540"
          items={[
            {
              bedrooms: 3,
              bathrooms: 2,
              area: "165m2",
              floor: "26th",
              parking: "3 cars",
            },
          ]}
        />
      </div>
      <FormPart formPart={true} />
      <div className="relative">
        <TheFooter />
      </div>
    </div>
  );
}

export default Landing;
