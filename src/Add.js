import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";

import { addTodo } from './actions';

const Input = styled.input`
    width: 100%;
    padding: 10px;
    color: rgb(117, 117, 117);
    box-sizing: border-box;
    margin-bottom: 20px;
`

export default () => {
    const dispatch = useDispatch();
    const [ todo, setTodo ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            dispatch(addTodo(todo));
            setTodo('');
        }
    }
    
    const Submit = styled.button`
        background: linear-gradient(90deg, rgb(237, 115, 46) 0%, rgba(241, 177, 89) 100%);
        padding: 10px 20px;
        text-transform: uppercase;
        box-sizing: border-box;
        color: white;
        font-weight: bold;
    `

    const validate = () => {
        return todo !== '';
    }

    return (
        <>
            <Input type="text" placeholder='Add todo task' value={todo} onChange={e => {setTodo(e.target.value)}} />
            <Submit onClick={handleSubmit}>submit</Submit>
        </>
    )
}