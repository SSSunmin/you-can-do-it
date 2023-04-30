import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import { Maindiv } from "./TodoList";
import { formatDate } from "react-calendar/dist/cjs/shared/dateFormatter";
import { css } from "@emotion/css";
import { useSetRecoilState } from "recoil";
import { dateState, todoListState } from "./recoilContorol";
import { GetDate } from "./App";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const setRootDate = useSetRecoilState(dateState);
  const setTodoList = useSetRecoilState(todoListState);

  const ClickCalender = (value, event) => {
    setRootDate(GetDate(value));
    const list = localStorage.getItem(GetDate(value));
    if (list !== null) {
      setTodoList(JSON.parse(list));
    }
  };
  return (
    <Maindiv>
      <Calendar
        formatDay={(locale, date) => formatDate(locale, date).split(".")[2]}
        onChange={setDate}
        value={date}
        onClickDay={ClickCalender}
        tileContent={({ date, view }) => {
          let html = [];
          if (localStorage.getItem(GetDate(date)) !== null) {
            html.push(
              <>
                <div
                  className={css`
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: red;
                  `}
                ></div>
                <div
                  className={css`
                    font-size: 10px;
                    margin-top: 5px;
                    color: darkgray;
                  `}
                >
                  100%
                </div>
              </>
            );
          }

          return (
            <>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin-top: 10px;
                `}
              >
                {html}
              </div>
            </>
          );
        }}
      />
    </Maindiv>
  );
};

export default Home;
