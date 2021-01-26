import Router from "next/router";
import NavBar from "../components/NavBar";

export default function Second() {
  // if you wanted to prove this was coming from context and not fetch
  // first load by starting on index, then click next after these changes
  // were made.  The data persists.

  // import {useContext} from 'react';
  // import {Context} from '../components/Context';
  // const { animals } = useContext(Context);
  return (
    <main>
      <h1>Page Two</h1>
      <NavBar />
      <button onClick={() => Router.push("/")}>Previous</button>
    </main>
  );
}
