import React from "react";
import { Name } from "./Person.types";

// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {/* <h2>Sujeong Ji</h2>
      <h2>Minji</h2>
      <h2>Lucky</h2> */}

      {props.names.map((name, i) => {
        return (
          <h2 key={i}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
