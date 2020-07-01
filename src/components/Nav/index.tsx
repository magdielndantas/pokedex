import React, { useState, useEffect } from 'react'
import { doGet, getIdFromUrl} from '../../services/Pokeapi';

import {Container} from './styles'
import  NavItem from '../NavItem'


const Nav: React.FC = () =>{
  const [pokemon, setPokemon]: any = useState([])

  useEffect(()=> { 
    async function getData(){
      let data = await doGet('')
      setPokemon(data.results)
    }

    getData()

    getPokemon(1)
  }, [])
 
 const [dataPokemon, setDataPokemon] = useState([])

 async function getPokemon(i){
      let data = await doGet(i)
      const pokeType: string = data.types
      .map((poke: any) => poke.type.name)
      .join(", ");

      const poke = {
        id: data.id,
        name: data.name,
        image: `${data.sprites.front_default}`,
        type: pokeType
        };
      
    setDataPokemon(dataPokemon=> [...dataPokemon, poke])
}


  return(
    <Container>
      {pokemon.length > 0 ?dataPokemon.map((p: any)=>(
          <NavItem key={p.id} name={p.name} id={p.id} image={p.image} types={p.type}/>
      )) : <span>...</span>}  

      {pokemon.length > 0 ?pokemon.map((poke: any)=>(
          <NavItem key={poke.name} name={poke.name} id={getIdFromUrl(poke.url)} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(poke.url)}.png`} types="Teste, Teste"/>
      )) : <span>...</span>}  
    </Container>
  )
};

export default Nav