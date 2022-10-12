import {atom, selector} from'recoil'

export const todoListState = atom({
  key:'todoListState',
  default:[],
})

export const todoListcounter = selector({
  key:'todoListcounter',
  get:({get})=>{
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item)=>item.isComplete).length;
    const totalUnCompletedNum = totalNum-totalCompletedNum;
    const percentComplete = totalNum === 0? 0: totalCompletedNum/totalNum;

    return{
      totalNum,
      totalCompletedNum,
      totalUnCompletedNum,
      percentComplete
    }
  }
})

export const todoListFilterState = atom({
  key :'todoListFilterState',
  default:'Show All',
})

export const filteredTodolistState = selector({
  key :'filteredTodolistState',
  get : ({get})=>{
    const filter = get(todoListFilterState);
    const list =get (todoListState);

    switch (filter){
      case 'Show Completed':
        return list.filter((item)=>item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
})