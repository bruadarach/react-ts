import React from "react";

// type TextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   //   as?: string;
//   as?: React.ElementType;
// };

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  //   as?: string;
  //   as?: React.ElementType;
  as?: E;
};
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  /* <div></div> is not semantic */
  //   return <div className={`class-width-${size}-${color}`}>{children}</div>;

  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
export default Text;
