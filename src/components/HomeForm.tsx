import classNames from "classnames";
import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const HomeForm: React.FC = () => {
  return (
    <form className="bg-white p-6 rounded-lg h-full">
      <h1 className="font-playfairmedium text-4xl text-center mt-2">
        <span className="text-sky-900">Enquire</span> Now
      </h1>
      <p className="font-roboto text-xl text-center mt-4 mb-6">
        We will get back to you within 1 hour.
      </p>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "text-gray-700",
          "font-playfairmedium",
          "w-full",
          "text-lg",
          "space-y-5"
        )}
      >
        <input
          className={classNames("border", "rounded-md", "py-2", "px-4")}
          placeholder="Name"
        />
        <input
          className={classNames("border", "rounded-md", "py-2", "px-4")}
          placeholder="Email"
        />
        <input
          className={classNames("border", "rounded-md", "py-2", "px-4")}
          placeholder="Property Address"
        />
        <input
          className={classNames("border", "rounded-md", "py-2", "px-4")}
          placeholder="Phone Number"
        />
        <input
          className={classNames(
            "border",
            "rounded-md",
            "py-2",
            "px-4",
            "pb-32"
          )}
          placeholder="Message"
        />
        <Link className={classNames("mx-auto", "md:block")} to="/request">
          <Button text="Enquire Now" />
        </Link>
      </div>
    </form>
  );
};
