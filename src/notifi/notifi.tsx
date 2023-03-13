import { Notifications, notifications } from "@mantine/notifications";
import { AiFillAccountBook } from "react-icons/ai";
import { Check, ExclamationMark } from "tabler-icons-react";
import { IconX, TablerIconsProps } from "@tabler/icons-react";

export const handleNoti = (
  title: string,
  mess: string,
  type: "success" | "warning" | "fail",
  timeout: number
) => {
  return notifications.show({
    id: title,
    withCloseButton: true,
    autoClose: timeout,
    icon:
      type === "success" ? 
        <Check size={25} strokeWidth={2} color={"white"} />
       : type === "warning" ? 
        <ExclamationMark></ExclamationMark>
       : 
        <IconX></IconX>
      ,
    title: title,
    message: mess ,
    color: type === "success" ? "green" : type === "warning" ? "yellow" : "red",
    className: "my-notification-class",
    style: { backgroundColor: "white" },
  });
};
// type === "success" ? "V" : type === "warning" ? "X" : "!",
