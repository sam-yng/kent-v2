import React from "react";
import { Header } from "../components/Header";
import classNames from "classnames";
import { TextBox } from "../components/TextBox";
import copy from "../utils/Copy.json";

export const Home: React.FC = () => {
  return (
    <>
      <Header background="home-bg h-[80vh]">
        <h1
          className={classNames(
            "text-white",
            "text-6xl",
            "font-playfairbold",
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
      <article className="h-screen bg-white opera-bg realtive">
        <TextBox display="bg-white rounded-md -mt-12 absolute drop-shadow-lg flex flex-col mx-80 h-full">
          <div
            className={classNames(
              "px-24",
              "space-y-8",
              "text-2xl",
              "font-roboto"
            )}
          >
            <h1
              className={classNames(
                "font-playfairmedium",
                "text-4xl",
                "text-center",
                "mt-16",
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
        </TextBox>
      </article>
    </>
  );
};
