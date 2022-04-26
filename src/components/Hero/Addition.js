import { React } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsers,
    faTerminal,
    faUniversity,
    faBuilding,
    faRobot,
    faPen
 } from '@fortawesome/free-solid-svg-icons';

const Component = styled.div`
    color: #a0aec0;
`
const Text = styled.p`
    margin: 0 0 1rem 0;
    text-align: center;
    font-weight: 600;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #d2d6dc;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
    box-shadow: 0 1px 2px 0 rgb(0,0,0, 0.05);

    &:not(:last-of-type) {
        margin-right: 0.5rem;
    }
`

const Type = styled.p`
    margin: 0 0 0 0.5rem;
`

//regular people - users
//developer - terminals
//students - university
//writers - pens
//corporations - buildings
//robots - robots

const Addition = () => (
    <Component>
        <Text>Used by:</Text>
        <Wrapper>
            <Item>
                <FontAwesomeIcon icon={faUsers} />
                <Type>Regular People</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faTerminal} />
                <Type>Developers</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faPen} />
                <Type>Writers</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faUniversity} />
                <Type>Students</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faBuilding} />
                <Type>Corporations</Type>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faRobot} />
                <Type>Robots</Type>
            </Item>
        </Wrapper>
    </Component>
)

export default Addition