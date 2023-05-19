import classNames from "classnames";
import React from "react";
import api from "../assets/logos/API.svg";
import cpv from "../assets/logos/CPV.svg";
import valuersLogo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className={classNames("footer-bg", "h-[40vh]", "flex", "flex-row")}>
      <div className="bg-white flex flex-col w-[25vw] p-6">
        <img src={api} />
        <img src={cpv} />
        <img src={valuersLogo} />
      </div>
      <ul className="flex flex-col">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/faq">
          <li>FAQ&apos;s</li>
        </Link>
        <Link to="/smsf">
          <li>SMSF</li>
        </Link>
        <Link to="/services">
          <li className="leading-snug">
            Valuation<br></br>Services
          </li>
        </Link>
        <Link to="/request">
          <li className="leading-snug">
            Valuation<br></br>Request
          </li>
        </Link>
      </ul>
    </footer>
  );
};
