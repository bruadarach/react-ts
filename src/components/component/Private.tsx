import React from "react";
import LoginComponent from "./LoginComponent";
import { ProfileProps } from "./ProfileComponent";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Sujeong Ji" />;
  } else {
    return <LoginComponent />;
  }
};

export default Private;
