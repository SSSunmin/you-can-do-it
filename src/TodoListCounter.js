import { useRecoilValue } from "recoil";
import { todoListcounter } from "./recoilContorol";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TodoListCounter = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentComplete } =
    useRecoilValue(todoListcounter);
  const percent = Math.round(percentComplete * 100);

  return (
    <List>
      <li>전체 할일 : {totalNum}</li>
      <li>완료 할일 : {totalCompletedNum}</li>
      <li>미완료 할일 : {totalUnCompletedNum}</li>
      <li>완료도 : {percent}</li>
    </List>
  );
};

export default TodoListCounter;
