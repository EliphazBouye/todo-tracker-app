import {useState} from 'react'
import {uuid} from 'uuidv4'

import Todo from './components/Todo'
function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [edit, setEdit] = useState('')


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
    // setInput(okI[findI].todo)

    // let editTodo = 
    // setTodos((todos) => [editTodo])
    // console.log('clicker edited',okI[findI])
    if(oldTodos[findTodoIndex].id === id){
      setIsEdit(true)
    }
  }

  function saveEditHandle(id, edited){
    let findTodoIndex = todos.findIndex(i => i.id === id )
    let oldTodos = [...todos]
    oldTodos[findTodoIndex] = {id: oldTodos[findTodoIndex].id ,todo: edited, status: oldTodos[findTodoIndex].status}
    setTodos(oldTodos)
    setIsEdit(false)
    console.log(todos)
  }

  return <div>
    <div>
      <h1>MY TODOS</h1>
      <input onChange={handleChange} type="text" value={input} placeholder="Add new todo" />
      <button onClick={addNewTodo}>Add</button>
      {todos.map((todo, i) => <Todo edit={editHandle} save={saveEditHandle} delete={deleteHandle} todoInfo={todo} isEdit={isEdit} key={todo.id} />)}
      
    </div>
  </div>
}

export default App;
