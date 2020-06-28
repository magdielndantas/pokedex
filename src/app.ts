const container: HTMLElement | any = document.getElementById("app");
const pokemons: number = 100;

interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    getPokemon(i);
    
  }
};

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join("</span><span>");

  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType
  };
  showPokemon(transformedPokemon);
};

function changeBackgroundCard(){
  const cards = document.querySelectorAll('div.card')
  const primaryPokeType = document.querySelectorAll('span#primaryPokeType')

  for (let i = 0; i < primaryPokeType.length; i++){
    const colorName = primaryPokeType[i].innerHTML
    const card = cards[i]

    card.classList.add(colorName)
  }
}

const showPokemon = (pokemon: IPokemon): void => {
  let output: string = `
        <div class="card">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
            <h1 class="card--name">${pokemon.name}</h1>
            <p class="card--details"><span id='primaryPokeType'>${pokemon.type}</span></p>
        </div>
    `;
  container.innerHTML += output;
  changeBackgroundCard()
};


fetchData();