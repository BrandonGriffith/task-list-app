import { useRef } from "react"
import { InputProps } from "./models/Props"


const InputField: React.FC<InputProps> = ({todo, setTodo, handleAdd}:InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
    <form className="input" onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}> 
        <input type="input" 
        ref={inputRef} 
        className="input-box" 
        placeholder="Enter a task here..." 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)} 
        />
        <button type="submit" className="input-btn">Add</button>
    </form>
    )
}
export default InputField
