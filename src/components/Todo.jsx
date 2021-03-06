import {useState} from 'react'

function Todo(props) {

  const [input, setInput] = useState(props.todoInfo.todo)

  function handleChangeEdit(e){
    setInput(e.target.value)
  }
  
  function handleSave(){
    props.save(props.todoInfo.id, input)
  }


    return <div className="card">
      
    {props.isEdit.status && 
        props.isEdit.idElement === props.todoInfo.id 
          ? <input onChange={handleChangeEdit} type="text" value={input}/> 
          : <h2>{props.todoInfo.todo}</h2>
    }
    
    <div className="actions">
      {!props.isEdit.status ? <button onClick={() => props.edit(props.todoInfo.id)}>Edit</button> : <button onClick={handleSave}>Save</button> }
      <button onClick={() => props.delete(props.todoInfo.id)} className="btn">Delete</button>
    </div>
</div>
}

export default Todo;