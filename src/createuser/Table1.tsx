import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from "@mantine/core";
import ModalAntd from "./ModalAntd";
import _ from "lodash";
import CreateTable from "./CreateTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { eachDayOfInterval, format } from "date-fns";

const data1 = [
  {
    id: "123",
    className: "STA-C",
    info: "9:30 - 11:00",
    roomCode: "T7, CN",
    price: -600000,
    reportId: ["9656c7d3-c378-48b6-9179-b032236548ab"],
    items: null,
    users: [],
  },
  {
    id: "1234",
    className: "STA-B",
    info: "18:00 - 19:30",
    roomCode: "3,5",
    price: -600000,
    reportId: ["dcf9a69a-2eed-47ac-876b-8978a36bc6a8"],
    items: [
      {
        itemId: "edbf1612-9f10-4538-be12-0ab8817f1f07",
        itemName: "STARTERS SUCCEED",
        isInWaitingRoom: false,
        description: "",
        itemType: {
          itemTypeId: "2",
          itemTypeName: "Books",
          description: "",
        },
        discountPercentage: 0,
        discountAmount: 0,
        basePrice: -150000,
        quantity: 0,
        personIdAssigningDiscount: 0,
        recurringDay: 0,
        dateAssignedToUser: 0,
        dateCreated: 1666777932,
        dateUpdated: 0,
      },
    ],
    users: [],
  },
];

const data2 = [
  {
    classId: "123",
    actions: [
      {
        roomId: 12,
        time: {
          fromTime: 1930,
          toTime: 2100,
          weekDate: 1,
        },
        title: "",
        note: "",
        participants: [4],
        participantsFullName: ["Cao Duy Minh"],
      },
      {
        roomId: 11,
        time: {
          fromTime: 1930,
          toTime: 2100,
          weekDate: 3,
        },
        title: "",
        note: "",
        participants: [4],
        participantsFullName: ["Cao Duy Minh"],
      },
      {
        roomId: 11,
        time: {
          fromTime: 1930,
          toTime: 2100,
          weekDate: 5,
        },
        title: "",
        note: "",
        participants: [18],
        participantsFullName: ["Thắng Cao Duy"],
      },
    ],
  },
  {
    classId: "1234",
    actions: [
      {
        roomId: 5,
        time: {
          fromTime: 1800,
          toTime: 1930,
          weekDate: 1,
        },
        title: "",
        note: "",
        participants: [34],
        participantsFullName: ["Kenneth Trần"],
      },
      {
        roomId: 5,
        time: {
          fromTime: 1800,
          toTime: 1930,
          weekDate: 3,
        },
        title: "",
        note: "",
        participants: [9],
        participantsFullName: ["Trần Phan Quỳnh Như"],
      },
      {
        roomId: 5,
        time: {
          fromTime: 1800,
          toTime: 1930,
          weekDate: 5,
        },
        title: "",
        note: "",
        participants: [34],
        participantsFullName: ["Kenneth Trần"],
      },
    ],
  },
];

const Table1: React.FC = () => {
  // react query
  // useqery
  const getDataGv = async () => {
    // const res = await axios.get('http://localhost:8080/api/v1/schedule/rules');
    const res1 = await fetch("http://localhost:8080/api/v1/user/get", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ entityCode: 2 }),
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error("Request failed.");
        }
      })
      .then((res) => {
        return res.data;
      });
    return res1;
  };
  const { data: dataGv } = useQuery(["dataGv"], () => getDataGv());

  const getDataAllClass = async () => {
    const res1 = fetch("http://localhost:8080/api/v1/class/all", {
      method: "GET",
      credentials: "include",
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .then((res) => {
        return res.data;
      });
    return res1;
  };
  const { data: dataCLass } = useQuery(["dataClass"], () => getDataAllClass());

  // const { data } = useQuery(["class1"], () => getDataAllClass());
  const getDataTkb = async () => {
    // const res = await axios.get('http://localhost:8080/api/v1/schedule/rules');
    const res1 = fetch("http://localhost:8080/api/v1/schedule/rules", {
      method: "GET",
      credentials: "include",
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .then((res) => {
        return res.data.entities;
      });
    return res1;
  };
  const [a, setA] = useState<any>([]);

  const { data: dataTKB } = useQuery(["dataTKB"], () => {
    getDataTkb().then((res) => {
      setA(res);
    });
    return getDataTkb();
  });

  // useState
  interface A {
    room: string;
    time: string;
    date: string;
    gv: string;
  }

  interface DataAddNew {
    id: string;
    dataedit: A[];
    datanew: A[];
  }
  const [dataAddNew, setDataAddNew] = useState<DataAddNew | null>(null);

  const [b, setB] = useState<any[] | []>([]);
  const [c, setC] = useState(null);
  // const [a, setA] = useState<any>([]);

  const [changed, setChanged] = React.useState(false);
  const [changedInner, setChangedInner] = React.useState(false);

  const [arrIndex, setIndex] = React.useState(-1);
  // console.log('arrat:', arrIndex);

  // if (changed) {
  //   setArr
  // }

  // interface
  interface B {
    participantsFullName: string[];
    time: {
      fromTime: number;
      toTime: number;
      weekDate: number;
    };
    roomId: number;
  }
  interface A {
    actions: B[];
    classId: string;
    className: string;
    id: string;
    info: string;
    items: null;
    price: number;
    reportId: string[];
    roomCode: string;
  }
  // handel edit
  // const handle = (a: any) => {
  //   let data = JSON.parse(JSON.stringify(b));
  //   let index = data.findIndex((c: any) => {
  //     return c.id == a.id;
  //   });
  //   // nếu có dữ liệu thay đổi thì thay đỏi
  //   if (a.dataedit.length > 0) {
  //     if (a.dataedit[0]) {
  //       data[index].actions[0].roomId = +a.dataedit[0].room;
  //       // console.log('room', data[index].actions[0].roomId);
  //       // log ra thì vẫn tháy đổi m BUT, log cả 1 mảng data thì nó ko thay đổi
  //       data[index].actions[0].participantsFullName[0] = a.dataedit[0].gv;
  //       data[index].actions[0].time.weekDate = +a.dataedit[0].date;
  //       data[index].actions[0].time.fromTime = a.dataedit[0].time.slice(0, 4);
  //       data[index].actions[0].time.toTime = a.dataedit[0].time.slice(5, 9);
  //       // console.log('đã đổi1',data);
  //     } else if (a.dataedit[1]) {
  //       data[index].actions[1].roomId = +a.dataedit[1].room;
  //       data[index].actions[1].participantsFullName[0] = a.dataedit[1].gv;
  //       data[index].actions[1].time.weekDate = +a.dataedit[1].date;
  //       data[index].actions[1].time.fromTime = a.dataedit[1].time.slice(0, 4);
  //       data[index].actions[1].time.toTime = a.dataedit[1].time.slice(5, 9);
  //     } else if (a.dataedit[2]) {
  //       data[index].actions[2].roomId = +a.dataedit[2].room;
  //       data[index].actions[2].participantsFullName[0] = a.dataedit[2].gv;
  //       data[index].actions[2].time.weekDate = +a.dataedit[2].date;
  //       data[index].actions[2].time.fromTime = a.dataedit[2].time.slice(0, 4);
  //       data[index].actions[2].time.toTime = a.dataedit[2].time.slice(5, 9);
  //     }
  //   }
  //   // nếu có dữ liệu thêm mới thì them mới
  //   if (a.datanew.length > 0) {
  //     for (let i = 0; i <= a.datanew.length - 1; i++) {
  //       data[index].actions.push({
  //         participantsFullName: [a.datanew[i].gv],
  //         time: {
  //           fromTime: a.datanew[i].time.slice(0, 4),
  //           toTime: a.datanew[i].time.slice(5, 9),
  //           weekDate: +a.datanew[i].date,
  //         },
  //         roomId: a.datanew[i].room,
  //       });
  //     }
  //   }
  //   setB(data);
  // };
  // handleNEw
  const handleNewTable = (a: any) => {
    // let data = JSON.parse(JSON.stringify(b));
    // let action = a.datanew.map((item: any, index: number) => {
    //   return {
    //     participantsFullName: [item.gv],
    //     roomId: +item.room,
    //     time: {
    //       fromTime: item.time.slice(0, 4),
    //       toTime: item.time.slice(5, 9),
    //       weekDate: +item.date,
    //     },
    //   };
    // });
    // let res = { className: a.class, actions: action };
    // data.push(res);
    // setB(data);
  };

  const mappingA: { [key: string]: number } = {};

  // xử lý dữ lieuj
  const data3 = a?.map((item: any, index: number) => {
    mappingA[item.classId] = index;
    // console.log('mappinga' , mappingA);

    const data = { ...item, id: item.classId };
    return data;
  });

  const merged = _.mergeWith(
    _.keyBy(dataCLass, "id"),
    _.keyBy(data3, "id"),
    (objValue, srcValue) =>
      _.isObject(objValue) ? _.merge(objValue, srcValue) : srcValue
  );
   const arr = _.values(merged);

    // colunm datta
  const columns: ColumnsType<any> = [
    {
      title: "Tên lớp",
      // dataIndex: "class",
      render: (_, item) => {
        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            room={""}
            name1={item.className}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },
      key: "class",
      sorter: (a, b) => a.className.length - b.className.length,
    },
    {
      title: "Phòng học",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          if (item.actions[0].roomId == 1) {
            a = "A1.1";
          } else if (item.actions[0].roomId == 2) {
            a = "A1.2";
          } else if (item.actions[0].roomId == 3) {
            a = "A1.3";
          } else if (item.actions[0].roomId == 4) {
            a = "A1.4";
          } else if (item.actions[0].roomId == 5) {
            a = "A1.5";
          } else if (item.actions[0].roomId == 6) {
            a = "B1.1";
          } else if (item.actions[0].roomId == 7) {
            a = "B1.2";
          } else if (item.actions[0].roomId == 8) {
            a = "B1.3";
          } else if (item.actions[0].roomId == 9) {
            a = "B1.4";
          } else if (item.actions[0].roomId == 10) {
            a = "C1.1";
          } else if (item.actions[0].roomId == 11) {
            a = "C1.2";
          } else if (item.actions[0].roomId == 12) {
            a = "C1.3";
          } else if (item.actions[0].roomId == 13) {
            a = "C1.4";
          } else {
            a = "C1.5";
          }
        }
        // if (item.actions) {
        //   for (let i of item.actions) {

        //     a += `${i.roomId}, `;
        //   }
        // }

        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },
      key: "room",
    },

    {
      title: "Giờ học",
      render: (_, item) => {
        let a = item.info;

        // if (item.actions) {
        //   for (let i of item.actions) {
        //     let b = i.time.fromTime.toString().slice(0, 2);
        //     let c = i.time.fromTime.toString().slice(2, 4);
        //     let d = i.time.toTime.toString().slice(0, 2);
        //     let e = i.time.toTime.toString().slice(2, 4);

        //     a += `${b}h${c}-${d}h${e}, `;
        //   }
        // }

        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },
      key: "time",
    },
    {
      title: "Thứ hai",
      key: "mon",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 1) {
              a = i.participantsFullName[0];
            }
          }
        }

        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },
      // render: (_,{mon}) => {
      //   if(mon !== '') {
      //     return <ModalAntd  item={item} func={setDataAddNew} name1= {mon}></ModalAntd>
      //   }else{
      //     return <Tag color={'red'}>Trống</Tag>
      //   }
      //  }
    },
    {
      title: "Thứ ba",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 2) {
              a = i.participantsFullName[0];
            }
          }
        }

        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },

      key: "tue",
    },
    {
      title: "Thứ tư",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 3) {
              a = i.participantsFullName[0];
            }
          }
        }

        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },
      key: "wed",
    },
    {
      title: "Thứ năm",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 4) {
              a = i.participantsFullName[0];
            }
          }
        }
        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },

      key: "thu",
    },
    {
      title: "Thứ sáu",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 5) {
              a = i.participantsFullName[0];
            }
          }
        }

        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },

      key: "fri",
    },
    {
      title: "Thứ bảy",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 6) {
              a = i.participantsFullName[0];
            }
          }
        }
        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },

      key: "sat",
    },
    {
      title: "Chủ nhật",
      render: (_, item) => {
        let a = "";
        if (item.actions) {
          for (let i of item.actions) {
            if (i.time.weekDate == 0) {
              a = i.participantsFullName[0];
            }
          }
        }
        return (
          <ModalAntd
            item={item}
            func={setDataAddNew}
            name1={a}
            filterArr={c}
            setChanged={setChanged}
            setArr={setC}
            arrData = {arr}

          ></ModalAntd>
        );
      },
      key: "sun",
    },
  ];

  if (changed) {
    // console.log("-aa---aaa---aa");

    // const filterArr =  JSON.parse(JSON.stringify(a));
    const filterArr = JSON.parse(JSON.stringify(a));
    filterArr[arrIndex] = c;

    console.log("asdasd0", dataAddNew);
    filterArr[arrIndex] = c;

    if (dataAddNew) {
      if (dataAddNew.datanew.length && !changedInner) {
        for (let i = 0; i <= dataAddNew.datanew.length - 1; i++) {
          filterArr[arrIndex].actions.push({
            note: "",
            participants: [],
            title: "",
            participantsFullName: [dataAddNew.datanew[i].gv],
            time: {
              fromTime: dataAddNew.datanew[i].time.slice(0, 4),
              toTime: dataAddNew.datanew[i].time.slice(5, 9),
              weekDate: +dataAddNew.datanew[i].date,
            },
            roomId: +dataAddNew.datanew[i].room,
          });
        }
      }
    }

    setA(filterArr);
    setChanged(false);
    setC(null);
  }

  // useeffect

  return (
    <div>
      {/* <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <CreateTable fun={handleNewTable}></CreateTable>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button onClick={() => {}}>Cập nhật</Button>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          onClick={() => {
            setB(arr);
          }}
        >
          Quay lại
        </Button>
      </div> */}
      <Table
        style={{ fontSize: 18 }}
        columns={columns}
        dataSource={arr}
        pagination={{ pageSize: 30 }}
        scroll={{ y: 1000 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              // setIndex(mappingA[record.classId]);
              // setC(record)
              // !changed && !c
              if (!changed && !c) {
                setC(record);
                setIndex(mappingA[record.classId]);
              }
            },
          };
        }}
      />
    </div>
  );
};

export default Table1;
