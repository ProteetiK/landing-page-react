import { React } from 'react';
import styled from 'styled-components/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGithub,
    faFacebook,
    faLinkedin
 } from '@fortawesome/free-brands-svg-icons';
 import { 
    faLegal,
    faInfoCircle,
    faBinoculars,
    faContactBook,
    faCode,
    faCookieBite
 } from '@fortawesome/free-solid-svg-icons';

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #1a202c;
    color: #fff;
`

const Wrapper = styled.div`
    width: 100%;
    max-width:800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-gap: 2rem;
`

const Header = styled.h3`
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
    margin: 0 0 2rem 0;
`

const Smalltext = styled.p`
    font-family: 'Raleway', sans-serif;
    margin: 0;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
`

const Link = styled.a`
    color: #fff;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    font-size: 0.85rem;
    &:not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`

const Footer = () => (
    <Component>
        <Wrapper>
            <Header>Something about being productive?</Header>
            <Row>
                <Link href='#'>About Us &nbsp; <FontAwesomeIcon icon={faInfoCircle} /></Link>
                <Link href='#'>Our Vision &nbsp; <FontAwesomeIcon icon={faBinoculars} /></Link>
                <Link href='#'>Our Products &nbsp; <FontAwesomeIcon icon={faCode} /></Link>
                <Link href='#'>Contact Us &nbsp; <FontAwesomeIcon icon={faContactBook} /></Link>
            </Row>
            <Row>
                <Link href='#'>GitHub &nbsp; <FontAwesomeIcon icon={faGithub} /></Link>
                <Link href='#'>Facebook &nbsp; <FontAwesomeIcon icon={faFacebook} /></Link>
                <Link href='https://www.linkedin.com/in/proteeti-kushari-65358517b/'>LinkedIn &nbsp; <FontAwesomeIcon icon={faLinkedin} /></Link>
            </Row>
            <Smalltext>(c) Me probably?</Smalltext>
            <Link href='#'>Legal Stuff &nbsp; <FontAwesomeIcon icon={faLegal} /></Link>
            <Link href='#'>Cookies! &nbsp; <FontAwesomeIcon icon={faCookieBite} /></Link>
        </Wrapper>
    </Component>
)

export default Footer