import React, { useState }  from 'react';

const TodoForm = () => {
//State
    const [formInput, setFormInput] = useState("");


    return (
        <form className="todo-form">

            <input 
            className="todo-input"
            type="text" 
            name="text" 
            placeholder="Add a todo"
            value={formInput}
            />

            <button 
            className="todo-button"
            >
                Add todo
            </button>

        </form>
    );
};


export default TodoForm;