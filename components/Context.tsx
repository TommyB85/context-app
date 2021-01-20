import { createContext, useState } from "react";

const Context = createContext(null);

function ContextProvider({ children }) {
  const [animals, setAnimals] = useState<Array<string>>([]);

  return (
    <Context.Provider value={{ animals, setAnimals }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
export default ContextProvider;
