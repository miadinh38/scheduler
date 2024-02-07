import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setMode(newMode);
    setHistory(prev => [...prev, newMode]);
  }
  
  function back() {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, prev.length - 1)); // Remove the last item from the history stack
      setMode(history[history.length - 2]); // Revert to the previous mode
    }
  
  }

  return { mode: history[history.length -1], transition, back };
}

export default useVisualMode;