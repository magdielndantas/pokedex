import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Container } from './styles';

const CardSkeleton: React.FC = () => {
    return (
        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
            <Container>
                <Skeleton height={'100%'} width={'100%'} />
            </Container>
        </SkeletonTheme>
    );
}

export default CardSkeleton;