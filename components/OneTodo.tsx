import { OneTodoProps } from "./models/Props"

const OneTodo: React.FC<OneTodoProps> = ({todo,todos,setTodos}:OneTodoProps) => {
    return (
    <form className="one-todo">
        <span className="one-todo-text">
            {todo.content}
        </span>
    </form>
    )
}
export default OneTodo
