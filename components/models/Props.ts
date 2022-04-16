import React, { SetStateAction } from "react"


export interface InputProps {
    todo:string,
    setTodo:React.Dispatch<SetStateAction<string>>,
    handleAdd: (e:React.FormEvent) => void
}
