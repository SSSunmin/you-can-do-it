import {useRecoilValue } from "recoil";
import { filteredTodolistState } from "./recoilContorol";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListCounter from "./TodoListCounter";
import TodoListFilter from "./TodoListFilters";

export function Todolist (){
  const todoList = useRecoilValue(filteredTodolistState)
  return(
    <div>
      <TodoListCounter/>
      <TodoItemCreator/>
      <TodoListFilter/>
      {todoList.map((item)=>
        <TodoItem key={item.id} item = {item}/>
      )}
    </div>
  )
}

