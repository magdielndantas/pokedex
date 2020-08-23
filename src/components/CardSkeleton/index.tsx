import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container, ImageContainer, TypesContainer } from './styles';

const CardSkeleton: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <Skeleton height={'100%'} width={'100%'} />
            </ImageContainer>
            <h1><Skeleton height={'100%'} width={'100%'} /></h1>
            <TypesContainer>
                <span><Skeleton height={'100%'} width={'100%'} /></span>
            </TypesContainer>
        </Container>
    );
}

export default CardSkeleton;