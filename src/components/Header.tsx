import React from "react";

type HeaderProps = {
  background?: string;
  children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({
  background,
  children,
}: HeaderProps) => {
  return <main className={`${background}`}>{children}</main>;
};
