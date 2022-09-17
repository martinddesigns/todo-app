const TodoForm = ({ setInput, input, setTodoList, todoList }) => {

  const submitHandler = (e) => {
    e.preventDefault()
    setTodoList([...todoList, input])
  }

  return (
    <form className='todo__form mb-15'>
      <input onChange={(e) => setInput(e.target.value)} className='border border-gray-300 rounded-5 focus:outline-none p-5 mb-15' type="text" />
      <button onClick={submitHandler} className='bg-blue-500 hover:bg-cyan-500 font-b px-15 py-5 rounded-5 text-white block' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm