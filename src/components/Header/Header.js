import { React } from 'react';
import styled from 'styled-components/macro';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

const Wrapper = styled.div``

const Button = styled.button`
    background-color: transparent;
    border: 0;
    padding: 0.7rem 0.25rem;
    border-radius: 0.375rem;
    font-size: 0.85rem;
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
    transition: background-color 0.25s ease-in;
    &:not(:last-of-type) {
        margin-right: 5rem;
    }
    &:hover {
        cursor: pointer;
        background-color: #EDF2F7;
    }
`


const Header = () => (
    <Component>
        <Wrapper>
            <Button>Features</Button>
            <Button>Pricing</Button>
            <Button>Blog</Button>
        </Wrapper>
    </Component>
)

export default Header