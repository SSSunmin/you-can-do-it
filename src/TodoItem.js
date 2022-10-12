import { useRecoilState } from "recoil";
import { todoListState } from "./recoilContorol";

const replaceItemAtIndex=(arr, index, newValue)=>{
  return[...arr.slice(0,index), newValue, ...arr.slice(index+1)];
}
const removeItemAtIndex =(arr, index)=>{
  return[...arr.slice(0,index), ...arr.slice(index+1)];
}

const TodoItem=({item})=>{
  const [todolist , setTodoList] = useRecoilState(todoListState);
  const index = todolist.findIndex((data) => data === item);

  const editItemText = ({target :{value}})=>{
    const newList = replaceItemAtIndex(todolist, index,{
      ...item,
      text : value
    })
    setTodoList(newList);
  }

  const toggleItemCompletion=()=>{
    const newList = replaceItemAtIndex(todolist,index,{
      ...item,
      isComplete : !item.isComplete,
    })
    setTodoList(newList);
  }

  const deleteItem=()=>{
    const newList = removeItemAtIndex(todolist,index);
    setTodoList(newList);
  }

  return(
    <div>
      <input type={"checkbox"} checked={item.isComplete} onChange={toggleItemCompletion}/>
      <input type="text" value={item.text} onChange={editItemText}/>
      <button onClick={deleteItem}>X</button>
    </div>
  )

}
export default TodoItem;