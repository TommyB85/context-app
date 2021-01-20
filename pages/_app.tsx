import type { AppProps } from "next/app";
//import { createContext, useState } from "react";
import ContextProvider from "../components/Context";

//export const Context = createContext(null);

function App({ Component, pageProps }: AppProps) {
  //const [animals, setAnimals] = useState([]);
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default App;
