import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // setIsLoggedIn(0); // Error // 0 is a falsy value // With an initial value of useState, 'Type Inference' will take care of simple values
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? `logged in` : `logged out`}</div>
    </div>
  );
};

export default LoggedIn;
