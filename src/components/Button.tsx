import React from "react";

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }: ButtonProps) => {
  return <button className="border-2 border-black">{text}</button>;
};
