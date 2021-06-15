import {useState} from 'react'
import {uuid} from 'uuidv4'

import Todo from './components/Todo'
function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  function handleChange(e){
    setInput(e.target.value)
  }


  function addNewTodo(){
    let newTodo = {id: uuid() ,todo: input, status: false}

    setTodos((todos) => [...todos, newTodo])
    setInput("")
  }

  function deleteHandle(id) {
    setTodos(todos.filter((i) => ((i.id) !== id)))
  }
  return <div>
    <div>
      <h1>MY TODO</h1>
      <input onChange={handleChange} type="text" value={input} placeholder="Add new todo" />
      <button onClick={addNewTodo}>Add</button>
      {todos.map((todo, i) => <Todo delete={deleteHandle} todoInfo={todo} key={todo.id} />)}
      
    </div>
  </div>
}

export default App;
