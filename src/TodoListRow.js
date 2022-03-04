import React, { useState } from 'react';
import styled from "styled-components";

export default props => {
    const { todo, index, handleComplete, handleDelete } = props;

    const Row = styled.tr`
    `
    const CheckBoxContainer = styled.td`
        padding: 20px;
        border-bottom: 2px solid rgb(169, 153, 207);
    `
    const CheckBoxSubcontainer = styled.div`
        display: flex;
        align-items: center;
    `
    const CheckBox = styled.input`
        width: 20px;
        height: 20px;
    `
    const Todo = styled.span`
        color: rgb(169, 153, 207);
        margin-left: 20px;
    `
    const DeleteContainer = styled.td`
        text-align: right;
        padding: 20px;
        border-bottom: 2px solid rgb(169, 153, 207);
    `
    const Delete = styled.button`
        background: linear-gradient(90deg, rgb(237, 115, 46) 0%, rgb(241, 177, 89) 100%);
        padding: 10px 20px;
        text-transform: uppercase;
        box-sizing: border-box;
        color: white;
        font-weight: bold;
    `

    return (
        <Row>
            <CheckBoxContainer>
                <CheckBoxSubcontainer>
                    <CheckBox type="checkbox" onClick={() => {handleComplete(index)}} />
                    <Todo>{todo}</Todo>
                </CheckBoxSubcontainer>
            </CheckBoxContainer>
            <DeleteContainer>
                <Delete onClick={() => {handleDelete(index)}}>Delete</Delete>
            </DeleteContainer>
        </Row>
    )
}