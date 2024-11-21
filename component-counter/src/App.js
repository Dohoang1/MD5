import { useState } from 'react';

function useIncrement(addAmount) {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount(count + addAmount);
  };

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);
  
  return (
    <div>
      <h2>Counter 1: {count}</h2>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(2);
  
  return (
    <div>
      <h2>Counter 2: {count}</h2>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;