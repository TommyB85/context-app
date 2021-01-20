import { useContext, useState, useEffect } from "react";
import { Context } from "./Context";

export default function useAnimals(): [boolean, Array<string>] {
  const [loading, setLoading] = useState(false);
  const { animals, setAnimals } = useContext(Context);

  useEffect(() => {
    async function getAnimals(): Promise<void> {
      setLoading(true);
      const response = await fetch("http://localhost:3010");
      if (!response.ok) {
        console.error(await response.text());
        setAnimals([]);
      } else {
        const data = await response.json();
        console.log(data);
        setAnimals(data);
      }
      console.log(animals);
      setLoading(false);
    }

    if (animals.length === 0) getAnimals();
  }, []);

  return [loading, animals];
}
