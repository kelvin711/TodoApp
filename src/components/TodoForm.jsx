import React, { useState, useEffect, useRef }  from 'react';

const TodoForm = (props) => {
//State and other variables
    const [formInput, setFormInput] = useState(props.edit ? props.edit.value : '');
    const focus = useRef(null)
//functions
    useEffect(() => {
        focus.current.focus()
        
    }, []);


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
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
            <>
                <input
                placeholder='Update your item'
                value={formInput}
                onChange={handleChange}
                name='text'
                ref={focus}
                className='todo-input edit'
                />
                <button onClick={handleSubmit} className='todo-button edit'>
                    Update
                </button>
            </>
            )  : (
            <>
                <input
                placeholder='Add a todo'
                value={formInput}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={focus}
                />
                <button onClick={handleSubmit} className='todo-button'>
                Add todo
                </button>
            </>
            )}
        </form>
    );
};


export default TodoForm;