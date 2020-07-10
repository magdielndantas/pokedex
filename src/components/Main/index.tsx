import React, { useState, useEffect } from 'react'
import { Switch, Route, matchPath } from "react-router-dom"
import useRouter from "use-react-router"

import { Container, SearchBar, SearchIcon } from './styles'
import Detail from '../Detail'

const Main: React.FC = () => {
    const [pokemon, setPokemon] = useState([])
    const params = useParams('/pokemon/:id');
    var id = params.id

    useEffect(() => {
        getPokemon(id)
    }, [id])

    function useParams(path) {
        const { location } = useRouter()
        const { pathname } = location

        const pattern = `(.*)?${path}`
        const reset = `(.*)?/pokemon/bulbasaur`
        const match = matchPath(pathname, { path: pattern }) || matchPath(reset, { path: reset})

        return match.params
    }

    const getPokemon = async (path): Promise<void> => {
        const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${path}`)
        let pokemon: any = await data.json()
        const pokemonTypes = pokemon.types.map((t: any) => (
            <span key={t.type.name} className={t.type.name}>{t.type.name} </span>
        ))

        const pokemonStats = pokemon.stats.map((s: any) => (
        <>
            <p>{s.stat.name}: {s.base_stat}</p>
            <div className="stat" >
                <div className={`s s${s.base_stat}`}></div>
                <div className="bar"></div>
            </div>
        </>))

        const pokemonObject = {
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.front_default}`,
            types: pokemonTypes,
            stats: pokemonStats
        }
        setPokemon(pokemonObject)
    }


    return (
        <Container>
            <Switch>
                <Route path='/' exact>
                <div className="SearchBox">
                    <SearchBar placeholder="Enter a pokemon name or #id" type="text"/>
                    <SearchIcon/>
                </div>
                </Route>
                <Route path='/pokemon/:id'>
                    <div className="SearchBox">
                        <SearchBar placeholder="Enter a pokemon name or #id" type="text"/>
                        <SearchIcon/>
                    </div>
                    <Detail name={pokemon.name}
                            image={pokemon.image}
                            id={pokemon.id}
                            types={pokemon.types}
                            stats={pokemon.stats}
                            />
                </Route>
            </Switch>
        </Container>
    )
};

export default Main