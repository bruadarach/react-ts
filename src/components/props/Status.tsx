import React from "react";

type StatusProps = {
  //   status: string;
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      {/* <h2>Loading...</h2>
      <h2>Data fetched successfully!</h2>
      <h2>Error fetching data</h2> */}
      Status - {message}
    </div>
  );
};

export default Status;
