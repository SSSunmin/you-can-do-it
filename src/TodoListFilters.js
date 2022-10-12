import { useRecoilState } from 'recoil'
import{todoListFilterState} from'./recoilContorol'

const TodoListFilter =()=>{
  const[filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target :{value}})=>{
    setFilter(value);
  }

  return(
    <>
      Filter :
      <select onChange={updateFilter}>
        <option value={"Show All"}>All</option>
        <option value={"Show Completed"}>Completed</option>
        <option value={"Show Uncompleted"}>Uncompleted</option>
       </select>
    </>
  )

}
export default TodoListFilter