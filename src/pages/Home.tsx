import React from "react";
import { Header } from "../components/Header";
import { HomeForm } from "../components/HomeForm";
import { ServicesBox } from "../components/ServicesBox";
import classNames from "classnames";
import copy from "../utils/Copy.json";
import deal from "../assets/icons/deal.png";
import realestate from "../assets/icons/real-estate.png";
import contract from "../assets/icons/contract.png";
import api from "../assets/logos/API.svg";
import cpv from "../assets/logos/CPV.svg";
import ppd from "../assets/logos/ppd.png";
import rh from "../assets/logos/randh.png";
import novak from "../assets/logos/novak.png";
import hooker from "../assets/logos/LJ.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

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
            "md:flex-row",
            "flex-col",
            "font-roboto",
            "text-xl",
            "mt-16"
          )}
        >
          <div className="grid grid-cols-[10%_80%] md:w-[65vw] grid-rows-3">
            <img className="w-12" src={deal} />
            <p>{JSON.parse(JSON.stringify(copy.home[0].para5))}</p>
            <img className="w-12" src={realestate} />
            <p>{JSON.parse(JSON.stringify(copy.home[0].para6))}</p>
            <img className="w-12" src={contract} />
            <p>{JSON.parse(JSON.stringify(copy.home[0].para7))}</p>
          </div>
          <div
            className={classNames(
              "flex",
              "flex-col",
              "md:-mt-10",
              "text-3xl",
              "font-playfairmedium",
              "md:ml-auto",
              "text-center",
              "space-y-10"
            )}
          >
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
      <section className="md:px-32 partner-bg md:h-screen flex flex-col md:flex-col lg:flex-row md:pt-20">
        <div className="lg:w-[50%] text-white font-roboto text-xl text-center">
          <h1 className="font-playfairregular text-5xl">
            Some of Our<br></br>Partners
          </h1>
          <p className="lg:mx-28 mt-10 leading-relaxed tracking-wider">
            {JSON.parse(JSON.stringify(copy.home[0].para8))}
          </p>
          <div
            className={classNames(
              "grid",
              "grid-cols-2",
              "grid-rows-2",
              "items-center",
              "grid-cols-[30%_30%]",
              "gap-8",
              "w-full",
              "justify-center",
              "mt-16"
            )}
          >
            <img src={ppd} />
            <img src={rh} />
            <img src={novak} />
            <img className="bg-white p-4" src={hooker} />
          </div>
        </div>
        <div className="lg:w-[50%] h-[80vh]">
          <HomeForm />
        </div>
      </section>
      <section className="bg-white md:px-32 text-center">
        <h1 className="text-5xl font-playfairmedium mt-20">
          Our <span className="text-sky-800">Valuation Services</span>
        </h1>
        <p
          className={classNames(
            "text-xl",
            "leading-2",
            "tracking-wider",
            "mt-8",
            "w-[32vw]",
            "mx-auto",
            "font-roboto"
          )}
        >
          {JSON.parse(JSON.stringify(copy.home[0].para9))}
        </p>
        <Link
          className={classNames("mx-auto", "md:block", "mt-8")}
          to="/request"
        >
          <Button text="Conatact Our Team" />
        </Link>
        <div
          className={classNames(
            "grid",
            "grid-cols-2",
            "grid-rows-2",
            "mt-12",
            "font-roboto",
            "mb-6"
          )}
        >
          <ServicesBox
            title="Pre Purchase/Pre Sale"
            firstPara={JSON.parse(JSON.stringify(copy.home[0].para10))}
            secondPara={JSON.parse(JSON.stringify(copy.home[0].para11))}
            thirdPara={JSON.parse(JSON.stringify(copy.home[0].para12))}
          />
          <ServicesBox
            title="Stamp Duty"
            firstPara={JSON.parse(JSON.stringify(copy.home[0].para13))}
            secondPara={JSON.parse(JSON.stringify(copy.home[0].para14))}
            thirdPara={JSON.parse(JSON.stringify(copy.home[0].para15))}
          />
          <ServicesBox
            title="Captain Gains Tax"
            firstPara={JSON.parse(JSON.stringify(copy.home[0].para16))}
            secondPara={JSON.parse(JSON.stringify(copy.home[0].para17))}
            thirdPara={JSON.parse(JSON.stringify(copy.home[0].para18))}
          />
          <ServicesBox
            title="Probate Valuations"
            firstPara={JSON.parse(JSON.stringify(copy.home[0].para19))}
            secondPara={JSON.parse(JSON.stringify(copy.home[0].para20))}
            thirdPara={JSON.parse(JSON.stringify(copy.home[0].para21))}
            fourthPara={JSON.parse(JSON.stringify(copy.home[0].para22))}
          />
        </div>
      </section>
    </>
  );
};
