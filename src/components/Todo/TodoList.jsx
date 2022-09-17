import React from 'react'

const TodoList = ({ todoList }) => {
  return (
    <ul className="todo__list">
      {todoList.map((todo, i) => (
        <li className='mb-10 bg-gray-300 rounded-10 px-10 py-5' key={i}>{ todo }</li>
      ))}
    </ul>
  )
}

export default TodoList