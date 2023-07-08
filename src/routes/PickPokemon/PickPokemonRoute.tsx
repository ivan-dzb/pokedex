import React, { useCallback, useEffect, useState } from "react";
import { Pokemon, PokemonsData } from "../../types/pokemon";
import PokemonButton from "../../components/PokemonButton/PokemonButton";
import { fetchPokemons } from "../../redux/slices/pokemonSlice";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./PickPokemonRoute.module.css";

function PickPokemonRoute() {
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  const pokemons = useSelector(
    (state: RootState) => state.pokemonSlice.pokemons
  );

  const dispatchPokemons = useCallback(async () => {
    if (offset >= 140) setLimit(11);
    else setLimit(20);

    console.log(offset, limit);
    await store.dispatch(fetchPokemons({offset,limit}));
  }, [limit, offset]);

  useEffect(() => {
    void dispatchPokemons();
  }, [dispatchPokemons, offset]);

  return (
    <div className={styles.container}>
      {offset > 0 && (
        <button
          className={styles.button}
          onClick={() => setOffset(offset - 20)}
        >
          {"<"}
        </button>
      )}
      <div className={styles.buttonsContainer}>
        {pokemons &&
          pokemons.map((pokemon) => {
            return <PokemonButton key={pokemon.name} pokemon={pokemon} />;
          })}
      </div>
      { offset < 140 &&
      <button className={styles.button} onClick={() => setOffset(offset + 20)}>
        {">"}
      </button>
      }
    </div>
  );
}

export default PickPokemonRoute;
