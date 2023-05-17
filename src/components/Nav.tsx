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
        "mx-36",
        "justify-between"
      )}
    >
      <Link className="md:min-w-10" to="/">
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
          <li>
            Valuation<br></br>Services
          </li>
        </Link>
        <Link to="/request">
          <li>
            Valuation<br></br>Request
          </li>
        </Link>
      </ul>
      <Link
        className="ml-auto hidden md:block border-2 py-2 px-4 rounded-lg bg-sky-900 border-bg-sky-900"
        to="/request"
      >
        <Button display="font-playfairbold text-white" text="Enquire Now" />
      </Link>
    </nav>
  );
};
