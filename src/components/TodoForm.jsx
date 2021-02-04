import React, { useState }  from 'react';

const TodoForm = (props) => {
//State and other variables
    const [formInput, setFormInput] = useState("");
//functions
    const handleChange = e => {
        setFormInput(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();//stops the refresh behavior

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: formInput
        });
        //setting the form input to a empty string after submit
        setFormInput("");

    }




    return (
        <form 
        className="todo-form"
        onSubmit={handleSubmit}
        >

            <input 
            className="todo-input"
            type="text" 
            name="text" 
            placeholder="Add a todo"
            value={formInput}
            onChange={handleChange}
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