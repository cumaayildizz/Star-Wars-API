import { useState, useEffect } from 'react';
import axios from 'axios';

function useStarShips() {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    axios("https://swapi.dev/api/starships/")
      .then((res) => setStarShips(res.data.results))
      .catch((error) => console.error("Error fetching starships:", error));
  }, []);

  return starShips;
}

export default useStarShips;