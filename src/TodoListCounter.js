import { useRecoilValue } from 'recoil';
import{todoListcounter} from'./recoilContorol'

const TodoListCounter =()=>{
  const{
    totalNum,
    totalCompletedNum,
    totalUnCompletedNum,
    percentComplete} = useRecoilValue(todoListcounter)
  const percent = Math.round(percentComplete * 100);

  return(
    <ul>
      <li>Total item : {totalNum}</li>
      <li>Items Completed : {totalCompletedNum}</li>
      <li>Items not Completed : {totalUnCompletedNum}</li>
      <li>percent Completed : {percent}</li>
    </ul>
  )
}

export default TodoListCounter;