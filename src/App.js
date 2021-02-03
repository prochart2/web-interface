import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [category_name, setCategoryName] = React.useState('');

  const onTextAreaChange = (event) => {
    setCategoryName(event.target.value);
  }

  const onSubmit = (event) => {
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <textarea onChange={onTextAreaChange} />
        <button onClick={onSubmit}>Add Category</button>
      </header>
    </div>
  );
}

export default App;
