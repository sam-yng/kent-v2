import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import valuersLogo from "../assets/logos/logo.svg";
import classNames from "classnames";

export const Nav: React.FC = () => {
  return (
    <nav
      className={classNames(
        "flex",
        "flex-row",
        "items-center",
        "my-8",
        "bg-white",
        "md:mx-36",
        "justify-between"
      )}
    >
      <Link className="md:max-w-12" to="/">
        <img src={valuersLogo} />
      </Link>
      <ul
        className={classNames(
          "md:flex",
          "flex-row",
          "text-lg",
          "text-center",
          "font-playfairmedium",
          "items-center",
          "ml-auto",
          "space-x-16",
          "hidden"
        )}
      >
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
      <Link
        className={classNames("hidden", "ml-auto", "md:block")}
        to="/request"
      >
        <Button text="Enquire Now" />
      </Link>
    </nav>
  );
};
