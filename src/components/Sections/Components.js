import styled from 'styled-components/macro';

export const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${props => props.bg ? '#f9fafb' : 'fff'};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
`

export const Subheader = styled.h4`
    font-weight: 200;
    font-family: 'Raleway', sans-serif;
    font-size: 0.9rem;
    color: #a0aec0;
`

export const Header = styled.h3`
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
    margin: 0 0 2rem 0;
`

export const PlaceholderImage = styled.div`
    width: 400px;
    height: 200px;
    border: 1px solid #cbd5e0;
    border-radius: 0.75rem;
    box-shadow: 0 2px 4px 0 rgb(0,0,0, 0.04);
`

export const Text = styled.p`
    margin: 0 0 2rem 0;
    color: #a0aec0;
    padding: 0.7rem;
    font-family: 'Raleway', sans-serif;
    font-size: 0.7rem;
    text-align: center;
    max-width: 402px;
`

const getAlign = (props) => {
    if (props.center) {
        return 'center'
    } else if (props.right) {
        return 'flex-end'
    } else {
        return 'flex-start'
    }

}

export const Item = styled.div`
    margin: 0 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: ${props => getAlign(props)};
    margin-right: ${props => props.mr ? '2rem' : 0};
    margin-left: ${props => props.ml ? '2rem' : 0};
`

export const Link = styled.a`
color: #000;
font-family: 'Raleway', sans-serif;
text-decoration: none;
font-size: 0.85rem;
&:not(:last-of-type) {
    margin-bottom: 0.5rem;
}
`