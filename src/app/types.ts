export interface Pokemon {
  id: number;
  image: string;
  pokemon: PokemonBaseInfo;
}

export interface PokemonBaseInfo {
  name: string;
  url: string;
}

export interface PokemonDetails {
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
  sprites: string;
  height: number;
  weight: number;
  id: number;
  name: string;
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
