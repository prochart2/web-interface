import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


const createNewCategory = (category_name) => {
  // const request_url = "http://127.0.0.1:8080/categories/new";
  const request_url = "http://127.0.0.1:8080";
  axios.get(request_url, {
      withCredentials: true
  })
  .then((res) => {
    console.log(res.data);
  }, (err) => {
    console.error(err);
  });
}

function App() {
  const [category_name, setCategoryName] = React.useState('');

  const onTextAreaChange = (event) => {
    setCategoryName(event.target.value);
  }

  const onSubmit = (event) => {
    createNewCategory(category_name);
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
