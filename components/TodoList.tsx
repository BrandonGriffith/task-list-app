import { TodoListProps } from "./models/Props"
import OneTodo from "./OneTodo"

const TodoList: React.FC<TodoListProps> = ({todos,setTodos}:TodoListProps) => {
    return (
    <div className="todos">
        {
            todos.map(todo=>(
                <OneTodo todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
                key={todo.id} />
            ))
        }
    </div>
    )
}
export default TodoList
