import { React } from 'react';

import {
    Component,
    Wrapper,
    Subheader,
    Header,
    PlaceholderImage,
    Text
} from './Components';

const MiddleSection = () => (
    <Component bg>
        <Wrapper>
            <Subheader>Something something something.</Subheader>
            <Header>MiddleHeader</Header>
            <PlaceholderImage />
            <Text>Just any old disclaimer or caption.</Text>
        </Wrapper>
    </Component>
)

export default MiddleSection