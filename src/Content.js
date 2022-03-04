import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Title from './Title';
import Add from './Add';
import TodoList from './TodoList';
import CompletedList from './CompletedList';

export default () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);
    const completed = useSelector(state => state.todo.completed);

    const Divide = styled.hr`
        border-style: dashed;
        color: rgb(169, 153, 207);
        margin: 30px 0;
        border-width: 3px;
    `

    return (
        <>
            <Title title="Todo App" />
            <Add />
            <TodoList todos={todos} />
            <Divide />
            <CompletedList todos={completed} count={completed.length} />
        </>
    )
}