import React from "react";
import { useState } from "react";


const TodoContext = React.createContext();

function TodoProvider(props){
    const data = [
        {
            task: 'sacar la basura',
            completed: false
        },
        {
            task: 'limpiar',
            completed: false
        },
        {
            task: 'regar',
            completed: true
        },
        {
            task: 'comer',
            completed: true
        }
    ]
    const [todos, setTodos] = useState(data)
    const [totalTodos, setTotalTodos] = useState(todos.length)
    const [completedTodos, setCompletedTodos] = useState(todos.filter(todo => !!todo.completed).length)
    const [search, setSearch] = useState('')
    const [createValue, setCreateValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    let todosFilter = []

    const onChangeSearch = e => {
        setSearch(e.target.value)
    }

    const onChangeCreate = (e) => {
        setCreateValue(e.target.value)   
    }

    const onClickButtonCreate = (e) =>{
        const newTodos = todos;
        newTodos.push({
            task: createValue,
            completed: false
        })
            setTodos(newTodos)
            setTotalTodos(todos.length)
            setCompletedTodos(todos.filter(todo => !!todo.completed).length)
            setIsOpen(false)

    }

    const onClickButton = () => {
        !!isOpen ? setIsOpen(false) : setIsOpen(true)
        setCreateValue('')
    }
    
    const onClickCheck = (e) => {
        const todoText = e.target.parentNode.querySelector('.TodoItem-text').textContent
        todos.forEach(todo => {
            if(todoText === todo.task){
                if(todo.completed) todo.completed = false
                else todo.completed = true
            }
            
        })
        setTodos(todos)
        setCompletedTodos(todos.filter(todo => !!todo.completed).length)
    }

    const onClickDelete = (e) => {
        const todoText = e.target.parentNode.querySelector('.TodoItem-text').textContent
        todos.forEach(todo => {
            if(todoText === todo.task){
                const newTodos = todos;
                newTodos.splice(todos.indexOf(todo), 1)

                setTodos(newTodos)
                setTotalTodos(todos.length)
                setCompletedTodos(todos.filter(todo => !!todo.completed).length)
            }
            
        }) 
    }

    if(search === ''){
        todosFilter = todos
    } else {
        todosFilter = todos.filter(todo => todo.task.match(search))
    }

    return(
        <TodoContext.Provider value={{
            todos,
            totalTodos,
            completedTodos,
            onClickCheck,
            onClickDelete,
            onChangeCreate,
            createValue,
            search,
            onChangeSearch,
            todosFilter,
            onClickButton,
            isOpen,
            onClickButtonCreate
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider};