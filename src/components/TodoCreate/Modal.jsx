import React from "react"
import './Modal.css'
import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function Modal() {
    const { createValue, onChangeCreate, onClickButtonCreate } = useContext(TodoContext)
    return(
        <section className="Modal">
            <div className="Modal-box">
                <h2 className="Modal-title">Crear un nuevo todo:</h2>
                <input value={createValue} onChange={onChangeCreate} className="Modal-input" type='text' placeholder="New todo..."/>
                <button onClick={onClickButtonCreate} className="Modal-button">Crear</button>
            </div>
        </section>
    )
}

export default Modal;