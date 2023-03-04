import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import TodoCreate  from "../TodoCreate/TodoCreate";
import TodoButton from "../TodoButton/TodoButton";
import TodoItem from "../TodoItem/TodoItem";
import TodoSearch from "../TodoSearch/TodoSearch";
import './Home.css'

function Home(){
    const {
        todosFilter,
        totalTodos,
        completedTodos,
        isOpen
    } = useContext(TodoContext)

    return (
        <main className="App">
        {!!isOpen &&<TodoCreate/>}
        <section className="App-todoSearch App-container">

            <TodoSearch/>

        </section>

        <section className="App-todoList App-container">

            {todosFilter.map(todo => (

            <TodoItem
                key={todo.task}
                text={todo.task}
                completed={todo.completed}
            />
            ))}
            
        </section>

        <TodoButton/>

        </main>
    )
}

export {Home};