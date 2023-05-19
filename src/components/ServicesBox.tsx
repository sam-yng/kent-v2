import classNames from "classnames";
import React from "react";

type ServicesBoxProps = {
  icon: string;
  title: string;
  firstPara?: string;
  secondPara?: string;
  thirdPara?: string;
};

export const ServicesBox: React.FC<ServicesBoxProps> = ({
  icon,
  title,
  firstPara,
  secondPara,
  thirdPara,
}: ServicesBoxProps) => {
  return (
    <article className="py-12 px-20">
      <div className={classNames("space-y-6")}>
        <img src={icon} />
        <h1
          className={classNames(
            "text-sky-800",
            "text-4xl",
            "font-playfairsemi"
          )}
        >
          {title}
        </h1>
        <div
          className={classNames(
            "tracking-widest",
            "text-xl",
            "font-roboto",
            "leading-normal",
            "space-y-6"
          )}
        >
          <p>{firstPara}</p>
          <p>{secondPara}</p>
          <p>{thirdPara}</p>
        </div>
      </div>
    </article>
  );
};
