import classNames from "classnames";
import React from "react";

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "py-3",
        "px-4",
        "text-white",
        "font-playfairbold",
        "border-2",
        "rounded-md",
        "bg-sky-900",
        "border-bg-sky-900"
      )}
    >
      {text}
    </button>
  );
};
