import { Group, TextInput, Button, Select } from "@mantine/core";
import { Modal } from "antd";

import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form";

// export const data1 = [
//   {
//     id: "123",
//     className: "STA-C",
//     info: "9:30 - 11:00",
//     roomCode: "T7, CN",
//     price: -600000,
//     reportId: ["9656c7d3-c378-48b6-9179-b032236548ab"],
//     items: null,
//     users: [],
//   },

// ];

interface A {
  room?: string;
  time?: string;
  date?: string;
  gv?: string;
}
interface Props {
  fun: (a:any)=> void
}
const CreateTable = ({fun}:Props) => {
  // usr form mantine 
  const form = useForm();

  // useState
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueBuoi, setValueBuoi] = useState<number[]>([]);
  const [value, setValue] = useState<A[]>([]);
  const [valueClass, setValueClass] = useState<string |null>(null);


  // use efffect
  useEffect(() => {
    setValueBuoi([]);
    setValue([]);
  }, [isModalOpen]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

  const handleFormClass = (e: string | null) => {
    setValueClass(e)
  };
  const handleFormRoom = (a: string, index: number) => {

    let data = [...value];

    // neu data da ton tai index, len data > index, thi tim data[index] roi thay doi no
    if (data.length > index) {
      data[index].room = a;
      setValue(data);
      return;
    }

    data.push({
      room: a,
    });

    setValue(data);
    
    // if (typeof data[index] === 'string') {
    //   data[index].roomCode = a;
    // // }
    // data[indexDone] = {
    //     room : a
    // }
  };
  const handleFormTime = (e: string | null, index: number) => {
    let data = [...value];

    // neu data da ton tai index, len data > index, thi tim data[index] roi thay doi no
    if (typeof e == "string") {
      if (data.length > index) {
        data[index].time = e;
        setValue(data);
        
        return;
      }
      data.push({
        time: e,
      });
      setValue(data);
      console.log(value);
      
    }
  };
  const handleFormDate = (e: string | null, index: number) => {
    let data =[... value]
    if ( typeof e == 'string') {
        if (data.length > index){
            data[index].date = e
            setValue(data)
            return
        }
      data.push({date:e})
      setValue(data)
    }
  };
  const handleFormGv = (e: string | null, index: number) => {
    let data =[... value]
    if ( typeof e == 'string') {
        if (data.length > index){
            data[index].gv = e
            setValue(data)
            return
        }
      data.push({gv:e})
      setValue(data)
    }
  };
  return (
    <div>
      <Button onClick={showModal}>Thêm lớp học</Button>
      <Modal
        title="Thêm lóp học"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
      >
        <form
          onSubmit={form.onSubmit(()=> {
            let data = {
                class: valueClass,
                datanew: value
            }
            fun(data)
            
            handleCancel()
          })}
          action=""
        >
          <div className="form-group-1" style={{ marginTop: 10 }}>
            <TextInput
              onChange={(e) => handleFormClass(e.target.value)}
              label="Tên lớp"
              className="class"
              description=""
              inputWrapperOrder={["label", "input", "description", "error"]}
              // {...form.getInputProps("fullName")}
              withAsterisk
              required
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              style={{ marginRight: "20px" }}
              onClick={() => {
                let a = [...valueBuoi];
                a.push(1);
                setValueBuoi(a);
              }}
            >
              Thêm buổi
            </Button>
            <Button
              color={"red"}
              onClick={() => {
                let a = [...valueBuoi];
                a.pop();
                setValueBuoi(a);
              }}
            >
              Xóa buổi
            </Button>
          </div>
          <div
            className="form-group-2 "
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {valueBuoi.length > 0 &&
              valueBuoi.map((a, b) => {
                return (
                  <div
                    key={b}
                    style={{ marginTop: 20, width: "49%" }}
                    className="column2"
                  >
                    <h5>Thêm buổi {b + 1}</h5>
                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => {
                          if (typeof e == `string`) {
                            handleFormRoom(e, b);
                          }
                        }}
                        withAsterisk
                        className="room"
                        placeholder="Phòng học"
                        data={[
                          { value: "A1.1", label: "A1.1" },
                          { value: "A1.2", label: "A1.2" },
                          { value: "A1.3", label: "A1.3" },
                          { value: "A1.4", label: "A1.4" },
                          { value: "A1.5", label: "A1.5" },
                          { value: "B1.1", label: "B1.1" },
                          { value: "B1.2", label: "B1.2" },
                          { value: "B1.3", label: "B1.3" },
                          { value: "B1.4", label: "B1.4" },
                          { value: "C1.1", label: "C1.1" },
                          { value: "C1.2", label: "C1.2" },
                          { value: "C1.3", label: "C1.3" },
                        ]}
                        required
                        // value={valueGender}
                        // onChange={setValueGender}
                      />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <TextInput
                        onChange={(e) => handleFormTime(e.target.value, b)}
                        className="time"
                        placeholder="Giờ học ( hhmm-hhmm )"
                        description=""
                        inputWrapperOrder={[
                          "label",
                          "input",
                          "description",
                          "error",
                        ]}
                        // {...form.getInputProps("fullName")}
                        withAsterisk
                        required
                      />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => handleFormDate(e, b)}
                        withAsterisk
                        required
                        className="date"
                        placeholder="Ngày học"
                        data={[
                          { value: "1", label: "Thứ hai" },
                          { value: "2", label: "Thứ ba" },
                          { value: "3", label: "Thứ tư" },
                          { value: "4", label: "Thứ năm" },
                          { value: "5", label: "Thứ sáu" },
                          { value: "6", label: "Thứ bảy" },
                          { value: "0", label: "Chủ nhật" },
                        ]}
                        // value={valueGender}
                        // onChange={setValueGender}
                      />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => handleFormGv(e, b)}
                        required
                        withAsterisk
                        className="gv"
                        placeholder="Giáo viên"
                        // placeholder={room}
                        data={[
                          { value: "loc", label: "loc" },
                          { value: "thang", label: "thang" },
                          { value: "thanh", label: "thanh" },
                          { value: "tam", label: "tam" },
                          { value: "tai", label: "tai" },
                          { value: "happy", label: "happy" },
                        ]}
                        // value={valueGender}
                        // onChange={setValueGender}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <Group position="right" mt="md">
            <Button type="submit">Thêm mới</Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
};

export default CreateTable;
