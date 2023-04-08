import { eachDayOfInterval, format } from "date-fns";

let a = [
  { name: "asd", date: "11/03/2023", gate: "Cổng 1", status: "Chưa sử dụng" },
  { name: "asd", date: "02/03/2023", gate: "Cổng 3", status: "Chưa sử dụng" },
  { name: "asd", date: "18/02/2023", gate: "Cổng 4", status: "Đã sử dụng" },
  { name: "asd", date: "15/02/2023", gate: "Cổng 2", status: "Chưa sử dụng" },
  { name: "asd", date: "14/02/2023", gate: "Cổng 5", status: "Đã sử dụng" },
];

const arrayDay = (startDate: string, endDate: string) => {
  const result = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });
  let final = result.map((item) => format(item, "dd/MM/yyyy"));
  return final;
};
const arrDate = arrayDay("2023/02/01", "2023/02/28");

const arrGate = ["Cổng 4", "Cổng 1"];

const arrStatus = ["Chưa sử dụng", "Đã sử dụng"];

let data = a
  .filter((item) => {
    return arrDate.some((item1) => {
      return item1 == item.date;
    });
  })
  .filter((item) => {
    return arrGate.some((item1) => item1 == item.gate);
  })
  .filter((item) => {
    return arrStatus.some((item1) => item1 == item.status);
  });

console.log("data", data);


// let data1 = a.filter((a) => {
//   let flag = false;
//   for (let i of data2) {
//     if (a.date === i) {
//       flag = true;

//     }
//   }
//   return flag;
// });

export {};
