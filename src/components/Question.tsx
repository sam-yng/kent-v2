import classNames from "classnames";
import React from "react";

type QuestionProps = {
  question: string;
  answer: string;
};

export const Question: React.FC<QuestionProps> = ({
  question,
  answer,
}: QuestionProps) => {
  return (
    <div
      className={classNames(
        "text-center",
        "mx-auto",
        "flex",
        "flex-col",
        "md:w-[40vw]",
        "w-[80vw]",
        "tracking-widest",
        "space-y-8",
        "mb-24",
        "mt-24"
      )}
    >
      <h1 className={classNames("text-4xl", "font-playfairregular")}>
        {question}
      </h1>
      <p className={classNames("font-roboto", "text-xl")}>{answer}</p>
    </div>
  );
};
