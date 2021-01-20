import Router from "next/router";
import useAnimals from "../components/useAnimals";

function Home() {
  // to use this, you need to have the server in data_server running

  const [loading, animals] = useAnimals();
  if (loading) return null;
  return (
    <main>
      <h1>Page One</h1>
      {animals?.map((item, key) => <div key={key}>{item}</div>) ?? "None"}
      <button onClick={() => Router.push("/second")}>Next</button>
    </main>
  );
}

export default Home;
