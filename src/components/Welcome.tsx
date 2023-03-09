import { Box } from "@mui/system";
import React from "react";

interface Prop {
  position: string;
  country?: string
}
const Welcome = ({ position,country='Vietnam' }: Prop) => {
  return <Box m={1}>Welcome {position}, {country}</Box>;
};

export default Welcome;
