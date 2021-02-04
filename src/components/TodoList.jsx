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
        //filtering through the array of todos and returning a list with every todo that is not the id passed
        const removeArr = todos.filter( todo => todo.id !== id)
        //setting the todos state with this new array
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        //"Hey setTodos, get all itens inside you and compare they by key 'ID', if they are the same, 
        //save it, but, if they are different, keep your previou value."
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
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
            updateTodo={updateTodo}
            />
        </div>
    );
};


export default TodoList;