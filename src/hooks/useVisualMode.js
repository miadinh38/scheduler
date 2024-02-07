import { useState } from "react";

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);

  function transition(newMode) {
    setMode(newMode);
  }
  
  function back() {
    
  }

  return { mode, transition, back };
}

export default useVisualMode;