import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./App.css";
import { Todolist } from "./TodoList";
import { css } from "@emotion/css";

function App() {
  return (
    <RecoilRoot>
      <div
        className={css`
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          background-color: #ffeddb;
        `}
      >
        <Todolist />
      </div>
    </RecoilRoot>
  );
}

export default App;
