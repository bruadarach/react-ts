import React from "react";
import Greet from "../props/Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.messageCount}</div>
      <div>{props.isLoggedIn}</div>
    </>
  );
};

export default CustomComponent;
