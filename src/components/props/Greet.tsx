// import React from "react";

/* type Vs. interface?
    (suggested)
    - type : build an app
    - interface : build an library
*/

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` Welcome {props.name} Ji! You have {props.messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
