import React from 'react';

import Header from '../Header';
import Main from '../Main';

import { Container } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header />
            <Main />
        </Container>
    );
}

export default Layout;