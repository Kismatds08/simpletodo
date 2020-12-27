import {useDispatch} from 'react-redux';
import React, {useState} from 'react';


const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo (event.target.value);
    const handleClick = () => dispatch({
        type: 'ADD_TODO',
        payload:{
            label: newTodo,
            id: Math.ceil(Math.random()*100),        
        }
    })

    return (
        <>
        <input value= {newTodo} onChange={handleChange}type ='text' />
        <button onClick = {handleClick}>ADD TODO</button>
        </>
    )
}

export default TodoInput;