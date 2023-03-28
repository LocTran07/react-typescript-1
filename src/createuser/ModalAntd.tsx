import React, { useState } from "react";
import { Modal, Checkbox, Form, Input } from "antd";
import "./style.scss";
import "./modal.scss";
import { Group, Select, TextInput,Button } from "@mantine/core";
import _ from "lodash";
// interface Props {
//   name1: string;
// }

interface Props {
  item: {
    class: string;
    date: string;
    buoi: string;
    shift: string;
    time: string;
    room: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
  name1: string;
}
const ModalAntd = ({ item, name1 }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const b = _.pick(item, ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]);

  return (
    <div>
      <div
        className=""
        style={{ paddingLeft: 0, cursor: "pointer" }}
        onClick={showModal}
      >
        {name1}
      </div>
      <Modal
        centered
        title=""
        open={isModalOpen}
        onCancel={handleCancel}
        className="a"
        width={1000}
        footer= {[]}
      >
        <h5 style={{ marginTop: 15, marginBottom: 15 }}>
          {item.class} - {item.room} / {item.time}
        </h5>

        <form onSubmit={handleCancel} action="">
          <div className="form-group-1 form-group">
            <TextInput
              className="class"
              label="Lớp học"
              placeholder={item.class}
              description=""
              inputWrapperOrder={["label", "input", "description", "error"]}
              // {...form.getInputProps("fullName")}
              withAsterisk
              required
            />
            <Select
              withAsterisk
              className="room"
              label="Phòng học"
              placeholder={item.room}
              data={[
                { value: "nam", label: "Nam" },
                { value: "nu", label: "Nữ" },
              ]}
              // value={valueGender}
              // onChange={setValueGender}
              required
            />
          </div>
          <div className="form-group-2 form-group">
            <TextInput
              className="date"
              label="Ngày học"
              placeholder={item.date}
              description=""
              inputWrapperOrder={["label", "input", "description", "error"]}
              // {...form.getInputProps("fullName")}
              withAsterisk
              required
            />
            <Select
              withAsterisk
              className="buoi"
              label="Buổi học"
              placeholder={item.buoi}
              data={[
                { value: "sang", label: "Sáng" },
                { value: "toi", label: "Tối" },
              ]}
              // value={valueGender}
              // onChange={setValueGender}
              required
            />
          </div>

          <div className="form-group-3 form-group">
            <Select
              withAsterisk
              className="shift"
              label="Ca học"
              placeholder={item.buoi}
              data={[
                { value: "sang", label: "Sáng" },
                { value: "toi", label: "Tối" },
              ]}
              // value={valueGender}
              // onChange={setValueGender}
              required
            />
            <TextInput
              withAsterisk
              className="time"
              label="Giờ học"
              placeholder={item.buoi}
              // value={valueGender}
              // onChange={setValueGender}
              required
            />
          </div>
          <div className="form-group-4 form-group">
            {item.mon && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Thứ 2"
                placeholder={item.mon}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
            {item.tue && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Thứ 3"
                placeholder={item.tue}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
            {item.wed && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Thứ 4"
                placeholder={item.wed}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
            {item.thu && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Thứ 5"
                placeholder={item.thu}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
            {item.fri && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Thứ 6"
                placeholder={item.fri}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
            {item.sat && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Thứ 7"
                placeholder={item.sat}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
            {item.sun && (
              <Select
                style={{ marginTop: 10 }}
                withAsterisk
                className="shift"
                label="Chủ Nhật"
                placeholder={item.sun}
                data={[
                  { value: "sang", label: "Sáng" },
                  { value: "toi", label: "Tối" },
                ]}
                // value={valueGender}
                // onChange={setValueGender}
                required
              />
            )}
          </div>
          <Group position="right" mt="md">
            <Button type="submit">Thay đổi</Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
};

export default ModalAntd;
