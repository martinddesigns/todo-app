import { useState } from 'react'
import uuid from 'react-uuid'

const TodoForm = ({ setInput, input, setTodoList, todoList, edit, makeEditHandler }) => {
  const [error, setError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    if (!input.todo || input.todo.match(/^ *$/) !== null) {
      setError(true)
      return
    } else {
      setError(false)
    }

    setTodoList([...todoList, {...input, id: uuid()}])
    setInput({ todo: '' })
  }

  return <>
    {error && (
      <span className='text-14 text-red-500'>Please add a task...</span>
    )}
    <form className='todo__form mb-15'>
      <input value={input.todo} onChange={(e) => setInput({ todo: e.target.value })} className='border border-gray-300 rounded-5 focus:outline-none p-5 mb-15' type="text" />
      {edit.isEditing ?
        <button onClick={makeEditHandler} className={`bg-blue-500 hover:bg-cyan-500 font-b px-15 py-5 rounded-5 text-white block`} type='submit'>Edit Task</button> :
        <button onClick={submitHandler} className={`bg-blue-500 hover:bg-cyan-500 font-b px-15 py-5 rounded-5 text-white block`} type='submit'>Add Task</button>
      }
    </form>
  </>
}

export default TodoForm