import React from "react";
import './TodoSearch.css';
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch(){
    const {
        search,
        onChangeSearch,
        totalTodos, completedTodos
    } = useContext(TodoContext)

    return(
        <>
            <h2 className="TodoSearch-title">Terminado <span className="TodoSearch-number">{completedTodos}</span> de <span className="TodoSearch-number">{totalTodos}</span> tareas</h2>
            <input value={search} onChange={onChangeSearch} className="TodoSearch-input" type='text' placeholder="Search" />
        </>
    )
}

export default TodoSearch;