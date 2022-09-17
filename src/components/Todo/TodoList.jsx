import React from 'react'
import { FiXCircle, FiCheck, FiEdit } from "react-icons/fi";


const TodoList = ({ todoList, setTodoList }) => {

  const removeHandler = (e) => {
    const curItem = e.target.parentNode
    const removeId = curItem.parentNode.getAttribute('data-key')
    const updatedList = todoList.filter((list) => removeId !== list.id)
    setTodoList(updatedList)
  }

  return (
    <ul className="todo__list">
      {todoList.map((list) => (
        <li className='mb-10 last:mb-0 bg-cyan-500/50 rounded-10 px-10 py-5 flex items-center justify-between' key={list.id} data-key={list.id}>
          {list.todo}
          <span className='flex gap-5'>
            <FiCheck className='cursor-pointer hover:stroke-green-500' />
            <FiXCircle onClick={removeHandler} className='cursor-pointer hover:stroke-red-500' />
            <FiEdit className='cursor-pointer hover:stroke-blue-500' />
          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList