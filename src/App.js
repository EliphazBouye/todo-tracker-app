import {useState} from 'react'
import {uuid} from 'uuidv4'

import Todo from './components/Todo'
function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState({idElement: '',status: false})


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

  function editHandle(id){
    let findTodoIndex = todos.findIndex(i => i.id === id )
    let oldTodos = [...todos]

    if(oldTodos[findTodoIndex].id === id){
      setIsEdit({idElement: id, status: true})
    }
  }

  function saveEditHandle(id, edited){
    let findTodoIndex = todos.findIndex(i => i.id === id )
    let oldTodos = [...todos]
    oldTodos[findTodoIndex] = {id: oldTodos[findTodoIndex].id ,todo: edited, status: oldTodos[findTodoIndex].status}
    setTodos(oldTodos)
    setIsEdit({idElement: id, status: false})
  }

  return <div>
    <div>
      <h1>MY TODOS</h1>
      <input onChange={handleChange} type="text" value={input} placeholder="Add new todo" />
      <button onClick={addNewTodo}>Add</button>
      {todos.slice(0).reverse().map((todo, i) => <Todo edit={editHandle} save={saveEditHandle} delete={deleteHandle} todoInfo={todo} isEdit={isEdit} key={todo.id} />)}
      
    </div>
  </div>
}

export default App;
