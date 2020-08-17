import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Container } from './styles';

interface Props {
    cards: number,
}

const CardSkeleton: React.FC<Props> = ({ cards }) => {
    const arr: any = Array.from({ length: cards }, (_, i) => i + 1);

    return (
        <>
            {
                arr.map((item: any) => (
                    <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
                        <Container key={item}>
                            <Skeleton height={'100%'} width={'100%'} />
                        </Container>
                    </SkeletonTheme>
                ))
            }
        </>
    );
}

export default CardSkeleton;