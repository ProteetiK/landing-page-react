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

const LeftSection = () => (
    <Component bg>
        <Wrapper row>
            <Item left>
                <Subheader>A lot of features!</Subheader>
                <Header>Things to Do and a Little Lorem Ipsum</Header>
            </Item>
            <Item center ml>
                <PlaceholderImage />
                <Text>We're in the left-section here.</Text>
            </Item>
        </Wrapper>
    </Component>
)

export default LeftSection
