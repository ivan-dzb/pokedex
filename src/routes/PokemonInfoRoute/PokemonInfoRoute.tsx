import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Stats from "../../components/Stats/Stats";
import { useNavigate } from "react-router-dom";
import styles from "./PokemonInfoRoute.module.css";

const PokemonInfoRoute = () => {
  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemonSlice.selectedPokemon
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  if (!selectedPokemon)
    return (
      <>
        {" "}
        <button className={styles.backButton} onClick={handleClick}>
          {" "}
          {"<"}{" "}
        </button>
      </>
    );

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleClick}>
        {" "}
        {"<"}{" "}
      </button>
      <h1 className={styles.title}>{selectedPokemon.name.toUpperCase()}</h1>
      <p className={styles.extraData}>Height: {selectedPokemon.height}</p>
      <p className={styles.extraData}>
        Experience: {selectedPokemon.base_experience}
      </p>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>Types</p>
      <div className={styles.cardContainer}>
        {selectedPokemon.types.map((type) => (
          <>
            <div className={styles.card}>{type.type.name}</div>
          </>
        ))}
      </div>
      <p className={styles.subtitle}>Abilities</p>
      <div className={styles.cardContainer}>
        {selectedPokemon.abilities.map((ability) => (
          <>
            <div className={styles.card}>{ability.ability.name}</div>
          </>
        ))}
      </div>
      <p className={styles.subtitle}>Stats</p>
      <Stats stats={selectedPokemon.stats} />
    </div>
  );
};

export default PokemonInfoRoute;
