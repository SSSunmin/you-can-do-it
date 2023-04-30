import { useRecoilState } from "recoil";
import { todoListFilterState } from "./recoilContorol";
import { css } from "@emotion/css";

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      `}
    >
      <select
        onChange={updateFilter}
        className={css`
          margin: 0px 10px;
          height: 30px;
        `}
      >
        <option value={"Show All"}>전체보기</option>
        <option value={"Show Completed"}>완료</option>
        <option value={"Show Uncompleted"}>미완료</option>
      </select>
    </div>
  );
};
export default TodoListFilter;
