import React, { useState, useEffect } from 'react';

import { Container, ImageContainer, TypesContainer } from './styles';

import api from '../../services/api';

interface Props {
    name: any,
}

interface Pokemon {
    id: number,
    name: string,
    imageSprite: string,
    imageGif: string,
    types: any,
    background: string,
}

const Card: React.FC<Props> = ({ name }) => {
    const [pokemon, setPokemon]: any = useState({});

    useEffect(() => {
        getPokemon()
    }, [name])

    const getPokemon = async (): Promise<void> => {
        await api.get(`pokemon/${name}`)
            .then(
                response => {
                    if (response.status === 200) {
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
                            imageSprite: `${response.data.sprites.front_default}`,
                            imageGif: `https://projectpokemon.org/images/normal-sprite/${response.data.name.replace('-', '_')}.gif`,
                            types: pokemonTypes,
                            background: response.data.types[0].type.name,
                        }

                        setPokemon(pokemonData);
                    } else {
                        return
                    }
                }

            ).catch(
                error => console.log(error.response)
            )

    }

    return (
        <Container>
            <ImageContainer className={pokemon.background}>
                <img
                    src={pokemon.imageGif}
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