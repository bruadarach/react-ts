import React from "react";
type OptionalProfileProps = {
  name: string;
  age?: number;
};

const OptionalProfile = (props: OptionalProfileProps) => {
  const { age = 0 } = props;
  return (
    <div>
      <h2>{`Welcome! ${props.name}!`}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default OptionalProfile;
