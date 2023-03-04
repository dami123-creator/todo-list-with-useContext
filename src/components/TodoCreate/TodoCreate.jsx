import React from "react";
import ReactDOM  from "react-dom";
import Modal from "./Modal";

function TodoCreate() {
    return ReactDOM.createPortal(
        <Modal/>,
        document.getElementById('modal')

    )
}

export default TodoCreate;
