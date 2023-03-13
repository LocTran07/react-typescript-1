import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineProvider,
  Loader,
  Button,
  Notification,
  Group,
} from "@mantine/core";
import CardMaintine from "./CardMaintine";
import BtnMaintine from "./BtnMaintine";
import TableMaintine from "./TableMaintine";
import InputMaintine from "./InputMaintine";
import { Notifications, notifications } from "@mantine/notifications";
import { IconContext } from "react-icons/lib";

const AppShellMaintine = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
   const handleNoti = (
    title: string,
    mess: string,
    type: "success" | "warning" | "fail",
    timeout: number
  ) => {
    return notifications.show({
      id:title,
      withCloseButton: true,
      onClose: () => console.log("unmounted"),
      onOpen: () => console.log("mounted"),
      autoClose: timeout,
      title: title,
      message: mess,
      color: type === 'success' ? 'green' : type === 'warning' ? 'red' : "yellow",
      className: "my-notification-class",
      style: { backgroundColor:  type === 'success' ? 'green' : type === 'warning' ? 'red' : "yellow"},
      sx: { backgroundColor: "red" },
      loading: false,
      
    });
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
          <Text>123</Text>
          <Text>456</Text>
          <Text>789</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Notifications  position="top-right"></Notifications>
      <Group position="center">
        <Button
          variant="outline"
          onClick={() =>
            handleNoti('title','tai sao ko di hoc','warning',2000)
          }
        >
          Show notification
        </Button>
        {/* <Button
          variant="outline"
          onClick={() =>
            notifications.show({
              id: "hello-there",
              withCloseButton: true,
              onClose: () => console.log("unmounted"),
              onOpen: () => console.log("mounted"),
              autoClose: 2000,
              title: "You've been compromised",
              message: "Leave the building immediately",
              color: "yellow",
              className: "my-notification-class",
              style: { backgroundColor: "yellow" },
              sx: { backgroundColor: "red",color: 'red' },
              loading: false,
            })
          }
        >
          Show notification
        </Button> */}
      </Group>
    </AppShell>
  );
};

export default AppShellMaintine;
