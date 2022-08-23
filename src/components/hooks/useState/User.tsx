/*  
    How to type useState hook, when the initial value type is different to the future value type
    null -> string -> null
    useState<AuthUser | null>(null);
    {user?.name}
    {user?.email}
*/

import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Sujeong Ji", // ERROR: TypeScript suggests that as the initial value is 'null', the value of setState() should be.....'null' too??!
      email: "suji.sueongji@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User name is {user?.email}</div>
    </div>
  );

  // in case that the user does not need to logout === no need setUser(null);
  /*
  const User2 = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser); // we know better than complier ?!!

    const handleLogin = () => {
      setUser({
        name: "Sujeong Ji", // TypeScript says to you that as the initial value is 'null', you should be..... 'null' too??!
        email: "suji.sueongji@gmail.com",
      });
    };
    // const handleLogout = () => {
    //   setUser(null);
    // };
  };

    return (
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user.name}</div>
        <div>User name is {user.email}</div>
      </div>
    );
    */
};

export default User;
