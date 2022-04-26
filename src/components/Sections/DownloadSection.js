import { React } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAndroid,
    faApple
 } from '@fortawesome/free-brands-svg-icons';

import {
    Component,
    Wrapper,
    Subheader,
    Header,
    PlaceholderImage,
    Text,
    Item,
    Link
} from './Components';

const LeftSection = () => (
    <Component>
        <Wrapper row>
            <Item center>
                <Header>Download:</Header>
                <Link href='#'>Android &nbsp; <FontAwesomeIcon icon={faAndroid} /></Link>
                <Link href='#'>ioS &nbsp; <FontAwesomeIcon icon={faApple} /></Link>            
            </Item>
        </Wrapper>
    </Component>
)

export default LeftSection
