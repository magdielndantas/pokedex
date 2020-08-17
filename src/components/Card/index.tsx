import React, { useState, useEffect } from 'react';

import { Container, ImageContainer, TypesContainer } from './styles';

import api from '../../services/api';

interface Props {
    name: string,
}

interface Pokemon {
    id: number,
    name: string,
    image: string,
    types: any,
    background: string,
}

const Card: React.FC<Props> = ({ name }) => {
    const [pokemon, setPokemon]: any = useState({});

    useEffect(() => {
        getPokemon()
    }, [name])

    const getPokemon = async (): Promise<void> => {
        const response = await api.get(`pokemon/${name}`);
        const pokemonTypes = response.data.types
            .map((poke: any) => (
                <span
                    key={poke.type.name}
                    className={poke.type.name}>
                    {poke.type.name}
                </span>
            ))

        const pokemonData: Pokemon = {
            id: response.data.id,
            name: response.data.name,
            image: `${response.data.sprites.front_default}`,
            types: pokemonTypes,
            background: response.data.types[0].type.name,
        }
        setPokemon(pokemonData);
    }

    return (
        <Container>
            <ImageContainer className={pokemon.background}>
                <img
                    src={pokemon.name != null ? `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif` : pokemon.image}
                    alt={pokemon.name}
                />
            </ImageContainer>
            <h1>{pokemon.name}</h1>
            <TypesContainer>
                {pokemon.types}
            </TypesContainer>
        </Container>
    );
}

export default Card;