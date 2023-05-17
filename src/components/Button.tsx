import classNames from "classnames";
import React from "react";

type ButtonProps = {
  text: string;
  display?: string;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  display,
}: ButtonProps) => {
  return <button className={classNames(`${display}`)}>{text}</button>;
};
