import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";

function App() {
  const [counterCounts, setCounterCounts] = useState(3);
  const [counters, setAllCounters] = useState([
    { id: 1, num: 0 },
    { id: 2, num: 0 },
    { id: 3, num: 0 }
  ]);

  const displayCounters = counters.map((counter) => (
    <Counter
      id={counter.id}
      num={counter.num}
      setNum={() => setNum(counter.id, counter.num + 1)}
    />
  ));

  function setNum(id, newNum) {
    setAllCounters((prev) =>
      prev.map((counter) =>
        counter.id === id ? { ...counter, num: newNum } : counter
      )
    );
  }

  function addCounter() {
    setAllCounters((prev) => [...prev, { id: prev.length + 1, num: 0 }]);
  }

  function increment() {
    setAllCounters((prev) =>
      prev.map((counter) => ({ ...counter, num: counter.num + 1 }))
    );
  }

  return (
    <div className="board">
      <button className="allPlusOne" onClick={increment}>
        All + 1
      </button>
      {displayCounters}
      <button className="addCounter" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
}

export default App;
