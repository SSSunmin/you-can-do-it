import React, { useEffect } from "react";
import { css } from "@emotion/css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateState,
  filteredTodolistState,
  todoListState,
} from "./recoilContorol";
import TodoItem from "./TodoItem";

const CalendarDetail = () => {
  const selectedDate = useRecoilValue(dateState);
  const todoList = useRecoilValue(filteredTodolistState);
  const setTodoList = useSetRecoilState(todoListState);

  useEffect(() => {
    const initlist = localStorage.getItem(selectedDate);
    if (initlist !== null) {
      setTodoList(JSON.parse(initlist));
    }
  }, []);
  // console.log(todoList);
  return (
    <div
      className={css`
        width: 650px;
        height: 500px;
        background-color: white;
        margin: 50px 100px;
        padding: 20px;
        border-radius: 10px;
        box-sizing: border-box;
        border: 1px solid #a0a096;
      `}
    >
      <div>{selectedDate}</div>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} isEdit={false} />
      ))}
    </div>
  );
};

export default CalendarDetail;
