import React from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import TodoListRow from './TodoListRow';

import { makeComplete, deleteTodo } from './actions';

export default props => {
    const dispatch = useDispatch();
    const { todos } = props;

    const List = styled.table`
        border: 2px solid rgb(169, 153, 207);
        width: 100%;
        box-sizing: border-box;
        margin-top: 40px;
        border-spacing: 0;
        font-size: 20px;
    `

    const handleComplete = index => {
        dispatch(makeComplete(index));
    }
    const handleDelete = index => {
        dispatch(deleteTodo(index));
    }

    return (
        <List>
            <tbody>
            {
                
                todos.map((ele, index) => {
                    return (
                        <TodoListRow todo={ele} key={index} index={index} handleComplete={handleComplete} handleDelete={handleDelete} />
                    )
                })
            }
            </tbody>
        </List>
    )
}