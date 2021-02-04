import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = () => {
//state
    const [todos, setTodos] = useState([]);

//functions
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        //adding a new todo over the rest of the todos
        const newTodos = [todo, ...todos]
        //setting that new todo into state todos
        setTodos(newTodos)
        // console.log(todo, ...todos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter( todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map( todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Whats the plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        </div>
    );
};


export default TodoList;