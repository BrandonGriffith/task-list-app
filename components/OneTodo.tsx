import { OneTodoProps } from "./models/Props"
import {AiFillEdit, AiFillDelete, AiFillCheckCircle} from "react-icons/ai"
import { useEffect, useRef, useState } from "react"


const OneTodo: React.FC<OneTodoProps> = ({todo,todos,setTodos}:OneTodoProps) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.content)
    const handleDone = (id: number) => {
        setTodos(todos.map( (todo) => todo.id === id?
            {...todo,
            isDone: !todo.isDone
            } : todo))
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter( (todo) => todo.id !== id))
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map( (todo) => todo.id === id?
            {...todo,
            content: editTodo
            } : todo))
        setEdit(!edit);
    }
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current?.focus();
    }, [edit]);
    return (
    <form className="one-todo" onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            edit?
            (
                <input className="todo-edit-box" ref={inputRef}
                value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} />
            )
            :
        (
            todo.isDone? 
            ( <s className="one-todo-text"> {todo.content} </s> ) 
            : 
            ( <span className="one-todo-text"> {todo.content} </span> ) 
        )
        }
        <div>
            {
                edit?
                (<span></span>)
                :
                (
                <span className="icon" onClick={ () => {
                    setEdit(!edit)
                }} > 
                    <AiFillEdit/> 
                </span>
                )
            }
            <span className="icon"  onClick={()=>handleDelete(todo.id)}> 
                <AiFillDelete/> 
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}> 
                <AiFillCheckCircle/> 
            </span>
        </div>
    </form>
    )
}
export default OneTodo
