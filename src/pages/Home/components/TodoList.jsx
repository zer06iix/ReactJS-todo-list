/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"


export default function TodoList({todos, deleteTodo, handleCheckbox, darkMode, editTodoHandler}){

    
    return (
        <div>
            <ul className={`list-reset`}>
                {
                    todos.map((todo, id) => <TodoItem key={id} item={todo} deleteTodo={deleteTodo} darkMode={darkMode} handleCheckbox={handleCheckbox} editTodoHandler={editTodoHandler}/>)
                }
            </ul>
        </div>
    )
}