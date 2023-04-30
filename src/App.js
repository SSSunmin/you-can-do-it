import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Maindiv, Todolist } from "./TodoList";
import { css } from "@emotion/css";
import Home from "./Home";
import Header from "./Header";
import CalendarDetail from "./CalendarDetail";

export const GetDate = (value) => {
  const year = value.getFullYear();
  const month =
    value.getMonth() + 1 < 10
      ? `0${value.getMonth() + 1}`
      : value.getMonth() + 1;
  const day = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();

  return `${year}-${month}-${day}`;
};
function App() {
  const [selectDate, setSelectDate] = useState(GetDate(new Date()));
  return (
    <RecoilRoot>
      <div
        className={css`
          height: max-content;
          width: 100%;
          display: flex;
          justify-content: center;
          background-color: #ffeddb;
        `}
      >
        <Maindiv>
          <Header text="캘린더 보기" />
          <Home />
          <CalendarDetail date={selectDate} />
          <Todolist />
        </Maindiv>
      </div>
    </RecoilRoot>
  );
}

export default App;
