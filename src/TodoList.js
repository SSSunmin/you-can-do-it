import { useRecoilValue } from "recoil";
import { filteredTodolistState } from "./recoilContorol";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListCounter from "./TodoListCounter";
import TodoListFilter from "./TodoListFilters";
import { css } from "@emotion/css";

export function Todolist() {
  const todoList = useRecoilValue(filteredTodolistState);
  return (
    <div
      className={css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 100px 80px;
        width: fit-content;
        box-sizing: border-box;
        background-color: #edcdbb;
      `}
    >
      <div
        className={css`
          display: flex;
        `}
      >
        <TodoListFilter />
        <TodoItemCreator />
      </div>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
      <TodoListCounter />
    </div>
  );
}
