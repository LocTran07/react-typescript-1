import React, { useState } from "react";

import "./Attendance.scss";

let a = [
  { date: 1, leave: true, noLeave: false },
  { date: 2, leave: true, noLeave: false },
  { date: 3, leave: false, noLeave: true },
  { date: 4, leave: true, noLeave: false },
  { date: 5, leave: true, noLeave: false },
  { date: 6, leave: false, noLeave: true },
  { date: 7, leave: true, noLeave: false },
  { date: 8, leave: false, noLeave: true },
  { date: 9, leave: true, noLeave: false },
  { date: 10, leave: true, noLeave: false },
  { date: 11, leave: false, noLeave: true },
  { date: 12, leave: true, noLeave: false },
  { date: 13, leave: false, noLeave: true },
  { date: 14, leave: true, noLeave: false },
  { date: 15, leave: false, noLeave: true },
  { date: 16, leave: true, noLeave: false },
  { date: 17, leave: true, noLeave: false },
  { date: 18, leave: false, noLeave: true },
  { date: 19, leave: true, noLeave: false },
  { date: 20, leave: false, noLeave: true },
  { date: 21, leave: true, noLeave: false },
  { date: 22, leave: false, noLeave: true },
  { date: 23, leave: true, noLeave: false },
  { date: 24, leave: true, noLeave: false },
  { date: 25, leave: false, noLeave: true },
  { date: 26, leave: true, noLeave: false },
  { date: 27, leave: true, noLeave: false },
  { date: 28, leave: false, noLeave: true },
  { date: 29, leave: true, noLeave: false },
  { date: 30, leave: false, noLeave: true },
  { date: 31, leave: true, noLeave: false },
];
export const Attendance: React.FC = () => {
  return (
    <div className="leave">
      <div className="containerr">
        <header>
          <h3 className="current-date">March 2023 Leave</h3>
        </header>

        <div className="body">
          <div className="calendar">
            <ul className="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thur</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="days">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Radio.Group
                value={"left"}
                style={{
                    marginBottom: 20,
                }}
            ></Radio.Group>
            <Timeline
                mode={"left"}
                items={[
                    {
                        label: "2015-09-01",
                        children: "Bị bệnh",
                    },
                    {
                        label: "2015-09-02",
                        children: "Nhà có việc",
                    },
                    {
                        label: "2023-09-03",
                        children: "Thích thì nghỉ",
                    },
                    {
                        label: "2021-09-01",
                        children: "Bị covid",
                    },
                ]}
            /> */}
    </div>
  );
};
export const Attendance1: React.FC = () => {
  return (
    <div className="noLeave">
      <h3>March 2023 noLeave</h3>
      {/* <Radio.Group
                value={"right"}
                style={{
                    marginBottom: 20,
                }}
            ></Radio.Group> */}
      {/* <Timeline
                mode={"right"}
                items={[
                    {
                        label: "2015-09-01",
                        children: "Bị bệnh",
                    },
                ]}
            />  */}
    </div>
  );
};
