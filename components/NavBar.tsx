import useAnimals from "./useAnimals";

import style from "../styles/navbar.module.sass";

export default function NavBar() {
  const [loading, animals] = useAnimals();

  if (loading) return <div className="style.NavBar"></div>;
  else
    return (
      <div className={style.NavBar}>
        {animals.map((animal, key) => (
          <a key={key}>{animal}</a>
        ))}
      </div>
    );
}
