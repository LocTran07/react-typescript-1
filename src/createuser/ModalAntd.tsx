import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "./style.scss";
import "./modal.scss";
import {
  Group,
  Select,
  TextInput,
  Button,
  Input,
  InputBase,
} from "@mantine/core";
import _ from "lodash";
import { useForm } from "@mantine/form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IMaskInput } from "react-imask";
import { log } from "console";

interface A {
  room?: string;
  time?: string;
  date?: string;
  gv?: string;
}
interface DataAddNew {
  id: string;
  dataedit: A[];
  datanew: A[];
}
interface Props {
  item: {
    className: string;
    roomCode: string;
    info: string;
    actions: Action[];
    time: string;
    room: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
    id: string;
  };
  name1?: string;
  room?: string;
  filterArr?: any;
  setChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setArr: React.Dispatch<React.SetStateAction<null>>;
  func: React.Dispatch<React.SetStateAction<null | any | DataAddNew>>;
  arrData: any[];
}
interface Action {
  note: string;
  participants: number[];
  participantsFullName: string[];
  roomId: number;
  time: {
    fromTime: number;
    toTime: number;
    weekDate: number;
  };
  title: string;
}
interface GV {
  active: number;
  address: string;
  dob: number;
  elo: number;
  entityCode: number;
  fullname: string;
  gender: string;
  id: number;
  mail: string;
  password: string;
  phone: string;
  qualification: string;
  username: string;
}
const ModalAntd = ({
  item,
  name1,
  filterArr,
  setChanged,
  setArr,
  func,
  arrData,
}: Props) => {
  // usequeryclient
  const queryClient = useQueryClient();
  const dataGv: any | undefined = queryClient.getQueryData(["dataGv"]);
  const action = arrData.map((item) => {
    return {
      action: item.actions,
    };
  });

  const dataGv1 = dataGv?.map((a: GV) => {
    return { value: a.fullname, label: a.fullname };
  });

  // ham xam
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

  const form = useForm();
  // Usestate
  const [valueBuoi, setValueBuoi] = useState<number[]>([]);
  const [valueEdit, setValueEdit] = useState<A[]>([]);
  const [valueNewBuoi, setValueNewBuoi] = useState<A[]>([]);
  const [arrX, setArrX] = useState<any>([]);
  const [arrY, setArrY] = useState<any>([]);
  const [valueDate, setValueDate] = useState<any>("");
  const [arrTime, setArrTime] = useState<any>([]);
  const [arrGv, setArrGv] = useState<any>([]);
  const [valueTime, setValueTime] = useState<any>("");
console.log('gv',arrGv );
console.log('time',arrTime );


  // handle edit
  const handleEditRoom = (e: string | null, index: number) => {
    let data = [...valueEdit];
    if (e) {
      // nếu chọn index lớn hơn dataleng chưa có gì thì sẽ dùng vòng lặp để push oj rỗng vào
      if (data.length < index) {
        while (!data[index]) {
          data.push({});
        }
        data.pop();
        data.push({ room: e });
        setValueEdit(data);
      } // nều lèng lơn hơn index thì chứng tở đã có r nên sẽ tìm data[index] để fix
      else if (data.length > index) {
        data[index].room = e;
        setValueEdit(data);
        return;
      } else {
        data.push({ room: e });
        setValueEdit(data);
      }
    }
  };
  const handleEditTime = (e: string | null, index: number) => {
    let data = [...valueEdit];
    if (e) {
      // nếu chọn index lớn hơn dataleng chưa có gì thì sẽ dùng vòng lặp để push oj rỗng vào
      if (data.length < index) {
        while (!data[index]) {
          data.push({});
        }
        data.pop();
        data.push({ time: e });
        setValueEdit(data);
      } // nều lèng lơn hơn index thì chứng tở đã có r nên sẽ tìm data[index] để fix
      else if (data.length > index) {
        data[index].time = e;
        setValueEdit(data);
        return;
      } else {
        data.push({ time: e });
        setValueEdit(data);
      }
    }
  };
  const handleEditDate = (e: string | null, index: number) => {
    let data = [...valueEdit];
    if (e) {
      // nếu chọn index lớn hơn dataleng chưa có gì thì sẽ dùng vòng lặp để push oj rỗng vào
      if (data.length < index) {
        while (!data[index]) {
          data.push({});
        }
        data.pop();
        data.push({ date: e });
        setValueEdit(data);
      } // nều lèng lơn hơn index thì chứng tở đã có r nên sẽ tìm data[index] để fix
      else if (data.length > index) {
        data[index].date = e;
        setValueEdit(data);
        return;
      } else {
        data.push({ date: e });
        setValueEdit(data);
      }
    }
  };
  const handleEditGv = (e: string | null, index: number) => {
    let data = [...valueEdit];
    if (e) {
      // nếu chọn index lớn hơn dataleng chưa có gì thì sẽ dùng vòng lặp để push oj rỗng vào
      if (data.length < index) {
        while (!data[index]) {
          data.push({});
        }
        data.pop();
        data.push({ gv: e });
        setValueEdit(data);
      } // nều lèng lơn hơn index thì chứng tở đã có r nên sẽ tìm data[index] để fix
      else if (data.length > index) {
        data[index].gv = e;
        setValueEdit(data);
        return;
      } else {
        data.push({ gv: e });
        setValueEdit(data);
      }
    }
  };
  // handle new buoi
  const handleNewBuoiRoom = (e: string | null, index: number) => {
    let data = [...valueNewBuoi];
    if (e) {
      if (data.length > index) {
        data[index].room = e;
        setValueNewBuoi(data);
        return;
      }
      data.push({ room: e });
      setValueNewBuoi(data);
    }
  };
  const handleNewBuoiTime = (e: string | null, index: number) => {
    let data = [...valueNewBuoi];
    if (e) {
      if (data.length > index) {
        data[index].time = e;
        setValueNewBuoi(data);
        return;
      }
      data.push({ time: e });
      setValueNewBuoi(data);
    }
  };
  const handleNewBuoiDate = (e: string | null, index: number) => {
    let data = [...valueNewBuoi];
    if (e) {
      if (data.length > index) {
        data[index].date = e;
        setValueNewBuoi(data);
        return;
      }
      data.push({ date: e });
      setValueNewBuoi(data);
    }
  };
  const handleNewBuoiGv = (e: string | null, index: number) => {
    let data = [...valueNewBuoi];
    if (e) {
      if (data.length > index) {
        data[index].gv = e;
        setValueNewBuoi(data);
        return;
      }
      data.push({ gv: e });
      setValueNewBuoi(data);
    }
  };

  // useeffect lọc time học
  useEffect(() => {
    // danh sách time học
    const time = [
      {
        value: "08h30-09h30",
        label: "08h30-09h30",
      },
      {
        value: "09h30-11h30",
        label: "09h30-11h30",
      },
      {
        value: "14h00-15h00",
        label: "14h00-15h00",
      },
      {
        value: "15h30-17h00",
        label: "15h30-17h00",
      },
      {
        value: "18h00-19h30",
        label: "18h00-19h30",
      },
      {
        value: "19h30-21h00",
        label: "19h30-21h00",
      },
    ];
    // lọc từ arrx ra những thg đúng weekdate
    const filteredData = arrX.filter((item: any) =>
      item.action.some((action: any) => action.time.weekDate == valueDate)
    );
    // xử lí disabled thời gian

    const result = filteredData
      .map((item: any) =>
        item.action
          .filter((action: any) => action.time.weekDate == valueDate)
          .map((action: any) => ({
            fullname: action.participantsFullName[0],
            fromTime: action.time.fromTime,
            toTime: action.time.toTime,
          }))
      )
      .flat();

    // lọc ra item trùng
    const uniqueResult = _.uniqBy(result, "fromTime");

    // map để tạo r data truyền select
    const result2 = uniqueResult.map((item: any) => {
      let g = item.fromTime.toString().slice(0, 2);
      let c = item.fromTime.toString().slice(2, 4);
      let d = item.toTime.toString().slice(0, 2);
      let e = item.toTime.toString().slice(2, 4);

      return {
        value: `${g}h${c}-${d}h${e}`,
        label: `${g}h${c}-${d}h${e}`,
        disabled: true,
      };
    });
    const result1 = time.map((elementA) => {
      const found = result2.find(
        (elementB) => elementB.value == elementA.value
      );
      return found ? found : elementA;
    });

    setArrTime(result1);
  }, [arrX]);

  // useeffect lọc GV học
  useEffect(() => {
    // lọc từ arrx ra những thg đúng weekdate

    const filteredData = arrY.filter((item: any) =>
      item.action.some((action: any) => action.time.weekDate == valueDate)
    );

    // xử lí disabled giáo viên
    const resultGv = filteredData
      .map((item: any) =>
        item.action
          .filter((action: any) => action.time.weekDate == valueDate)
          .map((action: any) => ({
            fullname: action.participantsFullName[0],
            fromTime: action.time.fromTime,
            toTime: action.time.toTime,
          }))
      )
      .flat();

    const resultGv0 = resultGv.filter((item: any) => {
      return item.fromTime == valueTime;
    });


    // map để tạo r data truyền select
    const resultGv1 = resultGv0.map((item: any) => {
      return {
        value: `${item.fullname}`,
        label: `${item.fullname}`,
        disabled: true,
      };
    });

    const resultGv2 = dataGv1.map((elementA: any) => {
      const found = resultGv1.find(
        (elementB: any) => elementB.value == elementA.value
      );
      return found ? found : elementA;
    });

    setArrGv(resultGv2);
  }, [arrY, valueTime]);

  useEffect(() => {
    setValueBuoi([]);
    setValueEdit([]);
  }, [isModalOpen]);
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
        footer={[]}
      >
        <h5 style={{ marginTop: 15, marginBottom: 15 }}>
          {item.className} - {item.roomCode} / {item.info}
        </h5>

        <form
          onSubmit={form.onSubmit((value) => {
            let data = {
              id: item.id,
              dataedit: valueEdit,
              datanew: valueNewBuoi,
            };

            func(data);
            setChanged(true);
            handleOk();
          })}
          action=""
        >
          <div style={{ marginTop: 20 }} className="form-group-5">
            {item.actions?.map((a, b) => {
              let g = a.time.fromTime.toString().slice(0, 2);
              let c = a.time.fromTime.toString().slice(2, 4);
              let d = a.time.toTime.toString().slice(0, 2);
              let e = a.time.toTime.toString().slice(2, 4);
              return (
                <div key={b} style={{ marginTop: 20 }}>
                  <h5>Điều chỉnh buổi {b + 1}</h5>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className="column1">
                      <div style={{ marginTop: 10 }}>
                        <Input
                          disabled
                          placeholder={
                            a.time.weekDate == 1
                              ? "Thứ hai"
                              : a.time.weekDate == 2
                              ? "Thứ ba"
                              : a.time.weekDate == 3
                              ? "Thứ tư"
                              : a.time.weekDate == 4
                              ? "Thứ năm"
                              : a.time.weekDate == 5
                              ? "Thứ sáu"
                              : a.time.weekDate == 6
                              ? "Thứ bảy"
                              : "Chủ nhật"
                          }
                        ></Input>
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <Input
                          disabled
                          value={
                            a.roomId == 1
                              ? "A1.1"
                              : a.roomId == 2
                              ? "A1.2"
                              : a.roomId == 3
                              ? "A1.3"
                              : a.roomId == 4
                              ? "A1.4"
                              : a.roomId == 5
                              ? "A1.5"
                              : a.roomId == 6
                              ? "B1.1"
                              : a.roomId == 7
                              ? "B1.2"
                              : a.roomId == 8
                              ? "B1.3"
                              : a.roomId == 9
                              ? "B1.4"
                              : a.roomId == 10
                              ? "C1.1"
                              : a.roomId == 11
                              ? "C1.2"
                              : a.roomId == 12
                              ? "C1.3"
                              : a.roomId == 13
                              ? "C1.4"
                              : "C1.5"
                          }
                        ></Input>
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <Input
                          disabled
                          placeholder={`${g}h${c}-${d}h${e}`}
                        ></Input>
                      </div>

                      <div style={{ marginTop: 10 }}>
                        <Input
                          disabled
                          placeholder={a.participantsFullName[0]}
                        ></Input>
                      </div>
                    </div>
                    <div className="column2">
                      <div style={{ marginTop: 10 }}>
                        <Select
                          onChange={(e) => {
                            // lọc
                            const k = action.filter((item) => {
                              return item.action?.some((item1: any) => {
                                return item1.time.weekDate == e;
                              });
                            });
                            setValueDate(e);
                            setArrX(k);
                            setArrY(k);

                            // chỉnh sửa buổi
                            handleEditDate(e, b);
                            const filterArrCoppy: any = JSON.parse(
                              JSON.stringify(filterArr)
                            );
                            if (filterArrCoppy && filterArrCoppy.actions) {
                              filterArrCoppy.actions[b].time.weekDate =
                                Number(e);
                              setArr(filterArrCoppy);
                            }
                          }}
                          withAsterisk
                          className="date"
                          placeholder="Ngày học"
                          defaultValue={a.time.weekDate.toString()}
                          data={[
                            { value: "1", label: "Thứ hai" },
                            { value: "2", label: "Thứ ba" },
                            { value: "3", label: "Thứ tư" },
                            { value: "4", label: "Thứ năm" },
                            { value: "5", label: "Thứ sáu" },
                            { value: "6", label: "Thứ bảy" },
                            { value: "0", label: "Chủ nhật" },
                          ]}
                        />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        <Select
                          // value={a.roomId.toString()}
                          onChange={(e) => {
                            // lọc
                            const k = action.filter((item) => {
                              return item.action?.some((item1: any) => {
                                return item1.roomId == e;
                              });
                            });
                            setArrX(k);

                            // chỉnh sửa buổi
                            handleEditRoom(e, b);
                            const filterArrCoppy: any = JSON.parse(
                              JSON.stringify(filterArr)
                            );
                            if (filterArrCoppy && filterArrCoppy.actions) {
                              filterArrCoppy.actions[b].roomId = e;
                              setArr(filterArrCoppy);
                            }
                          }}
                          withAsterisk
                          defaultValue={a.roomId.toString()}
                          className="room"
                          placeholder="Phòng học"
                          data={[
                            { value: "1", label: "A1.1" },
                            { value: "2", label: "A1.2" },
                            { value: "3", label: "A1.3" },
                            { value: "4", label: "A1.4" },
                            { value: "5", label: "A1.5" },
                            { value: "6", label: "B1.1" },
                            { value: "7", label: "B1.2" },
                            { value: "8", label: "B1.3" },
                            { value: "9", label: "B1.4" },
                            { value: "10", label: "C1.1" },
                            { value: "11", label: "C1.2" },
                            { value: "12", label: "C1.3" },
                            { value: "13", label: "C1.4" },
                            { value: "14", label: "C1.5" },
                          ]}
                          // value={valueGender}
                          // onChange={setValueGender}
                        />
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <Select
                          data={arrTime}
                          onChange={(e) => {
                            // lọc
                            if (typeof e == "string") {
                              let a = e?.slice(0, 2);
                              let b = e?.slice(3, 5);
                              setValueTime(`${a}${b}`);
                            }
                            // chỉnh buổi
                            const filterArrCoppy: any = JSON.parse(
                              JSON.stringify(filterArr)
                            );
                            if (
                              filterArrCoppy &&
                              filterArrCoppy.actions &&
                              typeof e == "string"
                            ) {
                              filterArrCoppy.actions[b].time.fromTime = Number(
                                `${e.slice(0, 2)}${e.slice(3, 5)}`
                              );
                              filterArrCoppy.actions[b].time.toTime = Number(
                                `${e.slice(6, 8)}${e.slice(9, 11)}`
                              );
                              setArr(filterArrCoppy);
                            }
                            handleEditTime(e, b);
                          }}
                          className="time"
                          // placeholder={`${g}h${c}-${d}h${e}`}
                          placeholder="Giờ học ( hhmm-hhmm )"
                          defaultValue={`${g}h${c}-${d}h${e}`}
                          inputWrapperOrder={[
                            "label",
                            "input",
                            "description",
                            "error",
                          ]}
                          // {...form.getInputProps("fullName")}
                          withAsterisk
                        />
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <Select
                          onChange={(e) => {
                            handleEditGv(e, b);
                            // console.log('filter aray', filterArr);
                            // console.log('bindex' , b);
                            const filterArrCoppy: any = JSON.parse(
                              JSON.stringify(filterArr)
                            );
                            if (
                              filterArrCoppy &&
                              filterArrCoppy.actions &&
                              filterArrCoppy.actions.length > 0 &&
                              filterArrCoppy.actions[b].participantsFullName
                            ) {
                              filterArrCoppy.actions[
                                b
                              ].participantsFullName[0] = e;
                              setArr(filterArrCoppy);
                            }
                          }}
                          withAsterisk
                          className="room"
                          placeholder="Giáo viên"
                          defaultValue={a.participantsFullName[0]}
                          data={arrGv}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            className="form-group-6"
          >
            {valueBuoi.length > 0 &&
              valueBuoi.map((a, b) => {
                return (
                  <div
                    key={b}
                    style={{ marginTop: 20, width: "49%" }}
                    className="column2"
                  >
                    <h5>Thêm buổi</h5>
                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => {
                          // lọc
                          const k = action.filter((item) => {
                            return item.action?.some((item1: any) => {
                              return item1.time.weekDate == e;
                            });
                          });
                          setValueDate(e);
                          setArrX(k);
                          setArrY(k);
                          // thêm buổi
                          handleNewBuoiDate(e, b);
                        }}
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
                      />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => {
                          // lọc
                          const k = action.filter((item) => {
                            return item.action?.some((item1: any) => {
                              return item1.roomId == e;
                            });
                          });
                          setArrX(k);
                          // thêm buổi
                          handleNewBuoiRoom(e, b);
                        }}
                        withAsterisk
                        className="room"
                        placeholder="Phòng học"
                        data={[
                          { value: "1", label: "A1.1" },
                          { value: "2", label: "A1.2" },
                          { value: "3", label: "A1.3" },
                          { value: "4", label: "A1.4" },
                          { value: "5", label: "A1.5" },
                          { value: "6", label: "B1.1" },
                          { value: "7", label: "B1.2" },
                          { value: "8", label: "B1.3" },
                          { value: "9", label: "B1.4" },
                          { value: "10", label: "C1.1" },
                          { value: "11", label: "C1.2" },
                          { value: "12", label: "C1.3" },
                          { value: "13", label: "C1.4" },
                          { value: "14", label: "C1.5" },
                        ]}
                        required
                      />
                    </div>

                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => {
                          if (typeof e == "string") {
                            let a = e?.slice(0, 2);
                            let b = e?.slice(3, 5);
                            setValueTime(`${a}${b}`);
                          }
                        }}
                        data={arrTime}
                        className="class"
                        placeholder="Giờ học"
                        description=""
                        inputWrapperOrder={[
                          "label",
                          "input",
                          "description",
                          "error",
                        ]}
                        withAsterisk
                        required
                      />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Select
                        onChange={(e) => handleNewBuoiGv(e, b)}
                        required
                        withAsterisk
                        className="room"
                        placeholder="Giáo viên"
                        data={arrGv}
                      />
                    </div>
                  </div>
                );
              })}
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
