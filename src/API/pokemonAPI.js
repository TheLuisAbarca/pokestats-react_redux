export const pokemonsType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};

export const pokemonProps = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.status);
};
