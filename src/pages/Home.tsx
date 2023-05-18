import React from "react";
import { Header } from "../components/Header";
import classNames from "classnames";
import copy from "../utils/Copy.json";
import deal from "../assets/icons/deal.png";
import realestate from "../assets/icons/real-estate.png";
import contract from "../assets/icons/contract.png";
import api from "../assets/logos/API.svg";
import cpv from "../assets/logos/CPV.svg";

export const Home: React.FC = () => {
  return (
    <>
      <Header background="home-bg h-[80vh]">
        <h1
          className={classNames(
            "text-white",
            "md:text-6xl",
            "font-playfairextrabold",
            "justify-center",
            "flex",
            "items-center",
            "drop-shadow-lg",
            "text-center",
            "pt-24",
            "leading-normal",
            "tracking-wider"
          )}
        >
          Sydney Property<br></br>Valuers
        </h1>
      </Header>
      <section className="md:h-screen flex justify-center bg-white opera-bg w-full md:realtive">
        <article
          className={classNames(
            "bg-white",
            "rounded-md",
            "md:-mt-12",
            "md:absolute",
            "drop-shadow-lg",
            "flex",
            "flex-col",
            "md:h-full",
            "lg:w-[60vw]",
            "md:w-[80vw]",
            "sm:w-[90vw]"
          )}
        >
          <div
            className={classNames(
              "md:px-28",
              "px-10",
              "space-y-8",
              "text-xl",
              "font-roboto",
              "text-center",
              "md:text-left"
            )}
          >
            <h1
              className={classNames(
                "font-playfairregular",
                "text-4xl",
                "text-center",
                "mt-20",
                "mb-10"
              )}
            >
              The Valuation <span className="text-sky-900">Specialists</span>
            </h1>
            <p>{JSON.parse(JSON.stringify(copy.home[0].para1))}</p>
            <p>{JSON.parse(JSON.stringify(copy.home[0].para2))}</p>
            <p>{JSON.parse(JSON.stringify(copy.home[0].para3))}</p>
            <p>{JSON.parse(JSON.stringify(copy.home[0].para4))}</p>
          </div>
        </article>
      </section>
      <section className="md:h-[80vh] bg-sky-100 md:px-32 md:pt-16">
        <h1
          className={classNames(
            "text-center",
            "justify-start",
            "flex",
            "text-5xl",
            "leading-snug",
            "font-playfairregular"
          )}
        >
          A Track Record<br></br>of Success
        </h1>
        <div
          className={classNames(
            "flex",
            "flex-row",
            "font-roboto",
            "text-xl",
            "mt-16"
          )}
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <img className="w-12" src={deal} />
              <p>{JSON.parse(JSON.stringify(copy.home[0].para5))}</p>
            </div>
            <div className="flex flex-row">
              <img className="w-14" src={realestate} />
              <p>{JSON.parse(JSON.stringify(copy.home[0].para6))}</p>
            </div>
            <div className="flex flex-row">
              <img className="w-12" src={contract} />
              <p>{JSON.parse(JSON.stringify(copy.home[0].para7))}</p>
            </div>
          </div>
          {/* <div className="flex flex-col mr-16 space-y-16">
            <img className="w-12" src={deal} />
            <img className="w-12" src={realestate} />
            <img className="w-12" src={contract} />
          </div>
          <div className="flex flex-col space-y-10 w-[40vw]">
            <p>{JSON.parse(JSON.stringify(copy.home[0].para5))}</p>
            <p>{JSON.parse(JSON.stringify(copy.home[0].para6))}</p>
            <p>{JSON.parse(JSON.stringify(copy.home[0].para7))}</p>
          </div> */}
          <div className="flex flex-col -mt-10 text-3xl font-playfairmedium ml-auto text-center space-y-10">
            <div
              className={classNames(
                "border-2",
                "border-sky-100",
                "bg-sky-100",
                "shadow-lg",
                "rounded-xl",
                "p-6"
              )}
            >
              <h1>Members</h1>
              <img className="mt-6" src={api} />
            </div>
            <div
              className={classNames(
                "border-2",
                "border-sky-100",
                "bg-sky-100",
                "shadow-md",
                "rounded-md",
                "p-6"
              )}
            >
              <h1>Certified</h1>
              <img className="mt-6" src={cpv} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
