import React from "react";

type TextBoxProps = {
  children: React.ReactNode;
  display: string;
};

export const TextBox: React.FC<TextBoxProps> = ({
  children,
  display,
}: TextBoxProps) => {
  return <article className={`${display}`}>{children}</article>;
};
