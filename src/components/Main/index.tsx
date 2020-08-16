import React, { useState, useEffect } from 'react';

import Card from '../Card'
import api from '../../services/api';

import { Container } from './styles';

interface ProkemonProps {
    id: number;
    name: string;
    image: string;
    type: string;
}

const Main: React.FC = () => {
    const [pokemons, setPokemons]: any = useState([]);
    const n = '';

    useEffect(() => {
        fetchData()
    }, [n])

    const fetchData = (): void => {
        for (let i = 1; i <= 100; i++) {
            getPokemon(i)
        }
    }

    const getPokemon = async (path: number): Promise<void> => {
        const response = await api.get(`pokemon/${path}`);
        const pokemon = response.data
        const pokemonTypes = pokemon.types
            .map((poke: any) => (
                <span key={poke.type.name} className={poke.type.name}>{poke.type.name}</span>))

        const pokemonData = {
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.front_default}`,
            types: pokemonTypes,
            backgroundColor: pokemon.types[0].type.name,
        }

        console.log(pokemon);
        setPokemons((pokelist: any) => [...pokelist, pokemonData]);
    }


    return (
        <Container>
            {pokemons.length > 0 ? pokemons.map((pk: any) => (
                <Card
                    name={pk.name}
                    image={pk.image}
                    types={pk.types}
                    backgroundColor={pk.backgroundColor}
                />
            )) : "..."}
        </Container>
    );
}

export default Main;