import React from "react";
import "./App.css";
// props
import Announcement from "./components/props/Announcement";
import Button from "./components/props/Button";
import Container from "./components/props/Container";
import Greet from "./components/props/Greet";
import Heading from "./components/props/Heading";
import Input from "./components/props/Input";
import OptionalProfile from "./components/props/OptionalProfile";
import Person from "./components/props/Person";
import PersonList from "./components/props/PersonList";
import Status from "./components/props/Status";
// state
import LoggedIn from "./components/hooks/useState/LoggedIn";
import User from "./components/hooks/useState/User";
// context with initial value set
import { ThemeContextProvider } from "./components/hooks/useContext/ThemeContext";
import { Box } from "./components/hooks/useContext/Box";
// context with initial value none
import { UserContextProvider } from "./components/hooks/useContext/UserContext";
import UserC from "./components/hooks/useContext/UserC";
// ref
import DomRef from "./components/hooks/useRef/DomRef";
import MutableRef from "./components/hooks/useRef/MutableRef";
// class
import { CounterClass } from "./components/class/CounterClass";
// component props
import Private from "./components/component/Private";
import ProfileComponent from "./components/component/ProfileComponent";
// generic props
import List from "./components/generic/List";
import RandomNumber from "./components/restriction/RandomNumber";
// template literals and exclude
import Toast from "./components/templateLiterals/Toast";
// wrapping HTML Elements
import CustomButton from "./components/html/CustomButton";
// polymorphic components
import Text from "./components/ polymorphic/Text";

function App() {
  const personName = {
    first: "Sujeong",
    last: "ji",
  };

  const nameList = [
    { first: "Minji", last: "ji" },
    { first: "Jarvis", last: "ji" },
    { first: "Lucky", last: "ji" },
  ];

  return (
    <div className="App">
      <h1>-----PROPS-----</h1>
      <Greet name="Sujeong Ji" messageCount={20} isLoggedIn={false} />
      {/* <Greet name={10} /> */}
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Announcement>
        <Heading>Choose Love!</Heading>
      </Announcement>
      <OptionalProfile name="Suji" /> {/* age={25}*/}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{
          border: "2px solid lightpink",
          padding: "1rem",
          color: "lightblue",
        }}
      />
      <h1>-----STATE-----</h1>
      <LoggedIn />
      <User />
      <h1>-----Context-----</h1>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserC />
      </UserContextProvider>
      <h1>-----Ref-----</h1>
      <DomRef />
      <MutableRef />
      <h1>-----Class-----</h1>
      <CounterClass message="The count value is 5" />
      <h1>-----Component-----</h1>
      <Private isLoggedIn={true} component={ProfileComponent} />
      <h1>-----Generic Props-----</h1>
      {/* <List
        items={["love", "faith", "compassion"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />
      <List
        items={["love", "faith", "compassion"]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          { id: 1, first: "Sujeong", last: "Ji" },
          { id: 2, first: "Minji", last: "Ji" },
          { id: 3, first: "Jarvis", last: "Ji" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <h1>-----Restricting Props-----</h1>
      {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
      <RandomNumber value={10} isPositive />
      <h1>-----Template Literals-----</h1>
      <Toast position={"left-center"} />
      <h1>-----Template Literals and Exclude-----</h1>
      {/* <Toast position={"center-center"} />  # ERROR */}
      <Toast position={"center"} /> # ERROR
      <h1>-----Wrapping HTML Elements-----</h1>
      {/* <CustomButton variant={"primary"} /> */}
      <CustomButton variant={"primary"} onClick={() => console.log("Clicked")}>
        {/* Primary Button */}
        {/* <div>Primary Button</div> */}
        Primary Button
      </CustomButton>
      <h1>-----Polymorphic Components-----</h1>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm">
        Label
      </Text>
    </div>
  );
}

export default App;
