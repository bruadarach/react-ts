import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return (
    // <div style={{ border: "1px solid black", padding: "1rem" }}>Style</div>
    <div style={props.styles}>Style</div>
  );
};

export default Container;
