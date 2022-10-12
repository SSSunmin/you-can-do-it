import React from 'react';
import{
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'
import './App.css';
import {Todolist} from './TodoList';



function App() {
  return (
    <RecoilRoot>
      <Todolist/>
    </RecoilRoot>
  );
}

export default App;
