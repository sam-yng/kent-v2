import React from "react";
import { Header } from "../components/Header";
import { Question } from "../components/Question";
import classNames from "classnames";
import copy from "../utils/copy.json";

export const Faq: React.FC = () => {
  return (
    <>
      <Header background="bg-sky-100 rounded-bl-xl py-36 text-center">
        <h1
          className={classNames(
            "font-playfairmedium",
            "text-6xl",
            "tracking-widest",
            "text-sky-900",
            "drop-shadow-lg"
          )}
        >
          FAQs
        </h1>
      </Header>
      <section>
        <Question
          question={JSON.parse(JSON.stringify(copy.faq[0].question1))}
          answer={JSON.parse(JSON.stringify(copy.faq[0].answer1))}
        />
        <Question
          question={JSON.parse(JSON.stringify(copy.faq[0].question2))}
          answer={JSON.parse(JSON.stringify(copy.faq[0].answer2))}
        />
        <Question
          question={JSON.parse(JSON.stringify(copy.faq[0].question3))}
          answer={JSON.parse(JSON.stringify(copy.faq[0].answer3))}
        />
        <Question
          question={JSON.parse(JSON.stringify(copy.faq[0].question4))}
          answer={JSON.parse(JSON.stringify(copy.faq[0].answer4))}
        />
        <Question
          question={JSON.parse(JSON.stringify(copy.faq[0].question5))}
          answer={JSON.parse(JSON.stringify(copy.faq[0].answer5))}
        />
        <Question
          question={JSON.parse(JSON.stringify(copy.faq[0].question6))}
          answer={JSON.parse(JSON.stringify(copy.faq[0].answer6))}
        />
      </section>
    </>
  );
};
