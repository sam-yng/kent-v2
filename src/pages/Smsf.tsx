import React from "react";
import { Header } from "../components/Header";
import classNames from "classnames";
import copy from "../utils/copy.json";
import realestate from "../assets/icons/real-estate.png";
import contract from "../assets/icons/contract.png";
import { Button } from "../components/Button";
import { HomeForm } from "../components/HomeForm";
import house from "../assets/images/White-house-SMSF.png";
import value from "../assets/icons/value.png";
import hand from "../assets/icons/Hand-Money.png";

export const Smsf: React.FC = () => {
  return (
    <>
      <Header background="smsf-bg py-36 md:-ml-24 relative md:block">
        <h1
          className={classNames(
            "font-playfairmedium",
            "text-5xl",
            "drop-shadow-lg",
            "tracking-wider",
            "text-center",
            "flex",
            "leading-normal",
            "md:ml-72",
            "justify-center",
            "md:justify-start",
            "absolute",
            "md:relative",
            "top-0",
            "mt-4"
          )}
        >
          Self-Managed <br></br>Super Funds
        </h1>
      </Header>
      <section className="md:px-32 text-center mb-12">
        <h1 className="md:text-4xl tracking-widest font-playfairregular mt-24">
          When Should You Request a<br></br>Market Value Report
          <br></br>on the Value of an Asset?
        </h1>
        <div
          className={classNames(
            "grid",
            "grid-cols-[10%_90%]",
            "grid-rows-3",
            "font-roboto",
            "text-left",
            "md:w-[40vw]",
            "w-[80vw]",
            "mx-auto",
            "md:items-end",
            "items-center",
            "md:mt-8",
            "text-2xl",
            "space-y-16",
            "mb-24"
          )}
        >
          <img className="w-12" src={realestate} />
          <p className="ml-10">
            {JSON.parse(JSON.stringify(copy.smsf[0].para1))}
          </p>
          <img className="w-12" src={contract} />
          <p className="ml-10">
            {JSON.parse(JSON.stringify(copy.smsf[0].para2))}
          </p>
          <img className="w-12" src={contract} />
          <p className="ml-10">
            {JSON.parse(JSON.stringify(copy.smsf[0].para3))}
          </p>
        </div>
        <Button text="Contact Our Team" />
      </section>
      <section className={classNames("bg-sky-100", "md:px-32", "pb-12")}>
        <div className={classNames("flex", "md:flex-row", "flex-col")}>
          <div
            className={classNames(
              "flex",
              "flex-col",
              "md:w-[40vw]",
              "font-roboto",
              "text-xl",
              "leading-relaxed",
              "mt-6",
              "space-y-10",
              "p-10"
            )}
          >
            <h1 className="font-playfairregular text-5xl text-center leading-relaxed">
              {JSON.parse(JSON.stringify(copy.smsf[0].heading1))}
            </h1>
            <p>{JSON.parse(JSON.stringify(copy.smsf[0].para4))}</p>
            <p>{JSON.parse(JSON.stringify(copy.smsf[0].para5))}</p>
            <p>{JSON.parse(JSON.stringify(copy.smsf[0].para6))}</p>
          </div>
          <img className="p-20 md:ml-16" src={house} />
        </div>
      </section>
      <section
        className={classNames(
          "flex",
          "flex-col",
          "mx-auto",
          "md:w-[34vw]",
          "text-center",
          "text-xl",
          "font-roboto",
          "mb-16",
          "tracking-widest"
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "space-y-8",
            "mt-16",
            "mb-16"
          )}
        >
          <img className="mx-auto" src={value} />
          <h1 className="text-4xl font-playfairregular">
            {JSON.parse(JSON.stringify(copy.smsf[0].question2))}
          </h1>
          <p className="text-left">
            {JSON.parse(JSON.stringify(copy.smsf[0].para7))}
          </p>
          <p className="text-left">
            {JSON.parse(JSON.stringify(copy.smsf[0].para8))}
          </p>
        </div>
        <div className={classNames("flex", "flex-col", "space-y-8")}>
          <img className="mx-auto" src={hand} />
          <h1 className="text-4xl font-playfairregular">
            {JSON.parse(JSON.stringify(copy.smsf[0].question3))}
          </h1>
          <p className="text-left">
            {JSON.parse(JSON.stringify(copy.smsf[0].para9))}
          </p>
          <p className="text-left">
            {JSON.parse(JSON.stringify(copy.smsf[0].para10))}
          </p>
        </div>
      </section>
      <section
        className={classNames("form-bg", "md:px-80", "md:py-24", "py-10")}
      >
        <HomeForm />
      </section>
    </>
  );
};
