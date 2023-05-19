import React from "react";
import { Header } from "../components/Header";
import classNames from "classnames";
import { ServicesBox } from "../components/ServicesBox";
import aquisition from "../assets/icons/acquisition.png";
import handshake from "../assets/icons/handshake.png";
import tax from "../assets/icons/tax.png";
import stamp from "../assets/icons/evaluate.png";
import copy from "../utils/copy.json";

export const Services: React.FC = () => {
  return (
    <>
      <Header background="service-bg md:h-[60vh]">
        <h1
          className={classNames(
            "text-center",
            "font-playfairmedium",
            "text-5xl",
            "text-slate-700",
            "drop-shadow-lg",
            "tracking-widest",
            "leading-normal",
            "pt-24"
          )}
        >
          Valuation <br></br>Services
        </h1>
      </Header>
      <section
        className={classNames(
          "md:grid",
          "grid-cols-2",
          "grid-rows-2",
          "md:px-32",
          "mt-8",
          "mb-8",
          "flex",
          "flex-col"
        )}
      >
        <ServicesBox
          icon={stamp}
          title="Stamp Duty"
          firstPara={JSON.parse(JSON.stringify(copy.services[0].para1))}
          secondPara={JSON.parse(JSON.stringify(copy.services[0].para2))}
          thirdPara={JSON.parse(JSON.stringify(copy.services[0].para3))}
        />
        <ServicesBox
          icon={tax}
          title="Capital Gain Tax"
          firstPara={JSON.parse(JSON.stringify(copy.services[0].para4))}
          secondPara={JSON.parse(JSON.stringify(copy.services[0].para5))}
          thirdPara={JSON.parse(JSON.stringify(copy.services[0].para6))}
        />
        <ServicesBox
          icon={handshake}
          title="Probate Service"
          firstPara={JSON.parse(JSON.stringify(copy.services[0].para7))}
          secondPara={JSON.parse(JSON.stringify(copy.services[0].para8))}
          thirdPara={JSON.parse(JSON.stringify(copy.services[0].para9))}
        />
        <ServicesBox
          icon={aquisition}
          title="Private Sale or Purchase"
          firstPara={JSON.parse(JSON.stringify(copy.services[0].para10))}
          secondPara={JSON.parse(JSON.stringify(copy.services[0].para11))}
          thirdPara={JSON.parse(JSON.stringify(copy.services[0].para12))}
        />
      </section>
      <section className="frame-bg py-24 md:py-72">
        <h1
          className={classNames(
            "text-white",
            "md:text-5xl",
            "text-2xl",
            "drop-shadow-lg",
            "text-center",
            "tracking-widest",
            "font-playfairregular",
            "leading-normal"
          )}
        >
          20+ Years of Valuation Experience <br></br>within the Sydney Real{" "}
          <br></br>Estate Market
        </h1>
      </section>
    </>
  );
};
