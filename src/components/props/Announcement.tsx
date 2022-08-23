import React from "react";

type AnnouncementProps = {
  children: React.ReactNode;
};
const Announcement = (props: AnnouncementProps) => {
  //   return <div>"50% Off In August 2022!"</div>;
  return <div>{props.children}</div>;
};

export default Announcement;
