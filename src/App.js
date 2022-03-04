import React from 'react';
import styled from "styled-components";

import {Provider} from 'react-redux'
import store from './store'

import Content from './Content';

export default () => {
    const Container = styled.div`
        max-width: 1024px;
        background: rgb(10, 15, 79);
        min-height: 100vh;
        display: flex;
        margin: auto;
        padding: 100px 40px;
        box-sizing: border-box;
    `

    const SubContainer = styled.div`
        width: 100%;
        min-height: calc(100vh - 200px);
        background: rgb(101, 59, 206);
        border-radius: 2px;
        padding: 50px;
        box-sizing: border-box;
    `
    return (
        <Provider store={store}>
            <Container>
                <SubContainer>
                    <Content />
                </SubContainer>
            </Container>
        </Provider>
    )
}