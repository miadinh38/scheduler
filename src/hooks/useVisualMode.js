import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  }
  
  function back() {
    setHistory(prev => [...prev.slice(0, prev.length - 1)])
  }

  return { mode: history[history.length -1], transition, back };
}

export default useVisualMode;