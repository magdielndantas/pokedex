import React from 'react';

import { Container, ImageContainer } from './styles';

interface Props {
    name: string,
    image: string,
    types: any,
    backgroundColor: string,
}

const Card: React.FC<Props> = ({
    name,
    types,
    backgroundColor
}) => {
    return (
        <Container>
            <ImageContainer className={backgroundColor}>
                <img src={`https://projectpokemon.org/images/normal-sprite/${name}.gif`} />
            </ImageContainer>
            <h1>{name}</h1>
            {types}
        </Container>
    );
}

export default Card;