import Router from "next/router";
import useAnimals from "../components/useAnimals";

export default function Second() {
  const [loading, animals] = useAnimals();

  // if you wanted to prove this was coming from context and not fetch
  // first load by starting on index, then click next after these changes
  // were made.  The data persists.

  // import {useContext} from 'react';
  // import {Context} from '../components/Context';
  // const { animals } = useContext(Context);

  if (loading) return null;
  return (
    <main>
      <h1>Page Two</h1>
      {animals?.map((animal, key) => (
        <div key={key}>{animal}</div>
      ))}
      <button onClick={() => Router.push("/")}>Previous</button>
    </main>
  );
}
