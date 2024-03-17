import "./BestDeal.css";

const BestDeal = () => {
  return (
    <div className="best-deal-container">
      <div className="container" style={{ background: "transparent" }}>
        <div className="best-deal-title">
          <div className="left-child">
            <h5>| BEST DEAL</h5>
            <h3>
              Find Your Best Deal <br /> Right Now!
            </h3>
          </div>
          <div className="right-child">
            <button
              type="button"
              className="btn p-2 px-4 mx-3 responsive-button"
              style={{
                backgroundColor: "#f35525",
                border: "none",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              Appartment
            </button>
            <button
              type="button"
              className="btn btn-dark p-2 px-4 mx-3"
              style={{
                fontSize: "20px",
              }}
            >
              Villa House
            </button>
            <button
              type="button"
              className="btn btn-dark p-2 px-4 mx-3"
              style={{
                fontSize: "20px",
              }}
            >
              Penthouse
            </button>
          </div>
        </div>

        {/* best deal content */}
        <div className="best-deal-wrapper">
          <div className="left-child-best-deal col-lg-3 col-12">
            <div className="single-item-best-deal">
              <h5>Total Flat Space</h5>
              <strong>540 m2</strong>
            </div>

            <div className="single-item-best-deal">
              <h5>Floor number</h5>
              <strong>3</strong>
            </div>

            <div className="single-item-best-deal">
              <h5>Number of rooms</h5>
              <strong>8</strong>
            </div>

            <div className="single-item-best-deal">
              <h5>Parking Available</h5>
              <strong>Yes</strong>
            </div>
            <div className="single-item-best-deal">
              <h5>Payment Process</h5>
              <strong>Bank</strong>
            </div>
          </div>
          <div className="col-lg-6 px-4">
            <img
              src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/deal-01.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-3">
            <h4>All Info About Apartment</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor pack incididunt ut labore et dolore magna aliqua
              quised ipsum suspendisse.
              <br />
              <br />
              Swag fanny pack lyft blog twee. JOMO ethical copper mug,
              succulents typewriter shaman DIY kitsch twee taiyaki fixie hella
              venmo after messenger poutine next level humblebrag swag franzen.
            </p>
            <div className="schedule-visit-btn">
                <div className="round">
                <i id="m" className="fa fa-calendar"></i>
                </div>
              <span>Schedule a Visit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
