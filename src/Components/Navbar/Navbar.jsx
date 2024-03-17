import "./Navbar.css";
import { useState, useEffect } from 'react';


const Navbar = ({ active }) => {
  const [isScroll, setIsScroll] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setTimeout(() => {
      setIsScroll(window.scrollY > 0);
    }, 500);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div>

    <div className={isScroll ? 'scrolled' : ''}>
      <div className="position">
        <div class="sticky-top">
          <div className="navbarcontainer ">
            <nav className="navbar navbar-expand-sm  ">
              <div className="container-fluid">
                <a className="navbar-brand" href="">
                  Villa
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === 1 ? "active" : ""}`}
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className={`nav-link ${active === 2 ? "active" : ""}`}
                        href="/properties"
                      >
                        Properties
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === 3 ? "active" : ""}`}
                        href="/live/templatemo_591_villa_agency"
                      >
                        Property Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${active === 4 ? "active" : ""}`}
                        href="/ContactUs"
                      >
                        Contact Us
                      </a>
                    </li>
                    <div className="scheduling">
                      <i id="m" class="fa fa-calendar"></i>
                    </div>

                    <button>Schedule a visit</button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
