import { useEffect, useState } from "react";
import "./App.css";
import ColorDiv from "./ColorDiv";

function App() {
  // react state
  const [count, setCount] = useState(0);
  const doubledCount = count * 2;
  useEffect(() => console.log("count", count), [count]);

  return (
    <>
      <h1>Signals</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Doubled count is {doubledCount}</p>
      </div>

      <ColorDiv />
    </>
  );
}

export default App;
