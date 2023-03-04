import React from "react";
import './TodoItem.css'
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoItem({text, completed}){
    const {
        onClickCheck,
        onClickDelete
    } = useContext(TodoContext)
    const isCompleted = completed; 

    

    return(
        <article className={`TodoItem ${!!isCompleted && 'TodoItem--activate'}`}>
            <span onClick={onClickCheck} className="TodoItem-icon TodoItem-check">✔️</span>
            <p className="TodoItem-text">{text}</p>
            <span onClick={onClickDelete} className="TodoItem-icon TodoItem-remove">X</span>
        </article>
    )
}

export default TodoItem;