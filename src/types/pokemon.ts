export interface PokemonsData {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonInfo {
  abilities: Ability[];
  name: string;
  height: number;
  base_experience: number;
  types: Type[];
  sprites: Sprites;
  stats: Stat[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

interface Stat2 {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Type2;
}

interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

interface Ability2 {
  name: string;
  url: string;
}

interface Type2 {
  name: string;
  url: string;
}

interface Sprites {
  front_default: string;
}
