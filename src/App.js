import logo from './logo.svg';
import './App.css';
import React from 'react';
import { increaseCount, decreaseCount, getNews } from './redux/actions/ActionCreator';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(store => store?.counter?.count);
  const handleIncrease = () => dispatch(increaseCount());
  const handleDecrease = () => dispatch(decreaseCount());
  const handleNewsRequest = () => dispatch(getNews());

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
          <button onClick={handleNewsRequest}>Get News</button>
        </section>
      </main>
    </div>
  );
}

export default App;
