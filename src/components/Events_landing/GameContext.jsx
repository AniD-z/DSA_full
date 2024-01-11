// GameContext.js
import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameSolution, setGameSolution] = useState(null);

  const setSolution = (solution) => {
    setGameSolution(solution);
  };

  return (
    <GameContext.Provider value={{ gameSolution, setSolution }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
