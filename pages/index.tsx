import Router from "next/router";
import NavBar from "../components/NavBar";

function Home() {
  // to use this, you need to have the server in data_server running
  return (
    <main>
      <h1>Page One</h1>
      <NavBar />
      <button onClick={() => Router.push("/second")}>Next</button>
    </main>
  );
}

export default Home;
