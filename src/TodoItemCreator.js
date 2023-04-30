import { useState, useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./recoilContorol";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const InputText = styled.input`
  height: 24px;
  padding-left: 5px;
  margin-right: 10px;
  width: 400px;
  :focus {
    outline: none;
    border: 2px solid #bf9270;
  }
`;

const TodoItemCreator = () => {
  const listid = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldlist) => [
      ...oldlist,
      {
        id: listid.current,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
    listid.current++;
  };

  return (
    <div
      className={css`
        margin-bottom: 20px;
      `}
    >
      <InputText
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={addItem}
        className={css`
          height: 30px;
          width: 50px;
          background-color: #bf9270;
          border: none;
          font-weight: bold;
          color: white;
        `}
      >
        추가
      </button>
    </div>
  );
};

export default TodoItemCreator;
