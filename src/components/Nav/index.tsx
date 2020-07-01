import React, { useState, useEffect } from 'react'
import { doGet, getIdFromUrl, getPokemonImage} from '../../services/Pokeapi';

import {Container} from './styles'
import  NavItem from '../NavItem'


const Nav: React.FC = () =>{
  const [pokemon, setPokemon]: any = useState([])

  useEffect(()=> { 
    getData()
  })

  async function getData(){
    let data = await doGet('')
    setPokemon(data.results)
  }

/*  async function getPokemon(id: any){
      let data = await doGet(id)
      const pokeType: string = data.types
      .map((poke: any) => poke.type.name)
      .join("</span><span>");

      const infoPoke = {
        id: data.id,
        name: data.name,
        image: `${data.sprites.front_default}`,
        type: pokeType
        };
      
      return (infoPoke)
  }
{Array.from(Array(3).keys()).map((poke)=>(
          <NavItem key={poke.name} name={teste.name} id={teste.url}/>
      ))}
const teste = getPokemon(1)*/

  return(
    <Container>
      {pokemon.length > 0 ?pokemon.map((poke: any)=>(
          <NavItem key={poke.name} name={poke.name} id={getIdFromUrl(poke.url)} image={getPokemonImage(getIdFromUrl(poke.url))}/>
      )) : <span>...</span>}
    </Container>
  )
};

export default Nav