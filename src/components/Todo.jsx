function Todo(props) {
    return <div className="card">
      Todo {props.todoInfo.length}
    <h2>{props.todoInfo.todo}</h2>
    <div className="actions">
      <button onClick={() => props.delete(props.todoInfo.id)} className="btn">Delete</button>
    </div>
</div>
}

export default Todo;