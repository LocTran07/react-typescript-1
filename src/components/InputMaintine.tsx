import { Text, TextInput, Title } from "@mantine/core";
import React from "react";

const InputMaintine = () => {
  return (
    <div>
      InputMaintine
      <TextInput
        label="họ và tên"
        description="mo ta"
        error="loooi "
      ></TextInput>
      <Title order={1}>Đây là tiêu đề </Title>
      <Text size='lg' weight={700} underline transform="capitalize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eum?
        Voluptas repellendus debitis fugiat itaque modi, unde culpa facilis
        provident aliquam possimus odio expedita. Architecto aliquid dignissimos
        quod assumenda non?
      </Text>
    </div>
  );
};

export default InputMaintine;
