import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="todo bg-white p-15 rounded-10">
      <h1 className='mb-15 text-center'>Todo List</h1>
      <TodoForm input={input} setInput={setInput} setTodoList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default Todo