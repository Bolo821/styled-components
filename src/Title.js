import React from 'react';
import styled from "styled-components";

export default props => {
    const { title } = props;

    const Title = styled.h1`
        width: 100%;
        text-align: center;
        text-decoration: underline;
        color: rgb(169, 153, 207);
        box-sizing: border-box;
    `

    return (
        <Title>{title}</Title>
    )
}