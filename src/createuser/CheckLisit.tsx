import { Checkbox } from "@mantine/core";
import { randomId, useListState } from "@mantine/hooks";
import React from "react";

const CheckLisit = () => {
  // data
  const initialValues = [
    { label: "Create", checked: false, key: randomId(), value: '0' },
    { label: "Read", checked: false, key: randomId(), value: '1' },
    { label: "Update", checked: false, key: randomId(), value: '2' },
    { label: "Delete", checked: false, key: randomId(), value: '3' },
  ];

  // chekk value
  //check all
  const [values, handlers] = useListState(initialValues);
  console.log(values);
  
  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

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

  return (
    <div style={{display:'flex'}}>
      CheckLisit
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="CRUD"
        transitionDuration={0}
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </div>
  );
};

export default CheckLisit;
