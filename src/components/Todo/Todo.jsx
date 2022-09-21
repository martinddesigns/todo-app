import React from 'react'
import { FiXCircle, FiCheck, FiEdit } from "react-icons/fi";

const Todo = ({editHandler, removeHandler, todo, id}) => {

  return (
    <li data-key={id} className='todo mb-10 last:mb-0 bg-cyan-500/50 rounded-10 px-10 py-5 flex items-center justify-between'>
      <p>{todo}</p>
      <div className='flex gap-5'>
        <FiCheck className='cursor-pointer hover:stroke-green-500' />
        <FiXCircle onClick={removeHandler} className='cursor-pointer hover:stroke-red-500' />
        <FiEdit onClick={editHandler} className='cursor-pointer hover:stroke-blue-500' />
      </div>
    </li>
  )
}

export default Todo