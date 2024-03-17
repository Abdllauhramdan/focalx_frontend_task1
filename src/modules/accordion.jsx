import { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  return (
    <div id="accordion" style={{ width: "70%" }}>
      {accordionData.map((item, index) => (
        <div className="card" key={index}
        style={{ borderRadius: 0,border:0 }}
        >
          <div
            className="card-header"
            id={`heading${index}`}
            style={{ borderRadius: 0,border: index === 2 && 0 }}
          >
            <h5 className="mb-0">
              <button
                className={`btn btn-link ${
                  index === openAccordion ? "" : "collapsed"
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={index === openAccordion ? "true" : "false"}
                aria-controls={`collapse${index}`}
                style={{
                  textDecoration: "none",
                  borderBottom: 0,
                  color: index === openAccordion ? "#f35525" : "#000",
                  fontSize: "20px",
                }}
              >
                {item.title}
              </button>
            </h5>
          </div>
          <div
            id={`collapse${index}`}
            className={`collapse ${index === openAccordion ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordion"
          >
            <div className="card-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  {
    title: "Best useful links ?",
    content: `Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    title: "How does this work ?",
    content:
      "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Why is Villa the best ?",
    content:
      "Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default Accordion;
