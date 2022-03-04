import React, { useState } from 'react';
import styled from "styled-components";

export default props => {
    const { todo } = props;

    const Row = styled.tr`
    `
    const CheckBoxContainer = styled.td`
        padding: 20px;
        border-bottom: 1px solid rgb(169, 153, 207);
        display: flex;
        align-items: center;
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
        text-decoration: line-through;
    `
    
    return (
        <Row>
            <CheckBoxContainer>
                <CheckBoxSubcontainer>
                    <CheckBox type="checkbox" onClick={() => {}} checked/>
                    <Todo>{todo}</Todo>
                </CheckBoxSubcontainer>
            </CheckBoxContainer>
        </Row>
    )
}