import React from "react";
import valuersLogo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row fixed items-center justify-between">
      <img src={valuersLogo} />
      <ul className="flex flex-row">
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
          <li>Valuation Services</li>
        </Link>
        <Link to="/request">
          <li>Valuation Request</li>
        </Link>
      </ul>
      <Button text="Enquire Now" />
    </nav>
  );
};
