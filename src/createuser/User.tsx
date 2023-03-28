import React, { useState } from "react";

import { randomId, useDisclosure, useListState } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  Input,
  TextInput,
  Select,
  MultiSelect,
  PasswordInput,
  Checkbox,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import "./style.scss";
import {
  IconBiohazard,
  IconRadioactive,
  IconUserPlus,
  IconSchool,
  IconBrandCashapp,
  IconBook,
} from "@tabler/icons-react";
import CheckLisit from "./CheckLisit";
import { format } from "date-fns";

const User = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // value date
  const [valueDate, setValue] = useState<Date | null>(null);
  // value mutiselect
  const [valueFunc, setValueFunc] = useState<string[]>([]);
  // value pass
  const [valuePass, setValuePass] = useState("");
  // value gender
  const [valueGender, setValueGender] = useState<string | null>("nam");
  // value quali
  const [valueQuali, setValueQuali] = useState<string | null>("thpt");
  // value check
  // const [valueCheck, setValueCheck] = useState<any>([]);

  const [checkingArray, setCheckingArray] = useState([] as string[][]);

  const [checkExistCRUD, setCheckExistCRUD] = useState([
    {
      value: false,
    },
    {
      value: false,
    },
    {
      value: false,
    },
    {
      value: false,
    },
    {
      value: false,
    },
  ]);

  const checkExistCrud = (myArray: string[]) => {
    const getslice = myArray.slice(0, 1);
    console.log("asd", getslice[0].slice(getslice[0].length - 1));
    if (getslice[0].slice(getslice[0].length - 1) != "0") {
      return [];
    }

    return myArray;
  };
  const form = useForm({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      address: "",
      phone: "",
    },

    // validate: {
    //   userName: (value) =>
    //     value.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)
    //       ? `Không được dùng ký tự đặc biệt ! @ # $% ^ & *., <> / \ '";:?`
    //       : "",
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ"),
    // },
  });
  // khởi tạo check
  const initialValues = [
    { label: "Create", checked: false, key: randomId(), value: "0" },
    { label: "Read", checked: false, key: randomId(), value: "1" },
    { label: "Update", checked: false, key: randomId(), value: "2" },
    { label: "Delete", checked: false, key: randomId(), value: "3" },
  ];
  //check all
  // const [values, handlers] = useListState(initialValues);
  // console.log(values);

  // const allChecked = values.every((value) => value.checked);
  // const indeterminate = values.some((value) => value.checked) && !allChecked;
  //items
  // const items = values.map((value, index) => (
  //   <Checkbox
  //     mt="xs"
  //     ml={33}
  //     label={value.label}
  //     key={value.key}
  //     checked={value.checked}
  //     onChange={(event) =>
  //       handlers.setItemProp(index, "checked", event.currentTarget.checked)
  //     }
  //   />
  // ));

  const redoCheckingArray = (index: number, newArray: string[]) => {
    let cc = checkingArray;
    const checkValue = checkExistCRUD[index].value;
    if (checkingArray.length < index) {
      while (!cc[index]) {
        cc.push([""]);
      }
      cc.push(newArray);

      setCheckingArray(cc);
    } else {
      if (newArray[0].substring(newArray[0].length - 1) == "0") {
        for (let i = 1; i <= 4; i++) {
          newArray.push(newArray[0].substring(0, newArray[0].length - 1) + i);
          checkExistCRUD[index].value = true;
          setCheckExistCRUD(checkExistCRUD);
        }
      } else if (checkValue) {
        newArray.splice(0, newArray.length);
        cc[index] = newArray;
        setCheckingArray(cc);
        checkExistCRUD[index].value = false;
        setCheckExistCRUD(checkExistCRUD);
      }
      cc[index] = newArray;
    }

    console.log("e", newArray);
  };
  return (
    <div>
      <Modal
        className="user"
        size="70%"
        opened={opened}
        onClose={close}
        title=""
        centered
      >
        <div className="container">
          <h2 style={{ marginBottom: "30px" }}>Tạo Tài Khoản Người Dùng</h2>
          <form
            onSubmit={form.onSubmit((values) => {
              let data = {
                ...values,
                date: valueDate?.toLocaleString(),
                pass: valuePass,
                gender: valueGender,
                qualification: valueQuali,
                function: checkingArray,
              };
              console.log(data);
            })}
            action=""
          >
            <div className="form-group-1 form-group">
              <TextInput
                className="fullName"
                label="Họ Và Tên"
                placeholder="Trần Văn A"
                description=""
                inputWrapperOrder={["label", "input", "description", "error"]}
                {...form.getInputProps("fullName")}
                withAsterisk
                required
              />
              <Select
                withAsterisk
                className="gender"
                label="Giới Tính"
                placeholder="Nam/Nữ"
                data={[
                  { value: "nam", label: "Nam" },
                  { value: "nu", label: "Nữ" },
                ]}
                value={valueGender}
                onChange={setValueGender}
                required
              />
            </div>
            <div className="form-group-2 form-group">
              <TextInput
                withAsterisk
                label="Địa Chỉ"
                placeholder="Địa Chỉ"
                description=""
                inputWrapperOrder={["label", "error", "input", "description"]}
                required
                {...form.getInputProps("address")}
              />
            </div>
            <div className="form-group-3 form-group">
              <TextInput
                withAsterisk
                onBlur={() => {
                  console.log(123);
                }}
                className="user"
                label="Tên Tài Khoản"
                placeholder="Tên Tài Khoản"
                description=""
                error="Tên tài khoản đã trùng"
                inputWrapperOrder={["label", "input", "description", "error"]}
                required
                {...form.getInputProps("userName")}
              />
            </div>
            <div className="form-group-3 form-group">
              <PasswordInput
                withAsterisk
                className="passWord"
                placeholder="Mật Khẩu"
                label="Mật Khẩu"
                description=""
                value={valuePass}
                onChange={(event) => setValuePass(event.currentTarget.value)}
                required
                // withAsterisk
              />
            </div>
            <div className="form-group-4 form-group">
              <TextInput
                withAsterisk
                className="email"
                label="Email"
                placeholder="@gmail.com"
                description=""
                inputWrapperOrder={["label", "input", "description", "error"]}
                {...form.getInputProps("email")}
                required
              />
              <TextInput
                withAsterisk
                className="phone"
                label="Số Điện Thoại"
                placeholder="+84"
                description=""
                inputWrapperOrder={["label", "input", "description", "error"]}
                type="number"
                required
                {...form.getInputProps("phone")}
              />
            </div>
            <div className="form-group-5 form-group">
              <DateInput
                withAsterisk
                className="dob"
                value={valueDate}
                onChange={setValue}
                label="Ngày Sinh"
                placeholder=""
                maw={600}
                valueFormat="DD MMMM YYYY"
                required
              />
              <Select
                withAsterisk
                className="qualification"
                label="Trình Độ Học Vấn"
                placeholder=""
                data={[
                  { value: "thpt", label: "Tốt Nghiệp THPT" },
                  { value: "daihoc", label: "Tốt Nghiệp Đại Học" },
                  { value: "caohoc", label: "Tốt Nghiệp Cao Học" },
                ]}
                value={valueQuali}
                onChange={setValueQuali}
                required
              />
            </div>
            {/* <div className="form-group-6 form-group">
              <MultiSelect
                withAsterisk
                value={valueFunc}
                onChange={setValueFunc}
                className=""
                data={[
                  {
                    value: "a",
                    label: "Điểm danh (Create)",
                    group: "Điểm danh",
                  },
                  { value: "c", label: "Điểm danh (Read)", group: "Điểm danh" },
                  {
                    value: "d",
                    label: "Điểm danh (Update)",
                    group: "Điểm danh",
                  },
                  {
                    value: "b",
                    label: "Điểm danh (Delete)",
                    group: "Điểm danh",
                  },
                  {
                    value: "b1",
                    label: "Điểm danh (CRUD)",
                    group: "Điểm danh",
                  },
                  { value: "e", label: "Soạn bài (Create)", group: "Soạn bài" },
                  { value: "g", label: "Soạn bài (Read)", group: "Soạn bài" },
                  { value: "h", label: "Soạn bài (Update)", group: "Soạn bài" },
                  { value: "f", label: "Soạn bài (Delete)", group: "Soạn bài" },
                  { value: "f1", label: "Soạn bài (CRUD)", group: "Soạn bài" },
                ]}
                label="Chức Năng Có Thể Thực Hiện"
                placeholder="Chức Năng"
                searchable
                nothingFound="Nothing found"
              />
            </div> */}
            <div className="form-group-6 form-group">
              <MultiSelect
                withAsterisk
                value={valueFunc}
                onChange={setValueFunc}
                className=""
                data={[
                  { value: "Soạn bài", label: "Soạn bài" },
                  { value: "Điểm danh", label: "Điểm danh" },
                  { value: "Thanh toán", label: "Thanh toán" },
                  { value: "Giảng bài", label: "Giảng bài" },
                ]}
                label="Chức Năng Có Thể Thực Hiện"
                placeholder="Chức Năng"
                searchable
                nothingFound="Nothing found"
                required
              />
            </div>

            <div className="form-group-7 form-group">
              {valueFunc.map((item, index) => {
                // const items = values.map((value, index1) => (
                //   <Checkbox
                //     mt="xs"
                //     ml={33}
                //     label={value.label}
                //     key={index1}
                //     checked={value.checked}
                //     onChange={(event) =>
                //       handlers.setItemProp(index1, "checked", event.currentTarget.checked)
                //     }
                //   />
                // ));
                return (
                  <div
                    key={index}
                    // style={{
                    //   display: "flex",
                    //   alignItems: "center",
                    //   justifyContent: "space-around",
                    //   padding: "5px",
                    // }}
                    className="checkBox"
                  >
                    {/* <Checkbox
                      key={index}
                      mt="xs"
                      checked={allChecked}
                      indeterminate={indeterminate}
                      label="CRUD"
                      transitionDuration={0}
                      onChange={() =>
                        handlers.setState((current) =>
                          current.map((value) => ({
                            ...value,
                            checked: !allChecked,
                          }))
                        )
                      }
                    />
                    {items} */}
                    <Checkbox.Group
                      key={index}
                      // defaultValue={[`${item}`]}
                      label={
                        item === "Điểm danh" ? (
                          <IconUserPlus />
                        ) : item === "Giảng bài" ? (
                          <IconSchool />
                        ) : item === "Thanh toán" ? (
                          <IconBrandCashapp />
                        ) : (
                          <IconBook />
                        )
                      }
                      description="Vui lòng chọn phân quyền"
                      withAsterisk
                      onChange={(e) => {
                        console.log("before : ", e);
                        redoCheckingArray(index, e);
                        // e = checkExistCrud(e);
                        console.log("after: ", e);
                      }}
                    >
                      <Group mt="md">
                        <Checkbox
                          key={index + "1"}
                          value={`${item}0`}
                          label="CRUD"
                        />
                        <Checkbox
                          key={index + "2"}
                          value={`${item}1`}
                          label="Create"
                        />
                        <Checkbox
                          key={index + "3"}
                          value={`${item}2`}
                          label="Reading"
                        />
                        <Checkbox
                          key={index + "4"}
                          value={`${item}3`}
                          label="Update"
                        />
                        <Checkbox
                          key={index + "5"}
                          value={`${item}4`}
                          label="Delete"
                        />
                      </Group>
                    </Checkbox.Group>
                  </div>
                );
              })}
            </div>

            <Group position="right" mt="md">
              <Button type="submit">Đăng Ký</Button>
            </Group>
          </form>
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </div>
  );
};
export default User;
