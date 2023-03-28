import { eachDayOfInterval,format } from "date-fns";


let a = [
  { name: "asd", date: "11/03/2023" },
  { name: "asd", date: "02/03/2023" },
  { name: "asd", date: "18/02/2023" },
  { name: "asd", date: "15/03/2023" },
  { name: "asd", date: "14/03/2023" },
];

const arrayDay = (startDate: string, endDate: string) => {
  const result = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });
  let final = result.map((item) => format(item, "dd/MM/yyyy"));
  return final;
};
const data2 = arrayDay("2023/01/10", "2023/03/20");
console.log(data2);

let data1 = a.filter((a) => {
  let flag = false;
  for (let i of data2) {
    if (a.date === i) {
      flag = true;
  
    }
  }
  return flag;
});
console.log(data1);
export {}