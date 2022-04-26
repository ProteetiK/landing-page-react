import { React } from 'react';

import {
    Component,
    Wrapper,
    Subheader,
    Header,
    PlaceholderImage,
    Text,
    Item
} from './Components';

const RightSection = () => (
    <Component>
        <Wrapper row>
            <Item center mr>
                <PlaceholderImage />
                <Text>We're in the right-section here.</Text>
            </Item>
            <Item right>
                <Subheader>A lot of things to do and see! </Subheader>
                <Header>Check it All out at once right now. </Header>
            </Item>
        </Wrapper>
    </Component>
)

export default RightSection
