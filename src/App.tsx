import React, { useEffect, useState } from "react";
import "./style/sb-admin-2.min.css";
import "./App.css";
// import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import ProgressContextProvider from "./context/ProgressContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import { MovieProvider } from "./context/MovieContext";
import Movies from "./components/Movies";
import Maintine from "./components/Maintine";
import { Notifications } from "@mantine/notifications";
import { Group, Button } from "@mantine/core";
import { handleNoti } from "./notifi/notifi";
import { AiFillAccountBook } from "react-icons/ai";
import { Check } from "tabler-icons-react";
import { collection, getDoc, getDocs } from "firebase/firestore/lite";
import { db } from "./firebase";
import { CollectionReference } from "firebase/firestore";
import User from "./createuser/User";
import { Checkbox } from "@mantine/core";
import { randomId, useListState } from "@mantine/hooks";
import Table1 from "./createuser/Table1";
import { DatePicker } from "antd";
import { format } from "date-fns";
interface User {
  name: string;
  age: number;
}
const initialValues = [
  { label: "Receive email notifications", checked: false, key: randomId() },
  { label: "Receive sms notifications", checked: false, key: randomId() },
  { label: "Receive push notifications", checked: false, key: randomId() },
];

function App() {
  //check all
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  React.useEffect(() => {
    setCookie();
  }, []);

  function setCookie() {
    const name = "gledu";
    const value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTMsIkVudGl0eUNvZGUiOjEsImV4cCI6MTY4MTExNDg0M30.PqN_i2maE0E2wSqxtGL0XiEuDcTOzb9Pf53HUwwawVw";
    const expires = new Date();
    expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
    const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=localhost`;
    document.cookie = cookie;
    
  }

  const items = values.map((value, index) => (
    <Checkbox
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) =>
        handlers.setItemProp(index, "checked", event.currentTarget.checked)
      }
    />
  ));

  // state
  const [users, setUser] = useState<any>([]);
  // coleection
  const citiesCol = collection(db, "users");
  // effect
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(citiesCol);
      // console.log(data.docs.map((doc) => doc.data()));
      setUser(data.docs.map((doc) => doc.data()));
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Notifications position="bottom-right"></Notifications>
      {/* 
      <MovieProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar></Navbar>
            <Movies></Movies>
            <ThemeToggleBtn></ThemeToggleBtn>
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieProvider> */}
      {/* <Group>
        <Button
          variant="outline"
          onClick={() => handleNoti("title", "message", "warning", 2000)}
        >
          test
        </Button>
        <AiFillAccountBook></AiFillAccountBook>
      </Group> */}
      {/* <Maintine></Maintine> */}
      {/* <User></User> */}
      <div className="" style={{ maxWidth: 2000, margin: "auto" }}>
        <Table1></Table1>
      </div>
    </div>
  );
}

export default App;
