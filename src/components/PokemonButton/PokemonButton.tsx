import React from "react";
import { Pokemon } from "../../types/pokemon";
import { fetchSelectedPokemon } from "../../redux/slices/pokemonSlice";
import store, { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./PokemonButton.module.css";

interface Props {
  pokemon: Pokemon;
}

const PokemonButton = (props: Props) => {
  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemonSlice.selectedPokemon
  );
  const navigate = useNavigate();

  const handleClick = () => {
    if (selectedPokemon?.name === props.pokemon.name) {
      navigate("/pokemonInfo");
    }
    void store.dispatch(fetchSelectedPokemon(props.pokemon.url));
  };

  return <button className={styles.pokemonButton}onClick={handleClick}>{props.pokemon.name}</button>;
};

export default PokemonButton;
