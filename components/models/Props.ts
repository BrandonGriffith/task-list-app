import { Dispatch, FormEvent, SetStateAction } from "react"
import { Todo } from "./Todo"


export interface InputProps {
    todo:string,
    setTodo: Dispatch<SetStateAction<string>>,
    handleAdd: (e:FormEvent) => void
}

export interface TodoListProps {
    todos: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

export interface OneTodoProps {
    todo: Todo,
    todos: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>
}