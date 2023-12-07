import { useEffect, useState } from "react";

/**
 * Documentation for @preact/signals-react
 * NOTE: @preact/signals-react
 *
 * @see https://www.npmjs.com/package/@preact/signals-react
 */
import { useSignalEffect } from "@preact/signals-react";

import "./App.css";
import ColorDiv from "./ColorDiv";
import { doubleSignalCount, signalCount } from "./signals";

function App() {
  // react state
  const [count, setCount] = useState(0);
  const doubledCount = count * 2;
  useEffect(() => console.log("count", count), [count]);

  useSignalEffect(() => console.log("sCount", signalCount.value));

  return (
    <>
      <h1>Signals</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Doubled count is {doubledCount}</p>
      </div>

      <div className="card">
        <button onClick={() => signalCount.value++}>
          {/* NOTE: difference between signalCount and signalCount.value */}
          count is {signalCount}
        </button>
        <p>Doubled signalCount is {doubleSignalCount}</p>
      </div>

      <ColorDiv />
    </>
  );
}

export default App;
