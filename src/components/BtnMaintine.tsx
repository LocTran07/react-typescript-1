import { Button } from "@mantine/core";
import React from "react";
import { BsFillSunFill } from 'react-icons/bs';

const BtnMaintine = () => {
  const handleClick = (a:any)=> {
    alert(a)
  }
  return (
    <div>
      BtnMaintine
      <Button onClick={()=> handleClick(12)} leftIcon={<BsFillSunFill></BsFillSunFill>} variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
        Indigo cyan
      </Button>
      <Button
        styles={(theme)=> ({
          root:{
            marginRight: '15px',
            '&:hover': {
              padding: '20px'
            }
          }
        })}
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 90 }}
      >
        Lime green
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
      >
        Teal blue
        <BsFillSunFill></BsFillSunFill>
      </Button>
      <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
        Orange red
      </Button>
      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
      >
        Peach
      </Button>
    </div>
  );
};

export default BtnMaintine;
