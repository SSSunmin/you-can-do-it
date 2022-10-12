import { useState,useRef, useEffect } from "react"
import { useSetRecoilState } from "recoil";
import { todoListState } from "./recoilContorol"

const TodoItemCreator=()=>{
  const listid = useRef(0);
  const[inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem =()=>{
    setTodoList((oldlist)=>[
      ...oldlist,
      {
        id : listid.current,
        text : inputValue,
        isComplete : false,
      },
    ])
    setInputValue('');
    listid.current++;
  };

  return(
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator;