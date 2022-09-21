import {useState} from 'react'
import Layout from './components/Layout'
import TodoList from './components/Todo/TodoList';

const App = () => {
  const [input, setInput] = useState({todo: ''});
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false)
  
  return (
    <Layout>
      <div className="todo bg-white p-15 rounded-10">
      <h1 className='mb-15 text-center'>Todo List</h1>
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        edit={edit}
        setEdit={setEdit}
        input={input}
        setInput={setInput}
      />
    </div>
    </Layout>
  )
}

export default App