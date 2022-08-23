import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserC = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUserC({
      name: "Sujeong Ji",
      email: "suji.sujeongji@gmail.com",
    });
  };

  const handleLogout = () => {
    userContext.setUserC(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.userC?.name}</div>
      <div>User email is {userContext?.userC?.email}</div>
    </div>
  );
};

export default UserC;
