const Todo = (props) => {
    const { todos, deleteDataTodo } = props;
    const handleDelete = (id) => {
        deleteDataTodo(id);
    }
    return (
        <>
            <div className="todos-contaainer">
                {todos.map(todo => {

                    return (
                        <div key={todo.id}>
                            <li className='todo-child' > {todo.title}
                                &nbsp; &nbsp; <span onClick={() => handleDelete(todo.id)}>X</span></li>

                        </div>
                    )
                })}
            </div>
        </>

    );
}
export default Todo;


