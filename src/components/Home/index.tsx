import React, { useState, useEffect } from 'react'
import { Switch, Route, matchPath } from "react-router-dom"
import useRouter from "use-react-router"
import { Container, Card } from './styles'

const Main: React.FC = () => {
    const [pokemon, setPokemon] = useState([])
    const params = useParams('/pokemon/:id');
    const id = params.id

    useEffect(() => {
        getPokemon(id)
    }, [id])

    function useParams(path) {
        const { location } = useRouter()
        const { pathname } = location

        const pattern = `(.*)?${path}`
        const match = matchPath(pathname, { path: pattern }) || {}

        return match.params
    }

    const getPokemon = async (path): Promise<void> => {
        const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${path}`)
        let pokemon: any = await data.json()
        const pokemonType = pokemon.types.map((t: any) => (
            <span key={t.id} className={t.type.name}>{t.type.name} </span>
        ))

        const pokemonObject = {
            id: pokemon.id,
            name: pokemon.name,
            image: `${pokemon.sprites.front_default}`,
            types: pokemonType,
        }
        setPokemon(pokemonObject)
    }

    return (
        <Container>
            <Switch>
                <Route path='/' exact>
                    <p>aaaaaaaaaaa </p>
                </Route>
                <Route path='/pokemon' exact><p>pppp</p></Route>
                <Route path='/pokemon/:id'>
                    <Card>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <div className='id'>
                            <h1>{pokemon.name}</h1>
                            <p>#{pokemon.id} • {pokemon.types}</p>
                        </div>
                        <div>
                            
                        </div>
                    </Card>
                </Route>
            </Switch>
        </Container>
    )
};

export default Main