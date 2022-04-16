import { InputProps } from "./models/Props"


const InputField = ({todo, setTodo, handleAdd}:InputProps) => {
    return (
    <form className="input" onSubmit={handleAdd}> 
        <input type="input" 
        className="input-box" 
        placeholder="Enter a task here..." 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)} 
        />
        <button type="submit" className="input-btn">Add Task</button>
    </form>
    )
}
export default InputField
