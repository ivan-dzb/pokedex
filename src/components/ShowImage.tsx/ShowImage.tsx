import React, { useEffect } from "react";
import pokeball from "../../assets/pokeball.png";
import pokemonLogo from "../../assets/pokemonLogo.png";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./ShowImage.module.css";

interface Props {
  children: React.ReactNode;
}

const ShowImage = (props: Props) => {
  const pokemonImage = useSelector(
    (state: RootState) =>
      state.pokemonSlice.selectedPokemon?.sprites.front_default
  );
  const [image, setImage] = React.useState<string>(pokeball);

  useEffect(() => {
    if (pokemonImage) {
      setImage(pokemonImage);
    }
  }, [pokemonImage]);

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.imagesContainer}>
            <div className={styles.logoContainer}>
              <img
                src={pokemonLogo}
                alt="pokemonLogo"
                className={styles.logo}
              />
            </div>
            <div className={styles.pokemonContainer}>
              <img
                src={image}
                alt="pokemonImage"
                className={styles.pokemonImage}
              />
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default ShowImage;
