import React from 'react';
import styled from "styled-components";
import CompletedListRow from './CompletedListRow';

export default props => {
    const { todos, count } = props;

    const List = styled.table`
        border: 2px solid rgb(169, 153, 207);
        width: 100%;
        box-sizing: border-box;
        border-spacing: 0;
        font-size: 20px;
    `
    const Header = styled.h2`
        color: white;
        font-weight: bold;
    `

    return (
        <>
            <Header>Completed:({count})</Header>
            <List>
                <tbody>
                {
                    
                    todos.map((ele, index) => {
                        return (
                            <CompletedListRow todo={ele} key={index} />
                        )
                    })
                }
                </tbody>
            </List>
        </>
    )
}