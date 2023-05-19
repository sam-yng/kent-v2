import classNames from "classnames";
import React from "react";
import api from "../assets/logos/API.svg";
import cpv from "../assets/logos/CPV.svg";
import valuersLogo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import copy from "../utils/copy.json";

export const Footer: React.FC = () => {
  return (
    <footer
      className={classNames(
        "footer-bg",
        "md:h-[40vh]",
        "md:flex",
        "flex-row",
        "md:py-12",
        "px-20",
        "text-white",
        "justify-between"
      )}
    >
      <div className="bg-white md:flex flex-col justify-between p-4 hidden">
        <img src={api} />
        <img src={cpv} />
        <img src={valuersLogo} />
      </div>
      <ul
        className={classNames(
          "flex",
          "flex-col",
          "font-playfairmedium",
          "text-xl",
          "justify-between",
          "text-center",
          "tracking-wide",
          "space-y-8",
          "md:space-y-0",
          "py-8",
          "md:py-0"
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
          <li>Valuation Services</li>
        </Link>
        <Link to="/request">
          <li>Valuation Request</li>
        </Link>
      </ul>
      <ul
        className={classNames(
          "font-roboto",
          "text-sm",
          "text-right",
          "mt-auto",
          "space-y-2",
          "md:block",
          "hidden"
        )}
      >
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line1))}</li>
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line2))}</li>
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line3))}</li>
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line4))}</li>
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line5))}</li>
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line6))}</li>
        <li>{JSON.parse(JSON.stringify(copy.footer[0].line7))}</li>
      </ul>
    </footer>
  );
};
