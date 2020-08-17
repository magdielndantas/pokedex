import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <h1>Poke<span>dex</span></h1>
        </Container>
    );
}

export default Header;