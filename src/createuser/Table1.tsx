import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Center } from "@mantine/core";
import { eachDayOfInterval, format } from "date-fns";
import ModalAntd from "./ModalAntd";
import _ from "lodash";
interface DataType {
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
}
interface DataType1 {
  class: string;
  room: string;
}

// Returns an array of dates between the two dates

// const result = eachDayOfInterval({
//   start: new Date(2014, 8, 6),
//   end: new Date(2014, 9, 10)
// })
// let c = result.map(item => format(item, 'yyyy-MM-dd'))
// console.log('qwewe',c);

const columns: ColumnsType<any> = [
  {
    title: "Mã lớp",
    // dataIndex: "class",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.className}></ModalAntd>;
    },
    key: "class",
    sorter: (a, b) => a.class.length - b.class.length,
  },
  {
    title: "Phòng học",
    render: (_, item) => {
      let a = ''
        item.actions
      return <ModalAntd item={item} name1={item.room}></ModalAntd>;
    },
    key: "room",
    sorter: (a, b) => a.room.length - b.room.length,
  },
  {
    title: "Ngày học",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.roomCode}></ModalAntd>;
    },
    key: "date",
    width: 100,
  },
  {
    title: "Buổi",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.d}></ModalAntd>;
    },
    key: "buoi",
    width: 100,
    sorter: (a, b) => a.room.length - b.room.length,
  },
  {
    title: "Ca",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.shift}></ModalAntd>;
    },
    key: "shift",
    sorter: (a, b) => a.room.length - b.room.length,
    width: 100,
  },
  {
    title: "Giờ học",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.info}></ModalAntd>;
    },
    key: "time",
  },
  {
    title: "Monday",
    key: "mon",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.mon}></ModalAntd>;
    },
    // render: (_,{mon}) => {
    //   if(mon !== '') {
    //     return <ModalAntd  item={item} name1= {mon}></ModalAntd>
    //   }else{
    //     return <Tag color={'red'}>Trống</Tag>
    //   }
    //  }
  },
  {
    title: "Tuesday",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.tue}></ModalAntd>;
    },

    key: "tue",
  },
  {
    title: "Wedsday",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.wed}></ModalAntd>;
    },
    key: "wed",
  },
  {
    title: "Thurday",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.thu}></ModalAntd>;
    },

    key: "thu",
  },
  {
    title: "Friday",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.fri}></ModalAntd>;
    },

    key: "fri",
  },
  {
    title: "Saturday",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.sat}></ModalAntd>;
    },

    key: "sat",
  },
  {
    title: "Sunday",
    render: (_, item) => {
      return <ModalAntd item={item} name1={item.sun}></ModalAntd>;
    },
    key: "sun",
  },

  // {
  //   title: "Tình trạng sử dụng",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => {
  //     let color = "";
  //     if (tags === "dadung") {
  //       color = "geekblue";
  //     } else if (tags === "chuadung") {
  //       color = "green";
  //     } else {
  //       color = "red";
  //     }
  //     return (
  //       <Tag color={color} key={tags}>
  //         <div> ● {tags} </div>
  //       </Tag>
  //     );
  //   },
  // },
];

const data: DataType[] = [
  {
    class: "ELE",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",
    room: "A2.2",
    mon: "Happy",
    tue: "",
    wed: "Tú Anh",
    thu: "",
    fri: "",
    sat: "",
    sun: "",
  },
  {
    class: "STA-A",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    room: "A2.3",
    mon: "",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Thành",
    sun: "",
  },
  {
    class: "STA",
    room: "A44.2",
    date: "2-4",
    buoi: "Sáng",
    shift: "2",
    time: "18h00 - 19h30",

    mon: "Oanh",
    tue: "",
    wed: "",
    thu: "Oanh",
    fri: "Happy",
    sat: "",
    sun: "Tâm",
  },
  {
    class: "EL1",
    room: "A2.2",
    date: "3-5",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "tài",
    tue: "tài",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tâm",
    sun: "",
  },
  {
    class: "STA",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "Hà",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Lộc",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    mon: "",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    mon: "Tài",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    tue: "Happy",
    wed: "",
    thu: "",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },

  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",

    tue: "Happy",
    wed: "",
    thu: "",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    mon: "Tài",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    tue: "",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "",
    tue: "",
    wed: "Oanh",
    thu: "",
    fri: "",
    sat: "",
    sun: "Tú",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",
    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",
    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",

    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
  {
    class: "STA-A",
    room: "A2.2",
    date: "2-4",
    buoi: "Tối",
    shift: "1",
    time: "18h00 - 19h30",
    mon: "Tài",
    tue: "Happy",
    wed: "",
    thu: "Oanh",
    fri: "",
    sat: "Tú",
    sun: "",
  },
];


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
const data3 = data2.map(item => {
  const data = {...item, id:item.classId}
  return data
})


const merged = _.mergeWith(
  _.keyBy(data1, "id"),
  _.keyBy(data3, "id"),
  (objValue, srcValue) =>
    _.isObject(objValue) ? _.merge(objValue, srcValue) : srcValue
);

console.log(_.values(merged));



var update = [
  { label: 'private', value: 'me@johndoe.com' },
  { label: 'school', value: 'schol@johndoe.com' }
];



const Table1: React.FC = () => (
  <Table
    style={{ fontSize: 18 }}
    columns={columns}
    dataSource={_.values(merged)}
    pagination={{ pageSize: 20 }}
    scroll={{ y: 750 }}
  />
);

export default Table1;
console.log();
