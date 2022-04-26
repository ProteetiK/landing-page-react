import { React } from 'react';
import styled from 'styled-components/macro';

const Component = styled.div`
    margin: 3rem 0;
    display: flex;
`

const Input = styled.input`
    padding: 0.75rem 2rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.375rem;
    line-height: 1.25;
    font-family: 'Raleway', sans-serif;
`

const Submit = styled.button`
    padding: 0.75rem 2rem;
    margin-left: 1rem;
    background-color: transparent;
    border: 0;
    border-radius: 0.375rem;
    background-color: #6667AB;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    transition: background-color 0.25s ease-in-out;
    &:not(:last-of-type) {
        margin-right: 5rem;
    }
    &:hover {
        cursor: pointer;
        background-color: #9ae6b4;
    }
`

const Form = () => (
    <Component>
        <form>
            <Input type='email' placeholder='Your Email Address' />
            <Submit>Send</Submit>
        </form>
    </Component>
)

export default Form