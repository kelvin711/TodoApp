import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



const Todo = ({ todos, completeTodo, removeTodo , updateTodo }) => {
//state
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />


    return todos.map( (todo, index) => (
        <div 
        className={todo.isComplete ? "todo-row complete" : "todo-row"} 
        key={index} 
        >

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
            {/* on click of remove icon a function where the id of the todo id is passed then removes that todo */}
            <RiCloseCircleLine
            onClick={ () => removeTodo(todo.id)} 
            className="delete-icon"
            />
            {/* on click the edit icon gives us a function to edit state */}
            <TiEdit 
            onClick={ () => setEdit({
                id: todo.id, 
                value: todo.text
            })
            } 
            className="edit-icon"/>
            </div>
        </div>
    ))
};


export default Todo;