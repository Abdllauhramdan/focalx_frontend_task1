import { Link } from 'react-router-dom';
import './Comunication.css'
import React from 'react'

const Comunication = ({ info, comunicationitems }) => {
    
    info=[
      { icon: "fa fa-envelope", content: " info@company.com" },
      { icon: "fa fa-map", content: "Sunny Isles Beach, FL 33160" } ];
   
    comunicationitems=[
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-twitter",
      "fab fa-instagram",
    ];
 
  return (
   
          <div>
            <div className="container-com">
              <div className="row-com">
                <div className="first-col">
                  {info.map((element, index) => {
                    return (
                      <p key={index}>
                        <i className={element.icon}></i>
                        {element.content}
                      </p>
                    );
                  })}
                </div>
                <div className="second-col ">
                  <a to="#" className="for-communication-icons">
                    <ul className="myul">
                      {comunicationitems.map((element, index) => {
                        return (
                          <li key={index}>
                            {" "}
                            <a key={index} className={element}></a>
                          </li>
                        );
                      })}
                    </ul>
                  </a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Comunication
