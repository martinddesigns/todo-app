import React from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';


const TodoList = ({ todoList, setTodoList, edit, setEdit, setInput, input }) => {
  
  const getClickedItem = (e) => {
    const curItem = e.target.parentNode
    const curItemId = curItem.parentNode.getAttribute('data-key')

    return curItemId
  }

  const removeHandler = (e) => {
    const updatedList = todoList.filter((list) => getClickedItem(e) !== list.id)
    setTodoList(updatedList)
    console.log(getClickedItem(e))
  }

  const editHandler = (e) => {
    const editEl = todoList.find(todo => todo.id === getClickedItem(e))
    setInput({ todo: editEl.todo })
    setEdit(true)
  }

  return <>
    <TodoForm
      input={input}
      setInput={setInput}
      setTodoList={setTodoList}
      todoList={todoList}
      setEdit={setEdit}
      edit={edit}
    />
    
    <ul className="todo__list">
      {todoList.map((list) => (
        <Todo edit={edit} todo={list.todo} editHandler={editHandler} removeHandler={removeHandler} key={list.id} id={list.id} />
      ))}
    </ul>
  </>
}

export default TodoList