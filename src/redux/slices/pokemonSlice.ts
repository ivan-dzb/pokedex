import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonInfo, PokemonsData } from "../../types/pokemon";
import axios from "axios";

interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: PokemonInfo | null;
  pokemonsLoading: boolean;
  pokemonsError: string | null;
  selectedPokemonLoading: boolean;
  selectedPokemonError: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  pokemonsLoading: false,
  pokemonsError: null,
  selectedPokemonLoading: false,
  selectedPokemonError: null,
};

const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async ({offset, limit}: {offset: number, limit: number})  : Promise<Pokemon[]> => {
    const response = await axios.get<PokemonsData>(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    );
    const pokemons = response.data.results;
    return pokemons;
  }
);

const fetchSelectedPokemon = createAsyncThunk(
  "pokemon/fetchSelectedPokemon",
  async (url: string) => {
    const response = await axios.get<PokemonInfo>(url);
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.pokemonsLoading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemonsLoading = false;
      state.pokemons = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.pokemonsLoading = false;
      state.pokemonsError = action.error.message ?? null;
    });
    builder.addCase(fetchSelectedPokemon.pending, (state, action) => {
      state.selectedPokemonLoading = true;
    });
    builder.addCase(fetchSelectedPokemon.fulfilled, (state, action) => {
      state.selectedPokemonLoading = false;
      state.selectedPokemon = action.payload;
    });
    builder.addCase(fetchSelectedPokemon.rejected, (state, action) => {
      state.selectedPokemonLoading = false;
      state.selectedPokemonError = action.error.message ?? null;
    });
  },
});

export { fetchPokemons, fetchSelectedPokemon };
export default pokemonSlice.reducer;
