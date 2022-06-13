import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count += 1);
  const handleDecrease = () => setCount(count -= 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
      </header>
      <main className='main'>
        <section>
          <p>{count}</p>
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </section>
      </main>
    </div>
  );
}

export default App;
