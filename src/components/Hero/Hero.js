import { React } from 'react';
import styled from 'styled-components/macro';

import Form from './Form';
import Addition from './Addition';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Slogan = styled.div`
    font-family: 'Raleway', sans-serif;
    margin: 0;
    font-size: 3rem;
    max-width: 25rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
`

const Textarea = styled.div`
    margin: 0;
    font-size:1.25rem;
    &:nth-of-type(1) {
        margin-bottom: 1.5rem;
    }
`

const Text = styled.div``

const Hero = () => (
    <Component>
        <Wrapper>
            <Slogan>All the Tasks</Slogan>
            <Textarea>To-do list</Textarea>
            <Text>Too much to do, too little time</Text>
            <Form />
            <Addition />
        </Wrapper>
    </Component>
)

export default Hero