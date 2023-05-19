import React from "react";
import { Link } from "react-router-dom";
import property from "../assets/icons/property.png";
import classNames from "classnames";

type ServicesBoxProps = {
  title: string;
  firstPara: string;
  secondPara: string;
  thirdPara: string;
  fourthPara?: string;
};

export const ServicesBox: React.FC<ServicesBoxProps> = ({
  title,
  firstPara,
  secondPara,
  thirdPara,
  fourthPara,
}: ServicesBoxProps) => {
  return (
    <article
      className={classNames(
        "flex",
        "flex-col",
        "border",
        "rounded-lg",
        "py-6",
        "px-12",
        "shadow-xl",
        "text-left",
        "h-[70vh]",
        "text-xl",
        "mx-4",
        "my-4"
      )}
    >
      <div
        className={classNames(
          "flex",
          "flex-row",
          "justify-center",
          "text-2xl",
          "font-playfairsemi",
          "text-sky-800"
        )}
      >
        <img className="mr-5" src={property} />
        <h1>{title}</h1>
      </div>
      <div className="mt-6 space-y-6">
        <p>{firstPara}</p>
        <p>{secondPara}</p>
        <p>{thirdPara}</p>
        <p>{fourthPara}</p>
      </div>
      <Link
        to="/services"
        className={classNames(
          "flex",
          "justify-center",
          "mt-auto",
          "font-roboto",
          "text-sky-700",
          "underline",
          "underline-offset-2"
        )}
      >
        <button>More Info</button>
      </Link>
    </article>
  );
};
