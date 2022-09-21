import TodoForm from './TodoForm';
import Todo from './Todo';


const TodoList = ({ todoList, setTodoList, edit, setEdit, setInput, input }) => {
  
  const getClickedItem = (e) => {
    const curItemId = e.target.closest('.todo').getAttribute('data-key')
    return curItemId
  }

  const removeHandler = (e) => {
    const updatedList = todoList.filter((list) => getClickedItem(e) !== list.id)
    setTodoList(updatedList)
  }

  const editHandler = (e) => {
    const editEl = todoList.find(todo => todo.id === getClickedItem(e))
    setEdit({isEditing: true, editId: editEl.id})
    setInput({todo: editEl.todo, id: editEl.id})
  }

  const makeEditHandler = (e) => {
    e.preventDefault();
    const newTodos = todoList.map(task => {
      if (task.id === edit.editId) {
        return { ...task, todo: input.todo}
      }
      return task
    })

    setTodoList(newTodos)
    setEdit({edit: false, editId: ''})
    setInput({todo: ''})
  }

  return <>
    <TodoForm 
      input={input}
      setInput={setInput}
      setTodoList={setTodoList}
      todoList={todoList}
      setEdit={setEdit}
      edit={edit}
      makeEditHandler={makeEditHandler}
    />
    
    <ul className="todo__list">
      {todoList.map((list) => (
        <Todo edit={edit} todo={list.todo} editHandler={editHandler} removeHandler={removeHandler} key={list.id} id={list.id} />
      ))}
    </ul>
  </>
}

export default TodoList