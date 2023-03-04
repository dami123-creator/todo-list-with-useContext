import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoButton.css'

function TodoButton(){
    const {
        onClickButton,
        isOpen
    } = useContext(TodoContext)

    return(
        <>
        <button onClick={onClickButton} className="TodoButton">
        { isOpen ? 'X' : '+'}
        </button>
        </>
    )
}

export default TodoButton;